"use client";
import { useState, useEffect } from "react";

const MSGS = [
  { from: "user", text: "Do you work on store kiosks?" },
  { from: "ai",   text: "Yes — we deploy fully on your hardware. No cloud, no subscription. Customers walk up, speak naturally, get instant answers." },
  { from: "user", text: "Does it capture leads automatically?" },
  { from: "ai",   text: "Every conversation is logged. Hot leads are flagged and your team gets notified. You start each morning with qualified prospects." },
  { from: "user", text: "How fast can you deploy?" },
  { from: "ai",   text: "3 to 5 days from sign-off to live kiosk. We handle training, setup, and avatar customisation — you just show up on launch day." },
];

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

export default function ChatDemo() {
  const [shown, setShown] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let stop = false;
    async function run() {
      while (!stop) {
        setShown([]); setTyping(false);
        await sleep(600);
        for (let i = 0; i < MSGS.length; i++) {
          if (stop) return;
          if (MSGS[i].from === "ai") {
            setTyping(true);
            await sleep(1100);
            if (stop) return;
            setTyping(false);
          } else {
            await sleep(300);
          }
          setShown(s => [...s, i]);
          await sleep(MSGS[i].from === "user" ? 900 : 2000);
        }
        await sleep(3500);
      }
    }
    run();
    return () => { stop = true; };
  }, []);

  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.09)",
      borderRadius: "20px",
      overflow: "hidden",
      width: "100%",
      maxWidth: "420px",
    }}>
      {/* Header bar */}
      <div style={{
        padding: "16px 20px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        display: "flex", alignItems: "center", gap: "12px",
        background: "rgba(255,255,255,0.02)",
      }}>
        <div style={{
          width: "38px", height: "38px", borderRadius: "50%", flexShrink: 0,
          background: "linear-gradient(135deg, #3B0F8C, #6929C4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 12px rgba(59,15,140,0.5)",
        }}>
          <span style={{ fontSize: "13px", fontWeight: 900, color: "#fff" }}>AI</span>
        </div>
        <div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>Aria — Sales Agent</div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%", display: "inline-block",
              background: "#00D084", boxShadow: "0 0 5px #00D084",
            }} />
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>Live · Emoqa AI</span>
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: "5px" }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => (
            <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.6 }} />
          ))}
        </div>
      </div>

      {/* Messages */}
      <div style={{
        padding: "20px",
        display: "flex", flexDirection: "column", gap: "10px",
        minHeight: "300px",
      }}>
        {MSGS.map((m, i) => shown.includes(i) && (
          <div key={i} style={{
            display: "flex",
            justifyContent: m.from === "user" ? "flex-end" : "flex-start",
            animation: "msg-in 0.3s ease forwards",
          }}>
            <div style={{
              maxWidth: "82%",
              padding: "10px 14px",
              borderRadius: m.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
              background: m.from === "user"
                ? "linear-gradient(135deg, rgba(105,41,196,0.35), rgba(59,15,140,0.25))"
                : "rgba(255,255,255,0.07)",
              border: m.from === "user"
                ? "1px solid rgba(105,41,196,0.3)"
                : "1px solid rgba(255,255,255,0.08)",
              fontSize: "13px", lineHeight: 1.55,
              color: m.from === "user" ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.78)",
            }}>{m.text}</div>
          </div>
        ))}

        {typing && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{
              padding: "12px 16px",
              borderRadius: "16px 16px 16px 4px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex", gap: "5px", alignItems: "center",
            }}>
              {[0, 1, 2].map(d => (
                <div key={d} style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.5)",
                  animation: `typing-dot 0.9s ease-in-out ${d * 0.18}s infinite`,
                }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
