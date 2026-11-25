import Link from "next/link";
import Logo from "@/components/site/Logo";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { contact } from "@/content/site";

const columns = [
  { title: "Products", links: products.map((p) => ({ label: p.short, href: `/products/${p.slug}` })) },
  { title: "Solutions", links: [...services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })), { label: "Custom Solutions", href: "/custom-solutions" }] },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blogs" },
      { label: "Contact", href: "/contact" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

const social = [
  { label: "Instagram", href: "https://www.instagram.com/emoqasocial/", d: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.500 4.500 0 0 1 0-9zm0 2a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5zM17.500 5.500a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/145303198/", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
  { label: "X", href: "https://x.com/emoqapvtltd", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

export default function Footer() {
  return (
    <footer className="ftr on-dark">
      <div className="wrap">
        <div className="ftr-grid">
          <div className="ftr-brand">
            <Link href="/" aria-label="EMOQA home"><Logo mono="#fff" /></Link>
            <p className="ftr-tag">where emotion meets excellence.</p>
            <address>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <span>{contact.company}<br />{contact.address.map((l) => <span key={l}>{l}<br /></span>)}</span>
            </address>
            <ul className="ftr-social">
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" aria-hidden><path d={s.d} /></svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2>{c.title}</h2>
              <ul>{c.links.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
            </nav>
          ))}
        </div>
        <p className="ftr-end">© {new Date().getFullYear()} {contact.company} All rights reserved.</p>
      </div>
    </footer>
  );
}
