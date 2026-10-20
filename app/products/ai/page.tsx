import NeuralCanvas from "@/components/ai/NeuralCanvas";
import PipelineFlow from "@/components/ai/PipelineFlow";

const techStack = [
  { name: "Ollama", sub: "qwen3:14b local LLM", color: "#6929C4" },
  { name: "Qdrant", sub: "Vector DB + RAG", color: "#1E90FF" },
  { name: "Whisper", sub: "OpenAI ASR / VAD", color: "#6929C4" },
  { name: "VRM", sub: "3D Avatar Runtime", color: "#1E90FF" },
  { name: "FastAPI", sub: "Python backend", color: "#6929C4" },
  { name: "React 19", sub: "Frontend + WebGL", color: "#1E90FF" },
  { name: "NDJSON", sub: "Streaming pipeline", color: "#6929C4" },
  { name: "Claude Haiku", sub: "Fallback LLM tier", color: "#1E90FF" },
];

const agents = [
  {
    name: "Bubly",
    role: "Education AI Agent",
    tagline: "Personalized learning in every language",
    color: "#6929C4",
    glowClass: "glow-card-purple",
    floatClass: "float-1",
    bullets: [
      "Curriculum-aware Q&A with RAG-powered context retrieval",
      "Adaptive difficulty — adjusts to student comprehension in real time",
      "Multi-language support: Hindi, English, Marathi, and more",
      "Voice-first interface with animated VRM teacher avatar",
      "Session memory: tracks what students struggle with across sessions",
    ],
    use: "EdTech, schools, digital classrooms",
    badge: "Agent 01",
  },
  {
    name: "Aria",
    role: "Sales & Customer AI Agent",
    tagline: "Convert visitors into customers — 24/7",
    color: "#1E90FF",
    glowClass: "glow-card-blue",
    floatClass: "float-2",
    bullets: [
      "Product-aware conversations from your custom knowledge base",
      "Lead capture, qualification, and CRM hand-off",
      "Objection handling with pre-loaded competitor knowledge",
      "Appointment booking integration via calendar APIs",
      "Post-call transcripts and sentiment scoring",
    ],
    use: "Retail, real estate, B2B sales floors",
    badge: "Agent 02",
  },
];

const metrics = [
  { value: "1.2s", label: "First audio response", sub: "NDJSON streaming pipeline" },
  { value: "100%", label: "On-premise capable", sub: "No cloud dependency required" },
  { value: "qwen3:14b", label: "Primary LLM", sub: "14B parameter local model" },
  { value: "< 50ms", label: "VAD latency", sub: "Silero voice detection" },
];

