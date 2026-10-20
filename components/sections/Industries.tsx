"use client";

import { motion } from "framer-motion";

const domains = [
  "Defence",
  "Finance",
  "Healthcare",
  "Agriculture",
  "Retail",
  "Education",
  "Manufacturing",
  "Enterprise",
];

export default function Industries() {
  return (
    <section className="py-40 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#3B0F8C" }}
          >
            Industries
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-bold tracking-tight mb-6"
            style={{ fontSize: "clamp(38px, 5.5vw, 64px)", color: "#1D1D1F", lineHeight: 1.08 }}
          >
            From fields to boardrooms.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-lg max-w-lg mx-auto"
            style={{ color: "#6E6E73" }}
          >
            100+ products across 8 domains. Every one purpose-built for the people who use it.
          </motion.p>
        </div>

        {/* Clean domain list — large text, horizontal wrap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {domains.map((d, i) => (
            <span
              key={d}
              className="px-6 py-3 rounded-full text-base font-medium"
              style={{
                background: i % 3 === 0 ? "rgba(59,15,140,0.06)" : i % 3 === 1 ? "rgba(0,166,81,0.06)" : "rgba(30,144,255,0.06)",
                color: i % 3 === 0 ? "#3B0F8C" : i % 3 === 1 ? "#00A651" : "#1E90FF",
                border: `1px solid ${i % 3 === 0 ? "rgba(59,15,140,0.12)" : i % 3 === 1 ? "rgba(0,166,81,0.12)" : "rgba(30,144,255,0.12)"}`,
              }}
            >
              {d}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
