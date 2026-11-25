import type { CSSProperties } from "react";
import { DISCIPLINE_COLOR, type Discipline } from "./Logo";

// Weight of the first and last letter.
const LIGHT = 560, HEAVY = 900;

const order: Discipline[] = ["software", "ai", "hardware", "deployment"];

/**
 * The slogan, growing heavier from concept to complete. The text itself does not move.
 * The last word carries a four-part underline that joins up as the hero scrolls.
 */
export default function HeroTitle({ text }: { text: string }) {
  const words = text.split(" ");
  const total = words.join("").length;
  const weight = (i: number) => Math.round(LIGHT + (HEAVY - LIGHT) * (i / (total - 1)));
  const starts = words.map((_, w) => words.slice(0, w).join("").length);

  return (
    <h1 className="ht" aria-label={text}>
      {words.map((word, w) => (
        <span key={w} aria-hidden>
          <span className="ht-word" data-strong={w >= words.length - 2 ? "" : undefined}>
            {Array.from(word).map((ch, c) => (
              <span key={c} data-after={c > 0 ? word[c - 1] : undefined} style={{ fontWeight: weight(starts[w] + c) }}>{ch}</span>
            ))}
            {w === words.length - 1 && (
              <span className="ht-line">
                {order.map((d, k) => <i key={d} style={{ "--k": k, background: DISCIPLINE_COLOR[d] } as CSSProperties} />)}
              </span>
            )}
          </span>
          {w < words.length - 1 && " "}
        </span>
      ))}
    </h1>
  );
}