export default function AIPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        position: "relative",
        minHeight: "100svh",
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,15,140,0.55) 0%, #000510 55%, #000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "80px 24px 60px",
      }}>
        {/* Neural canvas background */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.55 }}>
          <NeuralCanvas style={{ width: "100%", height: "100%" }} />
        </div>

        {/* Central glow */}
        <div style={{
          position: "absolute",
          top: "40%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,15,140,0.25) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "800px" }}>
          <div className="anim-badge" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(59,15,140,0.25)", border: "1px solid rgba(105,41,196,0.5)",
            borderRadius: "999px", padding: "6px 18px",
            marginBottom: "28px",
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#6929C4",
              animation: "pulse-ring 1.8s ease-out infinite",
              display: "inline-block",
            }} />
            <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              AI Agent Suite
            </span>
          </div>

          <h1 className="anim-h1 shimmer-text" style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}>
            Intelligence with a Face
          </h1>

          <p className="anim-subtext" style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            marginBottom: "40px",
            maxWidth: "580px",
            margin: "0 auto 40px",
          }}>
            Fully on-premise conversational AI agents with photorealistic 3D avatars.
            Voice in, voice out. 1.2 second first response. Zero cloud dependency.
          </p>

          <div className="anim-card-1" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              background: "linear-gradient(135deg, #3B0F8C, #6929C4)",
              color: "#fff", padding: "14px 32px", borderRadius: "10px",
              fontWeight: 700, fontSize: "15px", textDecoration: "none",
              boxShadow: "0 8px 32px rgba(59,15,140,0.4)",
            }}>Request a Demo</a>
            <a href="#pipeline" style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.8)", padding: "14px 32px", borderRadius: "10px",
              fontWeight: 600, fontSize: "15px", textDecoration: "none",
            }}>See How It Works</a>
          </div>
        </div>

        {/* Metrics strip */}
        <div className="anim-card-2" style={{
          position: "relative", zIndex: 1,
          marginTop: "64px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          overflow: "hidden",
          width: "100%",
          maxWidth: "760px",
        }}>
          {metrics.map((m, i) => (
            <div key={i} style={{
              padding: "24px 20px",
              background: "rgba(0,5,16,0.6)",
              textAlign: "center",
            }}>
              <div style={{
                fontSize: "26px", fontWeight: 800,
                color: i % 2 === 0 ? "#6929C4" : "#1E90FF",
                letterSpacing: "-0.02em", marginBottom: "4px",
              }}>{m.value}</div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: "2px" }}>{m.label}</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{m.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pipeline ── */}
      <section id="pipeline" style={{
        background: "#000510",
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="anim-badge" style={{
              display: "inline-block",
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1E90FF",
              marginBottom: "16px",
            }}>Response Pipeline</span>
            <h2 className="anim-h1" style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.15,
              marginBottom: "16px",
            }}>
              Voice in.{" "}
              <span style={{ color: "#1E90FF" }}>Avatar out.</span>
            </h2>
            <p className="anim-subtext" style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", maxWidth: "480px", margin: "0 auto" }}>
              Six-stage streaming pipeline — each step overlaps to hit 1.2s first-response latency.
            </p>
          </div>

          <div className="anim-card-1" style={{ display: "flex", justifyContent: "center" }}>
            <PipelineFlow />
          </div>
        </div>
      </section>

      {/* ── Agents ── */}
      <section style={{
        background: "linear-gradient(180deg, #000510 0%, #0a0014 100%)",
        padding: "100px 24px",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="anim-badge" style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6929C4",
              display: "inline-block", marginBottom: "16px",
            }}>Meet the Agents</span>
            <h2 className="anim-h1" style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.025em",
            }}>Two agents. Infinite conversations.</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
            gap: "24px",
          }}>
            {agents.map((ag, i) => (
              <div key={ag.name}
                className={`${ag.glowClass} ${ag.floatClass} ai-scan`}
                style={{
                  position: "relative",
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${ag.color}30`,
                  borderRadius: "20px",
                  padding: "36px",
                  overflow: "hidden",
                  animationDelay: `${i * 0.5}s`,
                }}>
                <div style={{
                  position: "absolute",
                  top: "-40px", right: "-40px",
                  width: "200px", height: "200px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${ag.color}15 0%, transparent 65%)`,
                  pointerEvents: "none",
                }} />

                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                    <div>
                      <span style={{
                        fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
                        textTransform: "uppercase", color: ag.color,
                        display: "block", marginBottom: "6px",
                      }}>{ag.badge}</span>
                      <h3 style={{ fontSize: "36px", fontWeight: 800, color: "#fff", lineHeight: 1, marginBottom: "4px" }}>{ag.name}</h3>
                      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>{ag.role}</p>
                    </div>
                    <div style={{
                      width: "56px", height: "56px", borderRadius: "50%",
                      background: `linear-gradient(135deg, ${ag.color}30, ${ag.color}10)`,
                      border: `1px solid ${ag.color}50`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        width: "20px", height: "20px", borderRadius: "50%",
                        background: ag.color,
                        animation: "pulse-ring 2s ease-out infinite",
                      }} />
                    </div>
                  </div>

                  <p style={{
                    fontSize: "18px", fontWeight: 600,
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "24px",
                    lineHeight: 1.4,
                  }}>{ag.tagline}</p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                    {ag.bullets.map((b, j) => (
                      <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: ag.color, flexShrink: 0, marginTop: "2px", fontSize: "14px" }}>→</span>
                        <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{
                    padding: "10px 16px",
                    background: `${ag.color}10`,
                    border: `1px solid ${ag.color}20`,
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.45)",
                  }}>
                    <span style={{ color: ag.color, fontWeight: 600 }}>Deployed in: </span>{ag.use}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section style={{
        background: "#000",
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="anim-badge" style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
              display: "inline-block", marginBottom: "16px",
            }}>Technology</span>
            <h2 className="anim-h1" style={{
              fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.025em",
            }}>
              Built on{" "}
              <span className="shimmer-text">open, proven stack</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "16px",
          }}>
            {techStack.map((t, i) => (
              <div key={t.name}
                className={`hover-lift anim-card-${(i % 6) + 1}`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  padding: "24px",
                  display: "flex", alignItems: "center", gap: "16px",
                }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: `${t.color}15`,
                  border: `1px solid ${t.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: t.color }} />
                </div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59,15,140,0.4) 0%, #000 60%)",
        padding: "100px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 className="anim-h1" style={{
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800,
            color: "#fff", letterSpacing: "-0.025em", marginBottom: "20px",
          }}>
            Deploy your AI agent today
          </h2>
          <p className="anim-subtext" style={{ color: "rgba(255,255,255,0.5)", fontSize: "17px", marginBottom: "36px", lineHeight: 1.6 }}>
            On-premise or hybrid. Custom avatar. Your brand, your data, your infrastructure.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              background: "linear-gradient(135deg, #3B0F8C, #6929C4)",
              color: "#fff", padding: "16px 36px", borderRadius: "12px",
              fontWeight: 700, fontSize: "16px", textDecoration: "none",
              boxShadow: "0 12px 40px rgba(59,15,140,0.5)",
            }}>Talk to Our Team</a>
            <a href="/products/cms" style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.8)", padding: "16px 36px", borderRadius: "12px",
              fontWeight: 600, fontSize: "16px", textDecoration: "none",
            }}>Explore Emoqa Sync</a>
          </div>
        </div>
      </section>

    </>
  );
}
