"use client";

import { motion } from "framer-motion";
import { Monitor, Wifi, RefreshCw, BarChart2, Smartphone, Shield } from "lucide-react";
import CTA from "@/components/sections/CTA";

const features = [
  { icon: Wifi, title: "Offline-First", desc: "Screens keep playing even without internet. Content syncs automatically when connection returns." },
  { icon: RefreshCw, title: "Real-Time Sync", desc: "WebSocket-powered live updates. Push a new playlist — screens update in seconds, not minutes." },
  { icon: Smartphone, title: "OTA Updates", desc: "Push app updates to 1000s of screens over the air. No physical access required." },
  { icon: BarChart2, title: "Analytics Dashboard", desc: "Track what's playing, when, and on which screen. Full playback analytics." },
  { icon: Shield, title: "Multi-Tenant", desc: "Serve multiple brands or clients from one platform. Each vendor sees only their screens." },
  { icon: Monitor, title: "Any Screen", desc: "Works on Android TV, Fire Stick, Raspberry Pi, commercial displays. Hardware-agnostic." },
];

export default function CMSPage() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{ background: "rgba(59,15,140,0.08)", color: "#3B0F8C", border: "1px solid rgba(59,15,140,0.15)" }}
          >
            Flagship Product
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(40px,6vw,72px)] font-bold tracking-tight leading-tight mb-6"
          >
            <span className="gradient-text">EmoqaCMS</span>
            <br />Digital Signage Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6E6E73] leading-relaxed"
          >
            Enterprise digital signage that works everywhere — offline or online. Manage unlimited screens,
            playlists, and schedules from a single cloud dashboard with zero on-site IT.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#F5F5F7" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Scale</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-white"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}
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

      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Proven at Scale</h2>
          <p className="text-lg text-[#6E6E73] leading-relaxed">
            EmoqaCMS is deployed across retail chains, hospitals, corporate campuses, and government institutions.
            Tested from 1 screen to thousands — the architecture never breaks a sweat.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
