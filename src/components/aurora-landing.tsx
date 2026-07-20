"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteHeader from "@/components/site-header";

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
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  }
};

const services = [
  {
    title: "AI Strategy",
    copy: "Custom roadmaps to unlock AI potential and drive growth.",
    icon: "brain",
    href: "/services/ai-strategy-readiness"
  },
  {
    title: "AI Development",
    copy: "Build intelligent solutions tailored to your business.",
    icon: "cube",
    href: "/services/ai-solution-development"
  },
  {
    title: "Data & Analytics",
    copy: "Turn raw data into actionable insights that matter.",
    icon: "chart",
    href: "/services/ai-data-services"
  },
  {
    title: "AI Integration",
    copy: "Seamlessly integrate AI into systems and workflows.",
    icon: "shield",
    href: "/services/ai-integration-services"
  },
  {
    title: "Agentic AI",
    copy: "Autonomous agents that plan, decide, and take action.",
    icon: "nodes",
    href: "/services"
  },
  {
    title: "AI Optimization",
    copy: "Continuously optimize AI models for peak performance.",
    icon: "target",
    href: "/services/ai-managed-services"
  }
] as const;

const stats = [
  { value: "250+", label: "Enterprises Served", icon: "users" },
  { value: "98%", label: "Client Satisfaction", icon: "rocket" },
  { value: "30+", label: "Industries Impacted", icon: "chart" },
  { value: "99.9%", label: "Uptime & Reliability", icon: "shield" }
];

const steps = [
  { title: "Discover", copy: "Understand your business goals and challenges." },
  { title: "Design", copy: "Craft a tailored AI strategy and solution blueprint." },
  { title: "Build", copy: "Develop and train AI models with precision." },
  { title: "Deploy & Scale", copy: "Deploy seamlessly and scale for maximum impact." }
];

function Icon({ name }: { name: string }) {
  if (name === "brain") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M8.5 5.5a3 3 0 0 1 5.3 1.9 3 3 0 0 1 1.5 5.5 3 3 0 0 1-1.4 5H9.4A3.4 3.4 0 0 1 6 14.5V9.8a3.4 3.4 0 0 1 2.5-4.3Z" />
        <path d="M9 9.5c1.4-.8 2.9-.8 4.2 0" />
        <path d="M10 14.5h4" />
      </svg>
    );
  }

  if (name === "cube") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M12 12v9" />
        <path d="M4 7.5 12 12l8-4.5" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 19h16" />
        <path d="M7.5 16v-4" />
        <path d="M12 16V8" />
        <path d="M16.5 16v-6" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4" />
        <circle cx="12" cy="9" r="3" />
        <path d="M19 18c0-1.6-1-3-2.4-3.6" />
        <path d="M5 18c0-1.6 1-3 2.4-3.6" />
      </svg>
    );
  }

  if (name === "rocket") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M14 4c2.3.5 4 2.2 4.5 4.5L12 15l-3-3 5-8Z" />
        <path d="M8 13 5 16v3h3l3-3" />
        <path d="M15 9h.01" />
      </svg>
    );
  }

  if (name === "nodes") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="m7 7.5 3 2.5" />
        <path d="m17 7.5-3 2.5" />
        <path d="m7 16.5 3-2.5" />
        <path d="m17 16.5-3-2.5" />
      </svg>
    );
  }

  if (name === "target") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3.5 19 6v5.5c0 4.2-2.8 7.1-7 8.9-4.2-1.8-7-4.7-7-8.9V6l7-2.5Z" />
      <path d="m9.4 12.1 1.7 1.7 3.8-3.9" />
    </svg>
  );
}

