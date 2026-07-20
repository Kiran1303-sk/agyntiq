"use client";

import { motion } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { serviceSlides } from "@/components/services-data";

const ease = [0.22, 1, 0.36, 1] as const;

const pageReveal = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease }
  }
};

const cardReveal = {
  hidden: { opacity: 0, y: 14 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease }
  })
};

function HeadGraphic() {
  return (
    <div className="relative isolate h-full min-h-[28rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_50%_25%,rgba(106,76,255,0.22),transparent_28%),radial-gradient(circle_at_60%_35%,rgba(0,217,255,0.12),transparent_22%),linear-gradient(180deg,rgba(7,8,26,0.98)_0%,rgba(6,7,22,0.98)_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_46%,rgba(255,255,255,0.06),transparent_42%)]" />
      <div className="absolute right-10 top-10 flex h-18 w-18 items-center justify-center rounded-full border border-fuchsia-400/30 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_36px_rgba(168,85,247,0.35)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-fuchsia-300/45 text-[1.6rem] font-medium text-fuchsia-100 shadow-[0_0_28px_rgba(168,85,247,0.55)]">
          A
        </div>
      </div>

      <svg viewBox="0 0 420 420" className="absolute inset-0 h-full w-full opacity-95" aria-hidden="true">
        <defs>
          <linearGradient id="headLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4ff" />
            <stop offset="48%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#headLine)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
          <path d="M262 56c39 10 69 35 82 73 8 24 8 50-1 77-7 21-11 42-11 63 0 20 6 38 17 55-26 2-49-1-68-10-19-9-34-22-45-39-10-16-14-34-13-54 1-17 6-33 15-48 13-22 18-43 16-62-2-19 0-37 8-55z" fill="rgba(103, 58, 255, 0.08)" />
          <path d="M335 132c10 15 15 33 15 53 0 27-5 52-16 76" />
          <path d="M195 106c18 8 35 19 51 34 15 14 26 29 33 47 9 23 10 46 4 69" />
          <path d="M167 145c16 4 31 10 46 19 17 10 30 23 39 39 9 16 13 34 12 53" />
          <path d="M312 110c-2 17-9 32-21 43-12 12-26 20-41 25-16 5-32 9-48 10" />
          <path d="M224 284c16-1 31-5 45-13 15-8 25-19 33-35" />
          <path d="M213 318c22 0 42-5 59-15 16-9 28-22 36-39" />
          <path d="M243 155c5 15 7 31 6 49-1 17-5 34-12 49" />
          <circle cx="252" cy="170" r="4.3" fill="#22d3ee" stroke="none" />
          <circle cx="236" cy="198" r="3.8" fill="#c084fc" stroke="none" />
          <circle cx="265" cy="227" r="3.8" fill="#60a5fa" stroke="none" />
          <circle cx="292" cy="181" r="3.2" fill="#f472b6" stroke="none" />
          <circle cx="214" cy="244" r="3.2" fill="#34d399" stroke="none" />
        </g>

        <g opacity="0.18" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8">
          {Array.from({ length: 14 }).map((_, index) => (
            <path
              key={index}
              d={`M${118 + index * 14} ${74 + (index % 4) * 16} Q${220 + (index % 2) * 14} ${
                136 + (index % 5) * 8
              } ${300 - index * 2} ${308 - (index % 4) * 10}`}
            />
          ))}
        </g>
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,28,0)_0%,rgba(7,8,28,0.14)_52%,rgba(7,8,28,0.84)_100%)]" />
    </div>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 19h16" />
      <path d="M7 17V7.5" />
      <path d="M12 17V5.5" />
      <path d="M17 17v-6.5" />
    </svg>
  );
}

function DevIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13 6-2 12" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M5 18h14" />
      <path d="M7.5 15.5v-3" />
      <path d="M12 15.5V8.5" />
      <path d="M16.5 15.5v-5" />
    </svg>
  );
}

function IntegrateIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3.5 19 6v5.5c0 4.2-2.8 7.1-7 8.9-4.2-1.8-7-4.7-7-8.9V6l7-2.5Z" />
      <path d="m9.4 12.1 1.7 1.7 3.8-3.9" />
    </svg>
  );
}

export default function ServicesPage() {
  const cards = [
    {
      title: "AI Strategy",
      description: serviceSlides[0].bullets[0],
      icon: <StrategyIcon />
    },
    {
      title: "AI Development",
      description: serviceSlides[3].bullets[0],
      icon: <DevIcon />
    },
    {
      title: "Data & Analytics",
      description: serviceSlides[4].bullets[0],
      icon: <DataIcon />
    },
    {
      title: "AI Integration",
      description: serviceSlides[2].bullets[0],
      icon: <IntegrateIcon />
    }
  ];

  return (
    <main className="relative overflow-hidden pt-52 text-white md:pt-56">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(46,84,255,0.14),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(140,64,255,0.18),transparent_22%),linear-gradient(180deg,#050816_0%,#040615_100%)]" />
        <div className="absolute left-[-8%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.16),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-8%] top-[14%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18),transparent_70%)] blur-3xl" />
      </div>

      <section className="section-shell pb-16 md:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={pageReveal}
          className="mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,8,28,0.98)_0%,rgba(6,7,24,0.98)_100%)] p-4 shadow-[0_20px_90px_rgba(0,0,0,0.45)] md:p-6"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)]">
            <div className="flex min-h-[28rem] flex-col justify-between px-1 py-1 md:px-4 md:py-3">
              <div className="space-y-6">
                <div className="inline-flex rounded-full border border-fuchsia-400/30 bg-[linear-gradient(90deg,#5b4cff_0%,#7c3aed_52%,#d946ef_100%)] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_24px_rgba(124,58,237,0.28)]">
                  5. Midnight Gradient
                </div>

                <div className="pt-2">
                  <div className="text-[0.74rem] uppercase tracking-[0.45em] text-white/50">
                    Services
                  </div>
                  <h1 className="mt-5 max-w-[7ch] text-balance text-[clamp(3.5rem,6.5vw,5.9rem)] font-semibold leading-[0.92] tracking-[-0.085em] text-white">
                    Our Services
                  </h1>
                  <p className="mt-7 max-w-xl text-[clamp(1.25rem,2.2vw,1.8rem)] leading-[1.5] tracking-[-0.03em] text-white/90">
                    AI solutions designed to drive innovation and growth.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {cards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    custom={index * 0.08}
                    initial="hidden"
                    animate="show"
                    variants={cardReveal}
                    className="group rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,21,46,0.9)_0%,rgba(8,10,27,0.96)_100%)] p-4 shadow-[0_16px_42px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-white/15"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.03] text-cyan-300 shadow-[0_0_24px_rgba(56,189,248,0.12)] transition group-hover:scale-105">
                      {card.icon}
                    </div>
                    <div className="mt-6 text-[1rem] font-semibold tracking-[-0.04em] text-white">
                      {card.title}
                    </div>
                    <p className="mt-3 text-[0.88rem] leading-6 text-white/62">{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center px-1 py-1 md:px-2 md:py-2">
              <HeadGraphic />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
