import "server-only";
import { randomBytes } from "node:crypto";
import { readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import type { MediaItem } from "@/lib/blog-types";
import { ApiError } from "./api-error";
import { UPLOAD_DIR, all, get, isRemote, run } from "./db";

// Vercel refuses requests over 4.5 MB.
const MAX_BYTES = 4 * 1024 * 1024;
const NAME = /^[a-f0-9]{32}\.(jpg|png|gif|webp|avif)$/;
const TYPES: Record<string, string> = {
  jpg: "image/jpeg", png: "image/png", gif: "image/gif", webp: "image/webp", avif: "image/avif",
};

// Trust the file's bytes, not its name. SVG is left out on purpose: it can carry scripts.
function detect(b: Buffer): string | null {
  const ascii = (from: number, to: number) => b.toString("latin1", from, to);
  if (b.length < 12) return null;
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "jpg";
  if (b[0] === 0x89 && ascii(1, 4) === "PNG") return "png";
  if (ascii(0, 4) === "GIF8") return "gif";
  if (ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return "webp";
  if (ascii(4, 8) === "ftyp" && /avif|avis/.test(ascii(8, 12))) return "avif";
  return null;
}

const filePath = (name: string) => path.join(/* turbopackIgnore: true */ UPLOAD_DIR, name);

function toItem(r: Record<string, unknown>): MediaItem {
  return {
    name: r.name as string, url: `/media/${r.name}`, original: r.original as string,
    size: r.size as number, createdAt: r.created_at as string,
  };
}

export async function listMedia(): Promise<MediaItem[]> {
  return (await all("SELECT * FROM media ORDER BY created_at DESC")).map(toItem);
}

export async function saveUpload(req: Request): Promise<MediaItem> {
  const tooBig = new ApiError(413, "Images can be up to 4 MB.");
  const length = Number(req.headers.get("content-length"));
  if (!length) throw new ApiError(411, "Invalid upload.");
  if (length > MAX_BYTES + 100_000) throw tooBig;
  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) throw new ApiError(400, "Choose an image to upload.");
  if (file.size > MAX_BYTES) throw tooBig;

  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = detect(bytes);
  if (!ext) throw new ApiError(415, "Only JPG, PNG, GIF, WebP and AVIF images can be uploaded.");

  const name = `${randomBytes(16).toString("hex")}.${ext}`;
  if (isRemote) await run("INSERT INTO media_files (name, bytes) VALUES (?, ?)", name, new Uint8Array(bytes));
  else await writeFile(filePath(name), bytes, { flag: "wx" });
  await run("INSERT INTO media (name, original, type, size, created_at) VALUES (?, ?, ?, ?, ?)",
    name, file.name.slice(0, 200), TYPES[ext], bytes.length, new Date().toISOString());
  return toItem((await get("SELECT * FROM media WHERE name = ?", name))!);
}

export async function removeMedia(name: string) {
  if (!NAME.test(name)) throw new ApiError(404, "Not found.");
  const used = await get("SELECT title FROM posts WHERE cover = ? OR instr(content, ?) > 0 LIMIT 1",
    `/media/${name}`, `/media/${name}`);
  if (used) throw new ApiError(409, `This image is used in “${used.title}”. Remove it there first.`);
  await run("DELETE FROM media WHERE name = ?", name);
  if (isRemote) await run("DELETE FROM media_files WHERE name = ?", name);
  else await unlink(filePath(name)).catch(() => {});
}

export async function readMedia(name: string) {
  if (!NAME.test(name)) return null;
  const bytes = isRemote
    ? await get("SELECT bytes FROM media_files WHERE name = ?", name).then((r) => (r ? new Uint8Array(r.bytes as ArrayBuffer) : null))
    : await readFile(filePath(name)).catch(() => null);
  return bytes && { bytes, type: TYPES[name.split(".")[1]] };
}
