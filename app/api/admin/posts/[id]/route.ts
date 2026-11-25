import { api, parseId, readJson } from "@/lib/server/api";
import { deletePost, runAction, updatePost } from "@/lib/server/posts";

type Ctx = { params: Promise<{ id: string }> };

export const PUT = api<Ctx>(async (req, { params }) =>
  Response.json({ post: await updatePost(parseId((await params).id), await readJson(req)) }));

export const PATCH = api<Ctx>(async (req, { params }) => {
  const { action } = await readJson(req);
  return Response.json({ post: await runAction(parseId((await params).id), action) });
});

export const DELETE = api<Ctx>(async (_req, { params }) => {
  await deletePost(parseId((await params).id));
  return Response.json({ ok: true });
});
