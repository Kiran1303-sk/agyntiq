"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import SiteHeader from "@/components/site-header";
import ServiceFooter from "@/components/service-footer";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease }
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

const signals = [
  ["Business value", "ROI cases ranked by impact"],
  ["Operating model", "Ownership, cadence, and governance"],
  ["Data readiness", "Process, risk, and quality view"],
  ["Adoption path", "Phased rollout with quick wins"]
] as const;

const stages = [
  {
    number: "01",
    title: "Opportunity Lens",
    eyebrow: "Discover",
    description: "Map the business moments where AI can create measurable lift, reduce friction, or unlock new capacity.",
    output: "Prioritized opportunity portfolio",
    points: ["Process discovery", "Use case scoring", "Value sizing"]
  },
  {
    number: "02",
    title: "Investment Case",
    eyebrow: "Validate",
    description: "Convert shortlisted opportunities into clear business cases with cost, impact, dependency, and payback logic.",
    output: "ROI backed decision pack",
    points: ["Benefit model", "Cost view", "Executive narrative"]
  },
  {
    number: "03",
    title: "AI Operating Model",
    eyebrow: "Design",
    description: "Define the people, governance, tooling, controls, and delivery rhythms required to move AI safely into work.",
    output: "Target operating model",
    points: ["Ownership model", "Governance design", "Delivery rituals"]
  },
  {
    number: "04",
    title: "Risk Architecture",
    eyebrow: "Control",
    description: "Surface privacy, compliance, explainability, security, and adoption risks before projects become expensive.",
    output: "Responsible AI risk register",
    points: ["Risk map", "Control design", "Compliance checks"]
  },
  {
    number: "05",
    title: "Transformation Roadmap",
    eyebrow: "Scale",
    description: "Turn strategy into a sequenced plan that connects pilots, platforms, teams, data foundations, and business value.",
    output: "90 day and multi quarter roadmap",
    points: ["Quick wins", "Capability plan", "Scale sequence"]
  }
] as const;

const outcomes = [
  "Clearer AI investment decisions",
  "A shared roadmap for leaders and teams",
  "Lower risk before build begins",
  "Faster movement from idea to funded initiative",
  "A practical model for long term adoption"
] as const;

const chapterLinks = [
  ["01", "Signals", "#signals"],
  ["02", "Strategy system", "#roadmap"],
  ["03", "Business impact", "#impact"]
] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-[linear-gradient(90deg,#2e6ceb,#c23bd9,#f0abfc)] shadow-[0_0_14px_rgba(194,59,217,0.8)]"
    />
  );
}

