import "server-only";
import { ApiError } from "./api-error";
import { getSession } from "./auth";

function sameOrigin(req: Request) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  try {
    return !!origin && new URL(origin).host === host;
  } catch {
    return false;
  }
}

type Handler<C> = (req: Request, ctx: C) => Promise<Response> | Response;

/** Wraps an API handler: blocks cross-site writes, requires login, and turns errors into JSON. */
export function api<C>(handler: Handler<C>, options: { public?: boolean; origins?: string[] } = {}) {
  return async (req: Request, ctx: C): Promise<Response> => {
    try {
      const known = options.origins?.includes(req.headers.get("origin") ?? "");
      if (req.method !== "GET" && !known && !sameOrigin(req)) throw new ApiError(403, "Request blocked.");
      if (!options.public && !(await getSession())) throw new ApiError(401, "Your session has ended. Please sign in again.");
      const res = await handler(req, ctx);
      res.headers.set("Cache-Control", "no-store");
      return res;
    } catch (e) {
      if (e instanceof ApiError) return Response.json({ error: e.message }, { status: e.status });
      console.error(e);
      return Response.json({ error: "Something went wrong on the server." }, { status: 500 });
    }
  };
}

export async function readJson(req: Request): Promise<Record<string, unknown>> {
  if (Number(req.headers.get("content-length") ?? 0) > 2_000_000) throw new ApiError(413, "That post is too large.");
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new ApiError(400, "Invalid request.");
  return body;
}

export function parseId(value: string) {
  if (!/^\d{1,12}$/.test(value)) throw new ApiError(404, "Not found.");
  return Number(value);
}
