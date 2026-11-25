"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/site/Logo";

export type MenuItem = { label: string; note: string; href: string };

const plainLinks = [
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blogs" },
];

export default function Navbar({ products, services }: { products: MenuItem[]; services: MenuItem[] }) {
  const path = usePathname().replace(/\/$/, "") || "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus after navigating.
  const [lastPath, setLastPath] = useState(path);
  if (lastPath !== path) {
    setLastPath(path);
    setOpen(null);
    setMobile(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(null);
      setMobile(false);
    };
    const onDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", mobile);
    return () => document.documentElement.classList.remove("menu-open");
  }, [mobile]);

  const menus = [
    { id: "products", label: "Products", items: products, all: { label: "All products", href: "/products" }, root: "/products" },
    { id: "solutions", label: "Solutions", items: services, all: { label: "Have a different problem?", href: "/custom-solutions" }, root: "/services" },
  ];

  return (
    <header ref={headerRef} className="hdr" data-solid={scrolled || open || mobile ? "" : undefined}>
      <div className="wrap hdr-row">
        <Link href="/" aria-label="EMOQA home" className="hdr-logo"><Logo /></Link>

        <nav aria-label="Main" className="hdr-nav">
          <Link href="/" className="hdr-link" aria-current={path === "/" ? "page" : undefined}>Home</Link>
          {menus.map((m) => (
            <div
              key={m.id}
              className="hdr-menu"
              onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(m.id)}
              onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(null)}
            >
              <button
                type="button"
                className="hdr-link"
                aria-expanded={open === m.id}
                aria-controls={`menu-${m.id}`}
                data-active={path.startsWith(m.root) ? "" : undefined}
                onClick={(e) => setOpen((o) => (o === m.id && e.detail === 0 ? null : m.id))}
              >
                {m.label}
                <ChevronDown size={15} aria-hidden />
              </button>
              <div id={`menu-${m.id}`} className="hdr-panel" hidden={open !== m.id}>
                <ul>
                  {m.items.map((i) => (
                    <li key={i.href}>
                      <Link href={i.href} aria-current={path === i.href ? "page" : undefined}>
                        <strong>{i.label}</strong>
                        <span>{i.note}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={m.all.href} className="hdr-all">{m.all.label}</Link>
              </div>
            </div>
          ))}
          {plainLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hdr-link" aria-current={path.startsWith(l.href) ? "page" : undefined}>{l.label}</Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-sm hdr-cta">Contact</Link>

        <button type="button" className="hdr-burger" aria-label={mobile ? "Close menu" : "Open menu"} aria-expanded={mobile} aria-controls="mobile-menu" onClick={() => setMobile((v) => !v)}>
          {mobile ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div id="mobile-menu" className="mob" hidden={!mobile}>
        <nav aria-label="Mobile" className="wrap">
          <Link href="/" className="mob-link" onClick={() => setMobile(false)}>Home</Link>
          {menus.map((m) => (
            <details key={m.id} className="mob-group">
              <summary className="mob-link">{m.label}<ChevronDown size={18} aria-hidden /></summary>
              <ul>
                {m.items.map((i) => (
                  <li key={i.href}><Link href={i.href} onClick={() => setMobile(false)}><strong>{i.label}</strong><span>{i.note}</span></Link></li>
                ))}
                <li><Link href={m.all.href} onClick={() => setMobile(false)}><strong>{m.all.label}</strong></Link></li>
              </ul>
            </details>
          ))}
          {[...plainLinks, { label: "Projects", href: "/projects" }].map((l) => (
            <Link key={l.href} href={l.href} className="mob-link" onClick={() => setMobile(false)}>{l.label}</Link>
          ))}
          <Link href="/contact" className="btn" onClick={() => setMobile(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