export default function StrategyReadinessPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050719] text-white">
      <SiteHeader mode="services" />
      <ScrollProgress />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_8%,rgba(202,74,255,0.15),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(46,108,235,0.13),transparent_30%),linear-gradient(180deg,#050719,#0b0825_48%,#050719)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(240,171,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(240,171,252,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(240,171,252,0.42),transparent)]" />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -16, 0], opacity: [0.25, 0.48, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[6%] top-[12rem] h-72 w-72 rounded-full bg-fuchsia-400/[0.08] blur-[100px]"
      />

      <section className="section-shell relative pt-36 pb-16 md:pt-44 md:pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
          className="pointer-events-none absolute -left-20 top-32 h-56 w-56 rounded-full border border-fuchsia-200/10 shadow-[0_0_100px_rgba(117,71,223,0.16)]"
        />
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-5xl"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-fuchsia-100/78">
              <span className="h-0.5 w-12 rounded-full bg-fuchsia-200 shadow-[0_0_12px_rgba(240,171,252,0.9)]" />
              Service 01 / AI Strategy
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.94] tracking-normal text-white md:text-7xl">
              Build the right AI strategy before you build AI products.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-white/64 md:text-xl">
              A premium strategy engagement that turns AI ambition into business priorities, operating clarity, risk control, and an adoption roadmap leaders can fund with confidence.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link href="#roadmap" className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(100deg,#2e6ceb,#7547df,#c23bd9)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(126,87,255,0.25)] transition hover:-translate-y-0.5">
                <span>Explore strategy system</span>
                <span className="transition group-hover:translate-x-1"><ArrowIcon /></span>
              </Link>
              <Link href="/#contact" className="inline-flex items-center rounded-full border border-fuchsia-200/22 bg-[#180d32]/65 px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-fuchsia-200/45 hover:bg-fuchsia-300/[0.08] hover:text-white">
                Start readiness review
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 grid max-w-3xl gap-px overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/10 sm:grid-cols-3">
              {[
                ["01", "Value first", "Prioritize what matters"],
                ["02", "Built to scale", "Design the operating model"],
                ["03", "Ready to move", "Leave with a roadmap"]
              ].map(([number, title, text]) => (
                <div key={number} className="group bg-[#080b25]/90 p-4 transition hover:bg-fuchsia-300/[0.07] sm:p-5">
                  <div className="flex items-center justify-between text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-fuchsia-200/48">
                    <span>{number}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-200 shadow-[0_0_10px_rgba(240,171,252,0.9)] transition group-hover:scale-150" />
                  </div>
                  <div className="mt-5 text-sm font-semibold text-white">{title}</div>
                  <div className="mt-1 text-xs leading-5 text-white/45">{text}</div>
                </div>
              ))}
            </motion.div>

            <motion.nav variants={fadeUp} aria-label="Page chapters" className="mt-7 flex flex-wrap gap-2">
              {chapterLinks.map(([number, title, href]) => (
                <Link key={title} href={href} className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs font-semibold text-white/55 transition hover:-translate-y-0.5 hover:border-fuchsia-200/35 hover:bg-fuchsia-300/[0.08] hover:text-white">
                  <span className="text-[0.6rem] text-fuchsia-200/45 transition group-hover:text-fuchsia-100">{number}</span>
                  <span>{title}</span>
                  <ArrowIcon />
                </Link>
              ))}
            </motion.nav>
          </div>
        </motion.div>
      </section>

      <section id="signals" className="section-shell scroll-mt-28 pb-20 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="grid gap-4 md:grid-cols-4"
        >
          {signals.map(([title, text], index) => (
            <motion.div key={title} variants={fadeUp} whileHover={{ y: -7 }} transition={{ duration: 0.25, ease }} className="group relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[linear-gradient(145deg,rgba(12,8,38,0.82),rgba(7,8,28,0.72))] p-5 transition duration-300 hover:border-fuchsia-200/30 hover:bg-fuchsia-300/[0.06]">
              <span className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(240,171,252,0.7),transparent)] opacity-0 transition group-hover:opacity-100" />
              <span className="absolute right-4 top-4 text-xs font-semibold text-fuchsia-200/32">0{index + 1}</span>
              <div className="grid h-10 w-10 place-items-center rounded-[0.8rem] bg-fuchsia-300/[0.08] text-fuchsia-100 shadow-[0_0_24px_rgba(202,74,255,0.12)]">
                <CheckIcon />
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-normal text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/52">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="roadmap" className="section-shell scroll-mt-28 pb-20 md:pb-28">
        <div className="mb-10 grid gap-4 md:grid-cols-[0.8fr_1fr] md:items-end">
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-200/55">Strategy command system</div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl">
              A five layer interface for making AI investment decisions.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/52 md:justify-self-end">
            The workflow is redesigned as a decision system, not a checklist. Each layer clarifies where to invest, how to operate, what to control, and how to scale.
          </p>
        </div>

        <div className="grid gap-5">
          {stages.map((stage, index) => (
            <motion.article
              key={stage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.65, delay: index * 0.08, ease }}
              className="group grid gap-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(120deg,rgba(10,8,36,0.94),rgba(7,8,28,0.82))] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1 hover:border-fuchsia-200/30 hover:shadow-[0_28px_90px_rgba(117,71,223,0.18)] md:grid-cols-[6rem_minmax(0,1fr)_18rem] md:items-center md:p-7"
            >
              <div className="relative">
                <div className="grid h-16 w-16 place-items-center rounded-[1.1rem] border border-fuchsia-200/20 bg-[linear-gradient(145deg,rgba(117,71,223,0.36),rgba(46,108,235,0.18))] text-xl font-semibold text-white shadow-[0_0_34px_rgba(117,71,223,0.16)]">
                  {stage.number}
                </div>
                {index < stages.length - 1 && <span className="absolute left-8 top-16 hidden h-12 w-px bg-fuchsia-300/18 md:block" />}
              </div>
              <div>
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-fuchsia-200/55">{stage.eyebrow}</div>
                <h3 className="mt-2 text-2xl font-semibold tracking-normal text-white md:text-3xl">{stage.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{stage.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stage.points.map((point) => (
                    <span key={point} className="rounded-full border border-fuchsia-200/12 bg-fuchsia-300/[0.045] px-3 py-1.5 text-xs font-semibold text-white/62 transition group-hover:border-fuchsia-200/24 group-hover:text-white/82">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.1rem] border border-white/[0.08] bg-white/[0.04] p-5">
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-fuchsia-200/48">Output</div>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/84">{stage.output}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="impact" className="section-shell scroll-mt-28 pb-20 md:pb-28">
        <div className="grid gap-8 rounded-[1.6rem] border border-fuchsia-200/16 bg-[linear-gradient(135deg,rgba(24,13,50,0.78),rgba(7,8,28,0.86))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.24)] md:grid-cols-[0.8fr_1.2fr] md:p-8 lg:p-10">
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-200/58">Business impact</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl">
              The outcome is clarity your teams can act on.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-3 rounded-[1rem] border border-white/[0.07] bg-[#080b25]/64 p-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-fuchsia-300/[0.1] text-fuchsia-100">
                  <CheckIcon />
                </span>
                <p className="text-sm font-semibold leading-6 text-white/72">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-28">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-[linear-gradient(105deg,#3f207f,#7547df,#4d238a)] p-7 shadow-[0_24px_90px_rgba(117,71,223,0.22)] md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(46,108,235,0.24),transparent_34%)]" />
          <div className="relative max-w-4xl">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/62">The result</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal md:text-5xl">
              Start with the right opportunities. Build the right foundation. Move with confidence.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/74">
              AI Strategy &amp; Readiness gives leaders a practical operating model, a measurable business case, and a roadmap built for adoption.
            </p>
            <Link href="/#contact" className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#3f207f] transition hover:-translate-y-0.5">
              Talk through your readiness <ArrowIcon />
            </Link>
          </div>
        </div>
        <Link href="/services" className="mt-7 inline-flex items-center text-sm font-semibold text-white/52 transition hover:text-fuchsia-100">
          Back to all services <span className="ml-2">-&gt;</span>
        </Link>
      </section>

      <ServiceFooter />
      <ScrollToTopButton />
    </main>
  );
}
