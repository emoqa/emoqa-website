import { api, readJson } from "@/lib/server/api";
import { login } from "@/lib/server/auth";

export const POST = api(async (req) => {
  const { username, password } = await readJson(req);
  await login(req, username, password);
  return Response.json({ ok: true });
}, { public: true });
