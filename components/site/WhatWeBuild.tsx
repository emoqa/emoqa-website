"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { disciplines } from "@/content/site";
import { DISCIPLINE_COLOR, Mark, type Discipline } from "./Logo";

/** Four capabilities beside the logo mark. The part being read is the part that stays lit. */
export default function WhatWeBuild() {
  const [active, setActive] = useState<Discipline>(disciplines[0].id);
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id.replace("build-", "") as Discipline);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    list.current?.querySelectorAll("article").forEach((a) => io.observe(a));
    return () => io.disconnect();
  }, []);

  return (
    <div className="wwb">
      <div className="wwb-side">
        <div className="wwb-pin">
          <Mark size={360} active={[active]} />
          <ul>
            {disciplines.map((d) => (
              <li key={d.id}><a href={`#build-${d.id}`} aria-current={active === d.id ? "true" : undefined}>{d.title}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div ref={list} className="wwb-list">
        {disciplines.map((d) => (
          <article key={d.id} id={`build-${d.id}`} style={{ "--c": DISCIPLINE_COLOR[d.id] } as React.CSSProperties}>
            <span className="wwb-mini" aria-hidden><Mark size={56} active={[d.id]} /></span>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
            <ul className="ticks">{d.items.map((i) => <li key={i}>{i}</li>)}</ul>
            <Link href={d.href} className="link">{d.link}</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
