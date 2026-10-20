"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="py-32 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3B0F8C 0%, #6929C4 60%, #3B0F8C 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #F5A01A 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[clamp(40px,6vw,72px)] font-bold tracking-tight leading-tight text-white mb-6">
            Your Idea.
            <br />
            Our Execution.
          </h2>
          <p className="text-xl text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether it&apos;s a sketch on a napkin or a detailed spec — we turn it into a product the world will notice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90 hover:shadow-xl active:scale-95"
              style={{ background: "#F5A01A", color: "#1D1D1F" }}
            >
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/products/cms"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-white/10 active:scale-95"
              style={{ border: "1.5px solid rgba(255,255,255,0.5)", color: "#ffffff" }}
            >
              View Our Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
