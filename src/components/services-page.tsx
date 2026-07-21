"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteHeader from "@/components/site-header";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease }
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

const primaryButton =
  "group relative overflow-hidden rounded-full border border-fuchsia-300/24 bg-[linear-gradient(90deg,#2E6CEB_0%,#7547DF_48%,#C23BD9_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(126,87,255,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(194,59,217,0.34)]";

const secondaryButton =
  "group rounded-full border border-fuchsia-200/22 bg-[#080b25]/78 px-6 py-3 text-sm font-semibold text-white/84 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-0.5 hover:border-fuchsia-200/44 hover:bg-fuchsia-300/[0.08] hover:text-white";

const services = [
  {
    id: "strategy",
    number: "01",
    nav: "AI Strategy",
    title: "AI Strategy & Readiness",
    headline: "Build the Right AI Strategy Before You Build AI Products",
    description:
      "Turn AI ambition into a practical operating model, business case, and transformation roadmap before teams commit to build.",
    href: "/services/ai-strategy-readiness",
    icon: "brain",
    solutions: [
      "Opportunity Identification",
      "ROI & Business Case Design",
      "Operating Model Design",
      "Risk & Compliance Assessment",
      "Transformation Roadmap"
    ]
  },
  {
    id: "development",
    number: "02",
    nav: "AI Development",
    title: "AI Solution Development",
    headline: "Engineer Intelligent Products That Teams Actually Use",
    description:
      "Design and build AI applications, assistants, agents, and decision systems that move from prototype into enterprise workflows.",
    href: "/services/ai-solution-development",
    icon: "cube",
    solutions: [
      "Assistants & Agents",
      "GenAI Applications",
      "Predictive AI",
      "Decision Intelligence",
      "Industry Accelerators"
    ]
  },
  {
    id: "integration",
    number: "03",
    nav: "Integration",
    title: "AI Integration Services",
    headline: "Connect AI to the Systems Where Work Already Happens",
    description:
      "Embed intelligent capabilities inside enterprise tools, workflows, APIs, knowledge bases, and digital workplace surfaces.",
    href: "/services/ai-integration-services",
    icon: "link",
    solutions: [
      "Enterprise Integration",
      "Workflow Automation",
      "Knowledge Integration (RAG)",
      "API Connectivity",
      "Digital Workplace AI"
    ]
  },
  {
    id: "data",
    number: "04",
    nav: "Data",
    title: "AI Data Services",
    headline: "Prepare the Data Layer AI Needs to Stay Reliable",
    description:
      "Create governed pipelines, knowledge structures, labeling systems, and quality controls for production-grade AI.",
    href: "/services/ai-data-services",
    icon: "chart",
    solutions: [
      "AI Data Engineering",
      "Data Preparation",
      "Annotation",
      "Knowledge Architecture",
      "Governance"
    ]
  },
  {
    id: "managed",
    number: "05",
    nav: "Managed Services",
    title: "AI Managed Services",
    headline: "Keep AI Systems Monitored, Supported, and Improving",
    description:
      "Operate AI after launch with monitoring, optimization, reliability, governance, and continuous improvement services.",
    href: "/services/ai-managed-services",
    icon: "shield",
    solutions: [
      "Monitoring",
      "Optimization",
      "Reliability",
      "Governance",
      "Continuous Improvement"
    ]
  }
] as const;

