import type { Discipline } from "@/components/site/Logo";

export type Status = "platform" | "configurable" | "optional";

export const STATUS_LABEL: Record<Status, string> = {
  platform: "Part of the platform",
  configurable: "Depends on devices fitted",
  optional: "Optional integration",
};

export type Group = { title: string; text?: string; items: string[]; status?: Status };
export type Step = { title: string; text: string };

/** Every section a product page can use. Pages choose their own blocks and order. */
export type Block =
  | { type: "steps"; heading: string; intro?: string; steps: Step[]; note?: string }
  | { type: "columns"; heading: string; intro?: string; groups: Group[]; note?: string }
  | { type: "catalog"; heading: string; intro?: string; groups: Group[]; note?: string }
  | { type: "list"; heading: string; intro?: string; items: string[]; note?: string; dark?: boolean }
  | { type: "statements"; heading: string; items: string[]; note?: string }
  | { type: "decisions"; heading: string; intro?: string; items: string[]; note?: string }
  | { type: "specs"; heading: string; intro?: string; rows: [string, string][]; note?: string }
  | { type: "audience"; heading: string; groups: Group[] }
  /** An image or interactive demo, matched by id in components/product/visuals.tsx */
  | { type: "visual"; id: string; heading: string; intro?: string };

export type Product = {
  slug: string;
  name: string;
  /** Short name for menus and forms. */
  short: string;
  menu: string;
  /** Which parts of the logo, and so which disciplines, the product is made of. */
  parts: Discipline[];
  /** Used on the home page and in product listings. */
  summary: string;
  headline: string;
  positioning: string;
  seo: { title: string; description: string };
  image: { src: string; width: number; height: number; alt: string };
  cta: { primary: string; secondary: string; closing: string; closingText: string };
  overview: { heading: string; paragraphs: string[] };
  problem: { title: string; text: string };
  solution: { title: string; text: string };
  blocks: Block[];
  faqs: { q: string; a: string }[];
  industries: string[];
  services: string[];
  related: string[];
};
