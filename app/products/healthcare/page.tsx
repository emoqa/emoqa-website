import CTA from "@/components/sections/CTA";

const features = [
  { num: "01", title: "43 Medical Tests", desc: "Blood pressure, SpO₂, temperature, hemoglobin, blood glucose, cholesterol, uric acid, ECG, body composition (12 params), RDT rapid tests + 15 software-based risk assessments." },
  { num: "02", title: "4 Deployment Modes", desc: "CAMP (quick screening), HOSPITAL (full clinical workflow), E_CLINIC (tests + remote doctor consultation via Amazon Chime), SCHOOL (bulk student import + age-locked tests)." },
  { num: "03", title: "60-Second PDF Reports", desc: "iTextPDF report generated locally on the kiosk. Synced to AWS S3 and delivered to the patient's WhatsApp as a presigned link within the same session." },
  { num: "04", title: "Live Telemedicine", desc: "Patients connect with a doctor via Amazon Chime WebView right on the kiosk screen — no separate device needed. Doctor issues prescription; it prints on the spot." },
  { num: "05", title: "AI Health Intelligence", desc: "Claude Haiku (AWS Bedrock) generates personalised health summaries, 7-day Indian diet plans, and exercise recommendations in English, Hindi, and Marathi." },
  { num: "06", title: "Patient Mobile App", desc: "Emoqa Health Kiosk Cares (Flutter) gives patients access to all past reports, AI chat, diet and exercise plans, nearby pod locations, and family health records." },
];

const modes = [
  { name: "CAMP", color: "#0097A7", desc: "Quick health screening at camps and community events. Fast registration, test, PDF, WhatsApp delivery." },
  { name: "HOSPITAL", color: "#1B5E20", desc: "Full clinical workflow with patient history, operator login, detailed reporting, and sync to hospital records." },
  { name: "E_CLINIC", color: "#4A148C", desc: "Tests followed by live Amazon Chime teleconsultation with a doctor. Prescription generated and printed on-site." },
  { name: "SCHOOL", color: "#E65100", desc: "Bulk student roster import, age-locked tests, SDQ mental health screening, school PDF with referral priority table." },
];

export default function HealthcarePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div className="anim-badge" style={{
            display: "inline-flex", alignItems: "center",
            padding: "6px 18px", borderRadius: "999px",
            background: "rgba(0,166,81,0.07)", color: "#00A651",
            border: "1px solid rgba(0,166,81,0.2)",
            fontSize: "13px", fontWeight: 600, marginBottom: "32px",
          }}>
            Health ATM · 43 Tests · 4 Modes · CE Marked Hardware
          </div>
          <h1 className="anim-h1" style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1D1D1F", marginBottom: "28px" }}>
            <span style={{ background: "linear-gradient(135deg, #00A651, #1E90FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Emoqa Health Kiosk
            </span>
            <br />Walk in. Walk out with a diagnosis.

          </h1>
          <p className="anim-subtext" style={{ fontSize: "20px", color: "#6E6E73", lineHeight: 1.7 }}>
            Self-contained Health ATM that runs 43 medical tests, generates instant PDF reports, and delivers them via WhatsApp.
            No appointment. No lab. No waiting room. Under 5 minutes.
          </p>
        </div>
      </section>

      {/* 4 Modes */}
      <section style={{ background: "#F5F5F7", padding: "80px 24px", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1D1D1F", marginBottom: "32px", textAlign: "center" }}>
            4 Deployment Modes
          </p>
          <div className="r-4col" style={{ gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {modes.map((m) => (
              <div key={m.name} style={{ padding: "32px 24px", background: "#F5F5F7" }}>
                <p style={{ fontSize: "14px", fontWeight: 800, color: m.color, marginBottom: "12px", letterSpacing: "0.04em" }}>{m.name}</p>
                <p style={{ fontSize: "14px", color: "#6E6E73", lineHeight: 1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", textAlign: "center", color: "#1D1D1F", marginBottom: "64px" }}>
            Healthcare reimagined.
          </h2>
          <div className="r-3col" style={{ gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`hover-lift anim-card-${Math.min(i + 1, 6)}`}
                style={{ padding: "48px 36px", background: "#fff" }}
              >
                <p style={{ fontSize: "12px", fontWeight: 700, color: "rgba(0,166,81,0.4)", marginBottom: "20px" }}>{f.num}</p>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1D1D1F", marginBottom: "12px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section style={{ padding: "100px 24px", background: "#0D0D0D" }}>
        <div className="r-2col-center" style={{ maxWidth: "1100px", margin: "0 auto", gap: "64px" }}>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "20px" }}>Technology</p>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.1, marginBottom: "24px" }}>
              Hardware meets cloud meets AI.
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              HealthCubed Ezdx v1.10.1 hardware handles BLE diagnostics. Kotlin/Compose runs the kiosk.
              AWS Lambda + PostgreSQL handles backend. Claude Haiku on Bedrock powers AI reports. Flutter delivers to patient phones.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              ["Kiosk App", "Kotlin · Jetpack Compose · Room DB · iTextPDF 5.5"],
              ["Hardware", "HealthCubed Ezdx SDK v1.10.1 · 4 AAR modules"],
              ["Telemedicine", "Amazon Chime SDK via secure WebView"],
              ["Backend", "AWS Lambda (14 functions) · API Gateway v2 · PostgreSQL 15"],
              ["AI", "Claude 3 Haiku via AWS Bedrock (ap-south-1)"],
              ["Patient App", "Flutter 3 · Dart · go_router · AWS S3 presigned URLs"],
              ["WhatsApp", "HomeinTown API · PDF delivered via presigned S3 link"],
            ].map(([label, val]) => (
              <div key={label} style={{
                padding: "14px 18px", borderRadius: "10px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                display: "flex", gap: "16px", alignItems: "baseline",
              }}>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#00A651", minWidth: "100px", flexShrink: 0 }}>{label}</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale */}
      <section style={{ padding: "100px 24px", background: "#F5F5F7" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#1D1D1F", marginBottom: "24px" }}>
            Designed for every setting.
          </h2>
          <p style={{ fontSize: "18px", color: "#6E6E73", lineHeight: 1.7 }}>
            Rural PHCs, urban hospitals, corporate campuses, pharmacies, airports, and schools —
            Emoqa Health Kiosk adapts to any environment. Ruggedised for dusty field clinics, elegant enough for five-star hospital lobbies.
            Currently deployed in Pune and Nagpur.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
