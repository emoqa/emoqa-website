"use client";

const steps = [
  { id: "vad",    label: "VAD",    sub: "Voice Activity Detection", color: "#7B2FBE" },
  { id: "stt",    label: "Whisper",sub: "Speech → Text",            color: "#4B00A0" },
  { id: "rag",    label: "RAG",    sub: "Qdrant Vector Search",     color: "#1B9FFF" },
  { id: "llm",    label: "LLM",    sub: "Ollama qwen3:14b",         color: "#4B00A0" },
  { id: "tts",    label: "TTS",    sub: "Text → Audio Stream",      color: "#7B2FBE" },
  { id: "avatar", label: "Avatar", sub: "VRM Lipsync + Board",      color: "#1B9FFF" },
];

export default function PipelineFlow() {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 0,
        minWidth: "700px",
        padding: "8px 0",
      }}>
        {steps.map((s, i) => (
          <div key={s.id} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            {/* Node */}
            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              position: "relative",
            }}>
              {/* Pulse ring */}
              <div style={{
                position: "relative",
                width: "64px", height: "64px",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  borderRadius: "50%",
                  background: `${s.color}20`,
                  border: `1px solid ${s.color}50`,
                  animation: `pulse-ring 2.5s ease-out ${i * 0.25}s infinite`,
                }} />
                <div style={{
                  position: "absolute", inset: "8px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${s.color}40, ${s.color}15)`,
                  border: `1px solid ${s.color}80`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 800,
                    color: s.color, letterSpacing: "0.04em",
                  }}>{s.label}</span>
                </div>
              </div>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textAlign: "center", lineHeight: 1.4 }}>
                {s.sub}
              </span>
            </div>

            {/* Arrow connector */}
            {i < steps.length - 1 && (
              <div style={{ width: "32px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "-24px" }}>
                <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                  <line x1="0" y1="6" x2="24" y2="6"
                    stroke="url(#arrow-grad)" strokeWidth="1.5"
                    strokeDasharray="4 2"
                    style={{ animation: `flow-line 1.5s linear ${i * 0.2}s infinite` }}
                    strokeDashoffset="400"
                  />
                  <polygon points="24,2 32,6 24,10" fill={steps[i + 1].color} opacity="0.7" />
                  <defs>
                    <linearGradient id="arrow-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#4B00A0" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1B9FFF" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Latency callout */}
      <div style={{
        marginTop: "32px", textAlign: "center",
        padding: "12px 28px", borderRadius: "999px",
        background: "rgba(30,144,255,0.08)",
        border: "1px solid rgba(30,144,255,0.2)",
        display: "inline-flex", alignItems: "center", gap: "10px",
      }}>
        <span style={{
          width: "8px", height: "8px", borderRadius: "50%",
          background: "#1B9FFF",
          display: "inline-block",
          animation: "pulse-ring 1.5s ease-out infinite",
        }} />
        <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
          First audio response in <span style={{ color: "#1B9FFF" }}>1.2 seconds</span> — NDJSON streaming, no full-response wait
        </span>
      </div>
    </div>
  );
}
