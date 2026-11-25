import { api } from "@/lib/server/api";
import { removeMedia } from "@/lib/server/media";

type Ctx = { params: Promise<{ name: string }> };

export const DELETE = api<Ctx>(async (_req, { params }) => {
  await removeMedia((await params).name);
  return Response.json({ ok: true });
});
