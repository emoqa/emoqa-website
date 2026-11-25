import type { Metadata } from "next";

/** Title, description, canonical and social tags for one page. `path` ends with a slash. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title, description, url: path, siteName: "EMOQA", type: "website", locale: "en_IN",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EMOQA: from concept to complete technology" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  };
}
