"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { serviceSlides } from "@/components/services-data";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

type FeatureCard = {
  title: string;
  description: string;
  accent: string;
  icon: React.ReactNode;
};

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M8.5 5.5a2.8 2.8 0 0 1 5 1.8 2.8 2.8 0 0 1 1.5 5.2 2.8 2.8 0 0 1-1.3 4.9H9.2A3.2 3.2 0 0 1 6 14.2V9.7A3.2 3.2 0 0 1 8.5 5.5Z" />
      <path d="M9 9.5c1.3-.7 2.8-.7 4.1 0" />
      <path d="M10 14.5h4" />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 12v9" />
      <path d="M4 7.5 12 12l8-4.5" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 19.5h16" />
      <path d="M7 16V11" />
      <path d="M12 16V7.5" />
      <path d="M17 16v-4.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3.5 19 6v5.8c0 4.4-3 7.4-7 9.2-4-1.8-7-4.8-7-9.2V6l7-2.5Z" />
      <path d="m9.3 12.1 1.8 1.8 3.9-4" />
    </svg>
  );
}

function HeadGraphic() {
  return (
    <div className="relative h-full min-h-[18rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_50%_30%,rgba(115,87,255,0.2),transparent_34%),radial-gradient(circle_at_60%_38%,rgba(0,217,255,0.12),transparent_24%),linear-gradient(180deg,rgba(6,11,36,0.92)_0%,rgba(8,7,28,0.98)_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_55%)]" />
      <div className="absolute right-5 top-5 flex h-16 w-16 items-center justify-center rounded-full border border-fuchsia-400/30 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_30px_rgba(167,139,250,0.35)]">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-fuchsia-300/40 text-2xl text-fuchsia-100 shadow-[0_0_24px_rgba(168,85,247,0.5)]">
          A
        </div>
      </div>
      <svg viewBox="0 0 420 420" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="servicesHeadStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4ff" />
            <stop offset="45%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#servicesHeadStroke)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
          <path d="M263 54c42 8 74 35 86 76 7 25 5 49-6 74-8 18-12 37-13 55-1 22 6 42 18 62-32 2-58-2-78-14-19-11-33-24-41-41-9-18-11-37-8-58 2-16 9-32 19-46 13-19 19-38 17-57-3-19-1-36 6-51z" fill="rgba(99, 52, 255, 0.08)" />
          <path d="M235 83c-30 8-54 25-72 52-17 26-25 56-24 90 1 26 8 51 21 76 15 29 36 50 61 63 13 7 28 11 46 13" />
          <path d="M338 135c11 16 17 35 18 56 1 28-5 54-18 79" />
          <path d="M181 107c20 8 39 20 57 35 16 14 28 30 36 50 10 25 11 49 5 72" />
          <path d="M165 147c17 3 33 9 49 18 18 10 33 24 43 42 10 18 15 37 14 57" />
          <path d="M318 110c-2 18-10 33-24 46-13 12-27 20-43 25-17 5-33 8-49 10" />
          <path d="M243 153c5 15 8 32 7 52-1 18-5 35-13 50" />
          <path d="M220 282c18-1 34-6 49-15 15-9 27-21 35-38" />
          <circle cx="254" cy="168" r="4.5" fill="#22d3ee" stroke="none" />
          <circle cx="235" cy="198" r="4" fill="#c084fc" stroke="none" />
          <circle cx="265" cy="228" r="4" fill="#60a5fa" stroke="none" />
          <circle cx="292" cy="180" r="3.5" fill="#f472b6" stroke="none" />
          <circle cx="214" cy="244" r="3.5" fill="#34d399" stroke="none" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,28,0)_0%,rgba(8,10,28,0.2)_58%,rgba(7,8,24,0.86)_100%)]" />
    </div>
  );
}

