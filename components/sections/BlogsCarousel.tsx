"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { Head } from "@/components/site/ui";
import type { BlogSummary } from "@/lib/blog-types";

const AUTOPLAY_MS = 4500;

// Distance between two neighbouring cards, gap included.
function stepOf(track: HTMLElement) {
  const [a, b] = Array.from(track.children) as HTMLElement[];
  return a && b ? b.offsetLeft - a.offsetLeft : 0;
}

export default function BlogsCarousel({ blogs }: { blogs: BlogSummary[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [positions, setPositions] = useState(blogs.length);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const goTo = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = (idx + positions) % positions;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target * stepOf(track), behavior: reduced ? "auto" : "smooth" });
  }, [positions]);

  // Scroll position is the source of truth, so swipes, arrows and dots stay in sync.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const sync = () => {
      const step = stepOf(track);
      if (!step) return;
      const count = Math.round((track.scrollWidth - track.clientWidth) / step) + 1;
      setPositions(count);
      setCurrent(Math.min(Math.round(track.scrollLeft / step), count - 1));
    };
    const observer = new ResizeObserver(sync);
    observer.observe(track);
    track.addEventListener("scroll", sync, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", sync);
    };
  }, []);

  useEffect(() => {
    if (hovered || focused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => goTo(current + 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [current, hovered, focused, goTo]);

  if (blogs.length === 0) return null;

  return (
    <section id="blogs" aria-label="Latest from the blog" className="sec sec-mist">
      <div className="wrap">
        <Head title="From the people who build" />

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <div ref={trackRef} className="blog-track">
            {blogs.map((b) => (
              <div key={b.slug} className="blog-slide"><BlogCard blog={b} /></div>
            ))}
          </div>

          <div style={{ display: positions > 1 ? "flex" : "none", alignItems: "center", gap: "20px", margin: "20px 0 28px" }}>
            <button type="button" aria-label="Previous blog" className="blog-arrow" onClick={() => goTo(current - 1)}>
              <ChevronLeft size={20} />
            </button>
            <div style={{ display: "flex" }}>
              {Array.from({ length: positions }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to blog position ${i + 1}`}
                  aria-current={i === current}
                  className="blog-dot"
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button type="button" aria-label="Next blog" className="blog-arrow" onClick={() => goTo(current + 1)}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Link href="/blogs" className="link">View all articles</Link>
      </div>
    </section>
  );
}
