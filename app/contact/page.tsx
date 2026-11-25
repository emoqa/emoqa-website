import type { Metadata } from "next";
import ContactForm from "@/components/site/ContactForm";
import { contact } from "@/content/site";
import { INTEREST_GROUPS, TIMELINES } from "@/lib/inquiry-options";
import { pageMeta } from "@/lib/meta";
import { storageLasts } from "@/lib/server/db";
import { sheetConnected } from "@/lib/server/google-sheet";

export const metadata: Metadata = pageMeta(
  "Contact EMOQA | Discuss a Product, AI, Hardware or Software Project",
  "Tell EMOQA what you want to build. Inquire about kiosks, AI systems, custom software, hardware engineering or a complete turnkey solution.",
  "/contact/",
);

// Whether messages can be stored is decided when the page is served.
export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <section className="contact">
      <div className="wrap contact-grid">
        <div>
          <h1>Tell us what you want to build.</h1>
          <p className="lead">An idea, a problem, a device or a specification. Share what you have and we will take it from there.</p>
          <dl className="contact-info">
            <div><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={contact.phoneHref}>{contact.phone}</a></dd></div>
            <div><dt>WhatsApp</dt><dd><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Start a chat</a></dd></div>
            <div><dt>Address</dt><dd>{contact.company}<br />{contact.address.map((l) => <span key={l}>{l}<br /></span>)}</dd></div>
          </dl>
        </div>
        <ContactForm groups={INTEREST_GROUPS} timelines={TIMELINES} email={contact.email} whatsapp={contact.whatsapp} direct={!storageLasts && !sheetConnected()} />
      </div>
    </section>
  );
}