export default function ServicesPage() {
  const cards: FeatureCard[] = [
    {
      title: "AI Strategy",
      description: "Custom AI roadmaps for your business.",
      accent: "from serviceSlides[0]",
      icon: <BrainIcon />
    },
    {
      title: "AI Development",
      description: "Build intelligent solutions.",
      accent: "from serviceSlides[1]",
      icon: <CubeIcon />
    },
    {
      title: "Data & Analytics",
      description: "Turn data into actionable insights.",
      accent: "from serviceSlides[3]",
      icon: <ChartIcon />
    },
    {
      title: "AI Integration",
      description: "Seamless integration with your systems.",
      accent: "from serviceSlides[2]",
      icon: <ShieldIcon />
    }
  ];

  const extraService = serviceSlides[4];

  return (
    <main className="relative min-h-screen overflow-hidden pt-52 text-white md:pt-56">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(42,88,255,0.16),transparent_26%),radial-gradient(circle_at_70%_20%,rgba(146,73,255,0.18),transparent_22%),linear-gradient(180deg,#040611_0%,#040615_48%,#050016_100%)]" />
        <div className="absolute left-[-10%] top-[-12%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22),transparent_70%)] blur-3xl" />
      </div>

      <section className="section-shell pb-16 md:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={reveal}
          className="overflow-hidden rounded-[1.45rem] border border-white/12 bg-[linear-gradient(180deg,rgba(7,10,30,0.96)_0%,rgba(8,6,27,0.98)_100%)] p-4 shadow-[0_18px_80px_rgba(0,0,0,0.45)] md:p-6"
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
            <div className="flex flex-col justify-between gap-8 px-1 py-1 md:px-2 md:py-2">
              <div className="space-y-5">
                <div className="inline-flex rounded-full border border-fuchsia-400/30 bg-[linear-gradient(90deg,#4f46e5_0%,#7c3aed_52%,#d946ef_100%)] px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_22px_rgba(124,58,237,0.26)]">
                  5. Midnight Gradient
                </div>

                <div className="space-y-4 pt-1">
                  <div className="text-[0.72rem] uppercase tracking-[0.42em] text-white/55">
                    Services
                  </div>
                  <h1 className="max-w-[8ch] text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.08em] text-white md:text-6xl xl:text-[4.55rem]">
                    Our Services
                  </h1>
                  <p className="max-w-lg text-lg leading-8 text-white/76 md:text-[1.35rem] md:leading-9">
                    AI solutions designed to drive innovation and growth.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-4">
                {cards.map((card) => (
                  <div
                    key={card.title}
                    className="group rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,18,42,0.9)_0%,rgba(8,10,26,0.96)_100%)] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/25"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/[0.03] text-cyan-300 shadow-[0_0_28px_rgba(59,130,246,0.12)] transition group-hover:scale-105">
                      {card.icon}
                    </div>
                    <div className="text-sm font-semibold text-white">{card.title}</div>
                    <p className="mt-2 text-xs leading-5 text-white/58">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center xl:py-2">
              <HeadGraphic />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={reveal}
              className="rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,16,38,0.95)_0%,rgba(8,10,26,0.96)_100%)] p-4 shadow-[0_16px_50px_rgba(0,0,0,0.26)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/[0.03] text-cyan-300">
                  {card.icon}
                </div>
                <div>
                  <div className="text-[0.7rem] uppercase tracking-[0.28em] text-white/38">
                    0{index + 1}
                  </div>
                  <div className="text-sm font-semibold text-white">{card.title}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/60">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/42">
              More services
            </div>
            <div className="mt-4 rounded-[1rem] border border-white/10 bg-black/10 p-4">
              <div className="text-sm font-semibold text-white">{extraService.title}</div>
              <p className="mt-2 text-sm leading-6 text-white/62">{extraService.summary}</p>
            </div>
          </div>
          <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(91,140,255,0.12)_0%,rgba(8,10,26,0.96)_100%)] p-5 md:p-6">
            <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/42">
              Interaction
            </div>
            <p className="mt-4 text-sm leading-7 text-white/66">
              The layout above is intentionally tuned to match the reference composition: one
              cinematic hero, one illustration panel, and one row of premium service cards.
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex rounded-full border border-white/12 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/78 transition hover:border-white/22 hover:bg-white/[0.04]"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
