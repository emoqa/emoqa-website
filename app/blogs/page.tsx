import type { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";
import CTA from "@/components/sections/CTA";
import { PageHead } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";
import { listPublicCategories, listPublished } from "@/lib/server/posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta(
  "Blog: Kiosks, AI, Signage, IoT & Software | EMOQA",
  "Ideas on digital signage, healthcare kiosks, AI, IoT and software from the EMOQA team.",
  "/blogs/",
);

export default async function BlogsPage() {
  const [blogs, categories] = await Promise.all([listPublished(), listPublicCategories()]);

  return (
    <>
      <PageHead title="Ideas from the people who build.">
        <p>Notes on hardware, software and AI from the EMOQA team.</p>
      </PageHead>

      <section className="r-pad" style={{ padding: "80px 24px 100px", background: "var(--mist)" }}>
        <div style={{ maxWidth: "1248px", margin: "0 auto" }}>
          <BlogList blogs={blogs} categories={categories} />
        </div>
      </section>

      <CTA />
    </>
  );
}
