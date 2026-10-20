import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white"
      style={{ minHeight: "100svh", paddingTop: "80px" }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "600px", pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 0%, rgba(59,15,140,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10" style={{ maxWidth: "900px" }}>
        <p
          className="anim-hero-1"
          style={{ fontSize: "15px", fontWeight: 500, color: "#6E6E73", letterSpacing: "0.04em", marginBottom: "28px" }}
        >
          Where Emotion Meets Excellence
        </p>

        <h1
          className="anim-hero-2"
          style={{
            fontSize: "clamp(56px, 9.5vw, 108px)",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            color: "#1D1D1F",
            marginBottom: "28px",
          }}
        >
          We Build What<br />
          <span className="gradient-text">Others Call</span><br />
          Impossible.
        </h1>

        <p
          className="anim-hero-3"
          style={{
            fontSize: "clamp(18px, 2.2vw, 22px)",
            color: "#6E6E73",
            lineHeight: 1.6,
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          From Defence to Fortune 500s — hardware, software, AI,
          and everything between. Your most ambitious idea, fully built.
        </p>

        <div className="anim-hero-4" style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center",
              padding: "14px 32px", borderRadius: "999px",
              background: "#3B0F8C", color: "#fff",
              fontWeight: 600, fontSize: "16px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Start a Project
          </Link>
          <Link
            href="/products/cms"
            style={{
              display: "inline-flex", alignItems: "center",
              padding: "14px 32px", borderRadius: "999px",
              color: "#3B0F8C", fontWeight: 600, fontSize: "16px",
              border: "1.5px solid rgba(59,15,140,0.3)",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            Our Products
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
          opacity: 0.35,
        }}
      >
        <span style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#1D1D1F" }}>SCROLL</span>
        <div style={{ width: "1px", height: "32px", background: "#1D1D1F" }} />
      </div>
    </section>
  );
}
