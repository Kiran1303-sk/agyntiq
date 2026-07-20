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
  "group relative overflow-hidden rounded-full border border-cyan-200/20 bg-[linear-gradient(90deg,#00D5FF_0%,#4F8CFF_52%,#8B5CF6_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(0,213,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(79,140,255,0.34)]";

const secondaryButton =
  "group rounded-full border border-cyan-100/18 bg-[#071029]/72 px-6 py-3 text-sm font-semibold text-white/84 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-0.5 hover:border-cyan-200/38 hover:bg-cyan-300/[0.08] hover:text-white";

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
    <div className="group relative min-h-[22rem] overflow-hidden rounded-[1.4rem] border border-cyan-300/14 bg-[linear-gradient(145deg,rgba(3,10,31,0.92),rgba(4,8,26,0.96)_48%,rgba(13,16,42,0.88))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_90px_rgba(0,0,0,0.28)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,213,255,0.16),transparent_34%),radial-gradient(circle_at_76%_70%,rgba(139,92,246,0.16),transparent_34%)] opacity-90 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 2.5, 0] }}
        transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] border border-cyan-300/22 bg-cyan-300/[0.04] shadow-[0_0_90px_rgba(0,213,255,0.18)]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/32"
      />
      <motion.div
        animate={{ x: ["-25%", "125%"] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
        className="absolute top-20 h-px w-1/2 bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.7),transparent)]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border border-cyan-200/14 bg-[#071029]/82 text-cyan-200 shadow-[0_0_42px_rgba(0,213,255,0.18)] transition duration-500 group-hover:scale-110 group-hover:text-white">
          <Icon name={services[index].icon} />
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020513] text-white">
      <SiteHeader mode="services" />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#020513_0%,#05091d_42%,#020513_100%)]" />
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-65 [background-size:170%_170%] bg-[radial-gradient(circle_at_16%_18%,rgba(0,213,255,0.16),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(79,140,255,0.13),transparent_30%),radial-gradient(circle_at_56%_82%,rgba(139,92,246,0.12),transparent_32%)]"
        />
        <motion.div
          animate={{ x: ["-18%", "18%", "-18%"], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:46px_46px] opacity-22" />
      </div>

      <section className="relative mx-auto grid min-h-screen w-full max-w-[1220px] items-center gap-10 px-4 pb-20 pt-36 md:px-6 lg:grid-cols-[1fr_0.92fr]">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex rounded-full border border-cyan-200/24 bg-cyan-300/[0.055] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
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
          <div className="absolute inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(0,213,255,0.12),transparent_55%)] blur-2xl" />
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
              className="object-contain drop-shadow-[0_26px_70px_rgba(0,213,255,0.08)]"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0], opacity: [0.45, 0.9, 0.45] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-8 bottom-10 h-px bg-[linear-gradient(90deg,transparent,rgba(0,213,255,0.85),rgba(139,92,246,0.7),transparent)]"
          />
        </motion.div>
      </section>

      <nav className="sticky top-24 z-30 mx-auto w-full max-w-[1120px] px-4 md:px-6">
        <div className="overflow-x-auto rounded-full border border-cyan-200/14 bg-[#050a1f]/86 p-2 shadow-[0_18px_70px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl">
          <div className="flex min-w-max gap-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-full px-4 py-2.5 text-sm font-semibold text-white/58 transition hover:bg-cyan-300/[0.08] hover:text-cyan-100 hover:shadow-[0_0_24px_rgba(0,213,255,0.14)]"
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
                  className="group relative block h-full overflow-hidden rounded-[1.25rem] border border-cyan-200/14 bg-[linear-gradient(180deg,rgba(8,16,42,0.82),rgba(4,8,26,0.92))] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-cyan-200/34 hover:shadow-[0_24px_90px_rgba(0,213,255,0.12)]"
                >
                  <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_0%,rgba(0,213,255,0.16),transparent_42%),radial-gradient(circle_at_90%_90%,rgba(139,92,246,0.14),transparent_38%)]" />
                  <div className="relative flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[0.9rem] border border-cyan-200/12 bg-cyan-300/[0.07] text-cyan-200 shadow-[0_0_30px_rgba(0,213,255,0.13)] transition group-hover:scale-110 group-hover:text-white">
                      <Icon name={service.icon} />
                    </div>
                    <div className="text-sm font-semibold text-cyan-100/30">{service.number}</div>
                  </div>
                  <h3 className="relative mt-8 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="relative mt-3 text-sm leading-6 text-white/62">{service.description}</p>
                  <div className="relative mt-6 flex items-center justify-between text-sm font-semibold text-cyan-100">
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
                    whileHover={{ y: -5, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="group rounded-[1rem] border border-cyan-200/12 bg-[linear-gradient(180deg,rgba(8,16,42,0.72),rgba(4,8,26,0.84))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-cyan-200/34 hover:bg-cyan-300/[0.055] hover:shadow-[0_18px_50px_rgba(0,213,255,0.08)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-[0.7rem] border border-cyan-200/10 bg-cyan-300/[0.07] text-cyan-200 transition group-hover:scale-110 group-hover:text-white">
                        <Icon name={service.icon} />
                      </span>
                      <span className="text-sm font-semibold text-white">{solution}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href={service.href} className="mt-8 inline-flex rounded-full border border-cyan-100/18 bg-cyan-300/[0.045] px-5 py-3 text-sm font-semibold text-white/82 transition hover:-translate-y-0.5 hover:border-cyan-200/34 hover:bg-cyan-300/[0.09] hover:text-white">
                View detailed service
              </Link>
            </motion.div>
          </motion.div>
        </section>
      ))}

      <section className="mx-auto w-full max-w-[1120px] px-4 py-16 md:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="relative overflow-hidden rounded-[1.35rem] border border-cyan-200/12 bg-[linear-gradient(135deg,rgba(5,13,37,0.86),rgba(4,8,26,0.92))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.24)] md:p-8">
          <div className="absolute inset-x-10 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(0,213,255,0.45),rgba(139,92,246,0.32),transparent)]" />
          <motion.div variants={fadeUp} className="relative text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/58">
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
                className="rounded-[0.9rem] border border-cyan-200/12 bg-[#050a1f]/86 p-4 text-center text-sm font-semibold text-white/80 transition hover:border-cyan-200/32 hover:text-cyan-50"
              >
                <span className="mx-auto mb-2 block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,213,255,0.55)]" />
                {index + 1}. {stage}
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
              <motion.div key={tool} variants={fadeUp} whileHover={{ y: -3 }} className="rounded-full border border-cyan-200/12 bg-cyan-300/[0.045] px-4 py-2 text-sm font-semibold text-white/68 transition hover:border-cyan-200/30 hover:text-cyan-50">
                {tool}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-3 sm:grid-cols-2">
          {valueCards.map((value) => (
            <motion.div key={value} variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[1rem] border border-cyan-200/12 bg-[linear-gradient(180deg,rgba(8,16,42,0.76),rgba(4,8,26,0.86))] p-5 transition hover:border-cyan-200/30">
              <div className="text-lg font-semibold text-white">{value}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-[1120px] px-4 py-16 md:px-6">
        <div className="grid gap-4 rounded-[1.25rem] border border-cyan-200/12 bg-[linear-gradient(135deg,rgba(4,15,43,0.86),rgba(4,8,26,0.9))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:grid-cols-4 md:p-8">
          {metrics.map((metric) => (
            <motion.div key={metric.label} whileHover={{ y: -4 }} className="rounded-[1rem] border border-white/5 bg-white/[0.025] p-4 text-center">
              <div className="text-4xl font-semibold text-cyan-50">{metric.value}</div>
              <div className="mt-2 text-sm text-white/56">{metric.label}</div>
            </motion.div>
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
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1rem] border border-cyan-200/12 bg-[linear-gradient(180deg,rgba(8,16,42,0.78),rgba(4,8,26,0.9))] p-5 transition hover:border-cyan-200/30 hover:shadow-[0_18px_60px_rgba(0,213,255,0.08)]"
            >
              <div className="text-lg font-semibold text-white">{study.industry}</div>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-cyan-200/36">Problem</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{study.problem}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-cyan-200/36">Solution</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{study.solution}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-cyan-200/36">Impact</p>
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
        <div className="mt-8 divide-y divide-cyan-200/10 overflow-hidden rounded-[1rem] border border-cyan-200/12 bg-[#050a1f]/78 shadow-[0_20px_70px_rgba(0,0,0,0.22)]">
          {faqs.map((faq, index) => (
            <button
              key={faq.question}
              type="button"
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              className="block w-full px-5 py-5 text-left transition hover:bg-cyan-300/[0.035]"
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
        <div className="relative overflow-hidden rounded-[1.35rem] border border-cyan-200/16 bg-[linear-gradient(135deg,rgba(4,18,50,0.94),rgba(5,8,28,0.92))] p-8 text-center shadow-[0_26px_100px_rgba(0,0,0,0.44)] md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(0,213,255,0.16),transparent_34%),radial-gradient(circle_at_80%_72%,rgba(139,92,246,0.14),transparent_36%)]" />
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

      <footer className="border-t border-cyan-200/10 bg-[#020513]/84 px-4 py-12 md:px-6">
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
