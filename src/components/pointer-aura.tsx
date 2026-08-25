"use client";

import { useEffect, useRef } from "react";

export default function PointerAura() {
  const auraRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let auraX = targetX;
    let auraY = targetY;
    let ringX = targetX;
    let ringY = targetY;
    let frame = 0;

    const render = () => {
      auraX += (targetX - auraX) * 0.08;
      auraY += (targetY - auraY) * 0.08;
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;

      if (auraRef.current) auraRef.current.style.transform = `translate3d(${auraX}px, ${auraY}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const handleMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest("a, button, [role='button']");
      document.documentElement.classList.toggle("pointer-aura-hover", Boolean(interactive));
    };

    const handleLeave = () => document.documentElement.classList.remove("pointer-aura-hover");

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.classList.remove("pointer-aura-hover");
    };
  }, []);

  return (
    <>
      <div ref={auraRef} aria-hidden="true" className="pointer-aura" />
      <div ref={ringRef} aria-hidden="true" className="pointer-ring" />
      <div ref={dotRef} aria-hidden="true" className="pointer-dot" />
    </>
  );
}
