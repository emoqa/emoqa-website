import { api } from "@/lib/server/api";
import { listMedia, saveUpload } from "@/lib/server/media";

export const GET = api(async () => Response.json({ items: await listMedia() }));

export const POST = api(async (req) => Response.json({ item: await saveUpload(req) }, { status: 201 }));
