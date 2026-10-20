"use client";

import { motion } from "framer-motion";

const domains = [
  { emoji: "🛡️", name: "Defence", desc: "Mission-critical systems, secure comms" },
  { emoji: "💹", name: "Finance", desc: "Fintech, payments, trading platforms" },
  { emoji: "🏥", name: "Healthcare", desc: "Diagnostics, telemedicine, hospital ops" },
  { emoji: "🌾", name: "Agriculture", desc: "Precision farming, supply chain" },
  { emoji: "🏬", name: "Retail & Signage", desc: "Digital displays, POS, inventory" },
  { emoji: "🎓", name: "Education", desc: "AI tutors, LMS, smart classrooms" },
  { emoji: "🏭", name: "Manufacturing", desc: "IIoT, quality control, automation" },
  { emoji: "🌐", name: "Enterprise / MNCs", desc: "Custom ERP, integrations, portals" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Industries() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#3B0F8C" }}>
            Industries
          </p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight leading-tight mb-4">
            From Fields to Boardrooms
          </h2>
          <p className="text-lg text-[#6E6E73] max-w-xl mx-auto">
            100+ projects across 8 domains. Each one unique. Every one shipped.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {domains.map((d) => (
            <motion.div
              key={d.name}
              variants={item}
              className="flex flex-col gap-2 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: "#F5F5F7",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(59,15,140,0.05)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(59,15,140,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#F5F5F7";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,0,0.05)";
              }}
            >
              <span className="text-3xl">{d.emoji}</span>
              <p className="font-semibold text-sm" style={{ color: "#1D1D1F" }}>{d.name}</p>
              <p className="text-xs leading-relaxed" style={{ color: "#6E6E73" }}>{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
