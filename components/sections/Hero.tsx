"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
      {/* Very subtle top glow */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,15,140,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base font-medium tracking-wide mb-8"
          style={{ color: "#6E6E73" }}
        >
          Where Emotion Meets Excellence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-bold leading-[1.02] tracking-[-0.04em] mb-8"
          style={{ fontSize: "clamp(52px, 9vw, 104px)", color: "#1D1D1F" }}
        >
          We Build What
          <br />
          <span className="gradient-text">Others Call</span>
          <br />
          <span style={{ color: "#1D1D1F" }}>Impossible.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: "clamp(17px, 2vw, 21px)", color: "#6E6E73" }}
        >
          From Defence to Fortune 500s — hardware, software, AI, and everything
          between. Your most ambitious idea, fully built.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#3B0F8C" }}
          >
            Start a Project
          </Link>
          <Link
            href="/products/cms"
            className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-base transition-all hover:bg-gray-100 active:scale-95"
            style={{ color: "#3B0F8C", border: "1.5px solid rgba(59,15,140,0.3)" }}
          >
            Our Products
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
