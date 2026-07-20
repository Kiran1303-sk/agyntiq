"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SiteHeader from "@/components/site-header";

const ease = [0.22, 1, 0.36, 1] as const;

const pageReveal = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease }
  }
};

const cards = [
  {
    title: "AI Strategy",
    description: "Custom AI roadmaps for your business.",
    icon: "brain"
  },
  {
    title: "AI Development",
    description: "Build intelligent solutions.",
    icon: "cube"
  },
  {
    title: "Data & Analytics",
    description: "Turn data into actionable insights.",
    icon: "chart"
  },
  {
    title: "AI Integration",
    description: "Seamless integration with your systems.",
    icon: "shield"
  }
];

function CardIcon({ name }: { name: string }) {
  if (name === "brain") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M8.5 5.5a3 3 0 0 1 5.3 1.9 3 3 0 0 1 1.5 5.5 3 3 0 0 1-1.4 5H9.4A3.4 3.4 0 0 1 6 14.5V9.8a3.4 3.4 0 0 1 2.5-4.3Z" />
        <path d="M9 9.5c1.4-.8 2.9-.8 4.2 0" />
        <path d="M10 14.5h4" />
      </svg>
    );
  }

  if (name === "cube") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M12 12v9" />
        <path d="M4 7.5 12 12l8-4.5" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 19h16" />
        <path d="M7.5 16v-4" />
        <path d="M12 16V8" />
        <path d="M16.5 16v-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3.5 19 6v5.5c0 4.2-2.8 7.1-7 8.9-4.2-1.8-7-4.7-7-8.9V6l7-2.5Z" />
      <path d="m9.4 12.1 1.7 1.7 3.8-3.9" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] pt-40 text-white md:pt-44">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#071226_0%,#050816_42%,#08021a_100%)]" />

      <section className="mx-auto w-full max-w-[940px] px-4 pb-14 md:px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={pageReveal}
          className="relative min-h-[34rem] overflow-hidden rounded-[1.45rem] border border-cyan-400/35 bg-[linear-gradient(145deg,rgba(5,13,40,0.98)_0%,rgba(8,8,32,0.99)_48%,rgba(33,5,42,0.98)_100%)] p-6 shadow-[0_22px_90px_rgba(0,0,0,0.48)] md:p-8"
        >
          <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
            <Image
              src="/services-hero.png"
              alt="AI head illustration"
              fill
              priority
              sizes="450px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,31,0.72)_0%,rgba(5,10,31,0.05)_42%,rgba(26,5,39,0.12)_100%)]" />
          </div>

          <div className="relative z-10 max-w-[26rem]">
            <div className="inline-flex rounded-full bg-[linear-gradient(90deg,#1367d8_0%,#7b35dd_55%,#c238d8_100%)] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(101,80,255,0.35)]">
              5. Midnight Gradient
            </div>

            <div className="mt-10 text-xs font-semibold uppercase tracking-[0.28em] text-white/58">
              Services
            </div>
            <h1 className="mt-5 text-5xl font-semibold leading-none tracking-normal text-white md:text-6xl">
              Our Services
            </h1>
            <p className="mt-5 text-lg leading-7 tracking-normal text-white/86 md:text-xl md:leading-8">
              AI solutions designed to drive innovation and growth.
            </p>
          </div>

          <div className="relative z-10 mt-10 h-56 overflow-hidden rounded-[1rem] border border-white/10 lg:hidden">
            <Image
              src="/services-hero.png"
              alt="AI head illustration"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2 lg:absolute lg:inset-x-8 lg:bottom-8 lg:grid-cols-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="min-h-[8.25rem] rounded-[0.8rem] border border-cyan-400/22 bg-[linear-gradient(180deg,rgba(12,25,61,0.82)_0%,rgba(9,12,35,0.92)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_14px_36px_rgba(0,0,0,0.25)] backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a2c67]/80 text-cyan-300 shadow-[0_0_26px_rgba(34,211,238,0.16)]">
                  <CardIcon name={card.icon} />
                </div>
                <div className="mt-4 text-sm font-semibold leading-5 text-white">{card.title}</div>
                <p className="mt-2 text-xs leading-5 text-white/56">{card.description}</p>
              </div>
            ))}
            </div>
        </motion.div>
      </section>
    </main>
  );
}
