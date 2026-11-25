"use client";

import { useState } from "react";

type Check = "pass" | "stop" | "skip";

const layers = [
  { title: "Proximity", text: "Is this phone near the session?" },
  { title: "Session", text: "Is the session live and the token valid?" },
  { title: "Live face", text: "Is the right student holding it?" },
];

const cases: { id: string; label: string; checks: [Check, Check, Check]; notes: [string, string, string]; result: string; where: [number, number] }[] = [
  {
    id: "present", label: "Student in class", checks: ["pass", "pass", "pass"], where: [232, 172],
    notes: ["A session signal is picked up from the teacher’s phone.", "The token matches and the window is open.", "The live capture matches the enrolled student."],
    result: "Marked present",
  },
  {
    id: "shared", label: "Code shared to a hostel", checks: ["stop", "skip", "skip"], where: [520, 60],
    notes: ["No session signal nearby, so the attempt goes no further.", "Not reached.", "Not reached."],
    result: "Not marked, attempt logged",
  },
  {
    id: "replay", label: "Yesterday’s token replayed", checks: ["pass", "stop", "skip"], where: [150, 214],
    notes: ["The phone is near the session.", "The token belongs to a closed session and is refused.", "Not reached."],
    result: "Not marked, attempt logged",
  },
  {
    id: "proxy", label: "Friend carries the phone", checks: ["pass", "pass", "stop"], where: [292, 226],
    notes: ["The phone is near the session.", "The session is valid.", "The live face doesn’t match the enrolled student."],
    result: "Not marked, flagged for review",
  },
];

const seats = [0, 1, 2].flatMap((r) => [0, 1, 2, 3, 4].map((c) => [92 + c * 58, 132 + r * 46]));
const word: Record<Check, string> = { pass: "Passed", stop: "Stopped here", skip: "Not reached" };

export default function AttendanceFlow() {
  const [id, setId] = useState(cases[0].id);
  const c = cases.find((x) => x.id === id) ?? cases[0];
  const ok = c.checks.every((k) => k === "pass");

  return (
    <div className="af">
      <div className="af-cases" role="group" aria-label="Situation">
        {cases.map((x) => <button key={x.id} type="button" className="chip" aria-pressed={x.id === id} onClick={() => setId(x.id)}>{x.label}</button>)}
      </div>
      <div className="af-grid">
        <svg viewBox="0 0 600 290" className="af-plan" role="img" aria-label={`Floor plan: ${c.label}`}>
          <rect x="30" y="26" width="380" height="240" rx="6" className="af-room" />
          <path d="M120 44h200" className="af-board" />
          {[60, 115, 170].map((r) => <circle key={r} cx="220" cy="78" r={r} className="af-ring" />)}
          <rect x="212" y="64" width="16" height="28" rx="4" fill="var(--purple)" />
          {seats.map(([x, y]) => <rect key={`${x}-${y}`} x={x - 14} y={y - 7} width="28" height="14" rx="4" className="af-seat" />)}
          <path d="M470 110v-70l50-24 50 24v70z" className="af-room" />
          <text x="520" y="136" textAnchor="middle">Elsewhere</text>
          <text x="220" y="284" textAnchor="middle">Classroom</text>
          <g className="af-me" style={{ transform: `translate(${c.where[0]}px, ${c.where[1]}px)` }}>
            <circle r="17" fill={ok ? "var(--green)" : "var(--orange)"} />
            <rect x="-5" y="-9" width="10" height="18" rx="2.5" fill="#fff" />
          </g>
        </svg>
        <ol className="af-steps" aria-live="polite">
          {layers.map((l, i) => (
            <li key={l.title} data-state={c.checks[i]}>
              <h3>{l.title} <em>{word[c.checks[i]]}</em></h3>
              <p className="af-q">{l.text}</p>
              <p>{c.notes[i]}</p>
            </li>
          ))}
          <li className="af-result" data-ok={ok ? "" : undefined}>{c.result}</li>
        </ol>
      </div>
      <p className="fine">Simplified illustration. Layers, thresholds and review rules are set per deployment.</p>
    </div>
  );
}
