import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blog/BlogArticle";
import CTA from "@/components/sections/CTA";
import { formatDate } from "@/lib/blog-types";
import { blogFontVariables } from "@/lib/fonts";
import { getPublished } from "@/lib/server/posts";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublished((await params).slug);
  if (!post) return {};
  const title = post.seoTitle || `${post.title} — Emoqa`;
  const description = post.seoDescription || post.excerpt;
  return {
    title, description,
    alternates: { canonical: `/blogs/${post.slug}/` },
    openGraph: {
      title, description, type: "article", siteName: "Emoqa", url: `/blogs/${post.slug}/`,
      publishedTime: post.publishAt ?? undefined, modifiedTime: post.updatedAt,
      images: [post.cover || "/logo-full.png"],
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const post = await getPublished((await params).slug);
  if (!post) notFound();

  return (
    <>
      <article className={blogFontVariables} style={{ padding: "120px 24px 100px", background: "#fff" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <Link href="/blogs" style={{ display: "inline-block", padding: "10px 0", fontWeight: 500, color: "var(--purple)", textUnderlineOffset: "5px" }}>
            All articles
          </Link>
          <BlogArticle post={post} date={formatDate(post.publishAt)} />
        </div>
      </article>
      <CTA />
    </>
  );
}
