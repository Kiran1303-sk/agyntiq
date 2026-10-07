"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Adds smooth desktop scrolling without loading the GSAP runtime globally. */
export default function SmoothScroll() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: false,
      duration: 0.9,
      smoothWheel: true,
      syncTouch: false,
      anchors: true
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