const serviceVisuals = [
  {
    useCase: "Prioritize AI opportunities",
    requirement: "Business goals, process map, risk posture",
    outcome: "Roadmap with ROI-backed next steps",
    metric: "ROI clarity",
    inputs: ["Goals", "Processes", "Risks"],
    deliverables: ["Priority matrix", "AI roadmap"],
    steps: ["Discover", "Score", "Roadmap"]
  },
  {
    useCase: "Build AI products and agents",
    requirement: "User journeys, data access, acceptance criteria",
    outcome: "Production-ready AI workflow",
    metric: "Launch ready",
    inputs: ["Journeys", "Data", "Criteria"],
    deliverables: ["MVP", "Agent workflow"],
    steps: ["Prototype", "Validate", "Launch"]
  },
  {
    useCase: "Connect AI into operations",
    requirement: "APIs, tools, permissions, knowledge sources",
    outcome: "Integrated automation across systems",
    metric: "System fit",
    inputs: ["APIs", "Tools", "Access"],
    deliverables: ["Connected apps", "Automations"],
    steps: ["Connect", "Automate", "Measure"]
  },
  {
    useCase: "Prepare reliable AI data",
    requirement: "Raw data, labels, governance rules",
    outcome: "Clean knowledge layer for AI",
    metric: "Data trust",
    inputs: ["Raw data", "Labels", "Rules"],
    deliverables: ["Knowledge layer", "Quality controls"],
    steps: ["Ingest", "Structure", "Govern"]
  },
  {
    useCase: "Run and improve AI systems",
    requirement: "Monitoring, feedback, reliability metrics",
    outcome: "Stable AI operations at scale",
    metric: "Ops stability",
    inputs: ["Signals", "Feedback", "SLAs"],
    deliverables: ["Health reports", "Optimization loop"],
    steps: ["Monitor", "Optimize", "Improve"]
  }
] as const;

const journey = [
  "Curiosity",
  "Strategy",
  "Development",
  "Integration",
  "Data",
  "Optimization",
  "Business Growth"
];

const techStack = [
  "OpenAI",
  "Claude",
  "Gemini",
  "Llama",
  "LangChain",
  "LangGraph",
  "CrewAI",
  "Python",
  "FastAPI",
  "Docker",
  "Azure",
  "AWS",
  "GCP"
];

const valueCards = [
  "Enterprise Security",
  "Certified Experts",
  "Scalable Solutions",
  "Production Ready",
  "AI Governance",
  "24/7 Support"
];

const metrics = [
  { value: "500+", label: "AI Projects" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "40+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Platform Reliability" }
];

const caseStudies = [
  {
    industry: "Healthcare",
    problem: "Manual patient intake and fragmented clinical context.",
    solution: "AI workflow assistant with retrieval across records and care protocols.",
    impact: "Faster triage and more consistent documentation."
  },
  {
    industry: "Finance",
    problem: "Slow risk review across scattered financial documents.",
    solution: "Decision intelligence layer for summaries, alerts, and analyst support.",
    impact: "Higher review throughput with stronger auditability."
  },
  {
    industry: "Retail",
    problem: "Disconnected demand signals across channels.",
    solution: "Predictive analytics and recommendation workflows.",
    impact: "Improved planning and more responsive customer engagement."
  },
  {
    industry: "Manufacturing",
    problem: "Reactive maintenance and siloed operational data.",
    solution: "Predictive monitoring with integrated operations dashboards.",
    impact: "Reduced downtime and clearer production visibility."
  },
  {
    industry: "Government",
    problem: "High-volume citizen requests and slow document processing.",
    solution: "Secure AI assistant for routing, summarization, and policy retrieval.",
    impact: "Quicker service response with controlled governance."
  }
];

const faqs = [
  {
    question: "How do we know which AI service to start with?",
    answer:
      "Most teams begin with strategy and readiness, then move into development, integration, data foundation, and managed operations based on business priority."
  },
  {
    question: "Can AgyntiQ integrate with existing enterprise tools?",
    answer:
      "Yes. The integration track is designed for APIs, workflow systems, knowledge bases, and digital workplace tools your teams already use."
  },
  {
    question: "Do you support AI after launch?",
    answer:
      "Yes. Managed services cover monitoring, optimization, reliability, governance, and continuous improvement after production deployment."
  }
];

