"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { disciplines } from "@/content/site";
import { DISCIPLINE_COLOR, DISCIPLINE_NAME, Mark, type Discipline } from "./Logo";
import { Render } from "./ui";

export type BuiltProduct = {
  slug: string; name: string; brief: string; parts: Discipline[];
  image: { src: string; width: number; height: number; alt: string };
};

const SHORT: Record<Discipline, string> = { software: "Software", ai: "Artificial intelligence", hardware: "Hardware", deployment: "Complete solutions" };
// "Web applications, mobile applications", while names like IoT and UI/UX keep their capitals.
const brief = (items: string[]) => items.slice(0, 3).map((t, i) => (i && /^[A-Z][a-z]+(\s|$)/.test(t) ? t[0].toLowerCase() + t.slice(1) : t)).join(", ");
const order = disciplines.map((d) => d.id);

/** Four disciplines flow into the logo, and out into the products that use them. */
export default function BuildInfographic({ products }: { products: BuiltProduct[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<{ part?: Discipline; slug?: string }>({});

  // Lines draw themselves once, when the graphic first comes into view.
  useEffect(() => {
    const el = root.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.dataset.draw = "wait";
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      el.dataset.draw = "go";
      io.disconnect();
      // Done: hand control back, so hovering never replays the entrance.
      setTimeout(() => delete el.dataset.draw, 2600);
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const chosen = products.find((p) => p.slug === active.slug);
  const lit: Discipline[] | undefined = chosen ? chosen.parts : active.part ? [active.part] : undefined;
  const partOff = (d: Discipline) => (lit && !lit.includes(d) ? "" : undefined);
  const productOff = (p: BuiltProduct) => ((chosen && chosen !== p) || (active.part && !p.parts.includes(active.part)) ? "" : undefined);
  const off = () => setActive({});

  const inY = (i: number) => ((i + 0.5) / order.length) * 100;
  const outY = (j: number) => ((j + 0.5) / products.length) * 100;
  const lane = (d: Discipline, spread: number) => (order.indexOf(d) - 1.5) * spread;
  const curve = (a: number, b: number) => `M0 ${a}C55 ${a} 45 ${b} 100 ${b}`;

  return (
    <div ref={root} className="bi">
      <ul className="bi-parts" aria-label="What we bring">
        {disciplines.map((d) => (
          <li key={d.id} style={{ "--c": DISCIPLINE_COLOR[d.id] } as React.CSSProperties} data-off={partOff(d.id)}>
            <Link href={d.href} onPointerEnter={() => setActive({ part: d.id })} onPointerLeave={off} onFocus={() => setActive({ part: d.id })} onBlur={off}>
              <strong>{SHORT[d.id]}</strong>
              <span>{brief(d.items)}</span>
            </Link>
          </li>
        ))}
      </ul>

      <svg className="bi-flow" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        {order.map((d, i) => <path key={d} d={curve(inY(i), 50 + lane(d, 3.2))} pathLength={1} stroke={DISCIPLINE_COLOR[d]} data-off={partOff(d)} style={{ "--k": i } as React.CSSProperties} />)}
      </svg>

      <div className="bi-hub" aria-hidden><Mark size={230} active={lit} /></div>

      <svg className="bi-flow bi-out" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        {products.flatMap((p, j) => p.parts.map((d) => (
          <path key={p.slug + d} d={curve(50 + lane(d, 3.2), outY(j) + lane(d, 1.15))} pathLength={1} stroke={DISCIPLINE_COLOR[d]} data-off={productOff(p) ?? partOff(d)} style={{ "--k": 5 + j } as React.CSSProperties} />
        )))}
      </svg>

      <ul className="bi-products" aria-label="What we have built">
        {products.map((p, j) => (
          <li key={p.slug} data-off={productOff(p)} style={{ "--k": 8 + j } as React.CSSProperties}>
            <Link href={`/products/${p.slug}`} onPointerEnter={() => setActive({ slug: p.slug })} onPointerLeave={off} onFocus={() => setActive({ slug: p.slug })} onBlur={off}>
              <span className="bi-pic"><Render {...p.image} alt="" sizes="120px" /></span>
              <span className="bi-text">
                <strong>{p.name}</strong>
                <span>{p.brief}</span>
                <span className="bi-dots">
                  {p.parts.map((d) => <i key={d} style={{ background: DISCIPLINE_COLOR[d] }} aria-hidden />)}
                  <span className="sr-only">Uses {p.parts.map((d) => DISCIPLINE_NAME[d]).join(", ")}</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
