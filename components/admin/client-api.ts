import type { MediaItem } from "@/lib/blog-types";

/** Calls the admin API. Throws an Error with a readable message when something fails. */
export async function callApi<T>(path: string, method = "GET", body?: unknown): Promise<T> {
  let res: Response;
  try {
    // Next.js adds a trailing slash to every path except file names. Match it to avoid a redirect.
    res = await fetch(`/api/admin/${path}${path.includes(".") ? "" : "/"}`, {
      method,
      headers: body instanceof FormData || body === undefined ? undefined : { "Content-Type": "application/json" },
      body: body === undefined ? undefined : body instanceof FormData ? body : JSON.stringify(body),
    });
  } catch {
    throw new Error("Could not reach the server. Check your connection.");
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
  return data as T;
}

export async function uploadImage(file: File): Promise<MediaItem> {
  if (file.size > 4 * 1024 * 1024) throw new Error(`${file.name} is larger than 4 MB.`);
  const form = new FormData();
  form.append("file", file);
  return (await callApi<{ item: MediaItem }>("media", "POST", form)).item;
}

export const messageOf = (e: unknown) => (e instanceof Error ? e.message : "Something went wrong.");
