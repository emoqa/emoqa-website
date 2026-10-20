"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="py-40 px-6 relative overflow-hidden"
      style={{ background: "#1D1D1F" }}
    >
      {/* Subtle purple glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(59,15,140,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-bold tracking-tight mb-8 text-white"
          style={{ fontSize: "clamp(42px, 7vw, 80px)", lineHeight: 1.05 }}
        >
          Your idea.
          <br />
          Our execution.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl mb-12 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 3rem" }}
        >
          A sketch on a napkin or a full spec — we turn it into a product the world notices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-9 py-4 rounded-full text-base font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#F5A01A", color: "#1D1D1F" }}
          >
            Start a Project
          </Link>
          <Link
            href="/products/cms"
            className="inline-flex items-center px-9 py-4 rounded-full text-base font-semibold transition-all hover:bg-white/10 active:scale-95"
            style={{ border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff" }}
          >
            See Our Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
