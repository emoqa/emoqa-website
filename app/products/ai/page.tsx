import NeuralCanvas from "@/components/ai/NeuralCanvas";
import AIOrb from "@/components/ai/AIOrb";
import ChatDemo from "@/components/ai/ChatDemo";

const benefits = [
  {
    icon: "⚡",
    headline: "Answers in 1.2 seconds",
    body: "Customers never wait. Your AI agent speaks before a human could even reach for a microphone — keeping every visitor engaged from the first word.",
    color: "#6929C4",
  },
  {
    icon: "🌐",
    headline: "Every language, instantly",
    body: "Hindi, English, Marathi, Tamil — your agent switches without prompting. No language is a barrier between you and a sale.",
    color: "#1E90FF",
  },
  {
    icon: "🔒",
    headline: "Your data stays yours",
    body: "Fully on-premise. No conversation ever leaves your building. No monthly API fees. One deployment, yours forever.",
    color: "#6929C4",
  },
];

const agents = [
  {
    name: "Bubly",
    badge: "For Education",
    tagline: "Students ask. Bubly answers — every time.",
    body: "Your institution can serve hundreds of students simultaneously without hiring more staff. Bubly knows your entire syllabus, adapts to each student's level, and never gets tired of the same question.",
    outcomes: [
      "Reduce faculty workload by up to 60%",
      "Students get answers at 2am before exams",
      "Tracks gaps and flags struggling students to teachers",
      "Available in any language your students speak",
    ],
    color: "#6929C4",
    glow: "glow-card-purple",
    float: "float-1",
    badge2: "EdTech · Schools · Coaching Centres",
  },
  {
    name: "Aria",
    badge: "For Sales & Retail",
    tagline: "Walk-ins become sales. Every time. 24/7.",
    body: "Aria knows every product in your catalogue, handles objections, and captures lead details — without a single human on the floor. Deploy her in your showroom, kiosk, or website.",
    outcomes: [
      "Captures leads even when your store is closed",
      "Knows specs, pricing, and comparisons instantly",
      "Hands off hot leads to your team automatically",
      "Deployed and live at aBet Technology, Pune",
    ],
    color: "#1E90FF",
    glow: "glow-card-blue",
    float: "float-2",
    badge2: "Retail · Real Estate · B2B Showrooms",
  },
];

const industries = [
  { name: "Electronics", example: "\"What's the difference between these two laptops?\"", color: "#6929C4" },
  { name: "Real Estate", example: "\"Show me 2BHK options under ₹60L in Pune\"", color: "#1E90FF" },
  { name: "EdTech", example: "\"Explain photosynthesis in Hindi\"", color: "#6929C4" },
  { name: "Healthcare", example: "\"What documents do I need for admission?\"", color: "#1E90FF" },
  { name: "Hospitality", example: "\"Book a table for 4 on Saturday\"", color: "#6929C4" },
  { name: "Finance", example: "\"What's the EMI on a ₹10L loan?\"", color: "#1E90FF" },
];

const steps = [
  { n: "01", title: "We learn your business", body: "Share your product catalogue, FAQs, and pricing. We train the AI on your exact knowledge — nothing generic." },
  { n: "02", title: "We deploy your agent", body: "Hardware, software, avatar customisation — all handled. You go live in 3–5 days. No IT team required." },
  { n: "03", title: "Leads start flowing", body: "Every conversation is logged. You get daily summaries, hot lead alerts, and full transcripts. Zero effort." },
];

