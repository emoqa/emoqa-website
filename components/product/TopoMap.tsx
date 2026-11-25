"use client";

import { useEffect, useRef, useState } from "react";

// Grid squares across and down. Eastings start at 50, northings at 30.
const COLS = 8, ROWS = 6, E0 = 50, N0 = 30;

const hills = [[0.26, 0.36, 0.2, 1], [0.66, 0.56, 0.24, 1.15], [0.48, 0.12, 0.16, 0.6], [0.1, 0.88, 0.2, 0.6], [0.92, 0.2, 0.18, 0.75], [0.85, 0.95, 0.15, 0.5]];
const height = (u: number, v: number) => {
  let h = 0.06 * Math.sin(u * 11 + 1) + 0.05 * Math.cos(v * 9 + u * 5);
  for (const [a, b, r, k] of hills) h += k * Math.exp(-((u - a) ** 2 + ((v - b) * 0.75) ** 2) / (r * r));
  return h;
};

/** Draws contour lines with marching squares. */
function draw(cv: HTMLCanvasElement) {
  const dpr = Math.min(2, devicePixelRatio || 1), w = cv.clientWidth, h = cv.clientHeight;
  cv.width = w * dpr;
  cv.height = h * dpr;
  const x = cv.getContext("2d");
  if (!x) return;
  x.scale(dpr, dpr);
  const step = 6, nx = Math.ceil(w / step) + 1, ny = Math.ceil(h / step) + 1;
  const f = Array.from({ length: ny }, (_, j) => Array.from({ length: nx }, (_, i) => height((i * step) / w, (j * step) / h)));
  x.lineCap = "round";
  for (let k = 1; k <= 15; k++) {
    const L = k * 0.09;
    x.beginPath();
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const a = f[j][i], b = f[j][i + 1], c = f[j + 1][i + 1], d = f[j + 1][i];
      const pts: number[][] = [];
      const t = (p: number, q: number) => (L - p) / (q - p);
      if (a < L !== b < L) pts.push([i + t(a, b), j]);
      if (b < L !== c < L) pts.push([i + 1, j + t(b, c)]);
      if (c < L !== d < L) pts.push([i + 1 - t(c, d), j + 1]);
      if (d < L !== a < L) pts.push([i, j + 1 - t(d, a)]);
      for (let q = 0; q + 1 < pts.length; q += 2) {
        x.moveTo(pts[q][0] * step, pts[q][1] * step);
        x.lineTo(pts[q + 1][0] * step, pts[q + 1][1] * step);
      }
    }
    const index = k % 5 === 0;
    x.strokeStyle = index ? "rgba(255,141,2,.85)" : "rgba(255,141,2,.36)";
    x.lineWidth = index ? 1.6 : 1;
    x.stroke();
  }
}

// Marker positions in grid units, with two wrong references each.
const questions = [
  { e: 5.3, n: 2.6, wrong: ["526 353", "563 326"] },
  { e: 2.1, n: 3.8, wrong: ["538 321", "521 383"] },
  { e: 6.7, n: 4.2, wrong: ["562 347", "576 342"] },
];
const ref = (e: number, n: number) => `${E0 + Math.floor(e)}${Math.round((e % 1) * 10)} ${N0 + Math.floor(n)}${Math.round((n % 1) * 10)}`;

/** A working grid-reference exercise. Everything here runs on the page, with no network calls. */
export default function TopoMap() {
  const cv = useRef<HTMLCanvasElement>(null);
  const [q, setQ] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const cur = questions[q];
  const answer = ref(cur.e, cur.n);
  const options = [cur.wrong[0], answer, cur.wrong[1]];
  if (q % 2) options.reverse();
  if (q === 2) options.unshift(options.splice(1, 1)[0]);

  useEffect(() => {
    const el = cv.current;
    if (!el) return;
    const ro = new ResizeObserver(() => draw(el));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="tm">
      <div className="tm-map">
        <canvas ref={cv} aria-hidden />
        <svg viewBox={`0 0 ${COLS * 100} ${ROWS * 100}`} preserveAspectRatio="none" aria-hidden>
          {Array.from({ length: COLS - 1 }, (_, i) => <path key={i} d={`M${(i + 1) * 100} 0V${ROWS * 100}`} />)}
          {Array.from({ length: ROWS - 1 }, (_, i) => <path key={i} d={`M0 ${(i + 1) * 100}H${COLS * 100}`} />)}
        </svg>
        {Array.from({ length: COLS }, (_, i) => <b key={`e${i}`} className="tm-e" style={{ left: `${(i / COLS) * 100}%` }} aria-hidden>{E0 + i}</b>)}
        {Array.from({ length: ROWS }, (_, i) => <b key={`n${i}`} className="tm-n" style={{ bottom: `${(i / ROWS) * 100}%` }} aria-hidden>{N0 + i}</b>)}
        <i className="tm-pin" style={{ left: `${(cur.e / COLS) * 100}%`, bottom: `${(cur.n / ROWS) * 100}%` }} aria-hidden />
      </div>
      <div className="tm-quiz">
        <p className="tm-net"><i aria-hidden /> No network calls in this exercise</p>
        <h2>Give the six-figure grid reference of the marked point.</h2>
        <p>Read eastings along the bottom first, then northings up the side.</p>
        <div role="group" aria-label="Answers" className="tm-opts">
          {options.map((o) => (
            <button key={o} type="button" disabled={picked !== null} data-state={picked === null ? undefined : o === answer ? "right" : o === picked ? "wrong" : undefined} onClick={() => setPicked(o)}>{o}</button>
          ))}
        </div>
        <div aria-live="polite" className="tm-fb">
          {picked !== null && (
            <>
              <p>{picked === answer ? "Correct." : `Not quite. The answer is ${answer}.`} Easting {answer.slice(0, 2)} and {answer[2]} tenths, northing {answer.slice(4, 6)} and {answer[6]} tenths.</p>
              <button type="button" className="btn btn-light btn-sm" onClick={() => { setQ((q + 1) % questions.length); setPicked(null); }}>Next point</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
