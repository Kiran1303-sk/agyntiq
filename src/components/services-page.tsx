"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { serviceSlides } from "@/components/services-data";

const serviceImages = ["/slide.jpeg", "/slide1.jpeg", "/slide2.jpeg", "/slide3.jpeg"];

export default function ServicesPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeService = serviceSlides[activeSlide];
  const activeImage = serviceImages[activeSlide % serviceImages.length];

  const goToSlide = (nextIndex: number) => {
    setActiveSlide((current) => {
      const movingForward =
        nextIndex > current || (current === serviceSlides.length - 1 && nextIndex === 0);
      setDirection(movingForward ? 1 : -1);
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      goToSlide((activeSlide + 1) % serviceSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [activeSlide]);

  return (
    <main className="relative overflow-hidden pt-52 md:pt-56">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.18),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8%] top-[16%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,214,255,0.14),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[-14%] left-[18%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(150,120,255,0.16),transparent_68%)] blur-3xl" />
      </div>

      <section className="section-shell py-20 md:py-24">
        <div className="mx-auto max-w-5xl text-center" data-reveal>
          <div className="section-kicker mx-auto">Services</div>
          <h1 className="section-title mx-auto max-w-[14ch] text-balance">
            A centered image-and-content carousel for the full service story.
          </h1>
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            The service slide deck stays in one cinematic frame: image on the left, context on the
            right, with automatic motion and manual navigation.
          </p>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_30px_110px_rgba(0,0,0,0.34)]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeService.number}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 42 : -42 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -42 : 42 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]"
              >
                <div className="relative min-h-[22rem] overflow-hidden border-b border-white/[0.08] lg:min-h-[34rem] lg:border-b-0 lg:border-r">
                  <Image
                    src={activeImage}
                    alt={activeService.title}
                    fill
                    priority={activeSlide === 0}
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.02)_0%,rgba(5,8,22,0.32)_55%,rgba(5,8,22,0.82)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/55">
                      <span>Visual story</span>
                      <span>
                        {String(activeSlide + 1).padStart(2, "0")} / {serviceSlides.length}
                      </span>
                    </div>
                    <div className="mt-4 max-w-md rounded-[1.4rem] border border-white/[0.08] bg-[#050816]/50 p-4 backdrop-blur-xl">
                      <div className="text-sm uppercase tracking-[0.28em] text-white/40">
                        {activeService.eyebrow}
                      </div>
                      <div className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                        {activeService.title}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex min-h-[22rem] flex-col justify-between gap-8 p-6 sm:p-8 lg:min-h-[34rem] lg:p-10">
                  <div>
                    <div className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-[0.7rem] uppercase tracking-[0.28em] text-white/55">
                      {activeService.eyebrow}
                    </div>
                    <div className="mt-5 text-7xl font-semibold tracking-[-0.1em] text-white/12 sm:text-8xl">
                      {activeService.number}
                    </div>
                    <div className="mt-4 max-w-md">
                      <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                        {activeService.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                        {activeService.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="max-w-2xl text-base leading-7 text-white/72">
                      {activeService.summary}
                    </p>

                    <div className="grid gap-3">
                      {activeService.bullets.map((bullet, index) => (
                        <div
                          key={bullet}
                          className="flex gap-4 rounded-[1.1rem] border border-white/[0.08] bg-white/[0.03] px-4 py-4"
                        >
                          <div className="min-w-10 text-xs uppercase tracking-[0.28em] text-white/35">
                            0{index + 1}
                          </div>
                          <div className="text-sm leading-6 text-white/85">{bullet}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="border-t border-white/[0.08] px-5 py-4 sm:px-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs uppercase tracking-[0.32em] text-white/35">
                  Swipe, tap, or let it run
                </div>
                <div className="flex items-center gap-2">
                  {serviceSlides.map((slide, index) => (
                    <button
                      key={slide.number}
                      type="button"
                      aria-label={`Go to ${slide.title}`}
                      onClick={() => goToSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeSlide === index ? "w-10 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
                <Link
                  href="/#contact"
                  className="text-xs uppercase tracking-[0.32em] text-white/40 transition hover:text-white/75"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
