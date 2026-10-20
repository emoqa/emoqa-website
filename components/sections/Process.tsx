const steps = [
  { num: "01", title: "Discover", desc: "We immerse in your problem — goals, users, constraints. No assumptions." },
  { num: "02", title: "Design",   desc: "Architecture, UI, hardware schematics — everything before code." },
  { num: "03", title: "Build",    desc: "Weekly demos. Constant feedback. You see progress, not promises." },
  { num: "04", title: "Scale",    desc: "We launch with you and stay — monitoring, iterating, growing." },
];

export default function Process() {
  return (
    <section style={{ background: "#F5F5F7", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3B0F8C", marginBottom: "20px" }}>
            How We Work
          </p>
          <h2 style={{ fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.07, color: "#1D1D1F" }}>
            Simple process.<br />Ambitious results.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {steps.map((s, i) => (
            <div
              key={s.num}
              style={{
                padding: "40px 32px",
                borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.09)" : "none",
              }}
            >
              <div style={{ fontSize: "52px", fontWeight: 800, color: "#3B0F8C", opacity: 0.15, lineHeight: 1, marginBottom: "28px" }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1D1D1F", marginBottom: "12px" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.65 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
