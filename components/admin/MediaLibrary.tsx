"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { MediaItem } from "@/lib/blog-types";
import { callApi, messageOf, uploadImage } from "./client-api";

/** The media page, and also the image picker when onPick is given. */
export default function MediaLibrary({ onPick }: { onPick?: (item: MediaItem) => void }) {
  const [items, setItems] = useState<MediaItem[] | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    callApi<{ items: MediaItem[] }>("media").then((d) => setItems(d.items), (e) => setError(messageOf(e)));
  }, []);

  async function upload(files: FileList | File[]) {
    setBusy(true);
    setError("");
    for (const file of Array.from(files)) {
      try {
        const item = await uploadImage(file);
        setItems((list) => [item, ...(list ?? [])]);
      } catch (e) {
        setError(messageOf(e));
      }
    }
    setBusy(false);
    if (input.current) input.current.value = "";
  }

  async function remove(item: MediaItem) {
    if (!window.confirm(`Delete ${item.original}?`)) return;
    setError("");
    try {
      await callApi(`media/${item.name}`, "DELETE");
      setItems((list) => (list ?? []).filter((i) => i.name !== item.name));
    } catch (e) {
      setError(messageOf(e));
    }
  }

  async function copy(item: MediaItem) {
    try {
      await navigator.clipboard.writeText(new URL(item.url, window.location.origin).href);
      setCopied(item.name);
    } catch {
      setError("Your browser blocked copying.");
    }
  }

  return (
    <div>
      <label
        className="adm-drop"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); upload(e.dataTransfer.files); }}
      >
        <strong>{busy ? "Uploading…" : "Drop images here or click to upload"}</strong>
        <span>JPG, PNG, GIF, WebP or AVIF, up to 4 MB each</span>
        <input ref={input} type="file" accept="image/jpeg,image/png,image/gif,image/webp,image/avif" multiple disabled={busy} onChange={(e) => e.target.files && upload(e.target.files)} />
      </label>
      {error && <p role="alert" className="adm-error">{error}</p>}
      {items?.length === 0 && <p className="adm-empty">No images yet.</p>}
      <div className="adm-media">
        {items?.map((item) => (
          <figure key={item.name}>
            <div><Image src={item.url} alt={item.original} fill unoptimized sizes="200px" style={{ objectFit: "cover" }} /></div>
            <figcaption title={item.original}>{item.original}</figcaption>
            <div className="adm-row-actions">
              {onPick
                ? <button type="button" onClick={() => onPick(item)}>Use image</button>
                : <button type="button" onClick={() => copy(item)}>{copied === item.name ? "Copied" : "Copy link"}</button>}
              {!onPick && <button type="button" className="danger" onClick={() => remove(item)}>Delete</button>}
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
