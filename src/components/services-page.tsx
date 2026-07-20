"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { serviceSlides } from "@/components/services-data";

const serviceImages = ["/slide.jpeg", "/slide1.jpeg", "/slide2.jpeg", "/slide3.jpeg"];

const pageEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: pageEase }
  }
};

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: pageEase }
  }
};

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
      setDirection(1);
      setActiveSlide((current) => (current + 1) % serviceSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const totalBullets = serviceSlides.reduce((sum, slide) => sum + slide.bullets.length, 0);
  const totalChips = serviceSlides.reduce((sum, slide) => sum + slide.chips.length, 0);

  return (
    <main className="relative overflow-hidden pt-52 text-white md:pt-56">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#060913_0%,#091526_45%,#060913_100%)]" />
        <div className="absolute left-[-8%] top-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(30,105,255,0.2),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[14%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,217,255,0.15),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[-16%] left-[18%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(0,217,255,0.05),transparent_28%)]" />
      </div>

      <section className="section-shell pb-14 md:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={sectionVariants}
          className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]"
        >
          <div className="space-y-7">
            <div className="section-kicker">Services atlas</div>
            <h1 className="max-w-[12ch] text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.08em] text-white md:text-6xl xl:text-[5.9rem]">
              A completely new service interface, built around motion and clarity.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-white/70 md:text-xl md:leading-9">
              The service content stays exactly the same, but the presentation now reads like an
              editorial system: a live preview, a stacked navigation rail, and softer motion that
              feels deliberate instead of busy.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: String(serviceSlides.length).padStart(2, "0"), label: "Service tracks" },
                { value: String(totalBullets).padStart(2, "0"), label: "Core bullets" },
                { value: String(totalChips).padStart(2, "0"), label: "Signal chips" }
              ].map((stat) => (
                <div key={stat.label} className="glass-panel rounded-[1.4rem] p-4">
                  <div className="text-3xl font-semibold tracking-[-0.08em] text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.28em] text-white/45">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            variants={sectionVariants}
            className="glass-panel-strong relative overflow-hidden rounded-[2rem] p-5"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(0,217,255,0.08),transparent_28%)]" />
            <div className="relative flex h-full min-h-[19rem] flex-col justify-between rounded-[1.5rem] border border-white/[0.08] bg-[#07111f]/40 p-5">
              <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.34em] text-white/45">
                <span>Current focus</span>
                <span>
                  {String(activeSlide + 1).padStart(2, "0")} / {serviceSlides.length}
                </span>
              </div>
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-[0.28em] text-cyan-200/60">
                  {activeService.eyebrow}
                </div>
                <h2 className="text-3xl font-semibold tracking-[-0.06em] text-white">
                  {activeService.title}
                </h2>
                <p className="max-w-md text-sm leading-6 text-white/68">{activeService.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeService.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/[0.09] bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/66"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] shadow-[0_30px_110px_rgba(0,0,0,0.34)]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeService.number}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.5, ease: pageEase }}
                className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]"
              >
                <div className="relative min-h-[26rem] overflow-hidden border-b border-white/[0.08] lg:min-h-[38rem] lg:border-b-0 lg:border-r">
                  <Image
                    src={activeImage}
                    alt={activeService.title}
                    fill
                    priority={activeSlide === 0}
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.02)_0%,rgba(5,8,22,0.22)_42%,rgba(5,8,22,0.82)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,217,255,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(124,77,255,0.18),transparent_30%)]" />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-[0.7rem] uppercase tracking-[0.32em] text-white/50 sm:p-6">
                    <span>Visual story</span>
                    <span>
                      {String(activeSlide + 1).padStart(2, "0")} / {serviceSlides.length}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="max-w-lg rounded-[1.5rem] border border-white/[0.09] bg-[#060a14]/62 p-5 backdrop-blur-2xl">
                      <div className="text-[0.7rem] uppercase tracking-[0.32em] text-white/45">
                        {activeService.eyebrow}
                      </div>
                      <div className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-[2.25rem]">
                        {activeService.title}
                      </div>
                      <p className="mt-3 max-w-md text-sm leading-6 text-white/68">
                        {activeService.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex min-h-[26rem] flex-col justify-between gap-8 p-6 sm:p-8 lg:min-h-[38rem] lg:p-10">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-[0.7rem] uppercase tracking-[0.28em] text-white/58">
                        {activeService.eyebrow}
                      </span>
                      <span className="text-[0.7rem] uppercase tracking-[0.32em] text-white/30">
                        Service {activeService.number}
                      </span>
                    </div>

                    <h2 className="max-w-[11ch] text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.08em] text-white sm:text-5xl">
                      {activeService.title}
                    </h2>
                    <p className="max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                      {activeService.summary}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.32em] text-white/34">
                      <span>What it covers</span>
                      <span>{activeService.bullets.length} points</span>
                    </div>

                    <motion.div variants={listVariants} initial="hidden" animate="show" className="grid gap-3">
                      {activeService.bullets.map((bullet, index) => (
                        <motion.div
                          key={bullet}
                          variants={cardVariants}
                          className="group rounded-[1.1rem] border border-white/[0.08] bg-white/[0.03] px-4 py-4 transition hover:border-white/[0.16] hover:bg-white/[0.05]"
                        >
                          <div className="flex gap-4">
                            <div className="min-w-10 text-xs uppercase tracking-[0.28em] text-white/34">
                              0{index + 1}
                            </div>
                            <div className="text-sm leading-6 text-white/84">{bullet}</div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="border-t border-white/[0.08] px-5 py-4 sm:px-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  {serviceSlides.map((slide, index) => (
                    <button
                      key={slide.number}
                      type="button"
                      aria-label={`Go to ${slide.title}`}
                      onClick={() => goToSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeSlide === index
                          ? "w-10 bg-white"
                          : "w-2.5 bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="text-[0.7rem] uppercase tracking-[0.32em] text-white/35">
                    Tap a track to explore
                  </div>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/[0.1] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/72 transition hover:border-white/[0.18] hover:bg-white/[0.04] hover:text-white"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="glass-panel-strong rounded-[1.8rem] p-5">
              <div className="text-[0.7rem] uppercase tracking-[0.34em] text-white/38">
                Service compass
              </div>
              <div className="mt-4 text-2xl font-semibold tracking-[-0.06em] text-white">
                Explore the stack in any order.
              </div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/64">
                Every service remains the same content-wise, but the experience now feels like a
                curated navigation system rather than a single carousel.
              </p>
            </div>

            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="space-y-3"
            >
              {serviceSlides.map((slide, index) => {
                const isActive = index === activeSlide;

                return (
                  <motion.button
                    key={slide.number}
                    type="button"
                    variants={cardVariants}
                    onClick={() => goToSlide(index)}
                    className={`group w-full rounded-[1.5rem] border p-4 text-left transition ${
                      isActive
                        ? "border-cyan-300/40 bg-white/[0.06] shadow-[0_18px_70px_rgba(0,0,0,0.24)]"
                        : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.16] hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[0.7rem] uppercase tracking-[0.28em] text-white/34">
                          {slide.number}
                        </div>
                        <div className="mt-2 text-lg font-semibold tracking-[-0.04em] text-white">
                          {slide.title}
                        </div>
                      </div>
                      <div
                        className={`mt-1 h-2.5 w-2.5 rounded-full transition ${
                          isActive ? "bg-cyan-300 shadow-[0_0_22px_rgba(0,217,255,0.6)]" : "bg-white/20"
                        }`}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/62">{slide.subtitle}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {slide.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[0.66rem] uppercase tracking-[0.22em] text-white/52"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </aside>
        </div>
      </section>
    </main>
  );
}
