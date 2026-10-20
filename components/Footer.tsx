import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "EmoqaCMS", href: "/products/cms" },
    { label: "HealthQa Kiosk", href: "/products/healthcare" },
    { label: "AI Agent Suite", href: "/products/ai" },
  ],
  Services: [
    { label: "Mobile Apps", href: "/services" },
    { label: "Web Development", href: "/services" },
    { label: "IoT & Hardware", href: "/services" },
    { label: "AI Solutions", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#F5F5F7", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "64px" }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "20px" }}>
              <Image src="/logo.png" alt="Emoqa" width={28} height={28} style={{ objectFit: "contain" }} />
              <span style={{ fontSize: "17px", fontWeight: 700, color: "#3B0F8C", letterSpacing: "-0.02em" }}>emoqa</span>
            </Link>
            <p style={{ fontSize: "14px", color: "#6E6E73", lineHeight: 1.7, maxWidth: "240px", marginBottom: "24px" }}>
              Where emotion meets excellence. Full-stack technology company building hardware, software, and AI products across industries.
            </p>
            <a
              href="mailto:hello@emoqa.in"
              style={{ fontSize: "14px", fontWeight: 600, color: "#3B0F8C", textDecoration: "none" }}
            >
              hello@emoqa.in
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1D1D1F", marginBottom: "20px" }}>
                {group}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      style={{ fontSize: "14px", color: "#6E6E73", textDecoration: "none" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "28px",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "13px",
          color: "#6E6E73",
        }}>
          <p>© {new Date().getFullYear()} Emoqa Technologies. All rights reserved.</p>
          <p style={{ fontStyle: "italic" }}>where emotion meets excellence.</p>
        </div>
      </div>
    </footer>
  );
}
