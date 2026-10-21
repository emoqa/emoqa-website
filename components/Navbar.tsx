"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const products = [
  {
    name: "Emoqa Sync",
    tagline: "Digital signage platform",
    href: "/products/cms",
    color: "#3B0F8C",
    dot: "#3B0F8C",
  },
  {
    name: "Emoqa Health Kiosk",
    tagline: "43-test health ATM",
    href: "/products/healthcare",
    color: "#00A651",
    dot: "#00A651",
  },
  {
    name: "AI Agent Suite",
    tagline: "Conversational AI on kiosks",
    href: "/products/ai",
    color: "#1E90FF",
    dot: "#1E90FF",
  },
];

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [mobileProds,  setMobileProds]  = useState(false);
  const [dropOpen,     setDropOpen]     = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background 0.3s, box-shadow 0.3s",
      background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : undefined,
      boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.07)" : undefined,
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "0 24px", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image src="/logo.png" alt="Emoqa" width={34} height={34} style={{ objectFit: "contain" }} />
          <span style={{ fontSize: "19px", fontWeight: 800, letterSpacing: "-0.02em", color: "#3B0F8C" }}>emoqa</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden md:flex">
          {/* Products dropdown */}
          <div
            ref={dropRef}
            style={{ position: "relative" }}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button
              onClick={() => setDropOpen(o => !o)}
              style={{
                display: "flex", alignItems: "center", gap: "4px",
                fontSize: "14px", fontWeight: 500,
                color: dropOpen ? "#3B0F8C" : "#1D1D1F",
                background: "none", border: "none", cursor: "pointer",
                padding: 0, transition: "color 0.2s",
              }}
            >
              Products
              <ChevronDown
                size={14}
                style={{
                  transition: "transform 0.2s",
                  transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {/* Dropdown panel */}
            {dropOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 14px)", left: "50%",
                transform: "translateX(-50%)",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "18px",
                padding: "10px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)",
                minWidth: "280px",
                animation: "fadeUp 0.18s ease forwards",
              }}>
                {products.map((p, i) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setDropOpen(false)}
                    style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      padding: "13px 16px", borderRadius: "12px",
                      textDecoration: "none",
                      transition: "background 0.15s",
                      background: "transparent",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.035)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
                      background: `${p.color}12`,
                      border: `1px solid ${p.color}25`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: p.dot }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#1D1D1F", lineHeight: 1.3 }}>{p.name}</div>
                      <div style={{ fontSize: "12px", color: "#6E6E73", marginTop: "2px" }}>{p.tagline}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other links */}
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: "14px", fontWeight: 500,
                color: "#1D1D1F", textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#3B0F8C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#1D1D1F")}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex" style={{ display: "flex", alignItems: "center" }}>
          <Link
            href="/contact"
            style={{
              fontSize: "13px", fontWeight: 700,
              padding: "10px 22px", borderRadius: "999px",
              background: "#3B0F8C", color: "#fff",
              textDecoration: "none", transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Get in Touch
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
          className="md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: "#1D1D1F" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: "#fff",
          borderTop: "1px solid rgba(0,0,0,0.07)",
          padding: "16px 24px 24px",
          display: "flex", flexDirection: "column", gap: "4px",
        }}>
          {/* Products accordion */}
          <button
            onClick={() => setMobileProds(o => !o)}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 0", background: "none", border: "none",
              fontSize: "15px", fontWeight: 600, color: "#1D1D1F",
              cursor: "pointer", width: "100%",
            }}
          >
            Products
            <ChevronDown
              size={16}
              style={{ transition: "transform 0.2s", transform: mobileProds ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          {mobileProds && (
            <div style={{ paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "2px", marginBottom: "8px" }}>
              {products.map(p => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => { setMobileOpen(false); setMobileProds(false); }}
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    padding: "11px 12px", borderRadius: "10px",
                    textDecoration: "none", background: "rgba(0,0,0,0.025)",
                    marginBottom: "4px",
                  }}
                >
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: p.dot, flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#1D1D1F" }}>{p.name}</div>
                    <div style={{ fontSize: "12px", color: "#6E6E73" }}>{p.tagline}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: "12px 0", fontSize: "15px", fontWeight: 600,
                color: "#1D1D1F", textDecoration: "none",
                borderTop: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: "12px", padding: "13px",
              borderRadius: "12px", background: "#3B0F8C",
              color: "#fff", textAlign: "center",
              fontSize: "14px", fontWeight: 700, textDecoration: "none",
            }}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
