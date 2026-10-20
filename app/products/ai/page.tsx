import CTA from "@/components/sections/CTA";

const teacherFeatures = [
  { num: "01", title: "Draws in Real Time", desc: "Explains concepts by drawing diagrams, highlighting text, and annotating just like a human teacher on a whiteboard." },
  { num: "02", title: "Multilingual", desc: "Speaks and understands 20+ languages. Switches mid-conversation based on the student's preference." },
  { num: "03", title: "Voice-First", desc: "Natural conversational voice — not robotic TTS. Students speak, the AI listens and responds contextually." },
];

const salesFeatures = [
  { num: "01", title: "Product Showcase", desc: "Shows 3D models, images, and videos of products. Demonstrates features interactively on command." },
  { num: "02", title: "Negotiation AI", desc: "Trained to handle pricing conversations, objections, and deal-closing within configured guardrails." },
  { num: "03", title: "Knows Your Catalogue", desc: "Upload your entire product database — the agent knows specs, pricing, comparisons, and pros/cons for everything." },
];

export default function AIPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center",
            padding: "6px 18px", borderRadius: "999px",
            background: "rgba(30,144,255,0.07)", color: "#1E90FF",
            border: "1px solid rgba(30,144,255,0.2)",
            fontSize: "13px", fontWeight: 600,
            marginBottom: "32px",
          }}>
            Flagship Product
          </div>
          <h1 style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1D1D1F", marginBottom: "28px" }}>
            <span style={{ background: "linear-gradient(135deg, #1E90FF, #3B0F8C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              AI Agent Suite
            </span>
            <br />Intelligence That Works For You
          </h1>
          <p style={{ fontSize: "20px", color: "#6E6E73", lineHeight: 1.7 }}>
            Two purpose-built AI agents — one that teaches, one that sells.
            Both speak your language, understand your domain, and work 24/7.
          </p>
        </div>
      </section>

      {/* AI Teacher */}
      <section style={{ padding: "100px 24px", background: "#F5F5F7" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <span style={{
              display: "inline-block", padding: "5px 14px", borderRadius: "999px",
              fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em",
              background: "rgba(30,144,255,0.1)", color: "#1E90FF",
              marginBottom: "16px",
            }}>
              Agent 01
            </span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#1D1D1F", marginBottom: "8px" }}>
              AI Teacher
            </h2>
            <p style={{ fontSize: "18px", color: "#6E6E73" }}>Explains anything. To anyone. In any language.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {teacherFeatures.map((f) => (
              <div key={f.title} style={{ padding: "40px 32px", background: "#F5F5F7" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "rgba(30,144,255,0.4)", marginBottom: "16px" }}>{f.num}</p>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1D1D1F", marginBottom: "10px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Sales Agent */}
      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <span style={{
              display: "inline-block", padding: "5px 14px", borderRadius: "999px",
              fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em",
              background: "rgba(59,15,140,0.08)", color: "#3B0F8C",
              marginBottom: "16px",
            }}>
              Agent 02
            </span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#1D1D1F", marginBottom: "8px" }}>
              AI Sales Agent
            </h2>
            <p style={{ fontSize: "18px", color: "#6E6E73" }}>Shows, explains, negotiates — closes the deal.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {salesFeatures.map((f) => (
              <div key={f.title} style={{ padding: "40px 32px", background: "#fff" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "rgba(59,15,140,0.3)", marginBottom: "16px" }}>{f.num}</p>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1D1D1F", marginBottom: "10px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
