import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "Emoqa Sync (CMS)", href: "/products/cms" },
    { label: "Health Kiosk", href: "/products/healthcare" },
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
    { label: "Contact", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#F5F5F7", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px 48px" }}>
        <div className="r-footer-grid" style={{ marginBottom: "64px" }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "20px" }}>
              <Image src="/logo.png" alt="Emoqa" width={28} height={28} style={{ objectFit: "contain" }} />
              <span style={{ fontSize: "17px", fontWeight: 700, color: "#3B0F8C", letterSpacing: "-0.02em" }}>emoqa</span>
            </Link>
            <p style={{ fontSize: "14px", color: "#6E6E73", lineHeight: 1.7, maxWidth: "240px", marginBottom: "20px" }}>
              Where emotion meets excellence. Full-stack technology company building hardware, software, and AI products across industries.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="mailto:sales@emoqa.in" style={{ fontSize: "14px", fontWeight: 600, color: "#3B0F8C", textDecoration: "none" }}>
                sales@emoqa.in
              </a>
              <a href="tel:+917400040673" style={{ fontSize: "14px", color: "#6E6E73", textDecoration: "none" }}>
                +91 7400040673
              </a>
              <p style={{ fontSize: "13px", color: "#6E6E73", lineHeight: 1.5 }}>
                Gokul Nagar, Katraj,<br />Pune, Maharashtra, India
              </p>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/emoqasocial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/145303198/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/emoqapvtltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="footer-social"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
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
                    <Link href={l.href} style={{ fontSize: "14px", color: "#6E6E73", textDecoration: "none" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="r-footer-bottom" style={{
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
