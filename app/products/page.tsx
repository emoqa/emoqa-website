import type { Metadata } from "next";
import ProductShelf from "@/components/site/ProductShelf";
import { ClosingCta, PageHead } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta(
  "Products: Kiosks, AI, Signage & Attendance Systems | EMOQA",
  "Configurable products engineered by EMOQA: healthcare kiosk, smart attendance, digital signage CMS, AI teacher, virtual try-on and offline defence learning system.",
  "/products/",
);

export default function ProductsPage() {
  return (
    <>
      <PageHead title="Products, ready to be made yours.">
        <p>Six platforms we have engineered. Each can be configured, extended or combined, with hardware and software built around your operational requirements.</p>
      </PageHead>
      <section className="sec sec-tight"><div className="wrap"><ProductShelf /></div></section>
      <ClosingCta title="Have a problem that doesn’t fit an existing product?" text="We develop custom technology solutions from scratch. You don’t need to pick something from this page." secondary={{ label: "See Custom Solutions", href: "/custom-solutions" }} />
    </>
  );
}
