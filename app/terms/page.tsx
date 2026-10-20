import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Emoqa",
  description: "Terms and conditions for using Emoqa Technologies products and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using any product, service, or website provided by Emoqa Technologies ("Emoqa", "we", "our", or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, clients, partners, and users who access or use services provided by Emoqa Technologies, including but not limited to EmoqaCMS, Emoqa Health Kiosk, AI Agent Suite, and any custom software or hardware development services.`,
  },
  {
    title: "2. Services",
    body: `Emoqa Technologies provides technology services including software development, hardware product design, IoT solutions, artificial intelligence systems, digital signage platforms, healthcare diagnostic kiosks, and related consulting services.

All services are provided subject to a separate written agreement, Statement of Work (SOW), or proposal between Emoqa and the client. These Terms & Conditions supplement and do not replace any such agreement.`,
  },
  {
    title: "3. Intellectual Property",
    body: `All software, designs, processes, documentation, and proprietary technology developed by Emoqa Technologies — including EmoqaCMS, Emoqa Health Kiosk, and AI Agent Suite — remain the intellectual property of Emoqa Technologies unless explicitly transferred to the client under a written agreement.

Work commissioned by clients (custom development projects) shall be governed by the intellectual property terms specified in the individual project contract. In the absence of explicit IP transfer clauses, all code, designs, and systems created by Emoqa remain the property of Emoqa Technologies.`,
  },
  {
    title: "4. Confidentiality",
    body: `Both parties agree to keep confidential any proprietary or sensitive information shared in the course of a project or business relationship. This includes — but is not limited to — source code, business processes, technical architecture, client data, credentials, pricing, and project specifications.

Confidentiality obligations survive the termination of any agreement for a period of three (3) years unless otherwise specified in writing.`,
  },
  {
    title: "5. Data and Privacy",
    body: `Emoqa Technologies collects only the information necessary to provide its services. We do not sell or share your personal data with third parties for marketing purposes.

For products that handle patient or user data (such as Emoqa Health Kiosk), data is processed in accordance with applicable Indian data protection laws and any healthcare-specific regulations. Data stored on client infrastructure remains under the client's control and responsibility.

For analytics, diagnostic, and AI-powered features, anonymised or pseudonymised data may be used to improve product quality. Any use of identifiable data requires explicit consent.`,
  },
  {
    title: "6. Limitation of Liability",
    body: `Emoqa Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of, or inability to use, our products or services.

Our total liability for any claim arising from a project or service shall not exceed the total fees paid by the client to Emoqa for the specific project giving rise to the claim, calculated over the twelve (12) months preceding the claim.

Emoqa does not warrant that software or hardware products will be error-free or uninterrupted. We commit to prompt resolution of reported defects under the terms of the applicable support agreement.`,
  },
  {
    title: "7. Payment Terms",
    body: `Payment terms are specified in individual project proposals or contracts. In general:

- A deposit (typically 30–50% of project value) is required before project commencement.
- Milestone payments are due within 14 days of milestone acceptance.
- Final payment is due upon project delivery and acceptance.

Late payments may attract interest at 1.5% per month. Emoqa reserves the right to pause or discontinue service delivery in case of non-payment.`,
  },
  {
    title: "8. Warranties and Support",
    body: `Emoqa warrants that all custom software delivered will perform materially in accordance with the agreed specifications for a period of 90 days from delivery (the "Warranty Period"). Defects reported during this period will be resolved at no additional charge.

Post-warranty support, Annual Maintenance Contracts (AMC), and Service Level Agreements (SLAs) are available and governed by separate support agreements. Hardware warranties are subject to the terms of the respective hardware manufacturer.`,
  },
  {
    title: "9. Third-Party Services",
    body: `Some Emoqa products integrate with third-party services including but not limited to AWS (Amazon Web Services), Google APIs, WhatsApp Business API, Anthropic Claude, and payment gateways. The use of these services is subject to the respective third-party terms and privacy policies.

Emoqa is not responsible for the availability, performance, or data handling practices of third-party services. Clients are responsible for maintaining their own accounts and compliance with third-party terms.`,
  },
  {
    title: "10. Termination",
    body: `Either party may terminate a project agreement with 30 days written notice. Upon termination, Emoqa will deliver all completed work and associated assets. The client is responsible for payment of all work completed up to the termination date.

Emoqa reserves the right to terminate any agreement immediately if the client violates these terms, fails to make payment, or engages in conduct that is unlawful, harmful, or unethical.`,
  },
  {
    title: "11. Governing Law",
    body: `These Terms & Conditions and any dispute arising from them shall be governed by the laws of India, specifically the jurisdiction of Pune, Maharashtra.

Any disputes that cannot be resolved through direct negotiation shall be referred to arbitration under the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Pune, Maharashtra, India.`,
  },
  {
    title: "12. Amendments",
    body: `Emoqa Technologies reserves the right to update these Terms & Conditions at any time. Updated terms will be posted on this page with a revised effective date. Continued use of our services after any change constitutes acceptance of the new terms.

For significant changes, we will notify active clients via email at the address on record.`,
  },
];

export default function TermsPage() {
  return (
    <section style={{ paddingTop: "140px", paddingBottom: "120px", paddingLeft: "24px", paddingRight: "24px", background: "#fff" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {/* Header */}
        <div className="anim-hero-2" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3B0F8C", marginBottom: "20px" }}>
            Legal
          </p>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1D1D1F", marginBottom: "20px" }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ fontSize: "16px", color: "#6E6E73", lineHeight: 1.7 }}>
            Effective date: October 20, 2026. These terms govern your use of Emoqa Technologies products and services.
            Registered office: Gokul Nagar, Katraj, Pune, Maharashtra, India.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
          {sections.map((s) => (
            <div key={s.title} style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "40px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1D1D1F", marginBottom: "20px", letterSpacing: "-0.02em" }}>
                {s.title}
              </h2>
              {s.body.split("\n\n").map((para, i) => (
                <p key={i} style={{ fontSize: "16px", color: "#6E6E73", lineHeight: 1.8, marginBottom: "16px" }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{ marginTop: "72px", padding: "32px", borderRadius: "16px", background: "#F5F5F7", border: "1px solid rgba(0,0,0,0.06)" }}>
          <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.7 }}>
            For questions about these terms, please contact us at{" "}
            <a href="mailto:sales@emoqa.in" style={{ color: "#3B0F8C", fontWeight: 600, textDecoration: "none" }}>
              sales@emoqa.in
            </a>{" "}
            or call{" "}
            <a href="tel:+917400040673" style={{ color: "#3B0F8C", fontWeight: 600, textDecoration: "none" }}>
              +91 7400040673
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
