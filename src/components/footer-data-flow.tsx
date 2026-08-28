"use client";

import { useEffect, useRef } from "react";

type Particle = { u: number; lane: number; speed: number; size: number; alpha: number };

export default function FooterDataFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const point = (u: number, lane = 0) => {
      const x = width * (0.1 + u * 0.8);
      const center = height * (0.5 + Math.sin(u * Math.PI * 2.2) * 0.22);
      return { x, y: center + lane * height * 0.035 };
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 640 ? 260 : 720;
      particles = Array.from({ length: count }, (_, index) => ({
        u: (index / count + Math.random()) % 1,
        lane: (Math.random() - 0.5) * 8,
        speed: 0.00008 + Math.random() * 0.00016,
        size: 0.5 + Math.random() * 1.5,
        alpha: 0.25 + Math.random() * 0.65
      }));
    };

    const drawPath = (offset: number, alpha: number) => {
      context.beginPath();
      for (let i = 0; i <= 90; i += 1) {
        const p = point(i / 90, offset);
        if (i === 0) context.moveTo(p.x, p.y);
        else context.lineTo(p.x, p.y);
      }
      context.strokeStyle = `rgba(126, 190, 255, ${alpha})`;
      context.lineWidth = 0.65;
      context.stroke();
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const gradient = context.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "rgba(34,211,238,.8)");
      gradient.addColorStop(0.34, "rgba(59,130,246,.8)");
      gradient.addColorStop(0.68, "rgba(139,92,246,.85)");
      gradient.addColorStop(1, "rgba(236,72,153,.8)");

      context.save();
      context.globalCompositeOperation = "lighter";
      for (let lane = -4; lane <= 4; lane += 1) drawPath(lane, lane === 0 ? 0.2 : 0.07);

      context.shadowBlur = 12;
      context.shadowColor = "rgba(124, 92, 246, .75)";
      particles.forEach((particle) => {
        if (!reducedMotion) particle.u = (particle.u + particle.speed * 16) % 1;
        const p = point(particle.u, particle.lane + Math.sin(time * 0.001 + particle.u * 12) * 0.18);
        context.fillStyle = gradient;
        context.globalAlpha = particle.alpha;
        context.beginPath();
        context.arc(p.x, p.y, particle.size, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 0.5;
      for (let i = 0; i < 18; i += 1) {
        const u = (i / 18 + time * 0.000025) % 1;
        const p = point(u, (i % 3) - 1);
        context.fillStyle = gradient;
        context.fillRect(p.x - 2, p.y - 2, 4, 4);
        context.beginPath();
        context.arc(p.x, p.y, 5 + (i % 3), 0, Math.PI * 2);
        context.strokeStyle = "rgba(160, 130, 255, .28)";
        context.stroke();
      }

      context.restore();
      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />;
}
