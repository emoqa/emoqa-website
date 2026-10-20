"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const capabilities = [
  "Android & iOS",
  "Web Development",
  "IoT & Hardware",
  "Artificial Intelligence",
  "Blockchain",
  "AR / VR",
  "Desktop Applications",
  "System Integration",
];

export default function Services() {
  return (
    <section className="py-40 px-6" style={{ background: "#F5F5F7" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end gap-16 lg:gap-24">
          {/* Left — headline */}
          <div className="lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#3B0F8C" }}
            >
              Capabilities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-bold tracking-tight mb-8"
              style={{ fontSize: "clamp(38px, 5.5vw, 64px)", color: "#1D1D1F", lineHeight: 1.08 }}
            >
              Every technology
              <br />
              under one roof.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-lg leading-relaxed mb-10"
              style={{ color: "#6E6E73", maxWidth: "380px" }}
            >
              You bring the idea. We handle every layer — from circuit board to cloud, from model to mobile.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-base font-semibold"
                style={{ color: "#3B0F8C" }}
              >
                View all services →
              </Link>
            </motion.div>
          </div>

          {/* Right — clean capability list */}
          <div className="lg:w-1/2">
            <div className="flex flex-col">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center justify-between py-5 group cursor-default"
                  style={{
                    borderBottom: i < capabilities.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  <span
                    className="text-lg font-medium transition-colors group-hover:text-[#3B0F8C]"
                    style={{ color: "#1D1D1F" }}
                  >
                    {cap}
                  </span>
                  <span
                    className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#3B0F8C" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
