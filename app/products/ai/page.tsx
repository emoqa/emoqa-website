import GradientMesh from "@/components/ai/GradientMesh";
import NeuralCanvas from "@/components/ai/NeuralCanvas";
import AgentScreen from "@/components/ai/AgentScreen";

const ARIA_MSGS = [
  { from: "user" as const, text: "Bhai ₹50,000 mein best laptop kaun sa hai?" },
  { from: "ai"   as const, text: "Gaming ke liye ya office ke liye? Dono ke liye alag options hain!" },
  { from: "user" as const, text: "Office work, thoda YouTube bhi" },
  { from: "ai"   as const, text: "Dell Inspiron 15 ya ASUS VivoBook 16 — dono ₹46-50k range mein hain. Kaun sa dikhao?" },
];

const BUBLY_MSGS = [
  { from: "user" as const, text: "Newton's 2nd law explain karo, exam kal hai" },
  { from: "ai"   as const, text: "F = ma — Force = Mass × Acceleration. Example: 5 kg ball ko 20 N force se push karo → acceleration = 4 m/s²" },
  { from: "user" as const, text: "Real life example do please" },
  { from: "ai"   as const, text: "Car ki braking! Heavier car ko rokne ke liye zyada force chahiye. Same F = ma, different scale." },
];

const deployContexts = [
  { icon: "🏪", title: "Retail Kiosk", desc: "Touchscreen in your store. Customers ask questions in their language. Staff focuses on closing — not answering the same question 40 times." },
  { icon: "🏫", title: "Coaching Centre", desc: "Students get answers at any hour. No faculty disturbance. The agent tracks what students struggle with and sends you a daily summary." },
  { icon: "🏢", title: "Property Expo Desk", desc: "Visitors ask about flats, pricing, amenities. Aria collects name and number before they walk away. Sales team calls them the next morning." },
  { icon: "🌐", title: "Website Chat", desc: "Same agent, same voice, embedded in your website. Visitors who arrive at 2am still get a real conversation — and leave their contact details." },
  { icon: "🏥", title: "Hospital Reception", desc: "Patients ask about departments, timings, documents needed. Front desk staff handles actual crises — not directions to the pharmacy." },
];

