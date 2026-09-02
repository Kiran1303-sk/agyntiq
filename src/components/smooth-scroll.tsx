"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Keeps scroll physics consistent across every route and syncs GSAP to Lenis. */
export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      autoRaf: false,
      duration: 0.9,
      smoothWheel: true,
      syncTouch: false,
      anchors: true
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
