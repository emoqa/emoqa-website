"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DISCIPLINE_COLOR, type Discipline } from "./Logo";

const W = 970, H = 1800;

/**
 * Bottom to top. The sections share one camera, so a plain vertical move takes the kiosk apart.
 * Numbers are fractions of the image: `move` when apart, `y` the label's height, `edge` where its line ends.
 */
const layers: { id: Discipline; title: string; text: string; href: string; move: number; y: number; edge: number }[] = [
  { id: "deployment", title: "Integration & deployment", text: "Enclosures, connections, installation", href: "/services/complete-solution-development", move: 0.155, y: 0.29, edge: 0.83 },
  { id: "ai", title: "AI", text: "Models running where they’re needed", href: "/services/ai-development", move: 0.045, y: 0.178, edge: 0.79 },
  { id: "hardware", title: "Hardware", text: "Cameras, devices, peripherals", href: "/services/hardware-engineering", move: -0.075, y: 0.034, edge: 0.82 },
  { id: "software", title: "Software", text: "Interfaces, platforms, APIs", href: "/services/custom-software", move: -0.15, y: -0.296, edge: 0.69 },
];

/** The EMOQA kiosk in exploded view. It opens on load and assembles as the hero scrolls past. */
export default function ExplodedDevice() {
  const root = useRef<HTMLDivElement>(null);
  const [focus, setFocus] = useState<Discipline | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.setProperty("--open", "1");
      el.closest<HTMLElement>("[data-track]")?.style.setProperty("--join", "1");
      return;
    }
    let raf = 0;
    const started = performance.now();
    const frame = () => {
      raf = 0;
      const t = Math.min(1, (performance.now() - started - 250) / 1300);
      const intro = t <= 0 ? 0 : 1 - Math.pow(1 - t, 4);
      const track = el.closest<HTMLElement>("[data-track]");
      const box = (track ?? el).getBoundingClientRect();
      // Pinned hero: progress through the extra scroll. Otherwise: how far the device has moved up the screen.
      const extra = box.height - innerHeight;
      const pinned = track && getComputedStyle(track).getPropertyValue("--pin").trim() === "1";
      const own = el.getBoundingClientRect();
      const p = pinned ? -box.top / Math.max(1, extra * 0.8) : (innerHeight * 0.42 - own.top) / (own.height * 0.75);
      const scroll = Math.min(1, Math.max(0, p));
      el.style.setProperty("--open", String(intro * (1 - scroll)));
      track?.style.setProperty("--join", String(scroll));
      el.dataset.done = scroll > 0.92 ? "true" : "false";
      if (t < 1) raf = requestAnimationFrame(frame);
    };
    const request = () => { raf ||= requestAnimationFrame(frame); };
    request();
    addEventListener("scroll", request, { passive: true });
    addEventListener("resize", request);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", request);
      removeEventListener("resize", request);
    };
  }, []);

  return (
    <div ref={root} className="xd" data-focus={focus ?? undefined}>
      <div className="xd-stack">
        {layers.map((l) => (
          // eslint-disable-next-line @next/next/no-img-element -- pre-optimised layer
          <img
            key={l.id}
            src={`/renders/hero-${l.id}.webp`}
            srcSet={`/renders/hero-${l.id}-sm.webp 485w, /renders/hero-${l.id}.webp 970w`}
            sizes="(max-width: 900px) 60vw, 420px"
            width={W}
            height={H}
            alt=""
            fetchPriority="high"
            className="xd-layer"
            data-id={l.id}
            style={{ "--move": l.move } as React.CSSProperties}
          />
        ))}
      </div>
      <ul className="xd-labels" aria-label="What goes into an EMOQA product">
        {layers.map((l, i) => (
          <li key={l.id} style={{ "--i": i, "--at": l.y + l.move, "--edge": l.edge, "--c": DISCIPLINE_COLOR[l.id] } as React.CSSProperties}>
            <Link
              href={l.href}
              onPointerEnter={() => setFocus(l.id)}
              onPointerLeave={() => setFocus(null)}
              onFocus={() => setFocus(l.id)}
              onBlur={() => setFocus(null)}
            >
              <strong>{l.title}</strong>
              <span>{l.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="xd-done" aria-hidden>One complete product.</p>
    </div>
  );
}