export default function AIPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        position: "relative",
        minHeight: "100svh",
        background: "radial-gradient(ellipse 90% 70% at 50% -5%, rgba(59,15,140,0.6) 0%, #000510 50%, #000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "100px 24px 60px",
      }}>
        {/* Neural network background */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.6 }}>
          <NeuralCanvas style={{ width: "100%", height: "100%" }} />
        </div>

        <div style={{
          position: "relative", zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "60px",
          maxWidth: "1100px",
          width: "100%",
          alignItems: "center",
        }}>
          {/* Left: Copy */}
          <div>
            <div className="anim-badge" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(59,15,140,0.3)", border: "1px solid rgba(105,41,196,0.4)",
              borderRadius: "999px", padding: "6px 16px", marginBottom: "28px",
            }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: "#6929C4", display: "inline-block",
                animation: "pulse-ring 1.8s ease-out infinite",
              }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                AI Agent Suite — Emoqa
              </span>
            </div>

            <h1 className="anim-h1" style={{
              fontSize: "clamp(36px, 5.5vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              color: "#fff",
              marginBottom: "24px",
            }}>
              Your AI employee.{" "}
              <span className="shimmer-text">Never sleeps.</span>{" "}
              <br />Always selling.
            </h1>

            <p className="anim-subtext" style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75,
              marginBottom: "36px",
              maxWidth: "500px",
            }}>
              A photorealistic AI agent that speaks to your customers, answers every question, and captures every lead — on your kiosk, showroom floor, or website. Deployed in 5 days.
            </p>

            <div className="anim-card-1" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
              <a href="/contact" style={{
                background: "linear-gradient(135deg, #3B0F8C, #6929C4)",
                color: "#fff", padding: "14px 30px", borderRadius: "10px",
                fontWeight: 700, fontSize: "15px", textDecoration: "none",
                boxShadow: "0 8px 28px rgba(59,15,140,0.5)",
              }}>Book a Live Demo</a>
              <a href="#agents" style={{
                background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)", padding: "14px 30px", borderRadius: "10px",
                fontWeight: 600, fontSize: "15px", textDecoration: "none",
              }}>Meet the Agents</a>
            </div>

            {/* Proof pills */}
            <div className="anim-card-2" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { v: "1.2s", l: "First response" },
                { v: "24/7", l: "Always live" },
                { v: "0 cloud", l: "On-premise" },
              ].map(p => (
                <div key={p.v} style={{
                  padding: "8px 16px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", gap: "8px", alignItems: "center",
                }}>
                  <span style={{ fontSize: "15px", fontWeight: 800, color: "#fff" }}>{p.v}</span>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>{p.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Animated Orb */}
          <div className="float-1 anim-card-3" style={{ display: "flex", justifyContent: "center" }}>
            <AIOrb />
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section style={{ background: "#000", padding: "90px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 className="anim-h1" style={{
              fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.025em", marginBottom: "12px",
            }}>
              Built for results, not demos
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px" }}>Three things that make the difference on day one.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {benefits.map((b, i) => (
              <div key={b.headline}
                className={`hover-lift anim-card-${i + 1}`}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${b.color}20`,
                  borderRadius: "18px",
                  padding: "32px",
                }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px",
                  background: `${b.color}15`, border: `1px solid ${b.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px", marginBottom: "20px",
                }}>{b.icon}</div>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "10px", letterSpacing: "-0.02em" }}>
                  {b.headline}
                </h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agents ── */}
      <section id="agents" style={{ background: "linear-gradient(180deg, #000 0%, #050010 100%)", padding: "90px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="anim-badge" style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#6929C4", display: "inline-block", marginBottom: "14px",
            }}>Two agents. One platform.</span>
            <h2 className="anim-h1" style={{
              fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.025em",
            }}>Pick your use case. Deploy in days.</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {agents.map((ag, i) => (
              <div key={ag.name}
                className={`${ag.glow} ai-scan`}
                style={{
                  position: "relative",
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${ag.color}25`,
                  borderRadius: "22px",
                  padding: "44px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "48px",
                  alignItems: "center",
                  overflow: "hidden",
                }}>
                {/* Background tint */}
                <div style={{
                  position: "absolute",
                  top: i === 0 ? "-60px" : "auto",
                  bottom: i === 1 ? "-60px" : "auto",
                  right: "-60px",
                  width: "300px", height: "300px", borderRadius: "50%",
                  background: `radial-gradient(circle, ${ag.color}10 0%, transparent 65%)`,
                  pointerEvents: "none",
                }} />

                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{
                      padding: "4px 12px", borderRadius: "999px",
                      background: `${ag.color}15`, border: `1px solid ${ag.color}30`,
                      fontSize: "11px", fontWeight: 700, color: ag.color,
                      letterSpacing: "0.06em", textTransform: "uppercase",
                    }}>{ag.badge}</span>
                  </div>
                  <h3 style={{
                    fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900,
                    color: "#fff", lineHeight: 1, marginBottom: "8px", letterSpacing: "-0.04em",
                  }}>{ag.name}</h3>
                  <p style={{ fontSize: "20px", fontWeight: 600, color: ag.color, marginBottom: "16px", lineHeight: 1.3 }}>
                    {ag.tagline}
                  </p>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: "28px" }}>
                    {ag.body}
                  </p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                    {ag.outcomes.map((o, j) => (
                      <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{
                          width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0,
                          background: `${ag.color}20`, border: `1px solid ${ag.color}40`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "9px", marginTop: "1px", color: ag.color,
                        }}>✓</span>
                        <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{o}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                    <span style={{ color: ag.color }}>Sectors: </span>{ag.badge2}
                  </div>
                </div>

                {/* Right: Chat Demo (Aria only) or stats visual */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {ag.name === "Aria" ? (
                    <ChatDemo />
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px", width: "100%", maxWidth: "380px" }}>
                      {[
                        { q: "Explain Newton's 3rd law", t: "Physics · Grade 10", c: "#6929C4" },
                        { q: "मेरी परीक्षा कल है, क्या मुझे…", t: "Hindi Medium · Just now", c: "#6929C4" },
                        { q: "Photosynthesis diagram please", t: "Biology · 2 min ago", c: "#6929C4" },
                        { q: "Chemical bonds — ELI5", t: "Chemistry · 5 min ago", c: "#1E90FF" },
                      ].map((card, j) => (
                        <div key={j}
                          className={`hover-lift anim-card-${j + 1}`}
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.07)",
                            borderRadius: "12px", padding: "14px 18px",
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                          }}>
                          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>{card.q}</span>
                          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textAlign: "right", flexShrink: 0, marginLeft: "12px" }}>{card.t}</span>
                        </div>
                      ))}
                      <div style={{
                        padding: "10px 18px", borderRadius: "10px",
                        background: "rgba(105,41,196,0.08)", border: "1px solid rgba(105,41,196,0.15)",
                        fontSize: "12px", color: "rgba(255,255,255,0.35)", textAlign: "center",
                      }}>
                        Bubly handled <span style={{ color: "#6929C4", fontWeight: 700 }}>847 questions</span> today
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ background: "#000510", padding: "90px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 className="anim-h1" style={{
              fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.025em", marginBottom: "10px",
            }}>From contract to live in 5 days</h2>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "15px" }}>We do the heavy lifting. You show up on launch day.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px", background: "rgba(255,255,255,0.04)", borderRadius: "18px", overflow: "hidden" }}>
            {steps.map((s, i) => (
              <div key={s.n}
                className={`anim-card-${i + 1}`}
                style={{
                  padding: "40px 32px",
                  background: "#000510",
                  position: "relative",
                }}>
                <div style={{
                  fontSize: "56px", fontWeight: 900, lineHeight: 1,
                  color: "rgba(255,255,255,0.04)",
                  marginBottom: "20px",
                  letterSpacing: "-0.04em",
                }}>{s.n}</div>
                <h3 style={{ fontSize: "19px", fontWeight: 800, color: "#fff", marginBottom: "10px", letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section style={{ background: "#000", padding: "90px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="anim-h1" style={{
              fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.025em", marginBottom: "10px",
            }}>Works in any industry</h2>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "15px" }}>Real questions your customers are already asking.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {industries.map((ind, i) => (
              <div key={ind.name}
                className={`hover-lift anim-card-${(i % 6) + 1}`}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${ind.color}18`,
                  borderRadius: "16px", padding: "24px 26px",
                }}>
                <div style={{
                  fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: ind.color, marginBottom: "10px",
                }}>{ind.name}</div>
                <p style={{
                  fontSize: "14px", color: "rgba(255,255,255,0.5)",
                  fontStyle: "italic", lineHeight: 1.6,
                }}>{ind.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(59,15,140,0.45) 0%, #000 55%)",
        padding: "100px 24px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            marginBottom: "24px",
            padding: "6px 16px", borderRadius: "999px",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00D084", display: "inline-block", boxShadow: "0 0 5px #00D084" }} />
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>Available for deployment now</span>
          </div>

          <h2 className="anim-h1" style={{
            fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900,
            color: "#fff", letterSpacing: "-0.035em", marginBottom: "18px", lineHeight: 1.1,
          }}>
            Ready to see it in your business?
          </h2>
          <p className="anim-subtext" style={{ color: "rgba(255,255,255,0.45)", fontSize: "17px", marginBottom: "36px", lineHeight: 1.65 }}>
            We&apos;ll demo Aria or Bubly live with your products, your questions, your language. Takes 30 minutes. No commitment.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              background: "linear-gradient(135deg, #3B0F8C, #6929C4)",
              color: "#fff", padding: "16px 36px", borderRadius: "12px",
              fontWeight: 700, fontSize: "16px", textDecoration: "none",
              boxShadow: "0 12px 40px rgba(59,15,140,0.5)",
            }}>Book a Free Demo</a>
            <a href="https://wa.me/917400040673?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Emoqa%20AI%20Agents" style={{
              background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)",
              color: "#25D366", padding: "16px 36px", borderRadius: "12px",
              fontWeight: 600, fontSize: "16px", textDecoration: "none",
            }}>WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
