"use client";

import { motion } from "framer-motion";
import CTA from "@/components/sections/CTA";

const values = [
  { title: "Customer First", desc: "Every line of code serves your end user. We optimise for outcomes, not features." },
  { title: "Full Ownership", desc: "We treat your project like our own product — no hand-offs, no half-measures." },
  { title: "Speed With Craft", desc: "We move fast but never cut corners. Quality is not a phase — it's the culture." },
  { title: "Domain Depth", desc: "We don't just code — we learn your domain, speak your language, and design for your users." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#3B0F8C" }}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(40px,6vw,72px)] font-bold tracking-tight leading-tight mb-6"
          >
            Built on Ambition,<br />
            <span className="gradient-text">Delivered on Trust.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6E6E73] leading-relaxed max-w-2xl mx-auto"
          >
            Emoqa started with a simple belief — great ideas deserve great execution. Over 10 years, we&apos;ve grown from a
            small team of builders to a full-spectrum technology company, trusted by startups, enterprises,
            defence organisations, and MNCs alike.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#F5F5F7" }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            What We Stand For
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <h3 className="font-bold text-base mb-2" style={{ color: "#3B0F8C" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6E6E73" }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Reach</h2>
          <p className="text-lg text-[#6E6E73] leading-relaxed mb-10">
            100+ projects across Defence, Finance, Healthcare, Agriculture, Retail, Education, Manufacturing, and Enterprise.
            From a blood-test kiosk used in rural clinics to a command-and-control interface for defence units —
            every project is purpose-built.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[["100+", "Projects"], ["8+", "Domains"], ["10+", "Years"]].map(([val, lbl]) => (
              <div key={lbl} className="flex flex-col items-center p-6 rounded-2xl" style={{ background: "#F5F5F7" }}>
                <span className="text-4xl font-bold" style={{ color: "#3B0F8C" }}>{val}</span>
                <span className="text-sm text-[#6E6E73] mt-1">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
