import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { SITE_URL } from "@/content/site";
import { listPublished } from "@/lib/server/posts";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listPublished();
  const paths = [
    "/", "/products/", "/services/", "/custom-solutions/", "/industries/", "/projects/", "/about/", "/blogs/", "/contact/", "/terms/",
    ...products.map((p) => `/products/${p.slug}/`),
    ...services.map((s) => `/services/${s.slug}/`),
    ...posts.map((b) => `/blogs/${b.slug}/`),
  ];
  return paths.map((p) => ({ url: `${SITE_URL}${p}`, priority: p === "/" ? 1 : p.startsWith("/products/") ? 0.9 : 0.7 }));
}
