import CTA from "@/components/sections/CTA";

const features = [
  { num: "01", title: "Offline-First", desc: "Screens keep playing even without internet. Content syncs automatically when connection returns." },
  { num: "02", title: "Real-Time Sync", desc: "WebSocket-powered live updates. Push a new playlist — screens update in seconds, not minutes." },
  { num: "03", title: "OTA Updates", desc: "Push app updates to thousands of screens over the air. No physical access required." },
  { num: "04", title: "Analytics Dashboard", desc: "Track what's playing, when, and on which screen. Full playback analytics and reporting." },
  { num: "05", title: "Multi-Tenant", desc: "Serve multiple brands or clients from one platform. Each vendor sees only their screens." },
  { num: "06", title: "Any Screen", desc: "Works on Android TV, Fire Stick, Raspberry Pi, commercial displays. Hardware-agnostic." },
];

export default function CMSPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center",
            padding: "6px 18px", borderRadius: "999px",
            background: "rgba(59,15,140,0.07)", color: "#3B0F8C",
            border: "1px solid rgba(59,15,140,0.15)",
            fontSize: "13px", fontWeight: 600,
            marginBottom: "32px",
          }}>
            Flagship Product
          </div>
          <h1 style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1D1D1F", marginBottom: "28px" }}>
            <span className="gradient-text">EmoqaCMS</span>
            <br />Digital Signage Platform
          </h1>
          <p style={{ fontSize: "20px", color: "#6E6E73", lineHeight: 1.7 }}>
            Enterprise digital signage that works everywhere — offline or online. Manage unlimited screens,
            playlists, and schedules from a single cloud dashboard with zero on-site IT.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "0 24px 120px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", textAlign: "center", color: "#1D1D1F", marginBottom: "64px" }}>
            Everything You Need to Scale
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {features.map((f) => (
              <div
                key={f.title}
                style={{ padding: "48px 36px", background: "#fff" }}
              >
                <p style={{ fontSize: "12px", fontWeight: 700, color: "rgba(59,15,140,0.4)", marginBottom: "20px" }}>{f.num}</p>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1D1D1F", marginBottom: "12px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section style={{ padding: "100px 24px", background: "#F5F5F7" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#1D1D1F", marginBottom: "24px" }}>
            Proven at Scale
          </h2>
          <p style={{ fontSize: "18px", color: "#6E6E73", lineHeight: 1.7 }}>
            EmoqaCMS is deployed across retail chains, hospitals, corporate campuses, and government institutions.
            Tested from 1 screen to thousands — the architecture never breaks a sweat.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
