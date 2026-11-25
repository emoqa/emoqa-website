import type { Metadata } from "next";
import Link from "next/link";
import { DISCIPLINE_COLOR, Mark } from "@/components/site/Logo";
import { ClosingCta, Head, PageHead, Render } from "@/components/site/ui";
import { disciplines } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta(
  "About EMOQA: Product Engineering & Technology Development",
  "EMOQA is a product engineering company building custom software, AI systems, intelligent hardware and complete integrated solutions from Pune, India.",
  "/about/",
);

const values = [
  { title: "Customer first", text: "Every decision serves the person who will use the product. We optimise for outcomes, not features." },
  { title: "Full ownership", text: "We treat your project like our own product, with no hand-offs and no half-measures." },
  { title: "Speed with craft", text: "We move fast without cutting corners. Quality is not a phase." },
  { title: "Domain depth", text: "We learn your domain, speak your language and design for your users." },
];

export default function AboutPage() {
  return (
    <>
      <PageHead title="Engineering the future, from idea to implementation.">
        <p>EMOQA is a product engineering and technology development company. We build custom software, AI systems, intelligent hardware and complete integrated solutions for businesses, institutions, enterprises and government organizations.</p>
      </PageHead>

      <section className="sec">
        <div className="wrap split">
          <Head title="We don’t just develop software" />
          <div className="prose">
            <p>We understand a problem, architect the solution, develop the software, integrate hardware, build the product, test it and deploy it.</p>
            <p>Our work ranges from software-only projects to complete physical products containing hardware, AI, software, peripherals, sensors and custom workflows.</p>
          </div>
        </div>
      </section>

      <section className="sec sec-mist">
        <div className="wrap about-mark">
          <Mark size={320} />
          <div>
            <h2>Four parts, one mark</h2>
            <p className="lead">On this site, each part of our logo stands for one of the disciplines we bring together.</p>
            <ul>
              {disciplines.map((d) => (
                <li key={d.id} style={{ "--c": DISCIPLINE_COLOR[d.id] } as React.CSSProperties}><Link href={d.href}>{d.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head title="What we stand for" />
          <dl className="caps">{values.map((v) => <div key={v.title}><dt>{v.title}</dt><dd>{v.text}</dd></div>)}</dl>
        </div>
      </section>

      <section className="sec sec-mist">
        <div className="wrap">
          <Head title="From screens you touch to systems you never see">Kiosks, phones, displays and offline systems, along with the software and AI behind them.</Head>
          <Render src="/renders/signage" width={1800} height={1200} alt="Displays running EMOQA Signage CMS" sizes="(max-width: 900px) 100vw, 1000px" className="vis-wide" />
          <div className="actions"><Link href="/projects" className="btn">See Project Experience</Link></div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
