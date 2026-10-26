import CTA from "@/components/sections/CTA";

const features = [
  { num: "01", title: "Offline-First Playback", desc: "Screens never go blank. The Android kiosk caches content locally and plays it even without any internet connection — sync resumes automatically on reconnect." },
  { num: "02", title: "WebSocket Real-Time Sync", desc: "Changes pushed from the vendor portal are reflected on all connected screens within seconds via persistent WebSocket connections (wss://cms.emoqa.in)." },
  { num: "03", title: "OTA Updates Over the Air", desc: "New APK versions are built by CI, uploaded to the VPS, and broadcast via WebSocket to all devices. No physical access needed for updates." },
  { num: "04", title: "Multi-Tenant Portals", desc: "Vendor portal (cms.emoqa.in) for content managers. Admin panel (cmsadmin.emoqa.in) for super-admins. Each tenant sees only their own screens and data." },
  { num: "05", title: "Device Remote Commands", desc: "Send reboot, screenshot, mode-switch, and sync commands to any device from the portal. Live WebSocket stream for real-time device monitoring." },
  { num: "06", title: "Device Log Submission", desc: "Operators can tap 'Send to Portal' on the device Help screen to upload full logcat logs. Portal shows them in a terminal-style viewer for instant debugging." },
];

const stack = [
  { label: "Android Kiosk", tech: "Kotlin · Jetpack Compose · Room · Hilt · WorkManager", accent: "#4B00A0" },
  { label: "Backend", tech: "Node.js 22 ESM · Fastify 4 · PM2 · PostgreSQL", accent: "#4B00A0" },
  { label: "Vendor Portal", tech: "React · Vite · Tailwind CSS · Deployed at cms.emoqa.in", accent: "#4B00A0" },
  { label: "Admin Panel", tech: "React · Deployed at cmsadmin.emoqa.in", accent: "#4B00A0" },
];

export default function CMSPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div className="anim-badge" style={{
            display: "inline-flex", alignItems: "center",
            padding: "6px 18px", borderRadius: "999px",
            background: "rgba(75,0,160,0.07)", color: "#4B00A0",
            border: "1px solid rgba(75,0,160,0.15)",
            fontSize: "13px", fontWeight: 600, marginBottom: "32px",
          }}>
            Digital Signage Platform · v2.3.4 Build 29
          </div>
          <h1 className="anim-h1" style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1D1D1F", marginBottom: "28px" }}>
            <span className="gradient-text">Emoqa Sync</span>
            <br />One dashboard. Thousands of screens.
          </h1>
          <p className="anim-subtext" style={{ fontSize: "20px", color: "#6E6E73", lineHeight: 1.7 }}>
            Fully self-hosted offline-capable digital signage. The Android kiosk plays content without internet.
            The Node.js backend handles sync, OTA updates, and multi-tenant management — all on your own VPS.
          </p>
        </div>
      </section>

      {/* Tech stack strip */}
      <section style={{ background: "#F5F5F7", padding: "48px 24px", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="r-4col" style={{ maxWidth: "1100px", margin: "0 auto", gap: "1px", background: "rgba(0,0,0,0.07)" }}>
          {stack.map((s) => (
            <div key={s.label} style={{ padding: "28px 24px", background: "#F5F5F7" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: s.accent, marginBottom: "8px" }}>{s.label}</p>
              <p style={{ fontSize: "14px", color: "#6E6E73", lineHeight: 1.6 }}>{s.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", textAlign: "center", color: "#1D1D1F", marginBottom: "64px" }}>
            Everything to manage screens at scale.
          </h2>
          <div className="r-3col" style={{ gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`hover-lift anim-card-${Math.min(i + 1, 6)}`}
                style={{ padding: "48px 36px", background: "#fff" }}
              >
                <p style={{ fontSize: "12px", fontWeight: 700, color: "rgba(75,0,160,0.35)", marginBottom: "20px" }}>{f.num}</p>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1D1D1F", marginBottom: "12px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture callout */}
      <section style={{ padding: "100px 24px", background: "#0D0D0D" }}>
        <div className="r-2col-center" style={{ maxWidth: "1100px", margin: "0 auto", gap: "64px" }}>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "20px" }}>Architecture</p>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.1, marginBottom: "24px" }}>
              Fully self-hosted.<br />Zero cloud dependency.
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              One VPS runs everything — the backend, both portals, all APK downloads, and all media files.
              GoDaddy DNS routes cms.emoqa.in and cmsadmin.emoqa.in to nginx on the same box. Your data never leaves your infrastructure.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              ["Android Kiosk", "com.emoqa.offline · Package ID per device"],
              ["WebSocket", "wss://cms.emoqa.in/api/device/ws"],
              ["REST API", "cms.emoqa.in/api/* → Node.js Fastify 4"],
              ["Media Files", "cms.emoqa.in/media/* → /var/www/emoqa-media/"],
              ["APK Downloads", "cms.emoqa.in/apk/*.apk → /var/www/emoqa-apk/"],
            ].map(([label, val]) => (
              <div key={label} style={{
                padding: "16px 20px", borderRadius: "12px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4B00A0", marginBottom: "4px" }}>{label}</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section style={{ padding: "100px 24px", background: "#F5F5F7" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#1D1D1F", marginBottom: "24px" }}>
            Proven at scale.
          </h2>
          <p style={{ fontSize: "18px", color: "#6E6E73", lineHeight: 1.7 }}>
            Emoqa Sync is deployed across retail chains, hospitals, corporate campuses, and government institutions.
            From 1 screen to thousands — the architecture doesn&apos;t break a sweat.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
