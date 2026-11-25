import { api, readJson } from "@/lib/server/api";
import { createPost } from "@/lib/server/posts";

export const POST = api(async (req) => Response.json({ post: await createPost(await readJson(req)) }, { status: 201 }));
