"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { servicePageOrder, servicePages } from "@/components/service-pages-data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
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
      staggerChildren: 0.07,
      delayChildren: 0.12
    }
  }
};

const rowReveal = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.42, ease }
  }
};

const services = [
  {
    shortTitle: "AI Strategy",
    eyebrow: "Plan",
    href: "/services/ai-strategy-readiness",
    data: servicePages["ai-strategy-readiness"],
    icon: "brain"
  },
  {
    shortTitle: "AI Development",
    eyebrow: "Build",
    href: "/services/ai-solution-development",
    data: servicePages["ai-solution-development"],
    icon: "cube"
  },
  {
    shortTitle: "AI Integration",
    eyebrow: "Connect",
    href: "/services/ai-integration-services",
    data: servicePages["ai-integration-services"],
    icon: "link"
  },
  {
    shortTitle: "Data & Analytics",
    eyebrow: "Data",
    href: "/services/ai-data-services",
    data: servicePages["ai-data-services"],
    icon: "chart"
  },
  {
    shortTitle: "AI Managed Services",
    eyebrow: "Operate",
    href: "/services/ai-managed-services",
    data: servicePages["ai-managed-services"],
    icon: "shield"
  }
] as const;

const heroServices = [
  {
    shortTitle: "AI Strategy",
    copy: "Custom AI roadmaps for your business.",
    href: "/services/ai-strategy-readiness",
    icon: "brain"
  },
  {
    shortTitle: "AI Development",
    copy: "Build intelligent solutions.",
    href: "/services/ai-solution-development",
    icon: "cube"
  },
  {
    shortTitle: "Data & Analytics",
    copy: "Turn data into actionable insights.",
    href: "/services/ai-data-services",
    icon: "chart"
  },
  {
    shortTitle: "AI Integration",
    copy: "Seamless integration with your systems.",
    href: "/services/ai-integration-services",
    icon: "shield"
  }
] as const;

function ServiceIcon({ name }: { name: (typeof services)[number]["icon"] }) {
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

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] pt-36 text-white md:pt-40">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#071226_0%,#050816_42%,#08021a_100%)]" />

      <section className="mx-auto w-full max-w-[760px] px-4 pb-12 md:px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative min-h-[25.5rem] overflow-hidden rounded-[1.15rem] border border-cyan-400/35 bg-[linear-gradient(145deg,rgba(5,13,40,0.98)_0%,rgba(8,8,32,0.99)_48%,rgba(33,5,42,0.98)_100%)] p-5 shadow-[0_22px_90px_rgba(0,0,0,0.48)] md:p-6"
        >
          <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
            <Image
              src="/services-hero.png"
              alt="AI head illustration"
              fill
              priority
              sizes="350px"
              className="object-cover object-[48%_50%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,31,0.72)_0%,rgba(5,10,31,0.08)_46%,rgba(26,5,39,0.08)_100%)]" />
          </div>

          <div className="relative z-10 max-w-[23rem]">
            <div className="inline-flex rounded-full bg-[linear-gradient(90deg,#1367d8_0%,#7b35dd_55%,#c238d8_100%)] px-4 py-1.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(101,80,255,0.35)]">
              5. Midnight Gradient
            </div>

            <div className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/58">
              Services
            </div>
            <h1 className="mt-3 text-4xl font-semibold leading-none text-white md:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-base leading-7 text-white/86 md:text-lg md:leading-7">
              AI solutions designed to drive innovation and growth.
            </p>
          </div>

          <div className="relative z-10 mt-8 h-52 overflow-hidden rounded-[1rem] border border-white/10 lg:hidden">
            <Image
              src="/services-hero.png"
              alt="AI head illustration"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2 lg:absolute lg:inset-x-6 lg:bottom-6 lg:grid-cols-4"
          >
            {heroServices.map((service) => (
              <motion.div key={service.href} variants={rowReveal}>
                <Link
                  href={service.href}
                  className="group block min-h-[7rem] rounded-[0.7rem] border border-cyan-400/22 bg-[linear-gradient(180deg,rgba(12,25,61,0.82)_0%,rgba(9,12,35,0.92)_100%)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_14px_36px_rgba(0,0,0,0.25)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-fuchsia-300/35"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a2c67]/80 text-cyan-300 shadow-[0_0_26px_rgba(34,211,238,0.16)] transition group-hover:text-fuchsia-200">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <div className="mt-3 text-xs font-semibold leading-5 text-white">
                    {service.shortTitle}
                  </div>
                  <p className="mt-1 text-[0.68rem] leading-4 text-white/56">
                    {service.copy}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-[1120px] px-4 pb-20 md:px-6 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]"
        >
          <motion.div variants={rowReveal}>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/58">
              Select a service
            </div>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-white md:text-4xl">
              Choose the workstream that matches where your AI program is today.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/62">
              Each service page has its own scope, focus areas, and deliverables, so teams can move
              from discovery to build to long-term operations without losing context.
            </p>
          </motion.div>

          <motion.nav
            variants={stagger}
            aria-label="Service pages"
            className="overflow-hidden border-y border-white/10"
          >
            {services.map((service, index) => (
              <motion.div key={service.href} variants={rowReveal}>
                <Link
                  href={service.href}
                  className="group grid gap-4 border-b border-white/10 py-5 transition last:border-b-0 hover:bg-white/[0.025] sm:grid-cols-[4.5rem_minmax(0,1fr)_auto] sm:items-center sm:px-4"
                >
                  <div className="flex items-center gap-3 sm:block">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/32">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-0 flex h-11 w-11 items-center justify-center rounded-[0.8rem] border border-cyan-300/18 bg-cyan-300/[0.06] text-cyan-200 transition group-hover:border-fuchsia-300/30 group-hover:text-fuchsia-200 sm:mt-3">
                      <ServiceIcon name={service.icon} />
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200/50">
                      {service.eyebrow}
                    </div>
                    <div className="mt-2 text-2xl font-semibold leading-tight text-white">
                      {service.shortTitle}
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/62">
                      {service.data.intro}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/42 transition group-hover:text-fuchsia-200">
                    Open
                    <span className="text-lg leading-none transition group-hover:translate-x-1">
                      -&gt;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/54">
          <span>{servicePageOrder.length} service pages available</span>
          <Link
            href="/#contact"
            className="rounded-full border border-white/12 px-5 py-2.5 font-semibold text-white/82 transition hover:border-white/24 hover:bg-white/[0.04] hover:text-white"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </main>
  );
}
