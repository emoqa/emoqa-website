"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const projects = [
  {
    tag: "Digital Signage Platform",
    accent: "#3B0F8C",
    accentBg: "rgba(59,15,140,0.07)",
    num: "01",
    name: "Emoqa Sync",
    version: "v2.3.4  ·  Build 29  ·  Self-hosted",
    headline: "One dashboard.\nThousands of screens.",
    description:
      "Fully self-hosted offline-capable digital signage system. Android kiosk runs playlists without internet. Node.js backend handles real-time sync, OTA updates, and multi-tenant vendor management — all on your own VPS.",
    points: [
      "Offline-first playback — screens never stop, even without internet",
      "WebSocket OTA — push updates to 1000s of devices in seconds",
      "Multi-tenant: vendor portal (cms.emoqa.in) + admin panel",
      "Device log submission, heartbeat monitoring, remote commands",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Node.js 22", "Fastify", "PostgreSQL", "React"],
    href: "/products/cms",
  },
  {
    tag: "Health ATM / Diagnostic Kiosk",
    accent: "#00A651",
    accentBg: "rgba(0,166,81,0.07)",
    num: "02",
    name: "Emoqa Health Kiosk",
    version: "43 Tests  ·  4 Modes  ·  CE Marked Hardware",
    headline: "43 tests.\n5-minute report.",
    description:
      "Self-contained Health ATM that runs medical tests, generates instant PDF reports, and delivers them via WhatsApp. Designed for health camps, hospitals, e-clinics, and schools across India.",
    points: [
      "Blood glucose, hemoglobin, SpO₂, ECG, cholesterol + 38 more tests",
      "Live doctor consultation via Amazon Chime — directly on the kiosk",
      "AI health summary, diet & exercise plans powered by Claude Haiku",
      "ABDM + HL7 compatible, supports 10+ Indian languages",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Flutter", "AWS Lambda", "PostgreSQL", "Claude Haiku"],
    href: "/products/healthcare",
  },
  {
    tag: "AI Digital Human Agent",
    accent: "#1E90FF",
    accentBg: "rgba(30,144,255,0.07)",
    num: "03",
    name: "AI Agent Suite",
    version: "React 19 + VRM  ·  FastAPI + Ollama  ·  Qdrant RAG",
    headline: "It teaches. It sells.\nIt speaks every language.",
    description:
      "A 3D digital human powered by LLM + RAG. One persona is an AI teacher that draws and explains on a live blackboard. Another closes sales deals from a kiosk floor — 24/7, in any language.",
    points: [
      "VRM 3D avatar with real-time lipsync, blink, and head sway",
      "NDJSON streaming — first audio response in under 1.2 seconds",
      "RAG from your product catalogue, textbooks, or any document set",
      "Voice pipeline: VAD → Whisper STT → Ollama LLM → gTTS end-to-end",
    ],
    tech: ["React 19", "Three.js", "VRM", "FastAPI", "Ollama (qwen3:14b)", "Qdrant", "Whisper"],
    href: "/products/ai",
  },
];

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(idx);
        setFading(false);
      }, 260);
    },
    [fading]
  );

  useEffect(() => {
    const t = setInterval(() => goTo((current + 1) % projects.length), 7000);
    return () => clearInterval(t);
  }, [current, goTo]);

  const p = projects[current];

  return (
    <section style={{ background: "#fff", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3B0F8C", marginBottom: "20px" }}>
            Proprietary Products
          </p>
          <h2 style={{ fontSize: "clamp(38px,5.5vw,64px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.07, color: "#1D1D1F" }}>
            Built in-house.<br />Deployed in the real world.
          </h2>
        </div>

        {/* Slide */}
        <div
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 0.26s ease, transform 0.26s ease",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: "28px",
            overflow: "hidden",
            background: "#fff",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {/* Left — Info */}
            <div style={{ padding: "56px 48px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <span style={{
                display: "inline-flex", width: "fit-content",
                padding: "5px 14px", borderRadius: "999px",
                fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em",
                background: p.accentBg, color: p.accent,
              }}>
                {p.tag}
              </span>

              <div>
                <h3 style={{ fontSize: "clamp(28px,3.2vw,42px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#1D1D1F", whiteSpace: "pre-line" }}>
                  {p.headline}
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.3)", marginTop: "10px", fontFamily: "monospace" }}>{p.version}</p>
              </div>

              <p style={{ fontSize: "16px", color: "#6E6E73", lineHeight: 1.7, maxWidth: "400px" }}>
                {p.description}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {p.points.map((pt) => (
                  <li key={pt} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: p.accent, fontSize: "16px", lineHeight: 1.5, flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: "14px", color: "#1D1D1F", lineHeight: 1.6 }}>{pt}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                {p.tech.map((t) => (
                  <span key={t} style={{
                    padding: "4px 12px", borderRadius: "999px",
                    fontSize: "12px", fontWeight: 600,
                    background: p.accentBg, color: p.accent,
                  }}>{t}</span>
                ))}
              </div>

              <Link
                href={p.href}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  marginTop: "8px", width: "fit-content",
                  padding: "13px 28px", borderRadius: "999px",
                  background: p.accent, color: "#fff",
                  fontSize: "14px", fontWeight: 700, textDecoration: "none",
                }}
              >
                Explore {p.name} →
              </Link>
            </div>

            {/* Right — Visual */}
            <div style={{
              background: p.accentBg,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "56px 48px",
              gap: "16px",
              borderLeft: "1px solid rgba(0,0,0,0.06)",
            }}>
              <span style={{ fontSize: "140px", fontWeight: 900, color: p.accent, opacity: 0.08, lineHeight: 1 }}>{p.num}</span>
              <span style={{ fontSize: "28px", fontWeight: 800, color: p.accent, letterSpacing: "-0.03em", textAlign: "center" }}>{p.name}</span>
              <span style={{ fontSize: "14px", color: p.accent, opacity: 0.55, textAlign: "center", maxWidth: "240px" }}>{p.tag}</span>
            </div>
          </div>
        </div>

        {/* Product tab nav */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "36px", flexWrap: "wrap" }}>
          {projects.map((proj, i) => (
            <button
              key={proj.name}
              onClick={() => goTo(i)}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "10px 22px", borderRadius: "999px",
                background: i === current ? proj.accent : "transparent",
                border: `1.5px solid ${i === current ? proj.accent : "rgba(0,0,0,0.12)"}`,
                color: i === current ? "#fff" : "#6E6E73",
                fontSize: "13px", fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              <span style={{
                width: "7px", height: "7px", borderRadius: "50%", flexShrink: 0,
                background: i === current ? "rgba(255,255,255,0.7)" : proj.accent,
                transition: "background 0.25s ease",
              }} />
              {proj.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
