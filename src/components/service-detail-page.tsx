"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { servicePageOrder, type ServicePageData } from "@/components/service-pages-data";

type ServiceDetailPageProps = {
  data: ServicePageData;
};

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
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

const reveal = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease }
  }
};

function ServiceAura() {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(138,74,255,0.18),transparent_38%),radial-gradient(circle_at_50%_70%,rgba(34,211,238,0.12),transparent_26%),linear-gradient(180deg,rgba(7,10,28,0.96)_0%,rgba(7,8,24,0.98)_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.035),transparent_55%)]" />
      <div className="absolute right-5 top-5 flex h-16 w-16 items-center justify-center rounded-full border border-fuchsia-400/30 bg-white/5 text-2xl font-medium text-fuchsia-100 shadow-[0_0_28px_rgba(168,85,247,0.36)]">
        A
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,26,0)_0%,rgba(8,10,26,0.15)_50%,rgba(8,10,26,0.86)_100%)]" />
      <svg viewBox="0 0 420 420" className="absolute inset-0 h-full w-full opacity-90" aria-hidden="true">
        <defs>
          <linearGradient id="detailStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#detailStroke)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M263 54c42 8 74 35 86 76 7 25 5 49-6 74-8 18-12 37-13 55-1 22 6 42 18 62-32 2-58-2-78-14-19-11-33-24-41-41-9-18-11-37-8-58 2-16 9-32 19-46 13-19 19-38 17-57-3-19-1-36 6-51z" fill="rgba(112,49,255,0.08)" />
          <path d="M235 83c-30 8-54 25-72 52-17 26-25 56-24 90 1 26 8 51 21 76 15 29 36 50 61 63 13 7 28 11 46 13" />
          <path d="M338 135c11 16 17 35 18 56 1 28-5 54-18 79" />
          <path d="M181 107c20 8 39 20 57 35 16 14 28 30 36 50 10 25 11 49 5 72" />
          <path d="M165 147c17 3 33 9 49 18 18 10 33 24 43 42 10 18 15 37 14 57" />
          <path d="M318 110c-2 18-10 33-24 46-13 12-27 20-43 25-17 5-33 8-49 10" />
          <circle cx="254" cy="168" r="4.5" fill="#22d3ee" stroke="none" />
          <circle cx="235" cy="198" r="4" fill="#c084fc" stroke="none" />
          <circle cx="265" cy="228" r="4" fill="#60a5fa" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

export default function ServiceDetailPage({ data }: ServiceDetailPageProps) {
  const activeServiceIndex = servicePageOrder.findIndex((service) => service.label === data.title);
  const activeServiceNumber = String(activeServiceIndex + 1).padStart(2, "0");
  const nextService = servicePageOrder[(activeServiceIndex + 1) % servicePageOrder.length];

  return (
    <main className="relative min-h-screen overflow-hidden pt-52 text-white md:pt-56">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#040718_0%,#050a1f_42%,#07041a_100%)]" />
        <div className="absolute left-[-8%] top-[-6%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.22),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(154,60,255,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-14%] left-[18%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(0,217,255,0.15),transparent_70%)] blur-3xl" />
      </div>

      <section className="section-shell pb-16 md:pb-24">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="space-y-6">
            <div className="inline-flex rounded-full border border-fuchsia-400/30 bg-[linear-gradient(90deg,rgba(91,140,255,0.9)_0%,rgba(147,51,234,0.92)_50%,rgba(236,72,153,0.92)_100%)] px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_30px_rgba(147,51,234,0.25)]">
              5. Midnight Gradient
            </div>

            <div className="text-[0.72rem] uppercase tracking-[0.42em] text-white/52">
              Service {activeServiceNumber}
            </div>
            <h1 className="max-w-[11ch] text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.08em] text-white md:text-6xl xl:text-[4.9rem]">
              {data.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/76 md:text-[1.25rem] md:leading-9">
              {data.intro}
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Core mandate", value: data.eyebrow },
                { label: "Focus points", value: String(data.focusPoints.length).padStart(2, "0") },
                { label: "Deliverables", value: String(data.deliverables.length).padStart(2, "0") }
              ].map((stat) => (
                <div key={stat.label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-[0.7rem] uppercase tracking-[0.3em] text-white/38">
                    {stat.label}
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <ServiceAura />
          </motion.div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="grid gap-4 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            variants={stagger}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,34,0.95)_0%,rgba(8,10,24,0.95)_100%)] p-6 md:p-8"
          >
            <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/42">
              Summary
            </div>
            <motion.p variants={reveal} className="mt-4 max-w-2xl text-lg leading-8 text-white/74">
              {data.summary}
            </motion.p>

            <motion.div variants={reveal} className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm uppercase tracking-[0.3em] text-white/38">
                Engagement stance
              </div>
              <p className="mt-3 text-xl font-semibold leading-tight tracking-[-0.05em] text-white">
                Structured for teams that need signal, sequence, and operational momentum.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            variants={stagger}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(91,140,255,0.08)_0%,rgba(8,10,24,0.95)_72%)] p-6 md:p-8"
          >
            <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/42">
              Next up
            </div>
            <Link
              href={nextService.href}
              className="mt-4 block rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="text-[0.72rem] uppercase tracking-[0.3em] text-white/34">
                {nextService.label}
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">
                Move through the service stack
              </div>
              <p className="mt-2 text-sm leading-6 text-white/62">
                Continue to the next service page in the same visual system.
              </p>
            </Link>

            <motion.div variants={reveal} className="mt-6 rounded-[1.4rem] border border-white/10 bg-black/15 p-5">
              <div className="text-sm uppercase tracking-[0.3em] text-white/38">
                Service number
              </div>
              <div className="mt-2 text-5xl font-semibold tracking-[-0.08em] text-white">
                {activeServiceNumber}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="grid gap-4 md:grid-cols-2"
        >
          <motion.div variants={reveal} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/42">
              Focus areas
            </div>
            <div className="mt-5 space-y-3">
              {data.focusPoints.map((point, index) => (
                <div
                  key={point}
                  className="rounded-[1.1rem] border border-white/10 bg-black/10 p-4"
                >
                  <div className="text-[0.72rem] uppercase tracking-[0.3em] text-cyan-200/58">
                    0{index + 1}
                  </div>
                  <div className="mt-2 text-lg leading-7 text-white">{point}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={reveal} className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,34,0.96)_0%,rgba(7,8,24,0.98)_100%)] p-6 md:p-8">
            <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/42">
              Deliverables
            </div>
            <div className="mt-5 grid gap-3">
              {data.deliverables.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="text-[0.72rem] uppercase tracking-[0.3em] text-white/28">
                    Deliverable 0{index + 1}
                  </div>
                  <div className="mt-2 text-lg leading-7 text-white/84">{item}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
