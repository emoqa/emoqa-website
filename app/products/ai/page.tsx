import CTA from "@/components/sections/CTA";

const teacherFeatures = [
  { num: "01", title: "Draws in Real Time", desc: "NDJSON streaming drives the blackboard — boxes, flow diagrams, equations, and highlight points appear in sync with the avatar's speech. First response in under 1.2 seconds." },
  { num: "02", title: "Entity Color System", desc: "Biological and chemical terms get consistent colours across every explanation. Mitochondria is always orange. Light reaction is always blue. Students build visual memory." },
  { num: "03", title: "Voice-First Pipeline", desc: "VAD detects speech → Whisper STT transcribes → Ollama LLM generates → gTTS synthesises. Full end-to-end voice pipeline with lipsync on the VRM avatar." },
];

const salesFeatures = [
  { num: "01", title: "RAG Product Knowledge", desc: "Upload your catalogue — the agent retrieves the right product from Qdrant vector search and explains specs, pricing, and comparisons on demand. Deployed with 25 kiosk products." },
  { num: "02", title: "3D Avatar Showroom", desc: "VRM avatar (Aria) with real-time lipsync, blink, and head sway. React Three Fiber renders it at 60fps. Swappable to any VRM1 character model." },
  { num: "03", title: "24/7 Sales Presence", desc: "Handles product queries, objections, and comparisons round the clock on kiosk floors. Configured guardrails for pricing and deal-closing logic." },
];

const pipeline = [
  ["VAD", "WebRTC voice activity detection — knows when you stop talking"],
  ["STT", "OpenAI Whisper (local GPU) — fast, accurate, multilingual"],
  ["RAG", "Qdrant hybrid search (BGE-M3 dense + BM25 sparse + CLIP visual)"],
  ["LLM", "Ollama qwen3:14b — NDJSON streaming for instant first response"],
  ["TTS", "gTTS → PCM streaming — avatar lipsync synced per audio chunk"],
  ["Avatar", "React 19 + Three.js + @pixiv/three-vrm — VRM1 character model"],
];

export default function AIPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div className="anim-badge" style={{
            display: "inline-flex", alignItems: "center",
            padding: "6px 18px", borderRadius: "999px",
            background: "rgba(30,144,255,0.07)", color: "#1E90FF",
            border: "1px solid rgba(30,144,255,0.2)",
            fontSize: "13px", fontWeight: 600, marginBottom: "32px",
          }}>
            AI Digital Human · React 19 + VRM · FastAPI + Ollama · Qdrant RAG
          </div>
          <h1 className="anim-h1" style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1D1D1F", marginBottom: "28px" }}>
            <span style={{ background: "linear-gradient(135deg, #1E90FF, #3B0F8C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              AI Agent Suite
            </span>
            <br />It teaches. It sells. It speaks every language.
          </h1>
          <p className="anim-subtext" style={{ fontSize: "20px", color: "#6E6E73", lineHeight: 1.7 }}>
            A 3D digital human powered by LLM + RAG. One persona is an AI teacher that draws on a live blackboard
            in real time. Another closes sales deals from a kiosk floor — 24/7, in any language.
          </p>
        </div>
      </section>

      {/* Pipeline */}
      <section style={{ background: "#F5F5F7", padding: "56px 24px", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {pipeline.map(([label, desc]) => (
              <div key={label} style={{ padding: "24px 20px", background: "#F5F5F7" }}>
                <p style={{ fontSize: "13px", fontWeight: 800, color: "#1E90FF", marginBottom: "8px", letterSpacing: "0.04em" }}>{label}</p>
                <p style={{ fontSize: "13px", color: "#6E6E73", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Teacher */}
      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <span className="anim-badge" style={{
              display: "inline-block", padding: "5px 14px", borderRadius: "999px",
              fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em",
              background: "rgba(30,144,255,0.08)", color: "#1E90FF", marginBottom: "16px",
            }}>
              Agent 01
            </span>
            <h2 className="anim-h1" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#1D1D1F", marginBottom: "8px" }}>
              AI Teacher — Bubly
            </h2>
            <p className="anim-subtext" style={{ fontSize: "18px", color: "#6E6E73" }}>Explains anything on a live blackboard. To anyone. In any language.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {teacherFeatures.map((f, i) => (
              <div key={f.title} className={`hover-lift anim-card-${i + 1}`} style={{ padding: "40px 32px", background: "#fff" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "rgba(30,144,255,0.4)", marginBottom: "16px" }}>{f.num}</p>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1D1D1F", marginBottom: "10px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Sales Agent */}
      <section style={{ padding: "100px 24px", background: "#F5F5F7" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <span className="anim-badge" style={{
              display: "inline-block", padding: "5px 14px", borderRadius: "999px",
              fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em",
              background: "rgba(59,15,140,0.08)", color: "#3B0F8C", marginBottom: "16px",
            }}>
              Agent 02
            </span>
            <h2 className="anim-h1" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#1D1D1F", marginBottom: "8px" }}>
              AI Sales Agent — Aria
            </h2>
            <p className="anim-subtext" style={{ fontSize: "18px", color: "#6E6E73" }}>Shows, explains, negotiates — closes the deal. Currently live at aBet Technology, Pune.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {salesFeatures.map((f, i) => (
              <div key={f.title} className={`hover-lift anim-card-${i + 1}`} style={{ padding: "40px 32px", background: "#F5F5F7" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "rgba(59,15,140,0.3)", marginBottom: "16px" }}>{f.num}</p>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1D1D1F", marginBottom: "10px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latency callout */}
      <section style={{ padding: "100px 24px", background: "#0D0D0D" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "clamp(56px,8vw,100px)", fontWeight: 900, color: "#1E90FF", opacity: 0.15, lineHeight: 1, marginBottom: "8px" }}>1.2s</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "24px" }}>
            Time to first audio response.
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            NDJSON streaming architecture means the avatar starts speaking while the LLM is still generating.
            No waiting for the full response — step-by-step board ops fire in sync with each audio chunk.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
