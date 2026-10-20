"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We immerse in your problem — goals, users, constraints. No guesswork, no assumptions.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Architecture, UI, hardware schematics — everything blueprinted before code is written.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Weekly demos. Constant feedback. You see progress, not promises.",
  },
  {
    num: "04",
    title: "Scale",
    desc: "We launch with you and stay — monitoring, iterating, and growing as you grow.",
  },
];

export default function Process() {
  return (
    <section className="py-40 px-6" style={{ background: "#F5F5F7" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#3B0F8C" }}
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-bold tracking-tight"
            style={{ fontSize: "clamp(38px, 5.5vw, 64px)", color: "#1D1D1F", lineHeight: 1.08 }}
          >
            Simple process.
            <br />
            Ambitious results.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col gap-6 p-8 lg:p-10"
              style={{
                borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.08)" : "none",
              }}
            >
              <span
                className="font-bold"
                style={{ fontSize: "48px", color: "#3B0F8C", opacity: 0.18, lineHeight: 1 }}
              >
                {s.num}
              </span>
              <div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: "22px", color: "#1D1D1F" }}
                >
                  {s.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontSize: "15px", color: "#6E6E73" }}
                >
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
