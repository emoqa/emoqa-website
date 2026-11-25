import "server-only";
import { ApiError } from "./api-error";
import { get, run } from "./db";

/** The visitor's address. The last entry is the one our own proxy added. Earlier ones can be forged. */
export function clientIp(req: Request) {
  // Hosts with several proxies in front name a header they always overwrite (see render.yaml).
  const trusted = process.env.CLIENT_IP_HEADER;
  if (trusted) return req.headers.get(trusted)?.trim() || "unknown";
  return req.headers.get("x-forwarded-for")?.split(",").pop()?.trim() || "unknown";
}

/**
 * Counts one attempt against each key, and refuses when any is over its limit.
 * Kept in the database so the limit holds across every server instance.
 */
export async function limit(rules: { key: string; max: number }[], windowMs: number, message: string) {
  const at = Date.now();
  await run("DELETE FROM attempts WHERE at < ?", at - 60 * 60 * 1000);
  const ids: number[] = [];
  let blocked = false;
  for (const { key, max } of rules) {
    // Counted before any slow work, so parallel requests cannot slip past the limit.
    ids.push((await run("INSERT INTO attempts (key, at) VALUES (?, ?)", key, at)).lastId);
    const row = await get("SELECT COUNT(*) AS n FROM attempts WHERE key = ? AND at > ?", key, at - windowMs);
    if (Number(row?.n) > max) blocked = true;
  }
  if (blocked) {
    // A refused attempt does not extend the wait.
    for (const id of ids) await run("DELETE FROM attempts WHERE id = ?", id);
    throw new ApiError(429, message);
  }
}

export const clearLimit = (key: string) => run("DELETE FROM attempts WHERE key = ?", key);
