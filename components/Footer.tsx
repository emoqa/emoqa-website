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
    { label: "Portfolio", href: "/about#portfolio" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "rgba(0,0,0,0.08)", background: "#F5F5F7" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="Emoqa" width={32} height={32} className="object-contain" />
              <span className="text-lg font-bold" style={{ color: "#3B0F8C" }}>emoqa</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "#6E6E73" }}>
              Where emotion meets excellence. Full-stack business solution company building hardware + software + AI products that change industries.
            </p>
            <p className="text-sm font-medium" style={{ color: "#1D1D1F" }}>
              📧{" "}
              <a href="mailto:hello@emoqa.in" className="hover:underline" style={{ color: "#3B0F8C" }}>
                hello@emoqa.in
              </a>
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#1D1D1F" }}>
                {group}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm hover:text-[#3B0F8C] transition-colors"
                      style={{ color: "#6E6E73" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)", color: "#6E6E73" }}
        >
          <p>© {new Date().getFullYear()} Emoqa Technologies. All rights reserved.</p>
          <p className="italic">where emotion meets excellence.</p>
        </div>
      </div>
    </footer>
  );
}
