import Link from "next/link";

const products = [
  {
    num: "01",
    accent: "#4B00A0",
    bg: "rgba(75,0,160,0.05)",
    name: "EmoqaCMS",
    category: "Digital Signage Platform",
    headline: "One dashboard.\nThousands of screens.",
    body: "Offline-first content management for digital signage. Push playlists, schedules, and live updates to any screen — with or without internet.",
    href: "/products/cms",
  },
  {
    num: "02",
    accent: "#00A651",
    bg: "rgba(0,166,81,0.05)",
    name: "HealthQa",
    category: "Healthcare Diagnostics",
    headline: "130+ tests.\nResults in 60 seconds.",
    body: "Walk-in diagnostics with no appointment, no lab, no wait. Blood tests, ECG, vitals — and a live telemedicine consultation, all from one kiosk.",
    href: "/products/healthcare",
  },
  {
    num: "03",
    accent: "#1B9FFF",
    bg: "rgba(30,144,255,0.05)",
    name: "AI Agent Suite",
    category: "Conversational AI",
    headline: "It teaches. It sells.\nIt speaks your language.",
    body: "An AI teacher that draws and explains in any language. An AI salesperson that demos products, negotiates, and closes deals — 24/7.",
    href: "/products/ai",
  },
];

export default function Products() {
  return (
    <section style={{ background: "#fff" }}>
      {/* Header */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "120px 24px 80px", textAlign: "center" }}>
        <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B00A0", marginBottom: "20px" }}>
          Proprietary Products
        </p>
        <h2 style={{ fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.07, color: "#1D1D1F" }}>
          Built from scratch.<br />Deployed across industries.
        </h2>
      </div>

      {/* Product rows */}
      {products.map((p, i) => (
        <div
          key={p.name}
          style={{
            borderTop: "1px solid rgba(0,0,0,0.07)",
            background: i % 2 === 1 ? "#F5F5F7" : "#fff",
          }}
        >
          <div
            style={{
              maxWidth: "1100px", margin: "0 auto", padding: "80px 24px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
              direction: i % 2 === 1 ? "rtl" : "ltr",
            }}
          >
            {/* Visual */}
            <div style={{ direction: "ltr" }}>
              <div
                style={{
                  aspectRatio: "4/3", borderRadius: "24px",
                  background: p.bg,
                  border: `1px solid ${p.accent}22`,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  gap: "12px",
                }}
              >
                <span style={{ fontSize: "96px", fontWeight: 800, color: p.accent, opacity: 0.12, lineHeight: 1 }}>
                  {p.num}
                </span>
                <span style={{ fontSize: "20px", fontWeight: 700, color: p.accent, letterSpacing: "-0.02em" }}>
                  {p.name}
                </span>
              </div>
            </div>

            {/* Copy */}
            <div style={{ direction: "ltr", display: "flex", flexDirection: "column", gap: "20px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent }}>
                {p.category}
              </span>
              <h3
                style={{
                  fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 700,
                  lineHeight: 1.1, letterSpacing: "-0.03em",
                  color: "#1D1D1F", whiteSpace: "pre-line",
                }}
              >
                {p.headline}
              </h3>
              <p style={{ fontSize: "17px", color: "#6E6E73", lineHeight: 1.7, maxWidth: "400px" }}>
                {p.body}
              </p>
              <Link
                href={p.href}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  fontSize: "15px", fontWeight: 600, color: p.accent,
                  textDecoration: "none", marginTop: "4px",
                }}
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
