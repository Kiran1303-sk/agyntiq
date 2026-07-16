"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SiteHeader from "@/components/site-header";
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
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.18),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8%] top-[16%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,214,255,0.14),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[-14%] left-[18%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(150,120,255,0.16),transparent_68%)] blur-3xl" />
      </div>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="max-w-2xl pt-3" data-reveal>
            <div className="section-kicker">Services</div>
            <h1 className="section-title max-w-[11ch] text-balance">
              Enterprise services, arranged like a premium product story.
            </h1>
            <p className="section-copy mt-5 max-w-xl">
              Slides 02 to 08 now live on their own page with a polished feature panel, a clean
              slide index, and a navigation bar that matches the rest of the site.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Strategy to scale",
                "Build with context",
                "Operate with confidence"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm text-white/72 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] p-4 shadow-[0_30px_110px_rgba(0,0,0,0.34)] md:p-5">
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] px-2 pb-4 text-xs uppercase tracking-[0.32em] text-white/35">
              <span>Featured service</span>
              <span>
                {activeSlide + 1}/{serviceSlides.length}
              </span>
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeService.number}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 36 : -36, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -36 : 36, y: -8 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-0 overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#060816] lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative overflow-hidden border-b border-white/[0.08] lg:border-b-0 lg:border-r">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.12)_0%,rgba(5,8,22,0.88)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />
                  <div className="relative flex min-h-[24rem] flex-col justify-between p-6 sm:p-8 lg:min-h-[34rem]">
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
                      Service chapter {activeSlide + 1}
                    </div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/35">
                      Premium navigation
                    </div>
                  </div>

                  <p className="max-w-2xl text-base leading-7 text-white/72">
                    {activeService.summary}
                  </p>

                  <div className="space-y-3 border-t border-white/[0.08] pt-5">
                    {activeService.bullets.map((bullet, index) => (
                      <div
                        key={bullet}
                        className="flex gap-4 border-b border-white/[0.06] pb-3 last:border-b-0 last:pb-0"
                      >
                        <div className="min-w-10 text-xs uppercase tracking-[0.28em] text-white/35">
                          0{index + 1}
                        </div>
                        <div className="text-sm leading-6 text-white/84">{bullet}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 text-xs uppercase tracking-[0.3em] text-white/35">
            <span>Service index</span>
            <span>02 - 08</span>
          </div>

          <div className="divide-y divide-white/[0.08]">
            {serviceSlides.map((slide, index) => {
              const selected = activeSlide === index;

              return (
                <button
                  key={slide.number}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`grid w-full gap-4 px-5 py-5 text-left transition lg:grid-cols-[0.22fr_0.46fr_0.32fr] lg:items-center ${
                    selected ? "bg-white/[0.05]" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm uppercase tracking-[0.32em] text-white/35">
                      {slide.number}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-white/14 to-transparent lg:hidden" />
                  </div>

                  <div>
                    <div className="text-lg font-semibold tracking-[-0.04em] text-white">
                      {slide.title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-white/60">{slide.subtitle}</div>
                  </div>

                  <div className="text-sm leading-6 text-white/48 lg:text-right">{slide.summary}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
