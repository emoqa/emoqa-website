"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, Heart, Bot } from "lucide-react";

const products = [
  {
    icon: Monitor,
    color: "#3B0F8C",
    bg: "rgba(59,15,140,0.06)",
    name: "EmoqaCMS",
    tagline: "Digital Signage Platform",
    description:
      "A fully offline-capable content management system for digital signage. Manage thousands of screens from a single dashboard — playlists, schedules, live stats — even without internet.",
    highlights: ["Offline-first architecture", "Real-time WebSocket sync", "OTA updates", "Multi-tenant"],
    href: "/products/cms",
  },
  {
    icon: Heart,
    color: "#00A651",
    bg: "rgba(0,166,81,0.06)",
    name: "HealthQa Kiosk",
    tagline: "Healthcare Kiosk System",
    description:
      "Walk-in, no doctor needed. Our kiosk delivers 130+ instant diagnostics — vitals, blood parameters, ECG, BMI — with a printed report and live telemedicine in under 5 minutes.",
    highlights: ["130+ instant tests", "60-second reports", "Telemedicine built-in", "Multilingual"],
    href: "/products/healthcare",
  },
  {
    icon: Bot,
    color: "#1E90FF",
    bg: "rgba(30,144,255,0.06)",
    name: "AI Agent Suite",
    tagline: "Intelligent Conversational Agents",
    description:
      "Two flagship AI agents: a Teacher that draws diagrams, highlights concepts and explains in any language — and a Sales Agent that demos products, describes features, and negotiates.",
    highlights: ["Multilingual voice", "Draws & annotates", "Product demo mode", "Negotiation AI"],
    href: "/products/ai",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Products() {
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
            Flagship Products
          </p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight leading-tight mb-4" style={{ color: "#1D1D1F" }}>
            Our Proprietary Platforms
          </h2>
          <p className="text-lg text-[#6E6E73] max-w-xl mx-auto">
            Built from the ground up, deployed across industries, trusted by enterprises.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                variants={item}
                className="group flex flex-col rounded-[20px] p-8 border transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{
                  borderColor: "rgba(0,0,0,0.08)",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.12)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.04)")
                }
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: p.bg }}
                >
                  <Icon size={26} style={{ color: p.color }} />
                </div>

                {/* Header */}
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: p.color }}>
                  {p.tagline}
                </p>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#1D1D1F" }}>
                  {p.name}
                </h3>
                <p className="text-[#6E6E73] text-base leading-relaxed mb-6">{p.description}</p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 mb-8 flex-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm" style={{ color: "#1D1D1F" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                  style={{ color: p.color }}
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
