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

const groupStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

const itemReveal = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease }
  }
};

export default function ServiceDetailPage({ data }: ServiceDetailPageProps) {
  const activeServiceIndex = servicePageOrder.findIndex((service) => service.label === data.title);
  const activeServiceNumber = String(activeServiceIndex + 1).padStart(2, "0");
  const nextService = servicePageOrder[(activeServiceIndex + 1) % servicePageOrder.length];

  return (
    <main className="relative min-h-screen overflow-hidden pt-52 text-white md:pt-56">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#060913_0%,#0a1322_48%,#060913_100%)]" />
        <div className="absolute left-[-10%] top-[-8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,217,255,0.16),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.16),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[-16%] left-[14%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.16),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(0,217,255,0.05),transparent_28%)]" />
      </div>

      <section className="section-shell pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(18rem,0.88fr)] xl:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)]">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="relative z-10">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 text-[0.72rem] uppercase tracking-[0.36em] text-cyan-200/58">
                <span>{data.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
                <span>Service {activeServiceNumber}</span>
              </div>

              <h1 className="mt-6 max-w-[11ch] text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.08em] text-white md:text-6xl xl:text-[5.9rem]">
                {data.title}
              </h1>

              <div className="mt-8 max-w-3xl border-l border-cyan-300/18 pl-5">
                <p className="text-lg leading-8 text-white/84 md:text-[1.35rem] md:leading-9">
                  {data.intro}
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <div className="glass-panel rounded-[1.6rem] p-6">
                <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/38">
                  Core mandate
                </div>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/66 md:text-lg">
                  {data.summary}
                </p>
              </div>

              <div className="glass-panel-strong rounded-[1.6rem] p-6">
                <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/38">
                  Engagement stance
                </div>
                <p className="mt-4 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.05em] text-white">
                  Structured for teams that need signal, sequence, and operational momentum.
                </p>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.025)_100%)]">
              <div className="border-b border-white/[0.08] px-6 py-5">
                <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/38">
                  Focus areas
                </div>
              </div>
              <motion.div variants={groupStagger} initial="hidden" animate="show" className="p-6">
                <div className="grid gap-4">
                  {data.focusPoints.map((point, index) => (
                    <motion.div
                      key={point}
                      variants={itemReveal}
                      className="grid gap-4 rounded-[1.2rem] border border-white/[0.08] bg-white/[0.03] p-5 md:grid-cols-[4rem_minmax(0,1fr)] md:items-start"
                    >
                      <div className="text-[0.72rem] uppercase tracking-[0.34em] text-cyan-200/58">
                        0{index + 1}
                      </div>
                      <div className="text-lg leading-8 text-white/86">{point}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.025)_100%)]">
              <div className="border-b border-white/[0.08] px-6 py-5">
                <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/38">
                  Deliverables
                </div>
              </div>
              <motion.div
                variants={groupStagger}
                initial="hidden"
                animate="show"
                className="grid gap-4 p-6 lg:grid-cols-3"
              >
                {data.deliverables.map((item, index) => (
                  <motion.div
                    key={item}
                    variants={itemReveal}
                    className="rounded-[1.2rem] border border-white/[0.08] bg-white/[0.03] p-5"
                  >
                    <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/28">
                      Deliverable 0{index + 1}
                    </div>
                    <div className="mt-4 text-lg leading-8 text-white/84">{item}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#1e69ff_0%,#23c0ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(26,124,255,0.28)] transition hover:brightness-110"
              >
                Start a conversation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white/86 transition hover:border-white/22 hover:bg-white/[0.04]"
              >
                View all services
              </Link>
            </div>
          </motion.div>

          <aside className="relative z-10 lg:pt-6">
            <div className="lg:sticky lg:top-36">
              <div className="glass-panel-strong rounded-[1.8rem] p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/38">
                    Service navigation
                  </div>
                  <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/38">
                    {activeServiceNumber}
                  </div>
                </div>

                <div className="mt-4 rounded-[1.3rem] border border-white/[0.08] bg-white/[0.03] p-4">
                  <div className="text-[0.72rem] uppercase tracking-[0.32em] text-white/34">
                    Next up
                  </div>
                  <div className="mt-3 text-xl font-semibold tracking-[-0.05em] text-white">
                    {nextService.label}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/62">
                    Move through the service stack with a single click.
                  </p>
                </div>

                <motion.div
                  variants={groupStagger}
                  initial="hidden"
                  animate="show"
                  className="mt-5 space-y-3"
                >
                  {servicePageOrder.map((service, index) => {
                    const isCurrent = service.label === data.title;

                    return (
                      <motion.div key={service.href} variants={itemReveal}>
                        <Link
                          href={service.href}
                          className={`group block rounded-[1.2rem] border p-4 transition ${
                            isCurrent
                              ? "border-cyan-300/40 bg-white/[0.06] shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
                              : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.16] hover:bg-white/[0.05]"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/26">
                                {String(index + 1).padStart(2, "0")}
                              </div>
                              <div className="mt-2 text-lg leading-7 text-white">{service.label}</div>
                            </div>
                            <div
                              className={`mt-1 h-2.5 w-2.5 rounded-full transition ${
                                isCurrent
                                  ? "bg-cyan-300 shadow-[0_0_22px_rgba(0,217,255,0.6)]"
                                  : "bg-white/20"
                              }`}
                            />
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>

                <div className="mt-6 rounded-[1.3rem] border border-white/[0.08] bg-white/[0.03] p-4">
                  <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/38">
                    Theme note
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    This version keeps the same service information, but reorganizes the page into
                    a more open, editorial rhythm with softer motion and stronger hierarchy.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
