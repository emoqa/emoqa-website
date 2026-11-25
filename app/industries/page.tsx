import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCta, PageHead } from "@/components/site/ui";
import { getProduct } from "@/content/products";
import { getService } from "@/content/services";
import { industries } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta(
  "Industries: Healthcare, Education, Defence, Retail & More | EMOQA",
  "How EMOQA applies software, AI and hardware engineering across healthcare, education, defence training, retail, enterprise, manufacturing and the public sector.",
  "/industries/",
);

export default function IndustriesPage() {
  return (
    <>
      <PageHead title="Different industries, one way of engineering.">
        <p>We learn the domain, the environment and the people first. The technology follows from that.</p>
      </PageHead>
      <section className="sec sec-tight">
        <div className="wrap ind">
          {industries.map((i) => (
            <article key={i.id} id={i.id}>
              <h2>{i.name}</h2>
              <div>
                <p>{i.text}</p>
                <ul className="tags">
                  {i.products.map(getProduct).filter((p) => !!p).map((p) => <li key={p.slug}><Link href={`/products/${p.slug}`}>{p.short}</Link></li>)}
                  {i.services.map(getService).filter((s) => !!s).map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ClosingCta title="Working in a field we haven’t listed?" text="The same process applies. Tell us about the problem and the environment." />
    </>
  );
}
