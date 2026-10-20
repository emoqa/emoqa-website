"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We immerse in your problem space — business goals, user pain points, tech constraints. No assumptions.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Architecture, UI wireframes, hardware schematics — everything blueprinted before a single line of code.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Sprints, demos, feedback loops. You see progress weekly, not just at the end.",
  },
  {
    num: "04",
    title: "Deploy & Scale",
    desc: "Launch, monitor, iterate. We stay with you post-launch — the relationship doesn't end at delivery.",
  },
];

export default function Process() {
  return (
    <section className="py-32 px-6" style={{ background: "#F5F5F7" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#3B0F8C" }}>
            How We Work
          </p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight leading-tight">
            Simple Process, Ambitious Results
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{ background: "rgba(59,15,140,0.15)", top: "2.5rem" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="flex flex-col gap-4"
              >
                {/* Step number circle */}
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ background: "#3B0F8C", color: "#ffffff" }}
                  >
                    {s.num}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#1D1D1F" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6E6E73" }}>
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
