"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/site/Logo";
import { callApi } from "./client-api";

const links = [
  { href: "/admin", label: "Posts" },
  { href: "/admin/media", label: "Media" },
  { href: "/admin/inquiries", label: "Inquiries" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminNav({ user }: { user: string }) {
  const path = usePathname().replace(/\/$/, "");

  async function signOut() {
    await callApi("logout", "POST").catch(() => {});
    window.location.assign("/admin/login/");
  }

  return (
    <header className="adm-nav">
      <Link href="/admin" className="adm-brand" aria-label="EMOQA admin"><Logo /><span>Admin</span></Link>
      <nav aria-label="Admin">
        {links.map((l) => (
          <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined}>{l.label}</Link>
        ))}
        <a href="/blogs/" target="_blank" rel="noopener">View site</a>
      </nav>
      <div className="adm-nav-end">
        <Link href="/admin/posts/new" className="adm-btn primary">+ New post</Link>
        <button className="adm-btn" onClick={signOut} title={`Signed in as ${user}`}>Sign out</button>
      </div>
    </header>
  );
}