function Icon({ name }: { name: string }) {
  if (name === "brain") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M8.5 5.5a3 3 0 0 1 5.3 1.9 3 3 0 0 1 1.5 5.5 3 3 0 0 1-1.4 5H9.4A3.4 3.4 0 0 1 6 14.5V9.8a3.4 3.4 0 0 1 2.5-4.3Z" />
        <path d="M9 9.5c1.4-.8 2.9-.8 4.2 0" />
        <path d="M10 14.5h4" />
      </svg>
    );
  }

  if (name === "cube") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M12 12v9" />
        <path d="M4 7.5 12 12l8-4.5" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 19h16" />
        <path d="M7.5 16v-4" />
        <path d="M12 16V8" />
        <path d="M16.5 16v-6" />
      </svg>
    );
  }

  if (name === "link") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M9.5 14.5 14.5 9.5" />
        <path d="M8.8 9.7 7.4 11.1a4 4 0 0 0 5.6 5.7l1.3-1.4" />
        <path d="m15.2 14.3 1.4-1.4a4 4 0 0 0-5.6-5.7L9.7 8.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3.5 19 6v5.5c0 4.2-2.8 7.1-7 8.9-4.2-1.8-7-4.7-7-8.9V6l7-2.5Z" />
      <path d="m9.4 12.1 1.7 1.7 3.8-3.9" />
    </svg>
  );
}

