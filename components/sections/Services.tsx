"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Cpu,
  Brain,
  Link as LinkIcon,
  Glasses,
  Monitor,
  Settings,
} from "lucide-react";

const services = [
  { icon: Smartphone, label: "Android & iOS", desc: "Native mobile apps for any use case" },
  { icon: Globe, label: "Web Development", desc: "Full-stack web apps & portals" },
  { icon: Cpu, label: "IoT & Hardware", desc: "Custom hardware + firmware solutions" },
  { icon: Brain, label: "Artificial Intelligence", desc: "ML models, AI agents, LLM integration" },
  { icon: LinkIcon, label: "Blockchain", desc: "DeFi, NFT, supply chain on-chain solutions" },
  { icon: Glasses, label: "AR / VR", desc: "Immersive experiences for training & retail" },
  { icon: Monitor, label: "Desktop Applications", desc: "Cross-platform Windows / macOS apps" },
  { icon: Settings, label: "System Integration", desc: "API integrations, ERP, legacy modernisation" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Services() {
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
            What We Do
          </p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight leading-tight mb-4">
            Every Technology You Need
          </h2>
          <p className="text-lg text-[#6E6E73] max-w-xl mx-auto">
            We speak every technology stack. Your idea doesn&apos;t need to fit a category — we&apos;ll figure it out.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                variants={item}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(59,15,140,0.08)" }}
                >
                  <Icon size={20} style={{ color: "#3B0F8C" }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#1D1D1F" }}>
                    {s.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6E6E73" }}>
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
