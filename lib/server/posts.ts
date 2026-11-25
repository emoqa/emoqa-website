import "server-only";
import { cache } from "react";
import {
  ACCENTS, FONTS, ICONS, brandAccent, formatDate, readTime, slugify, stateOf,
  type BlogIcon, type BlogSummary, type Post, type PostFields, type PostState, type Revision, type StoredStatus,
} from "@/lib/blog-types";
import { ApiError } from "./api-error";
import { all, get, run, type Row as DbRow } from "./db";
import { sanitizeContent } from "./sanitize";

const MAX_REVISIONS = 20;

type Row = Record<string, string | number | null>;

function toPost(row: DbRow): Post {
  const r = row as Row;
  return {
    id: r.id as number,
    slug: r.slug as string,
    title: r.title as string,
    excerpt: r.excerpt as string,
    content: r.content as string,
    cover: r.cover as string,
    coverAlt: r.cover_alt as string,
    category: r.category as string,
    tags: JSON.parse(r.tags as string),
    author: r.author as string,
    accent: brandAccent(r.accent as string),
    icon: r.icon as BlogIcon,
    titleFont: r.title_font as string,
    bodyFont: r.body_font as string,
    seoTitle: r.seo_title as string,
    seoDescription: r.seo_description as string,
    status: r.status as StoredStatus,
    publishAt: r.publish_at as string | null,
    createdAt: r.created_at as string,
    updatedAt: r.updated_at as string,
  };
}

// ─── Public ───

const LIVE = "status = 'published' AND publish_at <= ?";
const now = () => new Date().toISOString();

export async function listPublished(category?: string): Promise<BlogSummary[]> {
  const rows = category
    ? await all(`SELECT * FROM posts WHERE ${LIVE} AND category = ? ORDER BY publish_at DESC, id DESC`, now(), category)
    : await all(`SELECT * FROM posts WHERE ${LIVE} ORDER BY publish_at DESC, id DESC`, now());
  return rows.map(toPost).map((p) => ({
    slug: p.slug, title: p.title, excerpt: p.excerpt, cover: p.cover, coverAlt: p.coverAlt,
    category: p.category, accent: p.accent, icon: p.icon,
    date: formatDate(p.publishAt), readTime: readTime(p.content),
  }));
}

export async function listPublicCategories(): Promise<string[]> {
  const rows = await all(`SELECT DISTINCT category FROM posts WHERE ${LIVE} AND category <> '' ORDER BY category`, now());
  return rows.map((r) => r.category as string);
}

// Shared by the page and its metadata within one request.
export const getPublished = cache(async (slug: string): Promise<Post | null> => {
  const row = await get(`SELECT * FROM posts WHERE slug = ? AND ${LIVE}`, slug, now());
  return row ? toPost(row) : null;
});

// ─── Admin ───

export async function listAll(): Promise<Post[]> {
  return (await all("SELECT * FROM posts ORDER BY updated_at DESC, id DESC")).map(toPost);
}

export async function listAllCategories(): Promise<string[]> {
  return (await all("SELECT DISTINCT category FROM posts WHERE category <> '' ORDER BY category"))
    .map((r) => r.category as string);
}

export async function getPost(id: number): Promise<Post | null> {
  const row = await get("SELECT * FROM posts WHERE id = ?", id);
  return row ? toPost(row) : null;
}

async function mustGet(id: number): Promise<Post> {
  const post = await getPost(id);
  if (!post) throw new ApiError(404, "This post no longer exists.");
  return post;
}

export async function listRevisions(id: number): Promise<Revision[]> {
  return (await all("SELECT * FROM revisions WHERE post_id = ? ORDER BY id DESC", id)).map((r) => ({
    id: r.id as number, title: r.title as string, content: r.content as string, createdAt: r.created_at as string,
  }));
}

function text(value: unknown, max: number, label: string) {
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") throw new ApiError(400, `${label} is not valid.`);
  const v = value.trim();
  if (v.length > max) throw new ApiError(400, `${label} is too long (limit ${max} characters).`);
  return v;
}

function parseFields(body: Record<string, unknown>): PostFields {
  const title = text(body.title, 200, "Title");
  if (!title) throw new ApiError(400, "Please add a title.");
  const font = (v: unknown) => (FONTS.some((f) => f.value === v) ? (v as string) : "");
  const cover = text(body.cover, 200, "Cover image");
  if (cover && !/^\/media\/[a-f0-9]{32}\.(jpg|png|gif|webp|avif)$/.test(cover)) {
    throw new ApiError(400, "Choose a cover image from the media library.");
  }
  const tags = Array.isArray(body.tags) ? body.tags : [];
  return {
    title,
    slug: slugify(text(body.slug, 200, "URL slug")) || slugify(title) || "post",
    excerpt: text(body.excerpt, 500, "Excerpt"),
    content: sanitizeContent(text(body.content, 1_000_000, "Content")),
    cover,
    coverAlt: text(body.coverAlt, 300, "Cover description"),
    category: text(body.category, 60, "Category"),
    tags: [...new Set(tags.map((t) => text(t, 40, "Tag")).filter(Boolean))].slice(0, 20),
    author: text(body.author, 80, "Author"),
    accent: (ACCENTS as readonly string[]).includes(body.accent as string) ? (body.accent as string) : ACCENTS[0],
    icon: (ICONS as readonly string[]).includes(body.icon as string) ? (body.icon as BlogIcon) : ICONS[0],
    titleFont: font(body.titleFont),
    bodyFont: font(body.bodyFont),
    seoTitle: text(body.seoTitle, 120, "SEO title"),
    seoDescription: text(body.seoDescription, 320, "SEO description"),
  };
}

