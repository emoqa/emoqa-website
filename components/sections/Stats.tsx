"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "+", label: "Products Delivered", sub: "Across hardware, software & AI" },
  { value: 50, suffix: "+", label: "Clients Worldwide", sub: "From startups to Fortune 500s" },
  { value: 130, suffix: "+", label: "Medical Tests", sub: "Instant results via HealthQa" },
  { value: 10, suffix: "+", label: "Years of Excellence", sub: "Trusted partner since day one" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = (value / duration) * step;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="py-28 px-6"
      style={{ background: "linear-gradient(135deg, #0D0025 0%, #1a0040 50%, #0D0025 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight"
            style={{ color: "#ffffff" }}
          >
            Numbers That Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col items-center text-center py-8 px-4 ${
                i < stats.length - 1 ? "lg:border-r border-white/10" : ""
              } ${i % 2 === 0 ? "border-r border-white/10 lg:border-r-0" : ""} ${
                i < 2 ? "border-b lg:border-b-0 border-white/10" : ""
              }`}
            >
              <span
                className="text-[clamp(48px,6vw,72px)] font-bold tracking-tight leading-none mb-2"
                style={{ color: "#ffffff" }}
              >
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-base font-semibold mb-1" style={{ color: "rgba(255,255,255,0.9)" }}>
                {s.label}
              </span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                {s.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
