import { api, readJson } from "@/lib/server/api";
import { changePassword } from "@/lib/server/auth";

export const POST = api(async (req) => {
  const { current, next } = await readJson(req);
  await changePassword(req, current, next);
  return Response.json({ ok: true });
});
