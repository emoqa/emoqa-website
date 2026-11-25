// Shared by the public site, the admin portal and the API. No server-only code here.

export const ICONS = ["signage", "health", "ai", "iot", "offline", "kiosk"] as const;
export type BlogIcon = (typeof ICONS)[number];

// The logo palette, matching the tokens in app/site.css.
export const ACCENTS = ["#4a008a", "#0064fa", "#02a54a", "#ff8d02", "#100a2e"] as const;

const OLD_ACCENTS: Record<string, (typeof ACCENTS)[number]> = {
  "#4B00A0": "#4a008a", "#7B2FBE": "#4a008a", "#1B9FFF": "#0064fa", "#00A651": "#02a54a", "#F7941D": "#ff8d02",
};

/** Posts written before the redesign keep their stored colour. This shows the matching new one. */
export const brandAccent = (stored: string) => OLD_ACCENTS[stored] ?? stored;

/** A darker version of an accent that stays readable as text on white. */
export const accentText = (accent: string) => `color-mix(in srgb, ${accent} 58%, #100a2e)`;

// The --font-* variables are defined in lib/fonts.ts.
export const FONTS = [
  { label: "Site default", value: "" },
  { label: "Inter", value: "var(--font-inter)" },
  { label: "Poppins", value: "var(--font-poppins)" },
  { label: "Lora", value: "var(--font-lora)" },
  { label: "Merriweather", value: "var(--font-merriweather)" },
  { label: "Playfair Display", value: "var(--font-playfair)" },
  { label: "Roboto Slab", value: "var(--font-roboto-slab)" },
  { label: "Caveat (handwritten)", value: "var(--font-caveat)" },
  { label: "JetBrains Mono", value: "var(--font-jetbrains)" },
];

export const FONT_SIZES = ["12px", "14px", "16px", "18px", "20px", "24px", "28px", "32px", "40px", "48px"];

export type StoredStatus = "draft" | "published" | "trash";
export type PostState = StoredStatus | "scheduled";

export type PostFields = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover: string;
  coverAlt: string;
  category: string;
  tags: string[];
  author: string;
  accent: string;
  icon: BlogIcon;
  titleFont: string;
  bodyFont: string;
  seoTitle: string;
  seoDescription: string;
};

export type Post = PostFields & {
  id: number;
  status: StoredStatus;
  publishAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Revision = { id: number; title: string; content: string; createdAt: string };
export type MediaItem = { name: string; url: string; original: string; size: number; createdAt: string };

/** What a blog card needs. Keeps full article bodies out of the home page payload. */
export type BlogSummary = Pick<
  Post,
  "slug" | "title" | "excerpt" | "cover" | "coverAlt" | "category" | "accent" | "icon"
> & { date: string; readTime: string };

export function stateOf(post: Pick<Post, "status" | "publishAt">): PostState {
  if (post.status !== "published") return post.status;
  return post.publishAt && Date.parse(post.publishAt) > Date.now() ? "scheduled" : "published";
}

export function countWords(html: string) {
  const text = html.replace(/<[^>]*>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").trim();
  return text ? text.split(/\s+/).length : 0;
}

export function readTime(html: string) {
  return `${Math.max(1, Math.ceil(countWords(html) / 200))} min read`;
}

// Fixed time zone so the server and every visitor see the same date.
export function formatDate(iso: string | null, withTime = false) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata",
    ...(withTime ? { hour: "2-digit", minute: "2-digit" } : {}),
  }).format(new Date(iso));
}

export function slugify(text: string) {
  return text
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
}
