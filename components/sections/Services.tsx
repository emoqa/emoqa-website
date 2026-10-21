import Link from "next/link";

const capabilities = [
  "Android & iOS Development",
  "Web Applications & Portals",
  "IoT & Custom Hardware",
  "Artificial Intelligence & ML",
  "Blockchain & Web3",
  "AR / VR Experiences",
  "Desktop Applications",
  "System Integration & APIs",
];

export default function Services() {
  return (
    <section style={{ background: "#0D0D0D", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="r-2col" style={{ gap: "80px" }}>
          {/* Left */}
          <div>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>
              Capabilities
            </p>
            <h2 style={{ fontSize: "clamp(38px, 5vw, 60px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.07, color: "#fff", marginBottom: "24px" }}>
              Every technology<br />under one roof.
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "340px", marginBottom: "36px" }}>
              You bring the idea. We handle every layer — circuit board to cloud, model to mobile.
            </p>
            <Link
              href="/services"
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "13px 28px", borderRadius: "999px",
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "#fff", fontSize: "14px", fontWeight: 600,
                textDecoration: "none", letterSpacing: "0.01em",
              }}
            >
              View all services
            </Link>
          </div>

          {/* Right — capability list */}
          <div>
            {capabilities.map((cap, i) => (
              <div
                key={cap}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "20px 0",
                  borderBottom: i < capabilities.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <span style={{ fontSize: "17px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
                  {cap}
                </span>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", fontWeight: 500 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
