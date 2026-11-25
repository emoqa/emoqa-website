"use client";

import { useState } from "react";

const sets = {
  apparel: {
    label: "Apparel", base: "form-base", prefix: "form", w: 1100, h: 1400,
    items: [{ id: "kurta", label: "Kurta" }, { id: "dress", label: "Dress" }, { id: "jacket", label: "Jacket" }, { id: "shirt", label: "Shirt" }],
  },
  jewellery: {
    label: "Jewellery", base: "bust-base", prefix: "bust", w: 1500, h: 1200,
    items: [{ id: "necklace", label: "Necklace set" }, { id: "pendant", label: "Pendant set" }, { id: "chain", label: "Chain set" }],
  },
} as const;

type SetId = keyof typeof sets;

function Layer({ name, w, h, className, style }: { name: string; w: number; h: number; className?: string; style?: React.CSSProperties }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- pre-optimised layer
    <img
      src={`/renders/${name}.webp`}
      srcSet={`/renders/${name}-sm.webp ${w / 2}w, /renders/${name}.webp ${w}w`}
      sizes="(max-width: 900px) 92vw, 560px"
      width={w} height={h} alt="" className={className} style={style}
    />
  );
}

/** Drag to compare the bare form with the selected product applied. */
export default function TryOnDemo() {
  const [set, setSet] = useState<SetId>("apparel");
  const [pick, setPick] = useState<Record<SetId, string>>({ apparel: "kurta", jewellery: "necklace" });
  const [pos, setPos] = useState(38);
  const s = sets[set];
  const item = s.items.find((i) => i.id === pick[set]) ?? s.items[0];

  return (
    <div className="to">
      <div role="group" aria-label="Category" className="to-tabs">
        {(Object.keys(sets) as SetId[]).map((k) => <button key={k} type="button" className="chip" aria-pressed={k === set} onClick={() => setSet(k)}>{sets[k].label}</button>)}
      </div>
      <div className="to-view" data-set={set}>
        <Layer name={s.base} w={s.w} h={s.h} />
        <Layer key={item.id} name={`${s.prefix}-${item.id}`} w={s.w} h={s.h} className="to-over" style={{ clipPath: `inset(0 0 0 ${pos}%)` }} />
        <div className="to-line" style={{ left: `${pos}%` }} aria-hidden><i /></div>
        <span className="to-tag" data-side="l" aria-hidden>Before</span>
        <span className="to-tag" data-side="r" aria-hidden>{item.label}</span>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label={`Compare before and with ${item.label}`} />
      </div>
      <div role="group" aria-label="Product" className="to-items">
        {s.items.map((i) => (
          <button key={i.id} type="button" aria-pressed={i.id === item.id} onClick={() => setPick((p) => ({ ...p, [set]: i.id }))}>
            <span className="to-thumb" data-set={set}><Layer name={`${s.prefix}-${i.id}`} w={s.w} h={s.h} /></span>
            {i.label}
          </button>
        ))}
      </div>
      <p className="fine">Rendered illustration of the experience. Previews do not represent exact fit.</p>
    </div>
  );
}
