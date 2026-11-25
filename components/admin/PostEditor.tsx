"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { EditorContent, useEditor } from "@tiptap/react";
import BlogArticle from "@/components/blog/BlogArticle";
import {
  ACCENTS, FONTS, ICONS, countWords, formatDate, readTime, slugify, stateOf,
  type BlogIcon, type MediaItem, type Post, type PostFields, type Revision,
} from "@/lib/blog-types";
import { callApi, messageOf, uploadImage } from "./client-api";
import { extensions } from "./extensions";
import MediaLibrary from "./MediaLibrary";
import Modal from "./Modal";
import Toolbar from "./Toolbar";

const AUTOSAVE_MS = 4000;

const ICON_LABELS: Record<BlogIcon, string> = {
  signage: "Screen", health: "Health", ai: "AI robot", iot: "Chip", offline: "Offline", kiosk: "Kiosk",
};

type Fields = Omit<PostFields, "content">;

const EMPTY: Fields = {
  title: "", slug: "", excerpt: "", cover: "", coverAlt: "", category: "", tags: [], author: "EMOQA Team",
  accent: ACCENTS[0], icon: "signage", titleFont: "", bodyFont: "", seoTitle: "", seoDescription: "",
};

function fieldsOf(p: Post): Fields {
  return {
    title: p.title, slug: p.slug, excerpt: p.excerpt, cover: p.cover, coverAlt: p.coverAlt, category: p.category, tags: p.tags,
    author: p.author, accent: p.accent, icon: p.icon, titleFont: p.titleFont, bodyFont: p.bodyFont,
    seoTitle: p.seoTitle, seoDescription: p.seoDescription,
  };
}

/** ISO date to the local value used by <input type="datetime-local">. */
function toLocal(iso: string | null) {
  if (!iso) return "";
  const d = new Date(iso);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
}

const images = (list?: FileList | null) => Array.from(list ?? []).filter((f) => f.type.startsWith("image/"));

