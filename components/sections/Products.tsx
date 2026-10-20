"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    index: "01",
    color: "#3B0F8C",
    lightBg: "rgba(59,15,140,0.04)",
    name: "EmoqaCMS",
    category: "Digital Signage Platform",
    headline: "One dashboard.\nThousands of screens.",
    description:
      "Offline-first content management for digital signage. Push playlists, schedules, and live updates to any screen — with or without internet.",
    cta: "Explore EmoqaCMS",
    href: "/products/cms",
  },
  {
    index: "02",
    color: "#00A651",
    lightBg: "rgba(0,166,81,0.04)",
    name: "HealthQa Kiosk",
    category: "Healthcare Diagnostics",
    headline: "130+ tests.\nResults in 60 seconds.",
    description:
      "Walk-in diagnostics with no appointment, no lab, no wait. Blood tests, ECG, vitals — and a live doctor via telemedicine, all from one kiosk.",
    cta: "Explore HealthQa",
    href: "/products/healthcare",
  },
  {
    index: "03",
    color: "#1E90FF",
    lightBg: "rgba(30,144,255,0.04)",
    name: "AI Agent Suite",
    category: "Conversational AI",
    headline: "It teaches.\nIt sells. It speaks\nyour language.",
    description:
      "Two flagship AI agents — one that explains concepts by drawing diagrams in real time, one that demos products, negotiates, and closes deals.",
    cta: "Explore AI Agents",
    href: "/products/ai",
  },
];

export default function Products() {
  return (
    <section className="bg-white">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-widest mb-5"
          style={{ color: "#3B0F8C" }}
        >
          Proprietary Products
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-bold tracking-tight"
          style={{ fontSize: "clamp(38px, 5.5vw, 64px)", color: "#1D1D1F", lineHeight: 1.08 }}
        >
          Built from scratch.
          <br />
          Deployed across industries.
        </motion.h2>
      </div>

      {/* Products — full-width alternating */}
      {products.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className={`py-0`}
        >
          <div
            className="max-w-6xl mx-auto px-6 py-20"
            style={{
              borderTop: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Visual block */}
              <div className="w-full lg:w-1/2">
                <div
                  className="w-full aspect-[4/3] rounded-3xl flex flex-col items-center justify-center"
                  style={{ background: p.lightBg, border: `1px solid ${p.color}18` }}
                >
                  <span
                    className="font-bold"
                    style={{ fontSize: "clamp(80px, 12vw, 140px)", color: p.color, opacity: 0.15, lineHeight: 1 }}
                  >
                    {p.index}
                  </span>
                  <span
                    className="font-bold tracking-tight mt-2"
                    style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: p.color }}
                  >
                    {p.name}
                  </span>
                </div>
              </div>

              {/* Copy */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: p.color }}
                  >
                    {p.category}
                  </span>
                </div>
                <h3
                  className="font-bold tracking-tight"
                  style={{
                    fontSize: "clamp(32px, 4vw, 52px)",
                    color: "#1D1D1F",
                    lineHeight: 1.1,
                    whiteSpace: "pre-line",
                  }}
                >
                  {p.headline}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontSize: "17px", color: "#6E6E73", maxWidth: "420px" }}
                >
                  {p.description}
                </p>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 text-base font-semibold group w-fit"
                  style={{ color: p.color }}
                >
                  {p.cta}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
