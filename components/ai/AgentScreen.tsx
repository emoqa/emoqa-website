"use client";
import { useState, useEffect } from "react";

interface Msg { from: "user" | "ai"; text: string; }
interface Props {
  agentName: string;
  agentLabel: string;
  agentColor: string;
  messages: Msg[];
  notification?: string;
  tilt?: "left" | "right" | "none";
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

export default function AgentScreen({
  agentName, agentLabel, agentColor, messages, notification, tilt = "none",
}: Props) {
  const [shown, setShown]   = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const [notif, setNotif]   = useState(false);

  useEffect(() => {
    let stop = false;
    async function run() {
      while (!stop) {
        setShown([]); setTyping(false); setNotif(false);
        await sleep(500);
        for (let i = 0; i < messages.length; i++) {
          if (stop) return;
          if (messages[i].from === "ai") {
            setTyping(true);
            await sleep(1100);
            if (stop) return;
            setTyping(false);
          } else {
            await sleep(250);
          }
          setShown(s => [...s, i]);
          await sleep(messages[i].from === "user" ? 900 : 2100);
        }
        if (notification) {
          await sleep(700);
          setNotif(true);
          await sleep(4200);
          if (!stop) setNotif(false);
        }
        await sleep(3200);
      }
    }
    run();
    return () => { stop = true; };
  }, []);

  const tiltTransform =
    tilt === "left"  ? "perspective(900px) rotateY(7deg)  rotateX(-2deg)" :
    tilt === "right" ? "perspective(900px) rotateY(-7deg) rotateX(-2deg)" : undefined;

  return (
    <div style={{
      transform: tiltTransform,
      background: "linear-gradient(158deg, #18182e 0%, #0c0c1c 100%)",
      border: "1.5px solid rgba(255,255,255,0.09)",
      borderRadius: "22px",
      overflow: "hidden",
      width: "100%",
      maxWidth: "360px",
      boxShadow: `0 32px 72px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04), 0 0 50px ${agentColor}18`,
      position: "relative",
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
    }}>
      {/* Notification toast */}
      {notif && notification && (
        <div style={{
          position: "absolute", top: "56px", left: "10px", right: "10px",
          background: "rgba(8,8,18,0.97)",
          border: `1px solid ${agentColor}55`,
          borderRadius: "12px", padding: "11px 14px",
          zIndex: 20,
          animation: "notif-in 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards",
          boxShadow: `0 8px 28px rgba(0,0,0,0.6), 0 0 16px ${agentColor}20`,
          display: "flex", alignItems: "flex-start", gap: "10px",
        }}>
          <span style={{ fontSize: "18px", lineHeight: 1 }}>🔔</span>
          <div>
            <div style={{ fontSize: "10px", fontWeight: 700, color: agentColor, marginBottom: "3px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              New Alert
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>{notification}</div>
          </div>
        </div>
      )}

      {/* Header bar */}
      <div style={{
        padding: "11px 14px",
        background: "rgba(0,0,0,0.55)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        display: "flex", alignItems: "center", gap: "10px",
      }}>
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0,
          background: `linear-gradient(135deg, ${agentColor}, ${agentColor}60)`,
          boxShadow: `0 0 10px ${agentColor}55`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "12px", fontWeight: 900, color: "#fff",
        }}>{agentName[0]}</div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}>{agentName}</div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.38)" }}>{agentLabel}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "#00D084", display: "inline-block",
            boxShadow: "0 0 6px #00D084",
            animation: "pulse-ring 2s ease-out infinite",
          }} />
          <div style={{
            padding: "2px 7px", borderRadius: "4px",
            background: "rgba(255,50,50,0.14)", border: "1px solid rgba(255,60,60,0.3)",
            fontSize: "8px", fontWeight: 800, color: "#ff6060", letterSpacing: "0.1em",
          }}>LIVE</div>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        padding: "16px", minHeight: "280px",
        display: "flex", flexDirection: "column", gap: "10px",
      }}>
        {messages.map((m, i) => shown.includes(i) && (
          <div key={i} style={{
            display: "flex",
            justifyContent: m.from === "user" ? "flex-end" : "flex-start",
            animation: "msg-in 0.32s ease forwards",
          }}>
            <div style={{
              maxWidth: "86%", padding: "9px 13px",
              borderRadius: m.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
              background: m.from === "user"
                ? `linear-gradient(135deg, ${agentColor}40, ${agentColor}22)`
                : "rgba(255,255,255,0.075)",
              border: `1px solid ${m.from === "user" ? agentColor+"32" : "rgba(255,255,255,0.07)"}`,
              fontSize: "12px", lineHeight: 1.58,
              color: m.from === "user" ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.74)",
            }}>{m.text}</div>
          </div>
        ))}

        {typing && (
          <div style={{ display: "flex" }}>
            <div style={{
              padding: "10px 14px", borderRadius: "14px 14px 14px 4px",
              background: "rgba(255,255,255,0.075)",
              border: "1px solid rgba(255,255,255,0.07)",
              display: "flex", gap: "4px", alignItems: "center",
            }}>
              {[0, 1, 2].map(d => (
                <div key={d} style={{
                  width: "5px", height: "5px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.45)",
                  animation: `typing-dot 0.9s ease-in-out ${d * 0.18}s infinite`,
                }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div style={{
        padding: "10px 14px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        background: "rgba(0,0,0,0.4)",
        display: "flex", gap: "8px", alignItems: "center",
      }}>
        <div style={{
          flex: 1, padding: "7px 12px", borderRadius: "8px",
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
          fontSize: "11px", color: "rgba(255,255,255,0.22)",
        }}>Speak or type…</div>
        <div style={{
          width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0,
          background: `linear-gradient(135deg, ${agentColor}, ${agentColor}80)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "13px",
        }}>🎤</div>
      </div>
    </div>
  );
}
