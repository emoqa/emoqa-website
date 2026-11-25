import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Devanagari, Jost, Outfit } from "next/font/google";
import "./globals.css";
import "./site.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SiteChrome from "@/components/SiteChrome";
import { JsonLd } from "@/components/site/ui";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { contact, SITE_URL } from "@/content/site";
import { pageMeta } from "@/lib/meta";

// Jost is the same geometric family as the tagline in the logo.
const display = Jost({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"] });
// Outfit has the same round letters as the logo. Variable, so the slogan can gain weight as it reads.
const hero = Outfit({ variable: "--font-hero", subsets: ["latin"] });
const text = IBM_Plex_Sans({ variable: "--font-text", subsets: ["latin"], weight: ["400", "500", "600"] });
const devanagari = IBM_Plex_Sans_Devanagari({ variable: "--font-deva", subsets: ["devanagari"], weight: ["400", "500"], preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMeta(
    "EMOQA | Product Engineering: Software, AI & Hardware",
    "EMOQA designs, develops, integrates and deploys software, AI systems, custom hardware and complete technology solutions, from concept to deployment.",
    "/",
  ),
  // Pages set their own canonical. Anything that doesn't must not inherit the home page's.
  alternates: undefined,
};

export const viewport: Viewport = { themeColor: "#4a008a" };

const productMenu = products.map((p) => ({ label: p.short, note: p.menu, href: `/products/${p.slug}` }));
const serviceMenu = services.map((s) => ({ label: s.name, note: s.menu, href: `/services/${s.slug}` }));

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${hero.variable} ${text.variable} ${devanagari.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <SiteChrome header={<Navbar products={productMenu} services={serviceMenu} />} footer={<><Footer /><WhatsAppButton /></>}>
          {children}
        </SiteChrome>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [{ "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "EMOQA", alternateName: ["Emoqa", "emoqa.in"], url: `${SITE_URL}/`, publisher: { "@id": `${SITE_URL}/#organization` } }, {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "EMOQA",
            legalName: contact.company,
            url: SITE_URL,
            logo: `${SITE_URL}/logo-full.png`,
            slogan: "Where emotion meets excellence.",
            email: contact.email,
            telephone: contact.phone,
            address: { "@type": "PostalAddress", streetAddress: contact.address.slice(0, 2).join(", "), addressLocality: "Pune", addressRegion: "Maharashtra", postalCode: "411046", addressCountry: "IN" },
            sameAs: ["https://www.instagram.com/emoqasocial/", "https://www.linkedin.com/company/145303198/", "https://x.com/emoqapvtltd"],
            }],
          }}
        />
      </body>
    </html>
  );
}
