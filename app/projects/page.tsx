import type { Metadata } from "next";
import Link from "next/link";
import { DISCIPLINE_NAME, Mark } from "@/components/site/Logo";
import { ClosingCta, PageHead } from "@/components/site/ui";
import { projects } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta(
  "Projects & Experience: Kiosks, AI, Hardware & Software | EMOQA",
  "The breadth of EMOQA engineering: healthcare platforms, screening kiosks, smart attendance, signage, AI education, offline AI, virtual try-on and custom systems.",
  "/projects/",
);

export default function ProjectsPage() {
  return (
    <>
      <PageHead title="Projects and experience.">
        <p>A view of what we have engineered. Institutional, enterprise and defence-related work is described without client names or confidential detail.</p>
      </PageHead>
      <section className="sec sec-tight">
        <div className="wrap pj">
          {projects.map((p) => (
            <article key={p.title}>
              <Mark size={72} active={p.disciplines} />
              <div>
                <h2>{p.title}</h2>
                <p className="pj-sector">{p.sector}</p>
              </div>
              <dl>
                <div><dt>Challenge</dt><dd>{p.challenge}</dd></div>
                <div><dt>What we built</dt><dd>{p.built}</dd></div>
                <div><dt>Disciplines</dt><dd>{p.disciplines.map((d) => DISCIPLINE_NAME[d]).join(", ")}</dd></div>
              </dl>
              <Link href={p.href} className="link" aria-label={`More about ${p.title}`}>Learn more</Link>
            </article>
          ))}
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
