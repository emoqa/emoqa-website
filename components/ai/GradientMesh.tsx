"use client";
import { useEffect, useRef } from "react";

export default function GradientMesh({ style }: { style?: React.CSSProperties }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    let t = 0;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      canvas!.width  = canvas!.offsetWidth  * dpr;
      canvas!.height = canvas!.offsetHeight * dpr;
      ctx!.scale(dpr, dpr);
    }

    function draw() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      ctx!.clearRect(0, 0, w, h);

      const blobs = [
        { x: w*0.15 + Math.sin(t*0.37)*w*0.10, y: h*0.20 + Math.cos(t*0.28)*h*0.14, r: w*0.42, rgb: "59,15,140",  a: 0.60 },
        { x: w*0.85 + Math.cos(t*0.30)*w*0.12, y: h*0.70 + Math.sin(t*0.44)*h*0.16, r: w*0.34, rgb: "30,144,255", a: 0.44 },
        { x: w*0.55 + Math.sin(t*0.50+1)*w*0.14, y: h*0.42 + Math.cos(t*0.39+2)*h*0.18, r: w*0.26, rgb: "105,41,196", a: 0.38 },
        { x: w*0.28 + Math.cos(t*0.43+3)*w*0.09, y: h*0.80 + Math.sin(t*0.35+1)*h*0.11, r: w*0.22, rgb: "20,80,200",  a: 0.28 },
      ];

      blobs.forEach(b => {
        const g = ctx!.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0,   `rgba(${b.rgb},${b.a})`);
        g.addColorStop(0.5, `rgba(${b.rgb},${b.a * 0.45})`);
        g.addColorStop(1,   "transparent");
        ctx!.beginPath();
        ctx!.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx!.fillStyle = g;
        ctx!.fill();
      });

      t += 0.005;
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas!);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} style={{ display: "block", width: "100%", height: "100%", ...style }} />;
}
