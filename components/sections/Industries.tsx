const domains = ["Defence", "Finance", "Healthcare", "Agriculture", "Retail", "Education", "Manufacturing", "Enterprise"];

export default function Industries() {
  return (
    <section style={{ background: "#fff", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3B0F8C", marginBottom: "20px" }}>
          Industries
        </p>
        <h2 style={{ fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.07, color: "#1D1D1F", marginBottom: "16px" }}>
          From fields to boardrooms.
        </h2>
        <p style={{ fontSize: "18px", color: "#6E6E73", maxWidth: "480px", margin: "0 auto 64px", lineHeight: 1.6 }}>
          100+ products across 8 domains. Every one purpose-built for the people who use it.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          {domains.map((d) => (
            <span
              key={d}
              style={{
                padding: "12px 24px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 500,
                color: "#1D1D1F", background: "#F5F5F7",
                border: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
