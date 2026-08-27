"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  ["Opportunity mapping", "Find the highest-value AI opportunities across departments"],
  ["ROI clarity", "Build a defensible business case for investment"],
  ["Operating model", "Create the governance and delivery model to scale"],
  ["Responsible adoption", "Prepare people, policies, and controls for change"]
] as const;

const stages = [
  {
    title: "Opportunity Identification",
    eyebrow: "Discover",
    description:
      "Identify where AI can create measurable value across the organization and build a clear view of current maturity.",
    output: "Prioritized AI opportunity portfolio",
    points: ["Enterprise opportunity mapping", "AI use-case workshops", "AI maturity assessment"]
  },
  {
    title: "ROI & Business Case Design",
    eyebrow: "Justify",
    description:
      "Translate the strongest opportunities into investment cases that make value, cost, and prioritization easy for leaders to evaluate.",
    output: "ROI-backed AI investment case",
    points: ["AI ROI modeling", "Cost-benefit simulation", "Investment prioritization"]
  },
  {
    title: "Operating Model Design",
    eyebrow: "Enable",
    description:
      "Design the practical structure needed to govern, deliver, and scale AI initiatives across teams and business functions.",
    output: "Enterprise AI operating model",
    points: ["AI governance framework", "Center of Excellence setup", "Enterprise operating model"]
  },
  {
    title: "Risk & Compliance Assessment",
    eyebrow: "Protect",
    description:
      "Prepare the organization for responsible AI with a clear assessment of ethics, regulation, bias, policy, and control requirements.",
    output: "Responsible AI readiness framework",
    points: [
      "Ethics and regulatory readiness",
      "Responsible AI policy design",
      "Risk and bias assessment"
    ]
  },
  {
    title: "Transformation & Adoption Roadmap",
    eyebrow: "Scale",
    description:
      "Turn the strategy into a realistic three-to-five-year transformation path that connects capability building with workforce adoption.",
    output: "3–5 year AI transformation roadmap",
    points: ["AI capability building", "Workforce adoption strategy", "Phased transformation plan"]
  }
] as const;

const outcomes = [
  "A ranked view of enterprise AI opportunities",
  "Business cases leaders can confidently fund",
  "An operating model for accountable AI delivery",
  "Responsible AI policies and risk visibility",
  "A practical three-to-five-year adoption roadmap"
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

function StageIcon({ index }: { index: number }) {
  const paths = [
    <path key="opportunity" d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5M12 7v5l3.5 2M20.5 3.5v5h-5" />,
    <path
      key="business"
      d="M4 19.5V9.5h16v10M8 9.5V6h8v3.5M2.5 19.5h19M8 13h.01M12 13h.01M16 13h.01M8 16h.01M12 16h.01M16 16h.01"
    />,
    <path
      key="operating"
      d="M12 4v16M4 8h16M4 16h16M6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4Z"
    />,
    <path
      key="risk"
      d="m12 3 8 4.5v6c0 4.2-3.2 6.8-8 7.5-4.8-.7-8-3.3-8-7.5v-6L12 3Zm0 4.5v5m0 3.5h.01"
    />,
    <path key="roadmap" d="M4 18.5h16M5.5 15l4-4 3 2 6-7M15 6h3.5v3.5" />
  ];

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        {paths[index]}
      </g>
    </svg>
  );
}

