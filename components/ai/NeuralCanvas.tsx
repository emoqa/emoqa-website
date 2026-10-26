"use client";
import { useEffect, useRef } from "react";

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  r: number; phase: number;
  hue: number;
}
interface Packet {
  from: number; to: number;
  t: number; speed: number;
  blue: boolean;
}

export default function NeuralCanvas({ style }: { style?: React.CSSProperties }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let frame = 0;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);
      nodes = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.55 ? 265 : 210,
      }));
    }

    function getEdges(w: number): [number, number, number][] {
      const maxD = w * 0.16;
      const edges: [number, number, number][] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < maxD) edges.push([i, j, d / maxD]);
        }
      }
      return edges;
    }

    function spawnPacket(edges: [number, number, number][]) {
      if (!edges.length || packets.length > 22) return;
      const [from, to] = edges[Math.floor(Math.random() * edges.length)];
      packets.push({ from, to, t: 0, speed: 0.007 + Math.random() * 0.007, blue: Math.random() > 0.5 });
    }

    function draw() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      ctx!.clearRect(0, 0, w, h);

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.phase += 0.018;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      const edges = getEdges(w);
      if (frame % 28 === 0) spawnPacket(edges);

      // Connections
      edges.forEach(([i, j, t]) => {
        const a = (1 - t) * 0.18;
        ctx!.beginPath();
        ctx!.moveTo(nodes[i].x, nodes[i].y);
        ctx!.lineTo(nodes[j].x, nodes[j].y);
        ctx!.strokeStyle = `rgba(123,47,190,${a})`;
        ctx!.lineWidth = 0.6;
        ctx!.stroke();
      });

      // Packets
      packets = packets.filter(p => {
        p.t += p.speed;
        if (p.t >= 1) return false;
        const fn = nodes[p.from], tn = nodes[p.to];
        const x = fn.x + (tn.x - fn.x) * p.t;
        const y = fn.y + (tn.y - fn.y) * p.t;
        const trailT = Math.max(0, p.t - 0.1);
        const tx = fn.x + (tn.x - fn.x) * trailT;
        const ty = fn.y + (tn.y - fn.y) * trailT;
        const g = ctx!.createLinearGradient(tx, ty, x, y);
        g.addColorStop(0, "transparent");
        g.addColorStop(1, p.blue ? "rgba(30,144,255,0.9)" : "rgba(75,0,160,0.9)");
        ctx!.beginPath(); ctx!.moveTo(tx, ty); ctx!.lineTo(x, y);
        ctx!.strokeStyle = g; ctx!.lineWidth = 1.6; ctx!.stroke();
        ctx!.beginPath(); ctx!.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx!.fillStyle = p.blue ? "#1B9FFF" : "#7B2FBE"; ctx!.fill();
        return true;
      });

      // Nodes
      nodes.forEach(n => {
        const pulse = 0.5 + 0.5 * Math.sin(n.phase);
        const r = n.r * (1 + pulse * 0.6);
        const col = n.hue === 265 ? "59,15,140" : "30,144,255";
        const grd = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5);
        grd.addColorStop(0, `rgba(${col},0.5)`);
        grd.addColorStop(1, "transparent");
        ctx!.beginPath(); ctx!.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
        ctx!.fillStyle = grd; ctx!.fill();
        ctx!.beginPath(); ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = n.hue === 265 ? "#7B2FBE" : "#1B9FFF"; ctx!.fill();
      });

      frame++;
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