function parseStatus(body: Record<string, unknown>, existing: Post | null) {
  const status = body.status;
  if (status !== "draft" && status !== "published") throw new ApiError(400, "Status is not valid.");
  let publishAt: string | null = null;
  if (body.publishAt) {
    const t = typeof body.publishAt === "string" ? Date.parse(body.publishAt) : NaN;
    if (Number.isNaN(t)) throw new ApiError(400, "The publish date is not valid.");
    publishAt = new Date(t).toISOString();
  } else if (status === "published") {
    // "Publish now": keep the original date of a live post, otherwise use the current time.
    publishAt = existing && stateOf(existing) === "published" ? existing.publishAt : now();
  }
  return { status: status as StoredStatus, publishAt };
}

async function uniqueSlug(slug: string, exceptId = 0) {
  let candidate = slug;
  for (let i = 2; await get("SELECT 1 FROM posts WHERE slug = ? AND id <> ?", candidate, exceptId); i++) candidate = `${slug}-${i}`;
  return candidate;
}

function values(f: PostFields, slug: string) {
  return [
    slug, f.title, f.excerpt, f.content, f.cover, f.coverAlt, f.category, JSON.stringify(f.tags), f.author,
    f.accent, f.icon, f.titleFont, f.bodyFont, f.seoTitle, f.seoDescription,
  ];
}

export async function createPost(body: Record<string, unknown>): Promise<Post> {
  const f = parseFields(body);
  const { status, publishAt } = parseStatus(body, null);
  return insert(f, status, publishAt);
}

async function insert(f: PostFields, status: StoredStatus, publishAt: string | null) {
  const t = now();
  const res = await run(`
    INSERT INTO posts (slug, title, excerpt, content, cover, cover_alt, category, tags, author, accent, icon,
      title_font, body_font, seo_title, seo_description, status, publish_at, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ...values(f, await uniqueSlug(f.slug)), status, publishAt, t, t);
  return mustGet(res.lastId);
}

export async function updatePost(id: number, body: Record<string, unknown>): Promise<Post> {
  const existing = await mustGet(id);
  if (existing.status === "trash") throw new ApiError(409, "Restore this post from the trash before editing it.");
  const f = parseFields(body);
  const { status, publishAt } = parseStatus(body, existing);

  if (existing.title !== f.title || existing.content !== f.content) {
    // At most one snapshot a minute, so autosave does not flood the history.
    const last = await get("SELECT created_at FROM revisions WHERE post_id = ? ORDER BY id DESC LIMIT 1", id);
    if (!last || Date.now() - Date.parse(last.created_at as string) > 60_000) {
      await run("INSERT INTO revisions (post_id, title, content, created_at) VALUES (?, ?, ?, ?)",
        id, existing.title, existing.content, now());
      await run(`DELETE FROM revisions WHERE post_id = ? AND id NOT IN
        (SELECT id FROM revisions WHERE post_id = ? ORDER BY id DESC LIMIT ?)`, id, id, MAX_REVISIONS);
    }
  }

  await run(`
    UPDATE posts SET slug = ?, title = ?, excerpt = ?, content = ?, cover = ?, cover_alt = ?, category = ?, tags = ?,
      author = ?, accent = ?, icon = ?, title_font = ?, body_font = ?, seo_title = ?, seo_description = ?,
      status = ?, publish_at = ?, updated_at = ? WHERE id = ?`,
    ...values(f, await uniqueSlug(f.slug, id)), status, publishAt, now(), id);
  return mustGet(id);
}

export async function runAction(id: number, action: unknown): Promise<Post> {
  const post = await mustGet(id);
  switch (action) {
    case "trash":
      await run("UPDATE posts SET status = 'trash', updated_at = ? WHERE id = ?", now(), id);
      return mustGet(id);
    case "restore":
      // Comes back as a draft, so nothing goes live again by accident.
      if (post.status === "trash") {
        await run("UPDATE posts SET status = 'draft', publish_at = NULL, updated_at = ? WHERE id = ?", now(), id);
      }
      return mustGet(id);
    case "duplicate":
      return insert({ ...post, title: `${post.title} (copy)`.slice(0, 200), slug: `${post.slug}-copy` }, "draft", null);
    default:
      throw new ApiError(400, "Unknown action.");
  }
}

export async function deletePost(id: number) {
  if ((await mustGet(id)).status !== "trash") throw new ApiError(409, "Move the post to the trash first.");
  await run("DELETE FROM revisions WHERE post_id = ?", id);
  await run("DELETE FROM posts WHERE id = ?", id);
}

export function countByState(posts: Post[]): Record<PostState, number> {
  const counts = { published: 0, scheduled: 0, draft: 0, trash: 0 };
  for (const p of posts) counts[stateOf(p)]++;
  return counts;
}
