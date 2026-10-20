import CTA from "@/components/sections/CTA";

const values = [
  { title: "Customer First", desc: "Every line of code serves your end user. We optimise for outcomes, not features." },
  { title: "Full Ownership", desc: "We treat your project like our own product — no hand-offs, no half-measures." },
  { title: "Speed With Craft", desc: "We move fast but never cut corners. Quality is not a phase — it is the culture." },
  { title: "Domain Depth", desc: "We don't just code — we learn your domain, speak your language, and design for your users." },
];

const stats = [
  ["100+", "Projects"],
  ["8+", "Domains"],
  ["10+", "Years"],
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3B0F8C", marginBottom: "20px" }}>
            Our Story
          </p>
          <h1 style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1D1D1F", marginBottom: "28px" }}>
            Built on Ambition,<br />
            <span className="gradient-text">Delivered on Trust.</span>
          </h1>
          <p style={{ fontSize: "20px", color: "#6E6E73", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
            Emoqa started with a simple belief — great ideas deserve great execution. Over 10 years, we have grown from a
            small team of builders to a full-spectrum technology company, trusted by startups, enterprises,
            defence organisations, and MNCs alike.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 24px", background: "#F5F5F7" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.03em", textAlign: "center", color: "#1D1D1F", marginBottom: "64px" }}>
            What We Stand For
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{ padding: "36px 28px", borderRadius: "20px", background: "#fff", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#3B0F8C", marginBottom: "12px" }}>{v.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#6E6E73" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reach */}
      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#1D1D1F", marginBottom: "24px" }}>
            Our Reach
          </h2>
          <p style={{ fontSize: "18px", color: "#6E6E73", lineHeight: 1.7, marginBottom: "56px" }}>
            100+ projects across Defence, Finance, Healthcare, Agriculture, Retail, Education, Manufacturing, and Enterprise.
            From a blood-test kiosk used in rural clinics to a command-and-control interface for defence units —
            every project is purpose-built.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
            {stats.map(([val, lbl]) => (
              <div
                key={lbl}
                style={{ padding: "40px 24px", borderRadius: "20px", background: "#F5F5F7", textAlign: "center" }}
              >
                <span style={{ display: "block", fontSize: "48px", fontWeight: 800, letterSpacing: "-0.04em", color: "#3B0F8C", lineHeight: 1 }}>{val}</span>
                <span style={{ display: "block", fontSize: "14px", color: "#6E6E73", marginTop: "8px" }}>{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
