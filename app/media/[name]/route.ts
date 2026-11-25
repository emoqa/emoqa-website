import { readMedia } from "@/lib/server/media";

export async function GET(_req: Request, { params }: { params: Promise<{ name: string }> }) {
  const file = await readMedia((await params).name);
  if (!file) return new Response("Not found", { status: 404 });
  return new Response(new Uint8Array(file.bytes), {
    headers: {
      "Content-Type": file.type,
      "Content-Length": String(file.bytes.length),
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=31536000, s-maxage=86400, immutable",
    },
  });
}