export default function PostEditor({ post, categories }: { post: Post | null; categories: string[] }) {
  const router = useRouter();
  const [saved, setSaved] = useState<Post | null>(post);
  const [fields, setFields] = useState<Fields>(post ? fieldsOf(post) : EMPTY);
  const [tagText, setTagText] = useState(post?.tags.join(", ") ?? "");
  const [slugEdited, setSlugEdited] = useState(!!post);
  const [timing, setTiming] = useState<"now" | "date">(post?.publishAt ? "date" : "now");
  const [when, setWhen] = useState(toLocal(post?.publishAt ?? null));
  const [html, setHtml] = useState(post?.content ?? "");
  const [dirty, setDirty] = useState(false);
  const [version, setVersion] = useState(0); // goes up with every edit
  const [saving, setSaving] = useState(false);
  const [note, setNote] = useState<{ ok: boolean; text: string } | null>(null);
  const [picker, setPicker] = useState<"cover" | "content" | null>(null);
  const [preview, setPreview] = useState(false);
  const [revisions, setRevisions] = useState<Revision[] | null>(null);

  const idRef = useRef(post?.id ?? 0);
  const versionRef = useRef(0);
  const queue = useRef<Promise<unknown>>(Promise.resolve());

  const touch = useCallback(() => {
    versionRef.current++;
    setVersion(versionRef.current);
    setDirty(true);
  }, []);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((f) => ({ ...f, [key]: value }));
    touch();
  };

  const editor = useEditor({
    extensions,
    content: post?.content ?? "",
    immediatelyRender: false,
    editorProps: {
      attributes: { class: "blog-content", "aria-label": "Blog content" },
      handlePaste: (_view, e) => insertFiles(images(e.clipboardData?.files)),
      handleDrop: (_view, e, _slice, moved) => !moved && insertFiles(images(e.dataTransfer?.files)),
    },
    onUpdate: ({ editor: e }) => {
      setHtml(e.getHTML());
      touch();
    },
  });

  function insertFiles(files: File[]) {
    if (files.length === 0) return false;
    (async () => {
      for (const file of files) {
        try {
          const item = await uploadImage(file);
          editor?.chain().focus().setImage({ src: item.url }).run();
        } catch (e) {
          setNote({ ok: false, text: messageOf(e) });
        }
      }
    })();
    return true;
  }

  async function save(status: "draft" | "published", { auto = false, now = false } = {}) {
    if (!editor) return;
    if (!fields.title.trim()) {
      setNote({ ok: false, text: "Please add a title first." });
      return;
    }
    const dated = timing === "date" && !now;
    if (dated && !when && status === "published") {
      setNote({ ok: false, text: "Choose the date and time to publish." });
      return;
    }
    const body = {
      ...fields,
      content: editor.getHTML(),
      status,
      publishAt: dated && when ? new Date(when).toISOString() : null,
    };
    const savedVersion = versionRef.current;

    // One save at a time, so a slow first save cannot create the post twice.
    const job = queue.current.then(async () => {
      setSaving(true);
      try {
        const id = idRef.current;
        const { post: p } = await callApi<{ post: Post }>(id ? `posts/${id}` : "posts", id ? "PUT" : "POST", body);
        if (!id) {
          idRef.current = p.id;
          window.history.replaceState(null, "", `/admin/posts/${p.id}/`);
        }
        setSaved(p);
        if (versionRef.current === savedVersion) {
          setDirty(false);
          setFields(fieldsOf(p));
          setWhen(toLocal(p.publishAt));
          if (status === "published") setTiming("date");
        }
        const state = stateOf(p);
        setNote({
          ok: true,
          text: auto ? "Draft saved automatically."
            : state === "scheduled" ? `Scheduled for ${formatDate(p.publishAt, true)} IST.`
            : state === "published" ? "Published. It is live on the blog page." : "Draft saved.",
        });
      } catch (e) {
        setNote({ ok: false, text: messageOf(e) });
      }
      setSaving(false);
    });
    queue.current = job;
    await job;
  }

  // Autosave only drafts. Live and scheduled posts change only when you press Update.
  const isDraft = !saved || saved.status === "draft";
  const saveRef = useRef(save);
  useEffect(() => { saveRef.current = save; });
  useEffect(() => {
    if (!dirty || !isDraft || !fields.title.trim()) return;
    const t = setTimeout(() => saveRef.current("draft", { auto: true }), AUTOSAVE_MS);
    return () => clearTimeout(t);
  }, [version, dirty, isDraft, fields.title]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function pick(item: MediaItem) {
    if (picker === "cover") set("cover", item.url);
    else editor?.chain().focus().setImage({ src: item.url }).run();
    setPicker(null);
  }

  async function showRevisions() {
    try {
      setRevisions((await callApi<{ revisions: Revision[] }>(`posts/${idRef.current}/revisions`)).revisions);
    } catch (e) {
      setNote({ ok: false, text: messageOf(e) });
    }
  }

  function restore(r: Revision) {
    setFields((f) => ({ ...f, title: r.title }));
    editor?.commands.setContent(r.content, { emitUpdate: true });
    setRevisions(null);
    setNote({ ok: true, text: "Older version loaded. Save to keep it." });
  }

  async function trash() {
    if (!window.confirm("Move this post to the trash?")) return;
    try {
      await queue.current;
      await callApi(`posts/${idRef.current}`, "PATCH", { action: "trash" });
      setDirty(false);
      router.push("/admin");
      router.refresh();
    } catch (e) {
      setNote({ ok: false, text: messageOf(e) });
    }
  }

  const state = saved ? stateOf(saved) : "draft";
  const inFuture = timing === "date" && !!when && new Date(when).getTime() > new Date().getTime();
  const font = (value: string) => value || undefined;

  return (
    <div className="adm-editor">
      <section className="adm-write">
        <textarea className="adm-title" rows={1} placeholder="Add a title" aria-label="Title" maxLength={200} value={fields.title}
          style={{ fontFamily: font(fields.titleFont) }}
          onChange={(e) => {
            const title = e.target.value.replace(/\n/g, " ");
            setFields((f) => ({ ...f, title, slug: slugEdited ? f.slug : slugify(title) }));
            touch();
          }} />
        {editor && <Toolbar editor={editor} onImage={() => setPicker("content")} />}
        <div className="adm-canvas" style={{ fontFamily: font(fields.bodyFont) }}>
          <EditorContent editor={editor} />
        </div>
        <p className="adm-hint">{countWords(html)} words · {readTime(html)}. You can also paste or drop images into the text.</p>
      </section>

      <aside className="adm-side">
        <div className="adm-card">
          <div className="adm-head"><h2>Publish</h2><span className={`adm-badge ${state}`}>{state}</span></div>
          <fieldset className="adm-radios">
            <legend>When</legend>
            <label><input type="radio" name="timing" checked={timing === "now"} onChange={() => { setTiming("now"); touch(); }} /> Immediately</label>
            <label><input type="radio" name="timing" checked={timing === "date"} onChange={() => { setTiming("date"); touch(); }} /> At a date and time</label>
          </fieldset>
          {timing === "date" && (
            <label className="adm-field">
              <span>Publish date (your local time)</span>
              <input type="datetime-local" aria-label="Publish date" value={when} onChange={(e) => { setWhen(e.target.value); touch(); }} />
            </label>
          )}
          <div className="adm-actions">
            <button className="adm-btn primary" disabled={saving} onClick={() => save("published")}>
              {inFuture ? (state === "scheduled" ? "Update schedule" : "Schedule") : state === "published" ? "Update" : "Publish"}
            </button>
            {state === "scheduled" && <button className="adm-btn" disabled={saving} onClick={() => save("published", { now: true })}>Publish now</button>}
            <button className="adm-btn" disabled={saving} onClick={() => save("draft")}>{state === "draft" ? "Save draft" : "Switch to draft"}</button>
            <button className="adm-btn" onClick={() => setPreview(true)}>Preview</button>
          </div>
          <p role="status" className={note ? (note.ok ? "adm-ok" : "adm-error") : "adm-hint"}>
            {saving ? "Saving…" : note?.text ?? ""}{dirty && !saving ? " You have unsaved changes." : ""}
          </p>
          {saved && (
            <div className="adm-row-actions">
              {state === "published" && <a href={`/blogs/${saved.slug}/`} target="_blank" rel="noopener">View post</a>}
              <button onClick={showRevisions}>History</button>
              <button className="danger" onClick={trash}>Move to trash</button>
            </div>
          )}
        </div>

        <div className="adm-card">
          <h2>Cover image</h2>
          {fields.cover && <div className="adm-cover"><Image src={fields.cover} alt="" fill unoptimized sizes="320px" style={{ objectFit: "cover" }} /></div>}
          <div className="adm-row-actions">
            <button onClick={() => setPicker("cover")}>{fields.cover ? "Change image" : "Choose or upload image"}</button>
            {fields.cover && <button className="danger" onClick={() => set("cover", "")}>Remove</button>}
          </div>
          {fields.cover ? (
            <label className="adm-field"><span>Image description</span><input value={fields.coverAlt} maxLength={300} onChange={(e) => set("coverAlt", e.target.value)} /></label>
          ) : (
            <label className="adm-field"><span>Icon used without a cover</span>
              <select value={fields.icon} onChange={(e) => set("icon", e.target.value as BlogIcon)}>
                {ICONS.map((i) => <option key={i} value={i}>{ICON_LABELS[i]}</option>)}
              </select>
            </label>
          )}
          <div className="adm-field"><span>Accent colour</span>
            <div className="adm-swatches">
              {ACCENTS.map((a) => <button key={a} aria-label={`Accent ${a}`} aria-pressed={fields.accent === a} style={{ background: a }} onClick={() => set("accent", a)} />)}
            </div>
          </div>
        </div>

        <div className="adm-card">
          <h2>Fonts</h2>
          {(["titleFont", "bodyFont"] as const).map((key) => (
            <label key={key} className="adm-field"><span>{key === "titleFont" ? "Title font" : "Article font"}</span>
              <select value={fields[key]} style={{ fontFamily: font(fields[key]) }} onChange={(e) => set(key, e.target.value)}>
                {FONTS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
              </select>
            </label>
          ))}
        </div>

        <div className="adm-card">
          <h2>Details</h2>
          <label className="adm-field"><span>Category</span>
            <input list="adm-categories" maxLength={60} value={fields.category} onChange={(e) => set("category", e.target.value)} />
            <datalist id="adm-categories">{categories.map((c) => <option key={c} value={c} />)}</datalist>
          </label>
          <label className="adm-field"><span>Tags (separated by commas)</span>
            <input value={tagText} onChange={(e) => {
              setTagText(e.target.value);
              set("tags", e.target.value.split(",").map((t) => t.trim().slice(0, 40)).filter(Boolean));
            }} />
          </label>
          <label className="adm-field"><span>Short summary, shown on the card</span>
            <textarea rows={3} maxLength={500} value={fields.excerpt} onChange={(e) => set("excerpt", e.target.value)} />
          </label>
          <label className="adm-field"><span>Author</span><input maxLength={80} value={fields.author} onChange={(e) => set("author", e.target.value)} /></label>
        </div>

        <div className="adm-card">
          <h2>Search engines</h2>
          <label className="adm-field"><span>Web address: /blogs/{fields.slug || "…"}</span>
            <input value={fields.slug} maxLength={80} onChange={(e) => { setSlugEdited(true); set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "-")); }} />
          </label>
          <label className="adm-field"><span>SEO title</span><input maxLength={120} placeholder={fields.title} value={fields.seoTitle} onChange={(e) => set("seoTitle", e.target.value)} /></label>
          <label className="adm-field"><span>SEO description</span><textarea rows={3} maxLength={320} placeholder={fields.excerpt} value={fields.seoDescription} onChange={(e) => set("seoDescription", e.target.value)} /></label>
        </div>
      </aside>

      {picker && <Modal title="Choose an image" onClose={() => setPicker(null)} wide><MediaLibrary onPick={pick} /></Modal>}
      {preview && (
        <Modal title="Preview" onClose={() => setPreview(false)} wide>
          <div className="adm-preview">
            <BlogArticle post={{ ...fields, title: fields.title || "Untitled", content: html }} date={formatDate(when ? new Date(when).toISOString() : new Date().toISOString())} />
          </div>
        </Modal>
      )}
      {revisions && (
        <Modal title="History" onClose={() => setRevisions(null)}>
          {revisions.length === 0 && <p className="adm-empty">No older versions yet.</p>}
          {revisions.map((r) => (
            <div key={r.id} className="adm-rev">
              <div><strong>{r.title}</strong><span>{formatDate(r.createdAt, true)} IST · {countWords(r.content)} words</span></div>
              <button className="adm-btn" onClick={() => restore(r)}>Load</button>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
}
