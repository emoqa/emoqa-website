import CTA from "@/components/sections/CTA";

const services = [
  {
    num: "01", color: "#3B0F8C", bg: "rgba(59,15,140,0.07)",
    name: "Android & iOS Apps",
    desc: "Native mobile applications built for performance and scale. From consumer apps with millions of users to enterprise tools with strict security requirements.",
    tags: ["Kotlin", "Swift", "React Native", "Jetpack Compose"],
  },
  {
    num: "02", color: "#1E90FF", bg: "rgba(30,144,255,0.07)",
    name: "Web Development",
    desc: "Full-stack web applications, portals, dashboards, and e-commerce platforms. Fast, SEO-optimised, and built to handle enterprise workloads.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    num: "03", color: "#F5A01A", bg: "rgba(245,160,26,0.07)",
    name: "IoT & Hardware",
    desc: "End-to-end IoT solutions — from sensor selection and PCB design to firmware development and cloud connectivity. Prototypes to mass production.",
    tags: ["Firmware", "PCB Design", "MQTT", "Edge Computing"],
  },
  {
    num: "04", color: "#3B0F8C", bg: "rgba(59,15,140,0.07)",
    name: "AI & Machine Learning",
    desc: "Custom AI models, LLM-powered agents, computer vision, NLP, and RAG pipelines. Deployed on-premise or cloud — wherever your data lives.",
    tags: ["LLM", "Computer Vision", "NLP", "RAG"],
  },
  {
    num: "05", color: "#00A651", bg: "rgba(0,166,81,0.07)",
    name: "Blockchain",
    desc: "DeFi protocols, NFT platforms, supply chain traceability, smart contracts, and tokenisation. Ethereum, Solana, Hyperledger — we work with all chains.",
    tags: ["Solidity", "Web3", "Smart Contracts", "DeFi"],
  },
  {
    num: "06", color: "#1E90FF", bg: "rgba(30,144,255,0.07)",
    name: "AR / VR",
    desc: "Immersive experiences for training, retail, real estate, and entertainment. AR product configurators, VR simulations, and mixed reality dashboards.",
    tags: ["Unity", "ARKit", "ARCore", "WebXR"],
  },
  {
    num: "07", color: "#F5A01A", bg: "rgba(245,160,26,0.07)",
    name: "Desktop Applications",
    desc: "Cross-platform Windows, macOS, and Linux applications. Kiosk software, professional tools, and offline-first enterprise applications.",
    tags: ["Electron", "Tauri", ".NET", "Qt"],
  },
  {
    num: "08", color: "#6E6E73", bg: "rgba(110,110,115,0.07)",
    name: "System Integration",
    desc: "API integrations, legacy modernisation, ERP customisation, and data pipeline engineering. We connect your systems and make them talk.",
    tags: ["REST", "GraphQL", "ETL", "Microservices"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3B0F8C", marginBottom: "20px" }}>
            Capabilities
          </p>
          <h1 style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1D1D1F", marginBottom: "28px" }}>
            Every Technology<br />
            <span className="gradient-text">Under One Roof.</span>
          </h1>
          <p style={{ fontSize: "20px", color: "#6E6E73", lineHeight: 1.7 }}>
            Your idea doesn&apos;t have to fit a category. We work across every major technology domain —
            so you never have to stitch together multiple vendors.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: "0 24px 120px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {services.map((s, i) => (
            <div
              key={s.name}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr auto",
                gap: "32px",
                alignItems: "start",
                padding: "40px 0",
                borderBottom: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(0,0,0,0.2)", paddingTop: "4px" }}>{s.num}</span>
              <div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#1D1D1F", marginBottom: "10px", letterSpacing: "-0.02em" }}>{s.name}</h3>
                <p style={{ fontSize: "16px", color: "#6E6E73", lineHeight: 1.7, maxWidth: "560px" }}>{s.desc}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "flex-end", maxWidth: "200px" }}>
                {s.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "12px", fontWeight: 600,
                      padding: "5px 12px", borderRadius: "999px",
                      background: s.bg, color: s.color,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
