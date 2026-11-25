import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductBlock from "@/components/product/Blocks";
import ProductHero from "@/components/product/Hero";
import { ClosingCta, Head, inquire, JsonLd, Render } from "@/components/site/ui";
import { getProduct, products } from "@/content/products";
import { getService } from "@/content/services";
import { industries, SITE_URL } from "@/content/site";
import { pageMeta } from "@/lib/meta";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return p ? pageMeta(p.seo.title, p.seo.description, `/products/${p.slug}/`) : {};
}

export default async function ProductPage({ params }: Props) {
  const p = getProduct((await params).slug);
  if (!p) notFound();

  const url = `${SITE_URL}/products/${p.slug}/`;
  const related = p.related.map(getProduct).filter((x) => !!x);
  const links = [
    ...industries.filter((i) => p.industries.includes(i.id)).map((i) => ({ label: i.name, href: `/industries#${i.id}` })),
    ...p.services.map(getService).filter((s) => !!s).map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  ];

  return (
    <>
      <ProductHero p={p} />

      <section className="sec">
        <div className="wrap split">
          <Head title={p.overview.heading} />
          <div className="prose">{p.overview.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
        <div className="wrap ps">
          <div>
            <h2>The problem</h2>
            <h3>{p.problem.title}</h3>
            <p>{p.problem.text}</p>
          </div>
          <div>
            <h2>Our solution</h2>
            <h3>{p.solution.title}</h3>
            <p>{p.solution.text}</p>
          </div>
        </div>
      </section>

      {p.blocks.map((b, i) => <ProductBlock key={i} block={b} p={p} />)}

      <section className="sec sec-tight">
        <div className="wrap">
          <h2 className="small-h">Industries and related engineering</h2>
          <ul className="tags">{links.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
        </div>
      </section>

      <section className="sec sec-mist">
        <div className="wrap split">
          <Head title="Questions we hear" />
          <div className="faq">
            {p.faqs.map((f) => (
              <details key={f.q}><summary>{f.q}<i aria-hidden /></summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={p.cta.closing} text={p.cta.closingText} label={p.cta.primary} href={inquire(p.slug)} secondary={{ label: "Custom Solutions", href: "/custom-solutions" }} />

      <section className="sec sec-tight">
        <div className="wrap">
          <h2 className="small-h">You may also want to see</h2>
          <div className="rel">
            {related.map((r) => (
              <Link key={r.slug} href={`/products/${r.slug}`} className="rel-item">
                <span className="rel-pic"><Render {...r.image} alt="" sizes="220px" /></span>
                <span><strong>{r.name}</strong>{r.summary}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Service", name: p.name, description: p.seo.description, url, image: `${SITE_URL}${p.image.src}.webp`, provider: { "@id": `${SITE_URL}/#organization` } },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Products", item: `${SITE_URL}/products/` },
                { "@type": "ListItem", position: 2, name: p.name, item: url },
              ],
            },
            { "@type": "FAQPage", mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
          ],
        }}
      />
    </>
  );
}
