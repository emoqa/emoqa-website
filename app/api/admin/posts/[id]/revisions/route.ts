import { api, parseId } from "@/lib/server/api";
import { listRevisions } from "@/lib/server/posts";

type Ctx = { params: Promise<{ id: string }> };

export const GET = api<Ctx>(async (_req, { params }) =>
  Response.json({ revisions: await listRevisions(parseId((await params).id)) }));
