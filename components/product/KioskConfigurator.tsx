"use client";

import { useState } from "react";
import Link from "next/link";

const W = 1300, H = 1500;

const modules = [
  { id: "vitals", label: "Vitals", text: "Height, weight, blood pressure, pulse and SpO₂ devices" },
  { id: "poct", label: "Point-of-care testing", text: "Compatible POCT analysers" },
  { id: "vision", label: "Vision", text: "Vision screening and eye examination" },
  { id: "telemedicine", label: "Telemedicine", text: "Camera, handset and video consultation" },
  { id: "custom", label: "Custom module", text: "Report printer, or a bay for your own device" },
] as const;

type Id = (typeof modules)[number]["id"];

/** Toggle modules on a rendered kiosk, then carry the choice into the inquiry form. */
export default function KioskConfigurator({ cta }: { cta: string }) {
  const [on, setOn] = useState<Id[]>(["vitals", "telemedicine"]);
  const toggle = (id: Id) => setOn((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id]));
  const chosen = modules.filter((m) => on.includes(m.id));

  return (
    <div className="kc">
      <div className="kc-view" role="img" aria-label={`Core kiosk with ${chosen.length ? chosen.map((m) => m.label).join(", ") : "no added modules"}`}>
        {["base", ...modules.map((m) => m.id)].map((id) => (
          // eslint-disable-next-line @next/next/no-img-element -- pre-optimised layer
          <img
            key={id}
            src={`/renders/kiosk-${id}.webp`}
            srcSet={`/renders/kiosk-${id}-sm.webp 650w, /renders/kiosk-${id}.webp 1300w`}
            sizes="(max-width: 900px) 92vw, 620px"
            width={W}
            height={H}
            alt=""
            fetchPriority={id === "base" ? "high" : undefined}
            data-on={id === "base" || on.includes(id as Id) ? "" : undefined}
          />
        ))}
      </div>
      <fieldset className="kc-panel">
        <legend>Build a configuration</legend>
        <div className="kc-mod kc-core">
          <span><strong>Core kiosk</strong><small>Enclosure, touchscreen and healthcare software</small></span>
          <em>Included</em>
        </div>
        {modules.map((m) => (
          <label key={m.id} className="kc-mod">
            <input type="checkbox" role="switch" checked={on.includes(m.id)} onChange={() => toggle(m.id)} />
            <span><strong>{m.label}</strong><small>{m.text}</small></span>
            <i aria-hidden />
          </label>
        ))}
        <Link href={`/contact/?interest=healthcare-kiosk${chosen.length ? `&modules=${on.join(",")}` : ""}`} className="btn">{cta}</Link>
        <p className="fine">Illustrative render. Available configurations may vary.</p>
      </fieldset>
    </div>
  );
}