export default function AIPage() {
  return (
    <>
      {/* ════ HERO ════ */}
      <section style={{
        position: "relative",
        minHeight: "100svh",
        background: "#000008",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "100px 24px 60px",
      }}>
        {/* Layered animated bg: mesh blobs + neural network */}
        <div style={{ position: "absolute", inset: 0 }}>
          <GradientMesh style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
          <NeuralCanvas style={{ width: "100%", height: "100%" }} />
        </div>
        {/* Dark vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, transparent 30%, rgba(0,0,8,0.7) 100%)",
          pointerEvents: "none",
        }} />

        <div className="r-ai-hero r-2col-center" style={{
          position: "relative", zIndex: 1,
          maxWidth: "1200px", width: "100%", margin: "0 auto",
          gap: "60px",
        }}>
          {/* Left — headline */}
          <div>
            <div className="anim-badge" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: "999px",
              background: "rgba(59,15,140,0.3)", border: "1px solid rgba(105,41,196,0.4)",
              marginBottom: "28px",
            }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%", display: "inline-block",
                background: "#00D084", boxShadow: "0 0 6px #00D084",
                animation: "pulse-ring 2s ease-out infinite",
              }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                Emoqa AI Agent Suite — Live
              </span>
            </div>

            <h1 className="anim-h1" style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 900, lineHeight: 1.08,
              letterSpacing: "-0.04em", color: "#fff",
              marginBottom: "22px",
            }}>
              A face for your business.
              <br />
              <span className="shimmer-text">On every kiosk.</span>
              <br />
              Around the clock.
            </h1>

            <p className="anim-subtext" style={{
              fontSize: "17px", color: "rgba(255,255,255,0.48)",
              lineHeight: 1.8, marginBottom: "36px", maxWidth: "460px",
            }}>
              Deploy a bilingual AI agent on your store kiosk, school reception, or website.
              It speaks, listens, answers — and sends you qualified leads while you sleep.
            </p>

            <div className="anim-card-1" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "44px" }}>
              <a href="/contact" style={{
                background: "linear-gradient(135deg, #3B0F8C, #6929C4)",
                color: "#fff", padding: "14px 30px", borderRadius: "10px",
                fontWeight: 700, fontSize: "15px", textDecoration: "none",
                boxShadow: "0 8px 28px rgba(59,15,140,0.55)",
              }}>Book a Live Demo</a>
              <a href="#aria" style={{
                background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)", padding: "14px 30px", borderRadius: "10px",
                fontWeight: 600, fontSize: "15px", textDecoration: "none",
              }}>See Use Cases</a>
            </div>

            {/* Trust strip */}
            <div className="anim-card-2" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {[
                { v: "1.2s",  l: "response" },
                { v: "24/7",  l: "no downtime" },
                { v: "5 days", l: "to deploy" },
                { v: "0 cloud", l: "on-premise" },
              ].map(p => (
                <div key={p.v} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "20px", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em" }}>{p.v}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{p.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — two overlapping kiosk screens */}
          <div className="r-ai-screens anim-card-3" style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "480px",
          }}>
            {/* Aria screen — back left */}
            <div style={{
              position: "absolute",
              left: 0, top: "40px",
              zIndex: 1,
              animation: "float-y 5s ease-in-out infinite",
            }}>
              <AgentScreen
                agentName="Aria"
                agentLabel="Sales Agent · Store Kiosk"
                agentColor="#1E90FF"
                messages={ARIA_MSGS}
                notification="Lead captured — Rahul Sharma • Interested in laptops ₹50k"
                tilt="left"
              />
            </div>
            {/* Bubly screen — front right */}
            <div style={{
              position: "absolute",
              right: 0, top: 0,
              zIndex: 2,
              animation: "float-y 5s ease-in-out 2.5s infinite",
            }}>
              <AgentScreen
                agentName="Bubly"
                agentLabel="Education Agent · Student Kiosk"
                agentColor="#6929C4"
                messages={BUBLY_MSGS}
                notification="📊 12 students asked about Newton's laws today"
                tilt="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════ ARIA USE CASE ════ */}
      <section id="aria" style={{
        background: "linear-gradient(180deg, #000008 0%, #00050f 100%)",
        padding: "100px 24px",
        borderTop: "1px solid rgba(30,144,255,0.08)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Scene setter */}
          <div style={{
            padding: "20px 28px", borderRadius: "12px",
            background: "rgba(30,144,255,0.06)", border: "1px solid rgba(30,144,255,0.14)",
            marginBottom: "52px", display: "inline-block",
          }}>
            <span style={{ fontSize: "13px", color: "rgba(30,144,255,0.9)", fontStyle: "italic" }}>
              Saturday. 6:47 PM. Your electronics store has 22 visitors. Your team has 3 people.
            </span>
          </div>

          <div className="r-ai-agent r-2col-center" style={{ gap: "64px" }}>
            {/* Left — story */}
            <div>
              <span className="anim-badge" style={{
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#1E90FF",
                display: "inline-block", marginBottom: "16px",
              }}>Aria — Sales Agent</span>

              <h2 className="anim-h1" style={{
                fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900,
                color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1,
                marginBottom: "20px",
              }}>
                Every walk-in. Every question. Every lead — captured.
              </h2>

              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "32px" }}>
                Aria stands at your kiosk. She speaks Hindi, English, Marathi — whatever the customer uses first.
                She knows your entire catalogue. She handles objections. She asks for the customer&apos;s number so
                your team can follow up. All without a single salesperson being free.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                {[
                  { title: "Never misses a visitor", body: "Even when every staff member is occupied, Aria handles 8 conversations at once." },
                  { title: "Asks for the number", body: "\"Aapka number do, hum aapko best deal personally call karenge.\" And customers give it." },
                  { title: "Works in any language", body: "Customer switches from Hindi to English mid-sentence — Aria doesn't skip a beat." },
                  { title: "You wake up to leads", body: "Overnight chat logs, contact details, and what each person was interested in — in your inbox." },
                ].map((pt, i) => (
                  <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{
                      width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                      background: "rgba(30,144,255,0.15)", border: "1px solid rgba(30,144,255,0.35)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "10px", color: "#1E90FF", marginTop: "2px",
                    }}>✓</div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.85)", marginBottom: "2px" }}>{pt.title}</div>
                      <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{pt.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                padding: "16px 20px", borderRadius: "12px",
                background: "rgba(30,144,255,0.07)", border: "1px solid rgba(30,144,255,0.16)",
                fontSize: "13px", color: "rgba(255,255,255,0.55)",
              }}>
                Currently live at <span style={{ color: "#1E90FF", fontWeight: 600 }}>aBet Technology, Pune</span> — handling real customers on the showroom floor.
              </div>
            </div>

            {/* Right — kiosk screen */}
            <div className="float-2" style={{ display: "flex", justifyContent: "flex-end" }}>
              <AgentScreen
                agentName="Aria"
                agentLabel="Sales Agent · Electronics Store"
                agentColor="#1E90FF"
                messages={[
                  { from: "user", text: "Bhai ₹50,000 mein best laptop kaun sa hai?" },
                  { from: "ai",   text: "Gaming ke liye ya office ke liye? Dono ke liye alag options hain!" },
                  { from: "user", text: "Office work, thoda YouTube bhi" },
                  { from: "ai",   text: "Dell Inspiron 15 perfect hai — ₹47,500 mein. Abhi stock mein bhi hai. Aapka number dein, store manager aapko best deal ke saath call karenge." },
                ]}
                notification="Lead captured — Rahul Sharma • 9823***789 • Dell Inspiron interest"
                tilt="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════ BUBLY USE CASE ════ */}
      <section id="bubly" style={{
        background: "linear-gradient(180deg, #00050f 0%, #060014 100%)",
        padding: "100px 24px",
        borderTop: "1px solid rgba(105,41,196,0.08)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Scene setter */}
          <div style={{
            padding: "20px 28px", borderRadius: "12px",
            background: "rgba(105,41,196,0.07)", border: "1px solid rgba(105,41,196,0.18)",
            marginBottom: "52px", display: "inline-block",
          }}>
            <span style={{ fontSize: "13px", color: "rgba(165,100,255,0.9)", fontStyle: "italic" }}>
              11:23 PM. Exam at 9 AM. A student walks up to the kiosk at your coaching centre.
            </span>
          </div>

          <div className="r-ai-agent r-2col-center" style={{ gap: "64px" }}>
            {/* Left — kiosk screen */}
            <div className="float-1" style={{ display: "flex", justifyContent: "flex-start" }}>
              <AgentScreen
                agentName="Bubly"
                agentLabel="Education Agent · Coaching Centre"
                agentColor="#6929C4"
                messages={[
                  { from: "user", text: "Mujhe Newton's 2nd law samajh nahi aaya, exam kal hai" },
                  { from: "ai",   text: "Tension mat lo! F = ma — Force × Acceleration. 5 kg ki ball ko 20 N se push karo — acceleration hoga 4 m/s²." },
                  { from: "user", text: "Diagram bhi dikhao please" },
                  { from: "ai",   text: "Diagram screen pe aa raha hai — arrow force direction show karta hai, box mass represent karta hai. Koi aur question hai?" },
                ]}
                notification="📊 Faculty Alert: 8 students asked about Newton's laws — revision suggested"
                tilt="left"
              />
            </div>

            {/* Right — story */}
            <div>
              <span className="anim-badge" style={{
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#6929C4",
                display: "inline-block", marginBottom: "16px",
              }}>Bubly — Education Agent</span>

              <h2 className="anim-h1" style={{
                fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900,
                color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1,
                marginBottom: "20px",
              }}>
                Every student. Every question. Any hour of the night.
              </h2>

              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "32px" }}>
                Bubly sits at the kiosk in your coaching centre lobby. At midnight, a student stressed
                about tomorrow&apos;s exam gets a patient, personalized explanation — in their language,
                at their level. No teacher is disturbed. No question is too basic. Your faculty gets a
                daily summary of exactly what students struggled with.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                {[
                  { title: "Available when students need it most", body: "Night before exams, weekends, holidays — Bubly doesn't take days off." },
                  { title: "Explains in any language", body: "Hindi, Marathi, English — or a mix of all three. Students learn in the language they think in." },
                  { title: "Adapts to the student's level", body: "Class 8 student and Class 12 student ask the same question — they get different explanations." },
                  { title: "Tells you what to teach next", body: "\"15 students struggled with derivatives this week.\" Your faculty knows where to focus." },
                ].map((pt, i) => (
                  <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{
                      width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                      background: "rgba(105,41,196,0.15)", border: "1px solid rgba(105,41,196,0.35)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "10px", color: "#6929C4", marginTop: "2px",
                    }}>✓</div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.85)", marginBottom: "2px" }}>{pt.title}</div>
                      <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{pt.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                padding: "16px 20px", borderRadius: "12px",
                background: "rgba(105,41,196,0.07)", border: "1px solid rgba(105,41,196,0.18)",
                fontSize: "13px", color: "rgba(255,255,255,0.55)",
              }}>
                <span style={{ color: "#8B5CF6", fontWeight: 600 }}>Deployable in any school, coaching centre, or college</span> — on a kiosk, tablet, or your institution&apos;s website.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ WHERE IT LIVES ════ */}
      <section style={{
        background: "#000008",
        padding: "90px 24px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <h2 className="anim-h1" style={{
              fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.03em", marginBottom: "10px",
            }}>Works on any surface, in any space</h2>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "15px" }}>
              Physical kiosk or digital product — same agent, same quality.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {deployContexts.map((d, i) => (
              <div key={d.title}
                className={`hover-lift anim-card-${(i % 6) + 1}`}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "18px", padding: "28px",
                }}>
                <div style={{ fontSize: "28px", marginBottom: "14px" }}>{d.icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>{d.title}</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", lineHeight: 1.7 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ STATS ════ */}
      <section style={{
        background: "linear-gradient(180deg, #000008 0%, #04000e 100%)",
        padding: "80px 24px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="r-4col" style={{
            gap: "1px", background: "rgba(255,255,255,0.05)",
            borderRadius: "18px", overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
            {[
              { v: "1.2s",    l: "Time to first spoken reply",     c: "#1E90FF" },
              { v: "5 days",  l: "From contract to live kiosk",    c: "#6929C4" },
              { v: "24/7",    l: "Coverage with zero staff cost",  c: "#1E90FF" },
              { v: "100%",    l: "On-premise — your data, always", c: "#6929C4" },
            ].map((s, i) => (
              <div key={i} className={`anim-card-${i+1}`} style={{
                padding: "36px 24px", textAlign: "center",
                background: "rgba(0,0,8,0.85)",
              }}>
                <div style={{
                  fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900,
                  color: s.c, letterSpacing: "-0.04em", marginBottom: "8px",
                  lineHeight: 1,
                }}>{s.v}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", lineHeight: 1.5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(59,15,140,0.5) 0%, #000008 55%)",
        padding: "100px 24px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 16px", borderRadius: "999px",
            background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.2)",
            marginBottom: "24px",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00D084", display: "inline-block", boxShadow: "0 0 6px #00D084" }} />
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>Available for deployment — Pune & remote</span>
          </div>

          <h2 className="anim-h1" style={{
            fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900,
            color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "16px",
          }}>
            See it in your store.<br />
            <span className="shimmer-text">Before you decide anything.</span>
          </h2>
          <p className="anim-subtext" style={{
            color: "rgba(255,255,255,0.4)", fontSize: "17px",
            marginBottom: "36px", lineHeight: 1.7,
          }}>
            We&apos;ll demo Aria or Bubly live — with your products, your questions, your language.
            30 minutes. No commitment.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              background: "linear-gradient(135deg, #3B0F8C, #6929C4)",
              color: "#fff", padding: "16px 36px", borderRadius: "12px",
              fontWeight: 700, fontSize: "16px", textDecoration: "none",
              boxShadow: "0 12px 40px rgba(59,15,140,0.55)",
            }}>Book a Free Demo</a>
            <a
              href="https://wa.me/917400040673?text=Hi%2C%20I%27d%20like%20to%20see%20a%20live%20demo%20of%20the%20Emoqa%20AI%20Agent"
              style={{
                background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)",
                color: "#25D366", padding: "16px 36px", borderRadius: "12px",
                fontWeight: 600, fontSize: "16px", textDecoration: "none",
              }}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
