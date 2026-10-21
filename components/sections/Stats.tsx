"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Products Delivered" },
  { value: 50,  suffix: "+", label: "Clients Worldwide" },
  { value: 130, suffix: "+", label: "Medical Tests" },
  { value: 10,  suffix: "+", label: "Years of Excellence" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const step = 16;
        const inc = (value / 1600) * step;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= value) { setN(value); clearInterval(t); }
          else setN(Math.floor(cur));
        }, step);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Stats() {
  return (
    <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div className="r-4col">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="r-stats-cell"
              style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                padding: "56px 16px",
                borderRight: i < 3 ? "1px solid rgba(0,0,0,0.07)" : "none",
              }}
            >
              <span style={{ fontSize: "clamp(44px, 5.5vw, 64px)", fontWeight: 700, color: "#1D1D1F", lineHeight: 1, marginBottom: "8px" }}>
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span style={{ fontSize: "14px", color: "#6E6E73", fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
