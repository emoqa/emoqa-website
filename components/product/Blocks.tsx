import type { ReactNode } from "react";
import { STATUS_LABEL, type Block, type Product } from "@/content/products";
import { Head, Render } from "@/components/site/ui";
import AttendanceFlow from "./AttendanceFlow";
import SignageNetwork from "./SignageNetwork";

const kioskUses = ["Student guidance", "Course information", "College admissions", "Internship guidance", "Educational assistance", "Campus information", "Visitor information", "Skill training", "Digital learning", "Interactive demonstrations"];

function Visual({ id, p }: { id: string; p: Product }): ReactNode {
  switch (id) {
    case "attendance-flow":
      return <AttendanceFlow />;
    case "signage-network":
      return <SignageNetwork />;
    case "tutor-kiosk":
      return (
        <div className="vis-split">
          <Render {...p.image} sizes="(max-width: 900px) 80vw, 460px" />
          <ul className="ticks ticks-lg">{kioskUses.map((u) => <li key={u}>{u}</li>)}</ul>
        </div>
      );
    default:
      return <Render {...p.image} sizes="(max-width: 900px) 100vw, 900px" className="vis-wide" />;
  }
}

const Items = ({ items, className = "ticks" }: { items: string[]; className?: string }) => (
  <ul className={className}>{items.map((i) => <li key={i}>{i}</li>)}</ul>
);

export default function ProductBlock({ block: b, p }: { block: Block; p: Product }) {
  const note = "note" in b && b.note ? <p className="note">{b.note}</p> : null;

  switch (b.type) {
    case "steps":
      return (
        <section className="sec">
          <div className="wrap">
            <Head title={b.heading}>{b.intro}</Head>
            <ol className="flow">
              {b.steps.map((s, i) => (
                <li key={s.title}><span aria-hidden>{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></li>
              ))}
            </ol>
            {note}
          </div>
        </section>
      );
    case "columns":
      return (
        <section className="sec">
          <div className="wrap">
            <Head title={b.heading}>{b.intro}</Head>
            <div className="cols" data-n={b.groups.length}>
              {b.groups.map((g) => (
                <div key={g.title}>
                  <h3>{g.title}</h3>
                  {g.text && <p>{g.text}</p>}
                  <Items items={g.items} />
                </div>
              ))}
            </div>
            {note}
          </div>
        </section>
      );
    case "catalog":
      return (
        <section className="sec sec-mist">
          <div className="wrap">
            <Head title={b.heading}>{b.intro}</Head>
            <div className="cat">
              {b.groups.map((g, i) => (
                <details key={g.title} open={i === 0}>
                  <summary>
                    <h3>{g.title}</h3>
                    {g.status && <span className="status" data-s={g.status}>{STATUS_LABEL[g.status]}</span>}
                    <i aria-hidden />
                  </summary>
                  <div className="cat-in">
                    {g.text && <p>{g.text}</p>}
                    <Items items={g.items} />
                  </div>
                </details>
              ))}
            </div>
            {note}
          </div>
        </section>
      );
    case "list":
      return (
        <section className={b.dark ? "sec sec-ink on-dark" : "sec sec-mist"}>
          <div className="wrap split">
            <Head title={b.heading}>{b.intro}</Head>
            <div>
              <Items items={b.items} className="lines" />
              {note}
            </div>
          </div>
        </section>
      );
    case "statements":
      return (
        <section className="sec sec-purple on-dark">
          <div className="wrap">
            <h2 className="small-h">{b.heading}</h2>
            <ul className="strikes">{b.items.map((i) => <li key={i}>{i}</li>)}</ul>
            {note}
          </div>
        </section>
      );
    case "decisions":
      return (
        <section className="sec">
          <div className="wrap split">
            <Head title={b.heading}>{b.intro}</Head>
            <div>
              <ul className="dec">{b.items.map((i) => <li key={i}>{i}</li>)}</ul>
              {note}
            </div>
          </div>
        </section>
      );
    case "specs":
      return (
        <section className="sec sec-mist">
          <div className="wrap split">
            <Head title={b.heading}>{b.intro}</Head>
            <div>
              <dl className="specs">{b.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
              {note}
            </div>
          </div>
        </section>
      );
    case "audience":
      return (
        <section className="sec">
          <div className="wrap">
            <Head title={b.heading} />
            <div className="aud">
              {b.groups.map((g) => <div key={g.title}><h3>{g.title}</h3><p>{g.items.join(", ")}</p></div>)}
            </div>
          </div>
        </section>
      );
    case "visual":
      return (
        <section className="sec">
          <div className="wrap">
            <Head title={b.heading}>{b.intro}</Head>
            <Visual id={b.id} p={p} />
          </div>
        </section>
      );
  }
}
