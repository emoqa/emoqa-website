const testimonials = [
  {
    quote:
      "Emoqa built our entire digital signage infrastructure in under 8 weeks. The offline-first approach was exactly what our remote retail locations needed — zero downtime across 200+ screens in 9 months of operation.",
    name: "Operations Director",
    company: "Retail Chain, Maharashtra",
    domain: "Digital Signage",
    accent: "#4B00A0",
  },
  {
    quote:
      "The health kiosk transformed our camp workflow. What took 45 minutes per patient now takes under 5. The telemedicine integration is seamless — patients get a doctor consultation and prescription without leaving the camp.",
    name: "Chief Medical Officer",
    company: "Healthcare NGO, Pune",
    domain: "Healthcare",
    accent: "#00A651",
  },
  {
    quote:
      "Their AI sales agent handles product queries on our kiosk floor round the clock. Customer engagement went up 3x. The 3D avatar and natural voice response quality exceeded anything we expected on first delivery.",
    name: "Chief Executive Officer",
    company: "Manufacturing Company, Pune",
    domain: "AI Agent",
    accent: "#1B9FFF",
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#0D0D0D", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "20px" }}>
            Client Feedback
          </p>
          <h2 style={{ fontSize: "clamp(38px,5.5vw,64px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.07, color: "#fff" }}>
            Words from the field.
          </h2>
        </div>

        <div className="r-3col" style={{ gap: "24px" }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="hover-lift"
              style={{
                padding: "40px 32px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              <span style={{
                display: "inline-flex", width: "fit-content",
                padding: "4px 12px", borderRadius: "999px",
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
                background: `${t.accent}18`, color: t.accent,
              }}>
                {t.domain}
              </span>

              <p style={{
                fontSize: "16px", color: "rgba(255,255,255,0.75)",
                lineHeight: 1.75, fontStyle: "italic", flex: 1,
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{t.name}</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