export default function AuroraLanding() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020614] text-white">
      <SiteHeader mode="home" />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,#020614_0%,#050816_48%,#07021a_100%)]" />

      <section id="hero" className="mx-auto w-full max-w-[1180px] px-4 pb-12 pt-36 md:px-6 md:pt-40">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative min-h-[38rem] overflow-hidden rounded-[1.25rem] border border-cyan-400/18 bg-[linear-gradient(145deg,rgba(4,10,31,0.94)_0%,rgba(5,7,24,0.98)_52%,rgba(19,4,32,0.96)_100%)] p-6 shadow-[0_24px_110px_rgba(0,0,0,0.48)] md:p-8 lg:p-10"
        >
          <div className="absolute inset-y-0 right-0 hidden w-[53%] lg:block">
            <Image
              src="/services-hero.png"
              alt="AI operating system illustration"
              fill
              priority
              sizes="620px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,9,28,0.9)_0%,rgba(4,9,28,0.22)_42%,rgba(4,9,28,0.02)_100%)]" />
          </div>

          <div className="relative z-10 max-w-[38rem]">
            <div className="inline-flex rounded-full border border-cyan-300/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/76">
              Flagship enterprise AI platform
            </div>
            <h1 className="mt-8 text-5xl font-semibold leading-[1.02] text-white md:text-7xl">
              AI That Acts. Results That <span className="text-cyan-300">Matter.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/66 md:text-lg">
              Agentic AI systems that plan, decide, and act autonomously to solve real-world
              problems at scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-[0.55rem] bg-[linear-gradient(90deg,#7c3aed_0%,#d946ef_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(126,58,237,0.28)] transition hover:brightness-110"
              >
                Explore Services
              </Link>
              <Link
                href="#process"
                className="rounded-[0.55rem] border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/82 transition hover:bg-white/[0.06] hover:text-white"
              >
                Watch Demo
              </Link>
            </div>

            <div className="mt-9 grid max-w-md grid-cols-3 gap-4 text-xs text-white/54">
              {["Autonomous AI Agents", "Enterprise Grade Security", "Scalable By Design"].map((item) => (
                <div key={item} className="border-l border-cyan-300/18 pl-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 rounded-[0.85rem] border border-white/10 bg-white/[0.03] px-5 py-5"
        >
          <div className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/36">
            Trusted by innovative companies
          </div>
          <div className="grid grid-cols-2 gap-4 text-center text-sm font-semibold text-white/48 md:grid-cols-6">
            {["Digitally", "cloudgo", "nextly", "Luminous", "acme", "QuantumX"].map((logo) => (
              <div key={logo}>{logo}</div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="solutions" className="mx-auto w-full max-w-[1180px] px-4 py-10 md:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/58">
              What we do
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              AI Solutions Built for Real Impact
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Link
                  href={service.href}
                  className="group block min-h-[12rem] rounded-[0.7rem] border border-cyan-400/16 bg-[linear-gradient(180deg,rgba(8,18,48,0.92)_0%,rgba(8,9,30,0.96)_100%)] p-5 transition hover:-translate-y-1 hover:border-fuchsia-300/32 hover:bg-white/[0.04]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[0.9rem] bg-cyan-300/[0.08] text-cyan-300 shadow-[0_0_26px_rgba(34,211,238,0.12)] group-hover:text-fuchsia-200">
                    <Icon name={service.icon} />
                  </div>
                  <div className="mt-5 text-center text-sm font-semibold text-white">{service.title}</div>
                  <p className="mt-2 text-center text-xs leading-5 text-white/54">{service.copy}</p>
                  <div className="mx-auto mt-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/50 transition group-hover:border-fuchsia-300/30 group-hover:text-fuchsia-200">
                    -&gt;
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="industries" className="mx-auto w-full max-w-[1180px] px-4 py-8 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-4 rounded-[0.85rem] border border-white/10 bg-[linear-gradient(135deg,rgba(7,17,45,0.92),rgba(19,6,45,0.82))] p-6 md:grid-cols-4 md:p-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-[0.7rem] text-cyan-300">
                <Icon name={stat.icon} />
              </div>
              <div className="mt-3 text-4xl font-semibold text-white">{stat.value}</div>
              <div className="mt-1 text-xs text-white/56">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="process" className="mx-auto w-full max-w-[1180px] px-4 py-12 md:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/58">
              How it works
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              From Strategy to Impact in 4 Steps
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/56">
              A proven framework to deliver AI solutions that drive measurable outcomes.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="rounded-[0.7rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-200/52">
                  0{index + 1}
                </div>
                <div className="mt-4 text-lg font-semibold text-white">{step.title}</div>
                <p className="mt-2 text-sm leading-6 text-white/56">{step.copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="pricing" className="mx-auto w-full max-w-[1180px] px-4 pb-20 md:px-6">
        <div className="rounded-[0.85rem] border border-white/10 bg-[linear-gradient(90deg,rgba(8,19,50,0.92),rgba(32,8,54,0.88))] p-6 md:flex md:items-center md:justify-between md:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Ready to build AI that delivers real business outcomes?</h2>
            <p className="mt-2 text-sm text-white/58">Start with a focused assessment and a clear execution path.</p>
          </div>
          <Link
            href="#contact"
            className="mt-5 inline-flex rounded-[0.55rem] bg-[linear-gradient(90deg,#2563eb,#d946ef)] px-6 py-3 text-sm font-semibold text-white md:mt-0"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      <section id="blog" className="sr-only" aria-label="Blog" />
      <section id="contact" className="sr-only" aria-label="Contact" />
    </main>
  );
}
