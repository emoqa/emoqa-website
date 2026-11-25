import { accentText, readTime, type Post } from "@/lib/blog-types";
import { BlogCover } from "./BlogCard";

type Props = {
  post: Pick<Post, "title" | "excerpt" | "content" | "cover" | "coverAlt" | "category" | "tags" | "author" | "accent" | "icon" | "titleFont" | "bodyFont">;
  date: string;
};

/** Used by the public page and by the editor preview, so both always look the same. */
export default function BlogArticle({ post, date }: Props) {
  const meta = [post.author, date, readTime(post.content)].filter(Boolean).join(", ");
  return (
    <>
      {post.category && (
        <p style={{ width: "fit-content", padding: "4px 12px", borderRadius: "8px", fontSize: "15px", fontWeight: 500, background: `${post.accent}1c`, color: accentText(post.accent), margin: "36px 0 16px" }}>
          {post.category}
        </p>
      )}
      <h1 style={{ fontFamily: post.titleFont || undefined, fontSize: "clamp(36px,5vw,60px)", fontWeight: post.titleFont ? 700 : 500, letterSpacing: "-0.024em", lineHeight: 1.06, color: "var(--text)", margin: "16px 0 20px", overflowWrap: "anywhere" }}>
        {post.title}
      </h1>
      <p style={{ fontSize: "16px", color: "var(--muted)", marginBottom: "36px" }}>{meta}</p>
      <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "40px" }}>
        <BlogCover blog={post} height={360} />
      </div>
      {post.excerpt && (
        <p style={{ fontFamily: post.bodyFont || undefined, fontSize: "20px", color: "var(--text)", lineHeight: 1.7, marginBottom: "28px" }}>{post.excerpt}</p>
      )}
      {/* Sanitised on the server before it is stored. See lib/server/sanitize.ts */}
      <div className="blog-content" style={{ fontFamily: post.bodyFont || undefined }} dangerouslySetInnerHTML={{ __html: post.content }} />
      {post.tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "48px" }}>
          {post.tags.map((t) => (
            <span key={t} style={{ padding: "6px 14px", borderRadius: "8px", fontSize: "15px", fontWeight: 500, background: "var(--mist)", color: "var(--muted)" }}>
              #{t}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
