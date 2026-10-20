import Link from "next/link";

export default function CTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #2A0A6E 0%, #3B0F8C 50%, #1a0860 100%)",
        padding: "140px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orange glow */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(245,160,26,0.25) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <h2 style={{
          fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 700,
          lineHeight: 1.04, letterSpacing: "-0.04em",
          color: "#fff", marginBottom: "24px",
        }}>
          Your idea.<br />Our execution.
        </h2>
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, maxWidth: "440px", margin: "0 auto 48px" }}>
          A sketch on a napkin or a full spec — we turn it into a product the world notices.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center",
              padding: "16px 36px", borderRadius: "999px",
              background: "#F5A01A", color: "#1D1D1F",
              fontWeight: 700, fontSize: "16px", textDecoration: "none",
            }}
          >
            Start a Project
          </Link>
          <Link
            href="/products/cms"
            style={{
              display: "inline-flex", alignItems: "center",
              padding: "16px 36px", borderRadius: "999px",
              border: "1.5px solid rgba(255,255,255,0.3)",
              color: "#fff", fontWeight: 600, fontSize: "16px", textDecoration: "none",
            }}
          >
            See Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}
