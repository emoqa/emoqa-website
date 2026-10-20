"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="pt-36 pb-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#3B0F8C" }}>
              Get in Touch
            </p>
            <h1 className="text-[clamp(36px,5vw,60px)] font-bold tracking-tight leading-tight mb-6">
              Let&apos;s Build<br />
              <span className="gradient-text">Something Great.</span>
            </h1>
            <p className="text-lg text-[#6E6E73] leading-relaxed mb-10">
              Have a product idea? A problem that needs solving? Or just want to know if we can help?
              Drop us a message — we reply within 24 hours.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(59,15,140,0.08)" }}
                >
                  <Mail size={18} style={{ color: "#3B0F8C" }} />
                </div>
                <div>
                  <p className="text-xs text-[#6E6E73] mb-0.5">Email</p>
                  <a href="mailto:hello@emoqa.in" className="text-sm font-medium hover:underline" style={{ color: "#3B0F8C" }}>
                    hello@emoqa.in
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(59,15,140,0.08)" }}
                >
                  <Phone size={18} style={{ color: "#3B0F8C" }} />
                </div>
                <div>
                  <p className="text-xs text-[#6E6E73] mb-0.5">Phone</p>
                  <a href="tel:+91" className="text-sm font-medium" style={{ color: "#1D1D1F" }}>
                    Contact via email for business inquiries
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(59,15,140,0.08)" }}
                >
                  <MapPin size={18} style={{ color: "#3B0F8C" }} />
                </div>
                <div>
                  <p className="text-xs text-[#6E6E73] mb-0.5">Location</p>
                  <p className="text-sm font-medium" style={{ color: "#1D1D1F" }}>India — serving clients globally</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              action="mailto:hello@emoqa.in"
              method="POST"
              encType="text/plain"
              className="flex flex-col gap-5 p-8 rounded-2xl"
              style={{ background: "#F5F5F7", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#1D1D1F]">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Ronit"
                    required
                    className="px-4 py-3 rounded-xl text-sm bg-white outline-none focus:ring-2 transition"
                    style={{ border: "1px solid rgba(0,0,0,0.1)", focusRingColor: "#3B0F8C" } as React.CSSProperties}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#1D1D1F]">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Nandeshwar"
                    required
                    className="px-4 py-3 rounded-xl text-sm bg-white outline-none focus:ring-2 transition"
                    style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#1D1D1F]">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="px-4 py-3 rounded-xl text-sm bg-white outline-none focus:ring-2 transition"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#1D1D1F]">What are you building?</label>
                <select
                  name="type"
                  className="px-4 py-3 rounded-xl text-sm bg-white outline-none focus:ring-2 transition appearance-none"
                  style={{ border: "1px solid rgba(0,0,0,0.1)", color: "#6E6E73" }}
                >
                  <option value="">Select a category</option>
                  <option value="hardware">Hardware Product</option>
                  <option value="software">Software / App</option>
                  <option value="ai">AI / ML Solution</option>
                  <option value="iot">IoT System</option>
                  <option value="cms">Digital Signage / CMS</option>
                  <option value="healthcare">Healthcare Tech</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#1D1D1F]">Tell us more</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Describe your idea, problem, or project..."
                  required
                  className="px-4 py-3 rounded-xl text-sm bg-white outline-none focus:ring-2 transition resize-none"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: "#3B0F8C" }}
              >
                Send Message <ArrowRight size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
