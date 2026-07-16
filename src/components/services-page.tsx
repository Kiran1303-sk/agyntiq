"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { serviceSlides } from "@/components/services-data";

export default function ServicesPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeService = serviceSlides[activeSlide];

  const goToSlide = (nextIndex: number) => {
    setActiveSlide((current) => {
      const movingForward =
        nextIndex > current || (current === serviceSlides.length - 1 && nextIndex === 0);
      setDirection(movingForward ? 1 : -1);
      return nextIndex;
    });
  };

  return (
    <main className="relative overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.18),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8%] top-[16%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,214,255,0.14),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[-14%] left-[18%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(150,120,255,0.16),transparent_68%)] blur-3xl" />
      </div>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-2xl" data-reveal>
            <div className="section-kicker">Services</div>
            <h1 className="section-title max-w-[10ch] text-balance">
              A dedicated services page, built like a premium product.
            </h1>
            <p className="section-copy mt-5 max-w-xl">
              Slides 02 to 08 from the service deck live here as a polished navigator, so the home
              page stays focused and the service story gets the space it deserves.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                Back to Home
              </Link>
              <a
                href="#service-deck"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-cyan px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(79,140,255,0.24)]"
              >
                Explore Deck
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3" data-parallax="8">
            {serviceSlides.map((slide, index) => (
              <button
                key={slide.number}
                type="button"
                onClick={() => goToSlide(index)}
                className={`rounded-[1.4rem] border p-4 text-left transition ${
                  activeSlide === index
                    ? "border-white/[0.18] bg-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                    : "border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.05]"
                }`}
              >
                <div className="text-xs uppercase tracking-[0.28em] text-white/35">
                  Slide {slide.number}
                </div>
                <div className="mt-2 text-sm font-semibold tracking-[-0.03em] text-white">
                  {slide.eyebrow}
                </div>
                <div className="mt-3 text-xs leading-5 text-white/60">{slide.title}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="service-deck" className="section-shell pb-12 md:pb-16">
        <div className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_30px_110px_rgba(0,0,0,0.34)]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeService.number}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]"
            >
              <div className="relative overflow-hidden border-b border-white/[0.08] lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.1)_0%,rgba(5,8,22,0.8)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_28%)]" />
                <div className="relative flex min-h-[26rem] flex-col justify-between p-6 sm:p-8 lg:min-h-[36rem]">
                  <div className="space-y-5">
                    <div className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-[0.7rem] uppercase tracking-[0.28em] text-white/55">
                      {activeService.eyebrow}
                    </div>
                    <div className="text-7xl font-semibold tracking-[-0.1em] text-white/12 sm:text-8xl">
                      {activeService.number}
                    </div>
                    <div className="max-w-md">
                      <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                        {activeService.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                        {activeService.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeService.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/[0.1] bg-white/[0.05] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-white/60"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs uppercase tracking-[0.32em] text-white/45">
                    Slide {activeSlide + 1} of 07
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/35">
                    Service navigator
                  </div>
                </div>

                <p className="max-w-2xl text-base leading-7 text-white/72">{activeService.summary}</p>

                <div className="grid gap-3 md:grid-cols-2">
                  {activeService.bullets.map((bullet, index) => (
                    <motion.div
                      key={bullet}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                      className="hover-sheen rounded-[1.2rem] border border-white/[0.08] bg-white/[0.04] p-4"
                    >
                      <div className="text-xs uppercase tracking-[0.28em] text-white/35">
                        0{index + 1}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-white/85">{bullet}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/35">Next</div>
                    <div className="mt-2 text-sm leading-6 text-white/75">
                      {serviceSlides[(activeSlide + 1) % serviceSlides.length].title}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/35">Format</div>
                    <div className="mt-2 text-sm leading-6 text-white/75">
                      Slide-driven service narrative
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/35">Focus</div>
                    <div className="mt-2 text-sm leading-6 text-white/75">
                      Strategy through managed operations
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
