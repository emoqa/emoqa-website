import { api, readJson } from "@/lib/server/api";
import { createInquiry } from "@/lib/server/inquiries";

// emoqa.in is a static site, so its contact form posts here.
const ORIGINS = ["https://www.emoqa.in", "https://emoqa.in"];

const post = api(async (req) => {
  await createInquiry(req, await readJson(req));
  return Response.json({ ok: true }, { status: 201 });
}, { public: true, origins: ORIGINS });

function allow(req: Request, res: Response) {
  const origin = req.headers.get("origin") ?? "";
  res.headers.append("Vary", "Origin");
  if (ORIGINS.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
    res.headers.set("Access-Control-Allow-Methods", "POST");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");
    res.headers.set("Access-Control-Max-Age", "86400");
  }
  return res;
}

export const POST = async (req: Request) => allow(req, await post(req, undefined));
export const OPTIONS = (req: Request) => allow(req, new Response(null, { status: 204 }));
