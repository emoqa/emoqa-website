"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Cpu, Brain, Link as LinkIcon, Glasses, Monitor, Settings } from "lucide-react";
import CTA from "@/components/sections/CTA";

const services = [
  {
    icon: Smartphone, color: "#3B0F8C", bg: "rgba(59,15,140,0.08)",
    name: "Android & iOS Apps",
    desc: "Native mobile applications built for performance and scale. From consumer apps with millions of users to enterprise tools with strict security requirements.",
    tags: ["Kotlin", "Swift", "React Native", "Jetpack Compose"],
  },
  {
    icon: Globe, color: "#1E90FF", bg: "rgba(30,144,255,0.08)",
    name: "Web Development",
    desc: "Full-stack web applications, portals, dashboards, and e-commerce platforms. Fast, SEO-optimised, and built to handle enterprise workloads.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    icon: Cpu, color: "#F5A01A", bg: "rgba(245,160,26,0.08)",
    name: "IoT & Hardware",
    desc: "End-to-end IoT solutions — from sensor selection and PCB design to firmware development and cloud connectivity. Prototypes to mass production.",
    tags: ["Firmware", "PCB Design", "MQTT", "Edge Computing"],
  },
  {
    icon: Brain, color: "#3B0F8C", bg: "rgba(59,15,140,0.08)",
    name: "AI & Machine Learning",
    desc: "Custom AI models, LLM-powered agents, computer vision, NLP, and RAG pipelines. Deployed on-premise or cloud — wherever your data lives.",
    tags: ["LLM", "Computer Vision", "NLP", "RAG"],
  },
  {
    icon: LinkIcon, color: "#00A651", bg: "rgba(0,166,81,0.08)",
    name: "Blockchain",
    desc: "DeFi protocols, NFT platforms, supply chain traceability, smart contracts, and tokenisation. Ethereum, Solana, Hyperledger — we work with all chains.",
    tags: ["Solidity", "Web3", "Smart Contracts", "DeFi"],
  },
  {
    icon: Glasses, color: "#1E90FF", bg: "rgba(30,144,255,0.08)",
    name: "AR / VR",
    desc: "Immersive experiences for training, retail, real estate, and entertainment. AR product configurators, VR simulations, and mixed reality dashboards.",
    tags: ["Unity", "ARKit", "ARCore", "WebXR"],
  },
  {
    icon: Monitor, color: "#F5A01A", bg: "rgba(245,160,26,0.08)",
    name: "Desktop Applications",
    desc: "Cross-platform Windows, macOS, and Linux applications. Kiosk software, professional tools, and offline-first enterprise applications.",
    tags: ["Electron", "Tauri", ".NET", "Qt"],
  },
  {
    icon: Settings, color: "#6E6E73", bg: "rgba(110,110,115,0.08)",
    name: "System Integration",
    desc: "API integrations, legacy modernisation, ERP customisation, and data pipeline engineering. We connect your systems and make them talk.",
    tags: ["REST", "GraphQL", "ETL", "Microservices"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-[clamp(40px,6vw,72px)] font-bold tracking-tight leading-tight mb-6"
          >
            Every Technology<br />
            <span className="gradient-text">Under One Roof.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#6E6E73] leading-relaxed"
          >
            Your idea doesn&apos;t have to fit a category. We work across every major technology domain —
            so you never have to stitch together multiple vendors.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "#F5F5F7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="p-8 rounded-2xl bg-white flex gap-6"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
                  <Icon size={22} style={{ color: s.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{s.name}</h3>
                  <p className="text-sm leading-relaxed text-[#6E6E73] mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: s.bg, color: s.color }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
