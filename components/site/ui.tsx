import type { ReactNode } from "react";
import Link from "next/link";
import { process } from "@/content/site";
import { Mark, type Discipline } from "./Logo";

/** A pre-rendered product image with a half-size version for small screens. */
export function Render({ src, width, height, alt, sizes = "100vw", eager, className }: {
  src: string; width: number; height: number; alt: string; sizes?: string; eager?: boolean; className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- images are pre-optimised and next/image runs unoptimised here
    <img
      src={`${src}.webp`}
      srcSet={`${src}-sm.webp ${Math.round(width / 2)}w, ${src}.webp ${width}w`}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      className={className}
    />
  );
}

export function Head({ title, children, level = 2, id }: { title: string; children?: ReactNode; level?: 1 | 2; id?: string }) {
  const H = `h${level}` as const;
  return (
    <div className="head">
      <H id={id}>{title}</H>
      {children && <p className="lead">{children}</p>}
    </div>
  );
}

/** Top of a standard inner page. */
export function PageHead({ title, children, active, actions }: { title: string; children?: ReactNode; active?: Discipline[]; actions?: ReactNode }) {
  return (
    <section className="pagehead">
      <div className="wrap pagehead-grid">
        <div>
          <h1>{title}</h1>
          {children && <div className="lead">{children}</div>}
          {actions && <div className="actions">{actions}</div>}
        </div>
        <div className="pagehead-mark"><Mark size={320} active={active} /></div>
      </div>
    </section>
  );
}

export const inquire = (interest?: string) => (interest ? `/contact/?interest=${interest}` : "/contact/");

/** The seven-step engineering workflow: horizontal on wide screens, vertical on small ones. */
export function ProcessRail() {
  return (
    <ol className="rail">
      {process.map((s, i) => (
        <li key={s.title}>
          <span className="rail-node" aria-hidden>{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function ClosingCta({ title = "Tell us what you want to build.", text = "An idea, a problem, a device or a half-written specification. Any of them is a good place to start.", label = "Tell Us What You Want to Build", href = "/contact/", secondary }: {
  title?: string; text?: string; label?: string; href?: string; secondary?: { label: string; href: string };
}) {
  return (
    <section className="closing on-dark">
      <div className="wrap closing-grid">
        <div>
          <h2>{title}</h2>
          <p className="lead">{text}</p>
          <div className="actions">
            <Link href={href} className="btn btn-light">{label}</Link>
            {secondary && <Link href={secondary.href} className="btn btn-ghost">{secondary.label}</Link>}
          </div>
        </div>
        <div className="closing-mark" aria-hidden><Mark size={420} mono="currentColor" /></div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
