export default function AIOrb() {
  return (
    <div style={{ position: "relative", width: "300px", height: "300px", flexShrink: 0 }}>
      {/* Ambient glow halo */}
      <div style={{
        position: "absolute", inset: "-60px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(75,0,160,0.3) 0%, transparent 65%)",
        animation: "glow-purple 4s ease-in-out infinite",
        pointerEvents: "none",
      }} />

      {/* Outer orbit ring — slow clockwise */}
      <div className="spin-slow" style={{
        position: "absolute", inset: 0,
        borderRadius: "50%",
        border: "1px solid rgba(123,47,190,0.2)",
      }}>
        <div style={{
          position: "absolute", top: "-6px", left: "50%", transform: "translateX(-50%)",
          width: "12px", height: "12px", borderRadius: "50%",
          background: "#7B2FBE", boxShadow: "0 0 10px #7B2FBE, 0 0 20px rgba(75,0,160,0.5)",
        }} />
        <div style={{
          position: "absolute", bottom: "-5px", left: "30%",
          width: "10px", height: "10px", borderRadius: "50%",
          background: "rgba(123,47,190,0.5)", boxShadow: "0 0 6px #7B2FBE",
        }} />
      </div>

      {/* Mid orbit ring — faster counter-clockwise */}
      <div className="spin-slow-rev" style={{
        position: "absolute", inset: "30px",
        borderRadius: "50%",
        border: "1px solid rgba(30,144,255,0.2)",
      }}>
        <div style={{
          position: "absolute", top: "-5px", left: "50%", transform: "translateX(-50%)",
          width: "10px", height: "10px", borderRadius: "50%",
          background: "#1B9FFF", boxShadow: "0 0 10px #1B9FFF, 0 0 20px rgba(30,144,255,0.4)",
        }} />
        <div style={{
          position: "absolute", bottom: "-4px", right: "20%",
          width: "7px", height: "7px", borderRadius: "50%",
          background: "rgba(30,144,255,0.6)", boxShadow: "0 0 6px #1B9FFF",
        }} />
      </div>

      {/* Inner ring */}
      <div className="spin-slow" style={{
        position: "absolute", inset: "62px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.06)",
        animationDuration: "6s",
      }}>
        <div style={{
          position: "absolute", top: "-4px", right: "25%",
          width: "8px", height: "8px", borderRadius: "50%",
          background: "rgba(255,255,255,0.3)",
        }} />
      </div>

      {/* Core sphere */}
      <div style={{
        position: "absolute", inset: "70px",
        borderRadius: "50%",
        background: "radial-gradient(circle at 38% 32%, rgba(130,60,220,0.95), rgba(75,0,160,1) 55%, rgba(0,5,20,1))",
        boxShadow: "0 0 40px rgba(75,0,160,0.8), 0 0 80px rgba(75,0,160,0.3), inset 0 0 30px rgba(123,47,190,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Specular highlight */}
        <div style={{
          position: "absolute", top: "16%", left: "20%",
          width: "30%", height: "26%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)",
        }} />
        {/* Scan line */}
        <div style={{
          position: "absolute", left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(30,144,255,0.6), transparent)",
          animation: "scan-down 3s linear infinite",
        }} />
        <span style={{
          fontSize: "26px", fontWeight: 900,
          color: "rgba(255,255,255,0.95)",
          letterSpacing: "-0.04em", position: "relative", zIndex: 1,
        }}>AI</span>
      </div>
    </div>
  );
}