export default function StrategyReadinessPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050719] text-white">
      <SiteHeader mode="services" />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_8%,rgba(202,74,255,0.15),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(46,108,235,0.13),transparent_30%),linear-gradient(180deg,#050719,#0b0825_48%,#050719)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(240,171,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(240,171,252,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(240,171,252,0.42),transparent)]" />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -16, 0], opacity: [0.25, 0.48, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[6%] top-[12rem] h-72 w-72 rounded-full bg-fuchsia-400/[0.08] blur-[100px]"
      />

      <section className="section-shell relative pt-36 pb-16 md:pt-44 md:pb-24">
        <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-5xl">
          <div>
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-fuchsia-100/78"
            >
              <span className="h-0.5 w-12 rounded-full bg-fuchsia-200 shadow-[0_0_12px_rgba(240,171,252,0.9)]" />
              Service 01 / AI Strategy
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.94] tracking-normal text-white md:text-7xl"
            >
              Build the right AI strategy before you build AI products.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-white/64 md:text-xl"
            >
              A premium strategy engagement that turns AI ambition into business priorities,
              operating clarity, risk control, and an adoption roadmap leaders can fund with
              confidence.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#roadmap"
                className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(100deg,#2e6ceb,#7547df,#c23bd9)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(126,87,255,0.25)] transition hover:-translate-y-0.5"
              >
                <span>Explore strategy system</span>
                <span className="transition group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full border border-fuchsia-200/22 bg-[#180d32]/65 px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-fuchsia-200/45 hover:bg-fuchsia-300/[0.08] hover:text-white"
              >
                Start readiness review
              </Link>
            </motion.div>
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
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.25, ease }}
              className="group relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[linear-gradient(145deg,rgba(12,8,38,0.82),rgba(7,8,28,0.72))] p-5 transition duration-300 hover:border-fuchsia-200/30 hover:bg-fuchsia-300/[0.06]"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(240,171,252,0.7),transparent)] opacity-0 transition group-hover:opacity-100" />
              <span className="absolute right-4 top-4 text-xs font-semibold text-fuchsia-200/32">
                0{index + 1}
              </span>
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
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-200/55">
              Strategy command system
            </div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl">
              Five connected services for moving from AI ambition to adoption.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/52 md:justify-self-end">
            A structured engagement for identifying the right opportunities, proving their value,
            building the operating foundation, managing risk, and preparing the organization to
            scale.
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
              className="group relative grid gap-6 overflow-hidden rounded-[1.5rem] bg-[linear-gradient(120deg,rgba(10,8,36,0.94),rgba(7,8,28,0.82))] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(117,71,223,0.18)] md:grid-cols-[5rem_minmax(0,1fr)_18rem] md:items-center md:p-7"
            >
              <span className="service-card-corner-border" aria-hidden="true" />
              <div className="relative">
                <div className="grid h-16 w-16 place-items-center rounded-[1.2rem] border border-fuchsia-200/25 bg-[linear-gradient(145deg,rgba(117,71,223,0.38),rgba(46,108,235,0.2))] text-fuchsia-100 shadow-[0_0_34px_rgba(117,71,223,0.16)] transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-fuchsia-100/50">
                  <StageIcon index={index} />
                </div>
              </div>
              <div>
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-fuchsia-200/55">
                  {stage.eyebrow}
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-normal text-white md:text-3xl">
                  {stage.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
                  {stage.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stage.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-fuchsia-200/25 bg-fuchsia-300/[0.06] px-3 py-1.5 text-xs font-semibold text-white/78 shadow-[0_0_18px_rgba(202,74,255,0.06)] transition group-hover:border-fuchsia-200/45 group-hover:bg-fuchsia-300/[0.1] group-hover:text-white"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative md:self-stretch md:flex md:flex-col md:justify-center md:pl-5">
                <div className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-fuchsia-200/55">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-fuchsia-300/[0.12] text-fuchsia-100 shadow-[0_0_18px_rgba(202,74,255,0.18)]">✓</span>
                  Output
                </div>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/84">{stage.output}</p>
                <span className="mt-4 block h-px w-16 bg-gradient-to-r from-fuchsia-300/80 to-transparent transition-all duration-500 group-hover:w-28" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="impact" className="section-shell scroll-mt-28 pb-20 md:pb-28">
        <div className="grid gap-8 rounded-[1.6rem] border border-fuchsia-200/16 bg-[linear-gradient(135deg,rgba(24,13,50,0.78),rgba(7,8,28,0.86))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.24)] md:grid-cols-[0.8fr_1.2fr] md:p-8 lg:p-10">
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-200/58">
              Business impact
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl">
              The outcome is a roadmap your organization can act on.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-3 rounded-[1rem] border border-white/[0.07] bg-[#080b25]/64 p-4"
              >
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
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/62">
              The result
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal md:text-5xl">
              Start with the right opportunities. Build the right foundation. Move with confidence.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/74">
              AI Strategy &amp; Readiness gives leaders the evidence, structure, safeguards, and
              long-term direction required to make AI adoption durable.
            </p>
            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#3f207f] transition hover:-translate-y-0.5"
            >
              Talk through your readiness <ArrowIcon />
            </Link>
          </div>
        </div>
        <Link
          href="/services"
          className="mt-7 inline-flex items-center text-sm font-semibold text-white/52 transition hover:text-fuchsia-100"
        >
          Back to services <span className="ml-2">-&gt;</span>
        </Link>
      </section>

      <ServiceFooter />
      <ScrollToTopButton />
    </main>
  );
}
