"use client";

import { motion } from "framer-motion";
import { PenTool, Languages, ShoppingBag, TrendingUp, Mic, Bot } from "lucide-react";
import CTA from "@/components/sections/CTA";

const teacherFeatures = [
  { icon: PenTool, title: "Draws in Real Time", desc: "Explains concepts by drawing diagrams, highlighting text, and annotating just like a human teacher on a whiteboard." },
  { icon: Languages, title: "Multilingual", desc: "Speaks and understands 20+ languages. Switches mid-conversation based on the student's preference." },
  { icon: Mic, title: "Voice-First", desc: "Natural conversational voice — not robotic TTS. Students speak, the AI listens and responds contextually." },
];

const salesFeatures = [
  { icon: ShoppingBag, title: "Product Showcase", desc: "Shows 3D models, images, videos of products. Demonstrates features interactively on command." },
  { icon: TrendingUp, title: "Negotiation AI", desc: "Trained to handle pricing conversations, objections, and deal-closing within configured guardrails." },
  { icon: Bot, title: "Knows Your Catalogue", desc: "Upload your entire product database — the agent knows specs, pricing, comparisons, and pros/cons for everything." },
];

export default function AIPage() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{ background: "rgba(30,144,255,0.08)", color: "#1E90FF", border: "1px solid rgba(30,144,255,0.2)" }}
          >
            Flagship Product
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(40px,6vw,72px)] font-bold tracking-tight leading-tight mb-6"
          >
            <span style={{ background: "linear-gradient(135deg, #1E90FF, #3B0F8C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              AI Agent Suite
            </span>
            <br />Intelligence That Works For You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6E6E73] leading-relaxed"
          >
            Two purpose-built AI agents — one that teaches, one that sells.
            Both speak your language, understand your domain, and work 24/7.
          </motion.p>
        </div>
      </section>

      {/* AI Teacher */}
      <section className="py-20 px-6" style={{ background: "#F5F5F7" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ background: "rgba(30,144,255,0.1)", color: "#1E90FF" }}>
              Agent 1
            </span>
            <h2 className="text-3xl font-bold mb-2">AI Teacher</h2>
            <p className="text-[#6E6E73]">Explains anything. To anyone. In any language.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {teacherFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(30,144,255,0.08)" }}>
                    <Icon size={20} style={{ color: "#1E90FF" }} />
                  </div>
                  <h3 className="font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6E6E73]">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Sales Agent */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ background: "rgba(59,15,140,0.1)", color: "#3B0F8C" }}>
              Agent 2
            </span>
            <h2 className="text-3xl font-bold mb-2">AI Sales Agent</h2>
            <p className="text-[#6E6E73]">Shows, explains, negotiates — closes the deal.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {salesFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl"
                  style={{ background: "#F5F5F7", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(59,15,140,0.08)" }}>
                    <Icon size={20} style={{ color: "#3B0F8C" }} />
                  </div>
                  <h3 className="font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6E6E73]">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
