"use client";

import { Suspense } from "react";
import Link from "next/link";
import type { BlogSummary } from "@/lib/blog-types";
import { useQuery } from "@/components/site/use-query";
import BlogCard from "./BlogCard";

type Props = { blogs: BlogSummary[]; categories: string[] };

function List({ blogs, categories, category }: Props & { category?: string | null }) {
  const active = categories.find((c) => c === category);
  const shown = active ? blogs.filter((b) => b.category === active) : blogs;
  return (
    <>
      {categories.length > 1 && (
        <nav aria-label="Blog categories" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "48px" }}>
          {[undefined, ...categories].map((c) => (
            <Link key={c ?? "all"} href={c ? `/blogs?category=${encodeURIComponent(c)}` : "/blogs"} scroll={false} aria-current={c === active ? "page" : undefined} className="blog-chip">
              {c ?? "All"}
            </Link>
          ))}
        </nav>
      )}
      <h2 className="sr-only">Articles</h2>
      {shown.length === 0 && <p style={{ textAlign: "center", color: "var(--muted)" }}>New articles are coming soon.</p>}
      <div className="r-3col" style={{ gap: "24px" }}>
        {shown.map((b) => <BlogCard key={b.slug} blog={b} />)}
      </div>
    </>
  );
}

function Filtered(props: Props) {
  return <List {...props} category={useQuery().get("category")} />;
}

/** Every article is in the page, and the category is chosen in the browser, so this works on a static host too. */
export default function BlogList(props: Props) {
  return <Suspense fallback={<List {...props} />}><Filtered {...props} /></Suspense>;
}