function NeuralGraphic({ index }: { index: number }) {
  const visual = serviceVisuals[index];

  return (
    <div className="group relative min-h-[28rem] overflow-hidden rounded-[1.4rem] border border-[#4d2aad]/42 bg-[linear-gradient(135deg,rgba(5,12,38,0.96)_0%,rgba(7,8,28,0.98)_48%,rgba(42,7,46,0.96)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_24px_90px_rgba(0,0,0,0.32),0_0_34px_rgba(119,57,255,0.1)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(14,103,255,0.16),transparent_34%),radial-gradient(circle_at_78%_72%,rgba(216,62,255,0.16),transparent_34%)] opacity-90 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 2.5, 0] }}
        transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 top-24 h-56 w-56 rotate-45 rounded-[0.65rem] border border-[#1d8fff]/14 bg-[#1d8fff]/[0.025] shadow-[0_0_90px_rgba(126,87,255,0.18)]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-14 top-36 h-32 w-32 rotate-45 rounded-[0.55rem] border border-fuchsia-300/18"
      />
      <motion.div
        animate={{ x: ["-25%", "125%"] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
        className="absolute top-20 h-px w-1/2 bg-[linear-gradient(90deg,transparent,rgba(232,121,249,0.75),transparent)]"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.85, 0.3], scaleX: [0.4, 1, 0.4] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
        className="absolute left-10 right-10 top-[13.5rem] h-px origin-left bg-[linear-gradient(90deg,rgba(14,103,255,0.06),rgba(232,121,249,0.34),rgba(14,103,255,0.07))]"
      />

      <div className="relative z-10 flex h-full min-h-[25.5rem] flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] border border-fuchsia-200/22 bg-[#0c0b2c]/82 text-fuchsia-200 shadow-[0_0_42px_rgba(202,74,255,0.16)] transition duration-500 group-hover:scale-110 group-hover:text-white">
              <Icon name={services[index].icon} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200/54">
                Usage Map
              </div>
              <div className="mt-1 text-lg font-semibold text-white">{services[index].nav}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="rounded-full border border-fuchsia-300/18 bg-fuchsia-300/[0.06] px-3 py-1 text-xs font-semibold text-fuchsia-100/74">
              {services[index].number}
            </div>
            <div className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/36">
              {visual.metric}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.05rem] border border-[#4d2aad]/32 bg-[#080b25]/72 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
            <div className="flex items-center justify-between gap-3">
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/36">
                Use Case
              </div>
              <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(202,74,255,0.68)]" />
            </div>
            <div className="mt-2 text-base font-semibold leading-6 text-white">{visual.useCase}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {visual.inputs.map((input) => (
                <span
                  key={input}
                  className="rounded-full border border-[#7c5cff]/24 bg-[#061339]/46 px-3 py-1 text-[0.7rem] font-semibold text-blue-100/72"
                >
                  {input}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.05rem] border border-fuchsia-300/24 bg-[linear-gradient(135deg,rgba(18,12,50,0.66),rgba(42,7,46,0.5))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-fuchsia-200/42">
              Requirements
            </div>
            <p className="mt-2 text-sm leading-6 text-white/66">{visual.requirement}</p>
            <div className="mt-4 grid gap-2">
              {visual.deliverables.map((deliverable) => (
                <div
                  key={deliverable}
                  className="flex items-center gap-2 rounded-[0.7rem] border border-fuchsia-200/14 bg-white/[0.028] px-3 py-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                  <span className="text-xs font-semibold text-white/70">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-[1.05rem] border border-[#7c5cff]/24 bg-[linear-gradient(90deg,rgba(6,19,57,0.56),rgba(18,12,50,0.5),rgba(42,7,46,0.44))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
          <div className="grid gap-3 sm:grid-cols-[auto_1fr_auto] sm:items-center">
            <div className="rounded-full border border-[#7c5cff]/22 bg-[#061339]/56 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-blue-100/58">
              Output
            </div>
            <p className="text-sm font-semibold leading-6 text-white/78">{visual.outcome}</p>
            <div className="flex gap-1.5">
              {[0, 1, 2].map((bar) => (
                <motion.span
                  key={bar}
                  animate={{ height: ["0.45rem", "1.25rem", "0.45rem"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: bar * 0.18 }}
                  className="block w-1.5 rounded-full bg-[linear-gradient(180deg,#f0abfc,#60a5fa)]"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-5">
          <div className="relative grid grid-cols-3 gap-2">
            <div className="absolute left-[16%] right-[16%] top-6 h-px bg-[linear-gradient(90deg,rgba(14,103,255,0.08),rgba(232,121,249,0.34),rgba(14,103,255,0.08))]" />
            {visual.steps.map((step, stepIndex) => (
              <motion.div
                key={step}
                animate={{ y: [0, stepIndex % 2 === 0 ? -4 : 4, 0] }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: stepIndex * 0.25
                }}
                className="relative overflow-hidden rounded-[0.9rem] border border-[#4d2aad]/30 bg-[#0c0b2c]/78 p-3 text-center shadow-[0_12px_34px_rgba(0,0,0,0.18)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(232,121,249,0.55),transparent)]" />
                <span className="mx-auto mb-2 grid h-5 w-5 place-items-center rounded-full border border-fuchsia-300/16 bg-fuchsia-300/[0.07]">
                  <span className="block h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(202,74,255,0.64)]" />
                </span>
                <span className="text-xs font-semibold text-white/76">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {["Input", "AI Layer", "Business Value"].map((label) => (
            <div key={label} className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/32">
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <SiteHeader mode="services" />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#050c26_0%,#07081c_48%,#2a072e_100%)]" />
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-70 [background-size:170%_170%] bg-[radial-gradient(circle_at_16%_18%,rgba(14,103,255,0.16),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(216,62,255,0.15),transparent_30%),radial-gradient(circle_at_54%_86%,rgba(126,87,255,0.13),transparent_32%)]"
        />
        <motion.div
          animate={{ x: ["-18%", "18%", "-18%"], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-[120px]"
        />
        <div className="absolute -left-24 top-28 h-[34rem] w-[34rem] rotate-45 border border-[#1d8fff]/12" />
        <div className="absolute -left-8 top-40 h-[22rem] w-[22rem] rotate-45 border border-fuchsia-400/16" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:46px_46px] opacity-22" />
      </div>

      <section className="relative mx-auto grid min-h-screen w-full max-w-[1220px] items-center gap-10 px-4 pb-20 pt-36 md:px-6 lg:grid-cols-[1fr_0.92fr]">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex rounded-full border border-fuchsia-300/24 bg-[#151239]/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-100/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(202,74,255,0.12)]">
            Enterprise AI Solutions
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.98] text-white md:text-7xl">
            Transform Every Stage of Your AI Journey
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
            From AI Strategy to Enterprise Deployment and Managed AI Operations, we help
            organizations build, integrate and scale intelligent systems.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Link href="#overview" className={primaryButton}>
              <span className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.32),transparent)] transition duration-700 group-hover:translate-x-[120%]" />
              <span className="relative">Explore Services</span>
            </Link>
            <Link href="/#contact" className={secondaryButton}>
              <span>Talk to Expert</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease }} className="relative min-h-[30rem]">
          <div className="absolute inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(126,87,255,0.18),transparent_55%)] blur-2xl" />
          <motion.div
            animate={{ y: [0, -10, 0], scale: [1, 1.015, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/services-img.png"
              alt="Animated AI human illustration"
              fill
              priority
              sizes="560px"
              className="object-contain drop-shadow-[0_26px_70px_rgba(126,87,255,0.14)]"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0], opacity: [0.45, 0.9, 0.45] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-8 bottom-10 h-px bg-[linear-gradient(90deg,transparent,rgba(14,103,255,0.7),rgba(216,62,255,0.72),transparent)]"
          />
        </motion.div>
      </section>

      <nav className="sticky top-24 z-30 mx-auto w-full max-w-[1120px] px-4 md:px-6">
        <div className="overflow-x-auto rounded-full border border-[#4d2aad]/55 bg-[#0d1029]/88 p-2 shadow-[0_18px_70px_rgba(0,0,0,0.35),0_0_34px_rgba(119,57,255,0.12),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl">
          <div className="flex min-w-max gap-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-full px-4 py-2.5 text-sm font-semibold text-white/60 transition hover:bg-fuchsia-300/[0.1] hover:text-fuchsia-100 hover:shadow-[0_0_24px_rgba(202,74,255,0.16)]"
              >
                {service.nav}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="overview" className="mx-auto w-full max-w-[1120px] px-4 py-20 md:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200/60">
              Services Overview
            </div>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              Enterprise AI Services for Every Operating Layer
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-6">
            {services.map((service, index) => (
              <motion.div key={service.id} variants={fadeUp} className={index < 3 ? "md:col-span-2" : "md:col-span-3"}>
                <Link
                  href={`#${service.id}`}
                  className="group relative flex h-full min-h-[21rem] flex-col overflow-hidden rounded-[1.25rem] border border-[#4d2aad]/50 bg-[linear-gradient(135deg,rgba(5,12,38,0.9)_0%,rgba(7,8,28,0.94)_52%,rgba(42,7,46,0.88)_100%)] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-fuchsia-300/42 hover:shadow-[0_24px_90px_rgba(126,87,255,0.16)]"
                >
                  <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_0%,rgba(14,103,255,0.16),transparent_42%),radial-gradient(circle_at_90%_90%,rgba(216,62,255,0.18),transparent_38%)]" />
                  <div className="relative flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[0.9rem] border border-white/12 bg-[#151239]/72 text-fuchsia-200 shadow-[0_0_30px_rgba(202,74,255,0.14)] transition group-hover:scale-110 group-hover:text-white">
                      <Icon name={service.icon} />
                    </div>
                    <div className="text-sm font-semibold text-fuchsia-100/30">{service.number}</div>
                  </div>
                  <h3 className="relative mt-8 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="relative mt-3 text-sm leading-6 text-white/62">{service.description}</p>
                  <div className="relative mt-auto flex items-center justify-between pt-6 text-sm font-semibold text-fuchsia-200">
                    <span>{service.solutions.length} solutions</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-fuchsia-300/16 bg-fuchsia-300/[0.06] transition group-hover:translate-x-1 group-hover:border-fuchsia-200/34 group-hover:bg-fuchsia-300/[0.12]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                        <path
                          d="M5 12h13m-5-5 5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {services.map((service, index) => (
        <section key={service.id} id={service.id} className="mx-auto w-full max-w-[1120px] scroll-mt-40 px-4 py-16 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            variants={stagger}
            className={`grid gap-10 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <motion.div variants={fadeUp}>
              <NeuralGraphic index={index} />
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200/58">
                {service.number} / {service.title}
              </div>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                {service.headline}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/64">{service.description}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.solutions.map((solution) => (
                  <motion.div
                    key={solution}
                    whileHover={{ y: -5, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="group rounded-[1rem] border border-[#4d2aad]/42 bg-[linear-gradient(135deg,rgba(5,12,38,0.78)_0%,rgba(18,12,50,0.78)_52%,rgba(42,7,46,0.72)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-fuchsia-300/40 hover:bg-fuchsia-300/[0.055] hover:shadow-[0_18px_50px_rgba(202,74,255,0.1)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-[0.7rem] border border-white/10 bg-[#151239]/76 text-fuchsia-200 transition group-hover:scale-110 group-hover:text-white">
                        <Icon name={service.icon} />
                      </span>
                      <span className="text-sm font-semibold text-white">{solution}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href={service.href} className="mt-8 inline-flex rounded-full border border-fuchsia-200/22 bg-fuchsia-300/[0.055] px-5 py-3 text-sm font-semibold text-white/82 transition hover:-translate-y-0.5 hover:border-fuchsia-200/42 hover:bg-fuchsia-300/[0.1] hover:text-white">
                View detailed service
              </Link>
            </motion.div>
          </motion.div>
        </section>
      ))}

      <section className="mx-auto w-full max-w-[1120px] px-4 py-16 md:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="relative overflow-hidden rounded-[1.35rem] border border-[#4d2aad]/50 bg-[linear-gradient(135deg,rgba(5,12,38,0.9)_0%,rgba(7,8,28,0.94)_50%,rgba(42,7,46,0.88)_100%)] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28),0_0_34px_rgba(119,57,255,0.1)] md:p-8">
          <div className="absolute inset-x-10 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(14,103,255,0.45),rgba(216,62,255,0.38),transparent)]" />
          <motion.div variants={fadeUp} className="relative text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200/58">
              Customer Value
            </div>
            <h2 className="mt-4 text-4xl font-semibold text-white">From Curiosity to Business Growth</h2>
          </motion.div>
          <div className="relative mt-10 grid gap-3 md:grid-cols-7">
            {journey.map((stage, index) => (
              <motion.div
                key={stage}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-[0.9rem] border border-[#4d2aad]/42 bg-[#080b25]/86 p-4 text-center text-sm font-semibold text-white/80 transition hover:border-fuchsia-300/36 hover:text-fuchsia-50"
              >
                <span className="mx-auto mb-2 block h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(202,74,255,0.6)]" />
                {index + 1}. {stage}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto grid w-full max-w-[1120px] gap-6 px-4 py-16 md:px-6 lg:grid-cols-[1fr_0.9fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200/58">
            Tech Stack
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-semibold text-white">
            Built Across the Modern AI Ecosystem
          </motion.h2>
          <motion.div variants={stagger} className="mt-8 flex flex-wrap gap-3">
            {techStack.map((tool) => (
              <motion.div key={tool} variants={fadeUp} whileHover={{ y: -3 }} className="rounded-full border border-[#4d2aad]/42 bg-fuchsia-300/[0.045] px-4 py-2 text-sm font-semibold text-white/68 transition hover:border-fuchsia-200/36 hover:text-fuchsia-50">
                {tool}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-3 sm:grid-cols-2">
          {valueCards.map((value) => (
            <motion.div key={value} variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[1rem] border border-[#4d2aad]/42 bg-[linear-gradient(135deg,rgba(5,12,38,0.78)_0%,rgba(42,7,46,0.7)_100%)] p-5 transition hover:border-fuchsia-300/36">
              <div className="text-lg font-semibold text-white">{value}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-[1120px] px-4 py-16 md:px-6">
        <div className="grid gap-4 rounded-[1.25rem] border border-[#4d2aad]/50 bg-[linear-gradient(135deg,rgba(5,12,38,0.9)_0%,rgba(7,8,28,0.94)_50%,rgba(42,7,46,0.88)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_34px_rgba(119,57,255,0.1)] md:grid-cols-4 md:p-8">
          {metrics.map((metric) => (
            <motion.div key={metric.label} whileHover={{ y: -4 }} className="rounded-[1rem] border border-white/8 bg-[#080b25]/55 p-4 text-center transition hover:border-fuchsia-300/30">
              <div className="text-4xl font-semibold text-fuchsia-50">{metric.value}</div>
              <div className="mt-2 text-sm text-white/56">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1120px] px-4 py-16 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200/58">
              Case Studies
            </div>
            <h2 className="mt-4 text-4xl font-semibold text-white">AI Outcomes Across Industries</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {caseStudies.map((study) => (
            <motion.article
              key={study.industry}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1rem] border border-[#4d2aad]/42 bg-[linear-gradient(135deg,rgba(5,12,38,0.82)_0%,rgba(7,8,28,0.9)_52%,rgba(42,7,46,0.76)_100%)] p-5 transition hover:border-fuchsia-300/38 hover:shadow-[0_18px_60px_rgba(202,74,255,0.1)]"
            >
              <div className="text-lg font-semibold text-white">{study.industry}</div>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-fuchsia-200/36">Problem</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{study.problem}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-fuchsia-200/36">Solution</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{study.solution}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-fuchsia-200/36">Impact</p>
              <p className="mt-2 text-sm leading-6 text-fuchsia-100/78">{study.impact}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[860px] px-4 py-16 md:px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200/58">
            FAQ
          </div>
          <h2 className="mt-4 text-4xl font-semibold text-white">Enterprise AI Questions</h2>
        </div>
        <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-[1rem] border border-[#4d2aad]/50 bg-[linear-gradient(135deg,rgba(5,12,38,0.9)_0%,rgba(7,8,28,0.94)_52%,rgba(42,7,46,0.86)_100%)] shadow-[0_20px_70px_rgba(0,0,0,0.24),0_0_34px_rgba(119,57,255,0.1)]">
          {faqs.map((faq, index) => (
            <button
              key={faq.question}
              type="button"
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              className="block w-full px-5 py-5 text-left transition hover:bg-fuchsia-300/[0.045]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-white">{faq.question}</span>
                <span className="text-fuchsia-200">{openFaq === index ? "-" : "+"}</span>
              </div>
              {openFaq === index && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 text-sm leading-6 text-white/62">
                  {faq.answer}
                </motion.p>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1120px] px-4 py-20 md:px-6">
        <div className="relative overflow-hidden rounded-[1.35rem] border border-[#4d2aad]/55 bg-[linear-gradient(135deg,rgba(5,12,38,0.96)_0%,rgba(7,8,28,0.98)_48%,rgba(42,7,46,0.96)_100%)] p-8 text-center shadow-[0_26px_100px_rgba(0,0,0,0.44),0_0_34px_rgba(119,57,255,0.14)] md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(14,103,255,0.16),transparent_34%),radial-gradient(circle_at_80%_72%,rgba(216,62,255,0.16),transparent_36%)]" />
          <div className="relative">
            <h2 className="text-4xl font-semibold text-white md:text-6xl">Ready to Build Enterprise AI?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">
              Start with a consultation and turn your AI roadmap into production-grade intelligent systems.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/#contact" className={primaryButton}>
                <span className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.32),transparent)] transition duration-700 group-hover:translate-x-[120%]" />
                <span className="relative">Schedule Consultation</span>
              </Link>
              <Link href="#overview" className={secondaryButton}>
                Start Your AI Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#4d2aad]/36 bg-[#07081c]/88 px-4 py-12 md:px-6">
        <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <div className="text-2xl font-semibold text-white">AgyntiQ</div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/52">
              Enterprise AI services for strategy, development, integration, data, and managed operations.
            </p>
          </div>
          {["Company", "Solutions", "Industries", "Resources"].map((column) => (
            <div key={column}>
              <div className="text-sm font-semibold text-white">{column}</div>
              <div className="mt-4 grid gap-2 text-sm text-white/50">
                <span>Blog</span>
                <span>Careers</span>
                <span>Contact</span>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
