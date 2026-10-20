"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Clients Globally" },
  { value: "8+", label: "Industry Domains" },
  { value: "10+", label: "Years of Excellence" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-[0.08] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #3B0F8C 0%, #6929C4 40%, #1E90FF 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
          style={{
            background: "rgba(59,15,140,0.08)",
            color: "#3B0F8C",
            border: "1px solid rgba(59,15,140,0.15)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A651] animate-pulse" />
          Where Emotion Meets Excellence
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-[clamp(48px,8vw,96px)] font-bold leading-[1.05] tracking-[-0.03em] mb-6"
        >
          We Build What Others
          <br />
          <span className="gradient-text">Call Impossible.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(18px,2.5vw,22px)] text-[#6E6E73] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From Defence to Fortune 500s — we turn your most ambitious idea into
          a product. Hardware, software, AI, IoT — all under one roof.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <Link
            href="/products/cms"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-base font-semibold transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
            style={{ background: "#3B0F8C" }}
          >
            Explore Our Products <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:bg-[#F5F5F7] active:scale-95"
            style={{
              color: "#3B0F8C",
              border: "1.5px solid #3B0F8C",
            }}
          >
            Start a Project
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-3xl mx-auto"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center py-6 ${
                i < stats.length - 1
                  ? "md:border-r border-gray-200"
                  : ""
              } ${i % 2 === 0 ? "border-r border-gray-200 md:border-r-0" : ""} ${
                i < 2 ? "border-b md:border-b-0 border-gray-200" : ""
              }`}
            >
              <span
                className="text-4xl font-bold tracking-tight"
                style={{ color: "#3B0F8C" }}
              >
                {s.value}
              </span>
              <span className="text-sm text-[#6E6E73] mt-1 text-center px-2">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
