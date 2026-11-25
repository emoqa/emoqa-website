"use client";

import { useState } from "react";

const modes = [
  { id: "online", label: "Online", text: "Publish from the console and every connected screen updates. Status comes back where monitoring is supported." },
  { id: "offline", label: "Offline", text: "The link is down. Each player carries on with locally stored content, playlists and schedules." },
  { id: "usb", label: "USB", text: "No network needed. Copy a playlist to a drive, plug it into the player and it plays." },
] as const;

const screens = [
  { src: "sg2", label: "Hospital", w: 480, h: 270 },
  { src: "sg3", label: "Mall", w: 320, h: 569 },
  { src: "sg1", label: "Campus", w: 480, h: 270 },
  { src: "sg5", label: "Factory", w: 320, h: 569 },
  { src: "sg4", label: "Station", w: 480, h: 270 },
];

export default function SignageNetwork() {
  const [mode, setMode] = useState<(typeof modes)[number]["id"]>("online");
  const current = modes.find((m) => m.id === mode)!;

  return (
    <div className="sn" data-mode={mode}>
      <div className="sn-bar">
        <div role="group" aria-label="Delivery mode" className="sn-modes">
          {modes.map((m) => <button key={m.id} type="button" className="chip" aria-pressed={m.id === mode} onClick={() => setMode(m.id)}>{m.label}</button>)}
        </div>
        <p aria-live="polite">{current.text}</p>
      </div>
      <div className="sn-map" aria-hidden>
        <div className="sn-src">
          {mode === "usb" ? (
            <svg viewBox="0 0 120 60" width="120"><rect x="2" y="10" width="78" height="40" rx="8" fill="var(--orange)" /><rect x="80" y="18" width="34" height="24" fill="#c9cbd8" /><path d="M90 25h6v10h-6zM102 25h6v10h-6z" fill="#8f91a3" /></svg>
          ) : (
            <svg viewBox="0 0 120 84" width="120"><rect x="2" y="2" width="116" height="66" rx="6" fill="#fff" /><rect x="8" y="8" width="30" height="54" rx="3" fill="var(--ink)" /><rect x="44" y="8" width="68" height="30" rx="3" fill="var(--blue)" /><rect x="44" y="42" width="32" height="20" rx="3" fill="var(--orange)" /><rect x="80" y="42" width="32" height="20" rx="3" fill="var(--green)" /><path d="M40 82h40" stroke="#fff" strokeWidth="4" /></svg>
          )}
          <span>{mode === "usb" ? "USB drive" : "Console"}</span>
        </div>
        <div className="sn-trunk"><i /></div>
        <ul className="sn-screens">
          {screens.map((s) => (
            <li key={s.src}>
              <b className="sn-drop" />
              {/* eslint-disable-next-line @next/next/no-img-element -- small pre-optimised thumbnail */}
              <img src={`/renders/screen-${s.src}.webp`} width={s.w} height={s.h} alt="" loading="lazy" />
              <span>{s.label}</span>
              <em>{mode === "online" ? "Synced" : mode === "offline" ? "Playing from local storage" : "Playing from USB content"}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
