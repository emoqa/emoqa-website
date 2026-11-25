import Link from "next/link";
import Image from "next/image";
import { Bot, Cpu, HeartPulse, Monitor, TabletSmartphone, WifiOff } from "lucide-react";
import { accentText, type BlogIcon, type BlogSummary } from "@/lib/blog-types";

const icons: Record<BlogIcon, typeof Bot> = {
  signage: Monitor,
  health: HeartPulse,
  ai: Bot,
  iot: Cpu,
  offline: WifiOff,
  kiosk: TabletSmartphone,
};

type Cover = Pick<BlogSummary, "cover" | "coverAlt" | "accent" | "icon">;

/** The uploaded cover image, or a branded placeholder when there is none. */
export function BlogCover({ blog, height = 190 }: { blog: Cover; height?: number }) {
  if (blog.cover) {
    return (
      <div style={{ height, position: "relative", overflow: "hidden", background: `${blog.accent}12` }}>
        <Image src={blog.cover} alt={blog.coverAlt} fill unoptimized sizes="760px" style={{ objectFit: "cover" }} />
      </div>
    );
  }
  const Icon = icons[blog.icon];
  return (
    <div aria-hidden style={{
      height, position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: `linear-gradient(135deg, ${blog.accent}12 0%, ${blog.accent}30 100%)`,
    }}>
      <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", right: -70, top: -90, background: `${blog.accent}14` }} />
      <div style={{ position: "absolute", width: 150, height: 150, borderRadius: "50%", left: -50, bottom: -70, background: `${blog.accent}14` }} />
      <div style={{
        width: 76, height: 76, borderRadius: 22, background: "#fff", color: blog.accent, position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 12px 32px ${blog.accent}30`,
      }}>
        <Icon size={34} strokeWidth={1.7} />
      </div>
    </div>
  );
}

export default function BlogCard({ blog }: { blog: BlogSummary }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="blog-card">
      <BlogCover blog={blog} />
      <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
        {blog.category && (
          <span style={{
            width: "fit-content", padding: "4px 12px", borderRadius: "8px",
            fontSize: "14px", fontWeight: 500, background: `${blog.accent}1c`, color: accentText(blog.accent),
          }}>
            {blog.category}
          </span>
        )}
        <h3 style={{ fontSize: "22px", lineHeight: 1.22, color: "var(--text)", overflowWrap: "anywhere" }}>{blog.title}</h3>
        <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.55, flex: 1 }}>{blog.excerpt}</p>
        <div style={{
          display: "flex", justifyContent: "space-between", gap: "12px", paddingTop: "16px",
          borderTop: "1px solid var(--line)", fontSize: "15px", color: "var(--muted)",
        }}>
          <span>{blog.date}, {blog.readTime}</span>
          <span style={{ fontWeight: 500, color: "var(--purple)", whiteSpace: "nowrap" }}>Read</span>
        </div>
      </div>
    </Link>
  );
}
