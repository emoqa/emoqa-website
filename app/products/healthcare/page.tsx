import CTA from "@/components/sections/CTA";

const features = [
  { num: "01", title: "130+ Instant Tests", desc: "Blood pressure, SpO2, blood glucose, ECG, BMI, hemoglobin, cholesterol and 120+ more — all from one kiosk." },
  { num: "02", title: "60-Second Reports", desc: "Full diagnostic report — printed and digital — in under a minute. No lab wait time." },
  { num: "03", title: "Telemedicine Built-In", desc: "Connect with a doctor instantly via video call, right from the kiosk. Prescription generated on the spot." },
  { num: "04", title: "Multilingual", desc: "Supports 10+ Indian languages. No literacy barrier. Voice-guided interface for rural deployment." },
  { num: "05", title: "EHR Integration", desc: "Patient records automatically synced to hospital systems. ABDM and HL7 compatible." },
  { num: "06", title: "Clinical Grade", desc: "Medical-grade sensors, CE marked components, validated against clinical benchmarks." },
];

export default function HealthcarePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center",
            padding: "6px 18px", borderRadius: "999px",
            background: "rgba(0,166,81,0.07)", color: "#00A651",
            border: "1px solid rgba(0,166,81,0.2)",
            fontSize: "13px", fontWeight: 600,
            marginBottom: "32px",
          }}>
            Flagship Product
          </div>
          <h1 style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1D1D1F", marginBottom: "28px" }}>
            <span style={{ background: "linear-gradient(135deg, #00A651, #1E90FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              HealthQa Kiosk
            </span>
            <br />Instant Diagnostics
          </h1>
          <p style={{ fontSize: "20px", color: "#6E6E73", lineHeight: 1.7 }}>
            Walk in with symptoms. Walk out with a full diagnostic report and doctor consultation — in under 5 minutes.
            No appointment. No lab. No waiting room.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "0 24px 120px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", textAlign: "center", color: "#1D1D1F", marginBottom: "64px" }}>
            Healthcare Redefined
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {features.map((f) => (
              <div key={f.title} style={{ padding: "48px 36px", background: "#fff" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "rgba(0,166,81,0.4)", marginBottom: "20px" }}>{f.num}</p>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1D1D1F", marginBottom: "12px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environments */}
      <section style={{ padding: "100px 24px", background: "#F5F5F7" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#1D1D1F", marginBottom: "24px" }}>
            Designed for Every Setting
          </h2>
          <p style={{ fontSize: "18px", color: "#6E6E73", lineHeight: 1.7 }}>
            Rural PHCs, urban hospitals, corporate campuses, pharmacies, airports — HealthQa adapts to any environment.
            Ruggedised for dusty clinics, elegant enough for five-star hospital lobbies.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
