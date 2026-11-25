import type { Metadata } from "next";
import Link from "next/link";
import BlogsCarousel from "@/components/sections/BlogsCarousel";
import BuildInfographic from "@/components/site/BuildInfographic";
import ExplodedDevice from "@/components/site/ExplodedDevice";
import HeroTitle from "@/components/site/HeroTitle";
import { DISCIPLINE_COLOR, Mark } from "@/components/site/Logo";
import ProductShelf from "@/components/site/ProductShelf";
import { ClosingCta, Head, ProcessRail } from "@/components/site/ui";
import WhatWeBuild from "@/components/site/WhatWeBuild";
import { products } from "@/content/products";
import { industries, projects, technology } from "@/content/site";
import { pageMeta } from "@/lib/meta";
import { listPublished } from "@/lib/server/posts";

// Blog posts come from the database, so scheduled ones appear on time.
export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta(
  "EMOQA | Product Engineering: Software, AI & Hardware",
  "EMOQA designs, develops, integrates and deploys software, AI systems, custom hardware and complete technology solutions, from concept to deployment.",
  "/",
);

const built = products.map((p) => ({ slug: p.slug, name: p.short, brief: p.menu, parts: p.parts, image: p.image }));

const featured = ["Medical screening kiosk", "Smart attendance system", "Offline AI learning kiosk", "Hardware-integrated systems"];

export default async function Home() {
  const blogs = (await listPublished()).slice(0, 9);
  return (
    <>
      <section className="hero" data-track>
        <div className="hero-pin">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <HeroTitle text="From Concept to Complete Technology." />
              <p className="lead">We design, develop, integrate, and deploy intelligent software, AI-powered systems, custom hardware, and complete technology solutions built around real-world requirements.</p>
              <div className="actions">
                <Link href="/products" className="btn">Explore Our Products</Link>
                <Link href="/contact" className="btn btn-line">Build Your Solution With Us</Link>
              </div>
            </div>
            <ExplodedDevice />
          </div>
        </div>
      </section>

      <section className="sec bi-sec" aria-label="What we build, in brief">
        <div className="wrap">
          <Head title="What we build, in brief">Four disciplines go in. Complete products come out.</Head>
          <BuildInfographic products={built} />
        </div>
      </section>

      <section className="sec sec-mist">
        <div className="wrap">
          <Head title="What we build, in detail">We don’t just develop software. We understand a problem, architect the solution, build it in code and hardware, test it and deploy it.</Head>
          <WhatWeBuild />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head title="Products you can put to work">Platforms we have engineered, each one configurable. Use one as a starting point, or have us adapt it to your operation.</Head>
          <ProductShelf />
        </div>
      </section>

      <section className="sec sec-ink on-dark">
        <div className="wrap">
          <Head title="One engineering partner. Software, AI, hardware, integration, and deployment.">No hand-offs between vendors. The same team follows the work from the first conversation to the installed system.</Head>
          <ProcessRail />
          <Link href="/custom-solutions" className="btn btn-ghost">Have a problem that doesn’t fit a product?</Link>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head title="Technology capabilities" />
          <div className="tech">
            {technology.map((t) => (
              <div key={t.title} style={{ "--c": DISCIPLINE_COLOR[t.discipline] } as React.CSSProperties}>
                <h3><Mark size={34} active={[t.discipline]} />{t.title}</h3>
                <ul>{t.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-mist">
        <div className="wrap split">
          <div>
            <Head title="Project experience">Deployments for institutions, enterprises and specialized environments, described without naming clients.</Head>
            <Link href="/projects" className="link">See all project experience</Link>
          </div>
          <ul className="pj-mini">
            {projects.filter((p) => featured.includes(p.title)).map((p) => (
              <li key={p.title}>
                <Link href={p.href}>
                  <Mark size={44} active={p.disciplines} />
                  <span><strong>{p.title}</strong>{p.challenge}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head title="Industries we serve" />
          <ul className="ind-cloud">
            {industries.map((i) => <li key={i.id}><Link href={`/industries#${i.id}`}>{i.name}</Link></li>)}
          </ul>
        </div>
      </section>

      <BlogsCarousel blogs={blogs} />
      <ClosingCta title="Technology built around your vision." />
    </>
  );
}
