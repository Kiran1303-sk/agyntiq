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
  return (
    <div className="relative min-h-[22rem] overflow-hidden rounded-[1.25rem] border border-indigo-400/20 bg-[linear-gradient(145deg,rgba(9,18,48,0.85),rgba(31,8,54,0.72))]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] opacity-35" />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/[0.04] shadow-[0_0_70px_rgba(59,130,246,0.22)]"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/35"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] bg-white/[0.06] text-cyan-200">
          <Icon name={services[index].icon} />
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050816_0%,#071026_48%,#050816_100%)]" />
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-45 [background-size:160%_160%] bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.16),transparent_26%),radial-gradient(circle_at_45%_85%,rgba(6,182,212,0.12),transparent_30%)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />
      </div>

      <section className="relative mx-auto grid min-h-screen w-full max-w-[1220px] items-center gap-10 px-4 pb-20 pt-36 md:px-6 lg:grid-cols-[1fr_0.92fr]">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex rounded-full border border-cyan-300/20 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
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
            <Link href="#overview" className="rounded-[0.7rem] bg-[linear-gradient(90deg,#3B82F6,#8B5CF6,#EC4899)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_52px_rgba(59,130,246,0.28)]">
              Explore Services
            </Link>
            <Link href="/#contact" className="rounded-[0.7rem] border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/86 transition hover:bg-white/[0.08]">
              Talk to Expert
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease }} className="relative min-h-[30rem]">
          <Image
            src="/services-hero.png"
            alt="Animated AI human illustration"
            fill
            priority
            sizes="560px"
            className="object-contain"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute right-[26%] top-[24%] h-28 w-28 rounded-full border border-fuchsia-300/35"
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-8 bottom-10 h-px bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.8),transparent)]"
          />
        </motion.div>
      </section>

      <nav className="sticky top-24 z-30 mx-auto w-full max-w-[1120px] px-4 md:px-6">
        <div className="overflow-x-auto rounded-[1rem] border border-indigo-400/20 bg-[#0C1226]/80 p-2 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <div className="flex min-w-max gap-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-[0.8rem] px-4 py-2.5 text-sm font-semibold text-white/60 transition hover:bg-white/[0.06] hover:text-cyan-100"
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
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/60">
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
                  className="group block h-full rounded-[1.25rem] border border-indigo-400/25 bg-white/[0.05] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[0.9rem] bg-cyan-300/[0.08] text-cyan-200 shadow-[0_0_30px_rgba(6,182,212,0.16)]">
                      <Icon name={service.icon} />
                    </div>
                    <div className="text-sm font-semibold text-white/32">{service.number}</div>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{service.description}</p>
                  <div className="mt-6 flex items-center justify-between text-sm font-semibold text-fuchsia-200">
                    <span>{service.solutions.length} solutions</span>
                    <span className="transition group-hover:translate-x-1">-&gt;</span>
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
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/58">
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
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="rounded-[1rem] border border-indigo-400/20 bg-white/[0.045] p-4 transition hover:border-cyan-300/30 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-[0.7rem] bg-fuchsia-300/[0.08] text-fuchsia-200">
                        <Icon name={service.icon} />
                      </span>
                      <span className="text-sm font-semibold text-white">{solution}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href={service.href} className="mt-8 inline-flex rounded-[0.7rem] border border-white/12 px-5 py-3 text-sm font-semibold text-white/82 transition hover:bg-white/[0.06]">
                View detailed service
              </Link>
            </motion.div>
          </motion.div>
        </section>
      ))}

      <section className="mx-auto w-full max-w-[1120px] px-4 py-16 md:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="rounded-[1.25rem] border border-indigo-400/20 bg-white/[0.04] p-6 md:p-8">
          <motion.div variants={fadeUp} className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/58">
              Customer Value
            </div>
            <h2 className="mt-4 text-4xl font-semibold text-white">From Curiosity to Business Growth</h2>
          </motion.div>
          <div className="mt-10 grid gap-3 md:grid-cols-7">
            {journey.map((stage) => (
              <motion.div key={stage} variants={fadeUp} className="relative rounded-[0.9rem] border border-white/10 bg-[#0C1226]/80 p-4 text-center text-sm font-semibold text-white/80">
                {stage}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto grid w-full max-w-[1120px] gap-6 px-4 py-16 md:px-6 lg:grid-cols-[1fr_0.9fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/58">
            Tech Stack
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-semibold text-white">
            Built Across the Modern AI Ecosystem
          </motion.h2>
          <motion.div variants={stagger} className="mt-8 flex flex-wrap gap-3">
            {techStack.map((tool) => (
              <motion.div key={tool} variants={fadeUp} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/68">
                {tool}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-3 sm:grid-cols-2">
          {valueCards.map((value) => (
            <motion.div key={value} variants={fadeUp} className="rounded-[1rem] border border-indigo-400/20 bg-white/[0.045] p-5">
              <div className="text-lg font-semibold text-white">{value}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-[1120px] px-4 py-16 md:px-6">
        <div className="grid gap-4 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(12,27,68,0.82),rgba(32,9,60,0.78))] p-6 md:grid-cols-4 md:p-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-4xl font-semibold text-white">{metric.value}</div>
              <div className="mt-2 text-sm text-white/56">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1120px] px-4 py-16 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/58">
              Case Studies
            </div>
            <h2 className="mt-4 text-4xl font-semibold text-white">AI Outcomes Across Industries</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {caseStudies.map((study) => (
            <motion.article
              key={study.industry}
              whileHover={{ y: -5 }}
              className="rounded-[1rem] border border-white/10 bg-white/[0.045] p-5"
            >
              <div className="text-lg font-semibold text-white">{study.industry}</div>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/36">Problem</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{study.problem}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/36">Solution</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{study.solution}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/36">Impact</p>
              <p className="mt-2 text-sm leading-6 text-cyan-100/78">{study.impact}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[860px] px-4 py-16 md:px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/58">
            FAQ
          </div>
          <h2 className="mt-4 text-4xl font-semibold text-white">Enterprise AI Questions</h2>
        </div>
        <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.04]">
          {faqs.map((faq, index) => (
            <button
              key={faq.question}
              type="button"
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              className="block w-full px-5 py-5 text-left"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-white">{faq.question}</span>
                <span className="text-cyan-200">{openFaq === index ? "-" : "+"}</span>
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
        <div className="overflow-hidden rounded-[1.35rem] border border-indigo-400/20 bg-[linear-gradient(135deg,rgba(5,18,52,0.94),rgba(58,10,75,0.82))] p-8 text-center shadow-[0_26px_100px_rgba(0,0,0,0.44)] md:p-12">
          <h2 className="text-4xl font-semibold text-white md:text-6xl">Ready to Build Enterprise AI?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">
            Start with a consultation and turn your AI roadmap into production-grade intelligent systems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/#contact" className="rounded-[0.7rem] bg-[linear-gradient(90deg,#3B82F6,#8B5CF6,#EC4899)] px-6 py-3 text-sm font-semibold text-white">
              Schedule Consultation
            </Link>
            <Link href="#overview" className="rounded-[0.7rem] border border-white/12 px-6 py-3 text-sm font-semibold text-white/82">
              Start Your AI Journey
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050816]/80 px-4 py-12 md:px-6">
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
