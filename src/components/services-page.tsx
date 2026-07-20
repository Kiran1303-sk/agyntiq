"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { serviceSlides } from "@/components/services-data";

const ease = [0.22, 1, 0.36, 1] as const;

const pageFade = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease }
  }
};

const cardStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const cardReveal = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease }
  }
};

function NeonHeadGraphic() {
  return (
    <div className="relative flex h-full min-h-[18rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(129,59,255,0.18),transparent_42%),radial-gradient(circle_at_50%_20%,rgba(0,196,255,0.16),transparent_30%),linear-gradient(180deg,rgba(7,12,32,0.92)_0%,rgba(10,8,34,0.98)_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_55%)]" />
      <div className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-full border border-fuchsia-400/30 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_28px_rgba(122,72,255,0.35)]">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-fuchsia-300/45 text-2xl font-medium text-fuchsia-100 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          A
        </div>
      </div>

      <svg
        viewBox="0 0 420 420"
        className="absolute inset-0 h-full w-full opacity-95"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="headStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#20d4ff" />
            <stop offset="45%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <radialGradient id="headGlow" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        <circle cx="260" cy="140" r="138" fill="url(#headGlow)" />

        <g fill="none" stroke="url(#headStroke)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M263 54c42 8 74 35 86 76 7 25 5 49-6 74-8 18-12 37-13 55-1 22 6 42 18 62-32 2-58-2-78-14-19-11-33-24-41-41-9-18-11-37-8-58 2-16 9-32 19-46 13-19 19-38 17-57-3-19-1-36 6-51z"
            fill="rgba(112, 49, 255, 0.08)"
          />
          <path d="M235 83c-30 8-54 25-72 52-17 26-25 56-24 90 1 26 8 51 21 76 15 29 36 50 61 63 13 7 28 11 46 13" />
          <path d="M338 135c11 16 17 35 18 56 1 28-5 54-18 79" />
          <path d="M181 107c20 8 39 20 57 35 16 14 28 30 36 50 10 25 11 49 5 72" />
          <path d="M165 147c17 3 33 9 49 18 18 10 33 24 43 42 10 18 15 37 14 57" />
          <path d="M318 110c-2 18-10 33-24 46-13 12-27 20-43 25-17 5-33 8-49 10" />
          <path d="M220 282c18-1 34-6 49-15 15-9 27-21 35-38" />
          <path d="M210 317c24 0 47-6 67-19 17-11 31-25 41-42" />
          <path d="M243 153c5 15 8 32 7 52-1 18-5 35-13 50" />
          <circle cx="254" cy="168" r="4.5" fill="#22d3ee" stroke="none" />
          <circle cx="235" cy="198" r="4" fill="#c084fc" stroke="none" />
          <circle cx="265" cy="228" r="4" fill="#60a5fa" stroke="none" />
          <circle cx="292" cy="180" r="3.5" fill="#f472b6" stroke="none" />
          <circle cx="214" cy="244" r="3.5" fill="#34d399" stroke="none" />
        </g>

        <g opacity="0.24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8">
          {Array.from({ length: 18 }).map((_, index) => (
            <path
              key={index}
              d={`M${105 + index * 14} ${70 + (index % 4) * 18} Q${220 + (index % 3) * 10} ${
                135 + (index % 5) * 8
              } ${300 - index * 2} ${310 - (index % 4) * 10}`}
            />
          ))}
        </g>
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,28,0)_0%,rgba(8,10,28,0.18)_55%,rgba(7,8,24,0.88)_100%)]" />
    </div>
  );
}

export default function ServicesPage() {
  const featuredServices = serviceSlides.slice(0, 4);
  const extraServices = serviceSlides.slice(4);

  return (
    <main className="relative overflow-hidden pt-52 text-white md:pt-56">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#040718_0%,#050a1f_42%,#07041a_100%)]" />
        <div className="absolute left-[-8%] top-[-6%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.22),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(154,60,255,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-14%] left-[18%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(0,217,255,0.15),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.02)_100%)]" />
      </div>

      <section className="section-shell pb-14 md:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={pageFade}
          className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,34,0.95)_0%,rgba(7,10,28,0.98)_100%)] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        >
          <div className="grid gap-8 p-5 md:p-7 xl:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] xl:p-8">
            <div className="flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <div className="inline-flex rounded-full border border-fuchsia-400/30 bg-[linear-gradient(90deg,rgba(91,140,255,0.9)_0%,rgba(147,51,234,0.92)_50%,rgba(236,72,153,0.92)_100%)] px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_30px_rgba(147,51,234,0.25)]">
                  5. Midnight Gradient
                </div>

                <div className="space-y-4">
                  <div className="text-[0.72rem] uppercase tracking-[0.42em] text-white/52">
                    Services
                  </div>
                  <h1 className="max-w-[8ch] text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.08em] text-white md:text-6xl xl:text-[4.5rem]">
                    Our Services
                  </h1>
                  <p className="max-w-lg text-lg leading-8 text-white/78 md:text-[1.35rem] md:leading-9">
                    AI solutions designed to drive innovation and growth.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { value: String(serviceSlides.length).padStart(2, "0"), label: "Service tracks" },
                  { value: String(serviceSlides[0].bullets.length + serviceSlides[1].bullets.length).padStart(2, "0"), label: "Deep capabilities" },
                  { value: String(featuredServices.length).padStart(2, "0"), label: "Featured cards" }
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
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

            <div className="xl:pt-4">
              <NeonHeadGraphic />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={cardStagger}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {featuredServices.map((service, index) => (
            <motion.article
              key={service.number}
              variants={cardReveal}
              className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,18,40,0.96)_0%,rgba(8,10,24,0.96)_100%)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(0,217,255,0.12),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between text-[0.72rem] uppercase tracking-[0.32em] text-white/40">
                  <span>{service.eyebrow}</span>
                  <span>0{index + 1}</span>
                </div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.04] text-2xl text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.16)]">
                  {index + 1}
                </div>
                <h2 className="text-xl font-semibold tracking-[-0.05em] text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/64">{service.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-white/54"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-100/80 transition group-hover:text-white"
                >
                  View service
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {extraServices.length > 0 && (
        <section className="section-shell pb-16 md:pb-24">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/42">
                Extended service stack
              </div>
              <div className="mt-4 space-y-4">
                {extraServices.map((service) => (
                  <Link
                    key={service.number}
                    href="/services"
                    className="block rounded-[1.2rem] border border-white/10 bg-black/10 p-5 transition hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <div className="text-[0.72rem] uppercase tracking-[0.32em] text-white/32">
                      {service.number}
                    </div>
                    <div className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">
                      {service.title}
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/62">
                      {service.subtitle}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(91,140,255,0.12)_0%,rgba(7,10,24,0.95)_60%)] p-6 md:p-8">
              <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/42">
                Motion note
              </div>
              <p className="mt-4 text-lg leading-8 text-white/76">
                The visual system now mirrors the reference: a bold midnight hero, glowing accent
                pills, and premium cards with soft neon depth.
              </p>
              <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-black/15 p-5">
                <div className="text-sm uppercase tracking-[0.3em] text-white/38">
                  Interaction
                </div>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  Cards lift on hover, the hero keeps a steady glow, and the entire page is tuned
                  to feel like a polished product showcase.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
