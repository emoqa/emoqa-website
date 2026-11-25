import type { ReactNode } from "react";
import Link from "next/link";
import type { Product } from "@/content/products";
import { inquire, Render } from "@/components/site/ui";
import KioskConfigurator from "./KioskConfigurator";
import TopoMap from "./TopoMap";
import TryOnDemo from "./TryOnDemo";
import TutorDemo from "./TutorDemo";

function Copy({ p, light }: { p: Product; light?: boolean }) {
  return (
    <div className="ph-copy">
      <p className="ph-name">{p.name}</p>
      <h1>{p.headline}</h1>
      <p className="lead">{p.positioning}</p>
      <div className="actions">
        <Link href={inquire(p.slug)} className={light ? "btn btn-light" : "btn"}>{p.cta.primary}</Link>
        <Link href={inquire(p.slug)} className={light ? "btn btn-ghost" : "btn btn-line"}>{p.cta.secondary}</Link>
      </div>
    </div>
  );
}

/** Each product opens with its own scene. Products without one get the standard split layout. */
export default function ProductHero({ p }: { p: Product }) {
  const scenes: Record<string, ReactNode> = {
    "healthcare-kiosk": (
      <section className="ph ph-health">
        <div className="wrap">
          <Copy p={p} />
          <KioskConfigurator cta={p.cta.primary} />
        </div>
      </section>
    ),
    "smart-student-system": (
      <section className="ph ph-student">
        <div className="wrap">
          <Copy p={p} />
          <Render {...p.image} eager sizes="(max-width: 900px) 100vw, 1000px" className="ph-img" />
        </div>
      </section>
    ),
    "digital-signage-cms": (
      <section className="ph ph-signage">
        <div className="wrap">
          <Copy p={p} />
          <Render {...p.image} eager sizes="(max-width: 900px) 100vw, 1240px" className="ph-img" />
        </div>
      </section>
    ),
    "ai-teacher": (
      <section className="ph ph-tutor on-dark">
        <div className="wrap ph-split">
          <Copy p={p} light />
          <TutorDemo />
        </div>
      </section>
    ),
    "virtual-try-on": (
      <section className="ph ph-tryon">
        <div className="wrap ph-split">
          <TryOnDemo />
          <Copy p={p} />
        </div>
      </section>
    ),
    "defence-learning-system": (
      <section className="ph ph-defence on-dark">
        <div className="wrap">
          <Copy p={p} light />
          <TopoMap />
        </div>
      </section>
    ),
  };

  return scenes[p.slug] ?? (
    <section className="ph ph-tryon">
      <div className="wrap ph-split">
        <Copy p={p} />
        <Render {...p.image} eager sizes="(max-width: 900px) 100vw, 560px" className="ph-img" />
      </div>
    </section>
  );
}
