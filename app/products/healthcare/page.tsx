"use client";

import { motion } from "framer-motion";
import { Activity, FileText, Video, Globe, Clock, Shield } from "lucide-react";
import CTA from "@/components/sections/CTA";

const features = [
  { icon: Activity, title: "130+ Instant Tests", desc: "Blood pressure, SpO2, blood glucose, ECG, BMI, hemoglobin, cholesterol and 120+ more — all in one kiosk." },
  { icon: Clock, title: "60-Second Reports", desc: "Full diagnostic report — printed and digital — in under a minute. No lab wait time." },
  { icon: Video, title: "Telemedicine Built-In", desc: "Connect with a doctor instantly via video call, right from the kiosk. Prescription generated on the spot." },
  { icon: Globe, title: "Multilingual", desc: "Supports 10+ Indian languages. No literacy barrier. Voice-guided interface for rural deployment." },
  { icon: FileText, title: "EHR Integration", desc: "Patient records automatically synced to hospital systems. ABDM and HL7 compatible." },
  { icon: Shield, title: "Clinical Grade", desc: "Medical-grade sensors, CE marked components, validated against clinical benchmarks." },
];

export default function HealthcarePage() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{ background: "rgba(0,166,81,0.08)", color: "#00A651", border: "1px solid rgba(0,166,81,0.2)" }}
          >
            Flagship Product
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(40px,6vw,72px)] font-bold tracking-tight leading-tight mb-6"
          >
            <span style={{ background: "linear-gradient(135deg, #00A651, #1E90FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              HealthQa Kiosk
            </span>
            <br />Instant Diagnostics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6E6E73] leading-relaxed"
          >
            Walk in with symptoms. Walk out with a full diagnostic report and doctor consultation — in under 5 minutes.
            No appointment. No lab. No waiting room.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#F5F5F7" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Redefined</h2>
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
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(0,166,81,0.08)" }}>
                    <Icon size={20} style={{ color: "#00A651" }} />
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
          <h2 className="text-3xl font-bold mb-6">Designed for Every Setting</h2>
          <p className="text-lg text-[#6E6E73] leading-relaxed">
            Rural PHCs, urban hospitals, corporate campuses, pharmacies, airports — HealthQa adapts to any environment.
            Ruggedised for dusty clinics, elegant enough for five-star hospital lobbies.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
