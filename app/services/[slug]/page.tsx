import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DISCIPLINE_COLOR } from "@/components/site/Logo";
import { ClosingCta, Head, inquire, JsonLd, PageHead, Render } from "@/components/site/ui";
import { getProduct } from "@/content/products";
import { getService, services } from "@/content/services";
import { SITE_URL } from "@/content/site";
import { pageMeta } from "@/lib/meta";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  return s ? pageMeta(s.seo.title, s.seo.description, `/services/${s.slug}/`) : {};
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const products = s.products.map(getProduct).filter((p) => !!p);

  return (
    <div style={{ "--c": DISCIPLINE_COLOR[s.discipline] } as React.CSSProperties}>
      <PageHead
        title={s.headline}
        active={[s.discipline]}
        actions={<><Link href={inquire(s.slug)} className="btn">{s.cta}</Link><Link href="/projects" className="btn btn-line">See Project Experience</Link></>}
      >
        <p><strong>{s.name}.</strong> {s.summary}</p>
      </PageHead>

      <section className="sec">
        <div className="wrap split">
          <Head title="Our approach" />
          <div className="prose">{s.intro.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
      </section>

      <section className="sec sec-mist">
        <div className="wrap">
          <Head title="Capabilities" />
          <dl className="caps">{s.capabilities.map((c) => <div key={c.title}><dt>{c.title}</dt><dd>{c.text}</dd></div>)}</dl>
        </div>
      </section>

      <section className="sec">
        <div className="wrap cols" data-n="2">
          <div><h2 className="mid-h">What you receive</h2><ul className="lines">{s.deliver.map((i) => <li key={i}>{i}</li>)}</ul></div>
          <div><h2 className="mid-h">A good fit when</h2><ul className="lines">{s.fit.map((i) => <li key={i}>{i}</li>)}</ul></div>
        </div>
      </section>

      <section className="sec sec-mist">
        <div className="wrap">
          <Head title="Seen in our products" />
          <div className="rel">
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="rel-item">
                <span className="rel-pic"><Render {...p.image} alt="" sizes="220px" /></span>
                <span><strong>{p.name}</strong>{p.summary}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta label={s.cta} href={inquire(s.slug)} secondary={{ label: "All Solutions", href: "/services" }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.name, description: s.seo.description, url: `${SITE_URL}/services/${s.slug}/`, provider: { "@id": `${SITE_URL}/#organization` } }} />
    </div>
  );
}
