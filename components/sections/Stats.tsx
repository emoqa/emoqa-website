"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "+", label: "Products Delivered" },
  { value: 50, suffix: "+", label: "Clients Worldwide" },
  { value: 130, suffix: "+", label: "Medical Tests" },
  { value: 10, suffix: "+", label: "Years of Excellence" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const step = 16;
    const increment = (value / duration) * step;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(current));
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-8 border-t border-b" style={{ borderColor: "rgba(0,0,0,0.07)", background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center py-12 ${i < 3 ? "lg:border-r" : ""} ${i === 0 ? "border-r lg:border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""}`}
              style={{ borderColor: "rgba(0,0,0,0.07)" }}
            >
              <span
                className="font-bold leading-none mb-2"
                style={{ fontSize: "clamp(42px, 5vw, 64px)", color: "#1D1D1F" }}
              >
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-sm font-medium" style={{ color: "#6E6E73" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
