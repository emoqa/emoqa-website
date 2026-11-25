import type { Metadata } from "next";
import Link from "next/link";
import { DISCIPLINE_COLOR, Mark } from "@/components/site/Logo";
import { ClosingCta, Head, PageHead } from "@/components/site/ui";
import { services } from "@/content/services";
import { technology } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta(
  "Solutions: Software, AI & Hardware Engineering | EMOQA",
  "Custom software, AI development, hardware engineering, offline AI systems and end-to-end product development from one engineering partner.",
  "/services/",
);

export default function ServicesPage() {
  return (
    <>
      <PageHead title="Four disciplines, one engineering team.">
        <p>Bring us one piece of the work or all of it. The people who write the software sit with the people who build the device.</p>
      </PageHead>
      <section className="sec sec-tight">
        <div className="wrap svc-list">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              <Mark size={72} active={[s.discipline]} />
              <h2>{s.name}</h2>
              <p>{s.summary}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="sec sec-mist">
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
      <ClosingCta secondary={{ label: "Custom Solutions", href: "/custom-solutions" }} />
    </>
  );
}
