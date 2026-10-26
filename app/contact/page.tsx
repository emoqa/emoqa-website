export default function ContactPage() {
  return (
    <section style={{ paddingTop: "140px", paddingBottom: "120px", paddingLeft: "24px", paddingRight: "24px", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="r-2col" style={{ gap: "64px", alignItems: "start" }}>

          {/* Left */}
          <div>
            <p className="anim-badge" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B00A0", marginBottom: "20px" }}>
              Get in Touch
            </p>
            <h1 className="anim-h1" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1D1D1F", marginBottom: "24px" }}>
              Let&apos;s Build<br />
              <span className="gradient-text">Something Great.</span>
            </h1>
            <p className="anim-subtext" style={{ fontSize: "18px", color: "#6E6E73", lineHeight: 1.7, marginBottom: "48px" }}>
              Have a product idea? A problem that needs solving? Drop us a message — we reply within 24 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {[
                { label: "Email", value: "sales@emoqa.in", href: "mailto:sales@emoqa.in" },
                { label: "Phone / WhatsApp", value: "+91 7400040673", href: "https://wa.me/917400040673?text=Hi%20Emoqa!" },
                { label: "Address", value: "Gokul Nagar, Katraj, Pune, Maharashtra, India", href: null },
                { label: "Response Time", value: "Within 24 hours", href: null },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.28)", marginBottom: "6px" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: "17px", fontWeight: 500, color: "#4B00A0", textDecoration: "none" }}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: "17px", fontWeight: 500, color: "#1D1D1F" }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="anim-card-2">
            <form
              action="mailto:sales@emoqa.in"
              method="POST"
              encType="text/plain"
              style={{
                display: "flex", flexDirection: "column", gap: "20px",
                padding: "40px", borderRadius: "24px",
                background: "#F5F5F7", border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="r-form-names" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[
                  { name: "first_name", label: "First Name", placeholder: "Ronit" },
                  { name: "last_name", label: "Last Name", placeholder: "Nandeshwar" },
                ].map((f) => (
                  <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#1D1D1F" }}>{f.label}</label>
                    <input
                      type="text"
                      name={f.name}
                      placeholder={f.placeholder}
                      required
                      style={{
                        padding: "12px 16px", borderRadius: "12px",
                        fontSize: "15px", background: "#fff",
                        border: "1px solid rgba(0,0,0,0.1)", outline: "none",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#1D1D1F" }}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  style={{ padding: "12px 16px", borderRadius: "12px", fontSize: "15px", background: "#fff", border: "1px solid rgba(0,0,0,0.1)", outline: "none" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#1D1D1F" }}>What are you building?</label>
                <select
                  name="type"
                  style={{ padding: "12px 16px", borderRadius: "12px", fontSize: "15px", background: "#fff", border: "1px solid rgba(0,0,0,0.1)", outline: "none", color: "#6E6E73", appearance: "none" }}
                >
                  <option value="">Select a category</option>
                  <option value="hardware">Hardware Product</option>
                  <option value="software">Software / App</option>
                  <option value="ai">AI / ML Solution</option>
                  <option value="iot">IoT System</option>
                  <option value="cms">Digital Signage / CMS</option>
                  <option value="healthcare">Healthcare Tech</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#1D1D1F" }}>Tell us more</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Describe your idea, problem, or project..."
                  required
                  style={{ padding: "12px 16px", borderRadius: "12px", fontSize: "15px", background: "#fff", border: "1px solid rgba(0,0,0,0.1)", outline: "none", resize: "none" }}
                />
              </div>

              <button
                type="submit"
                style={{ padding: "15px 32px", borderRadius: "999px", background: "#4B00A0", color: "#fff", fontSize: "15px", fontWeight: 700, border: "none", cursor: "pointer" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
