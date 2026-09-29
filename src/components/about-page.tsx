"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SiteHeader from "@/components/site-header";
import ServiceFooter from "@/components/service-footer";

const industries = [
  { name: "Healthcare", detail: "Smarter care journeys, clinical intelligence, and secure automation." },
  { name: "Financial services", detail: "Decision systems, risk intelligence, and compliant customer experiences." },
  { name: "Retail & commerce", detail: "Connected demand signals, personalization, and operations at scale." },
  { name: "Manufacturing", detail: "Predictive operations, connected plants, and measurable productivity." },
  { name: "Public sector", detail: "Accessible services, governed data, and responsible AI adoption." },
  { name: "Enterprise functions", detail: "AI copilots and workflows designed around the work teams already do." }
];

const services = [
  ["01", "Strategy & readiness", "Turn AI ambition into a roadmap leaders can fund."],
  ["02", "Solutions development", "Build assistants, agents, products, and decision systems."],
  ["03", "Integration services", "Connect AI to the tools and workflows where work happens."],
  ["04", "Data services", "Create reliable, governed foundations for production AI."],
  ["05", "Managed services", "Keep systems monitored, optimized, and improving after launch."]
];

const boardPerspectives = [
  {
    image: "/slide1.jpeg",
    role: "Strategy & transformation",
    title: "Start with the decision, not the technology.",
    story: "Every strong AI program begins with a clear business question. We help leadership teams connect opportunity, value, and responsible adoption before the build begins."
  },
  {
    image: "/visual-story.png",
    role: "Technology & innovation",
    title: "Make intelligence useful in the flow of work.",
    story: "The best AI experiences feel natural: they meet people inside familiar systems, reduce friction, and turn complex information into confident action."
  },
  {
    image: "/hero1.png",
    role: "Operations & growth",
    title: "Build for the long term.",
    story: "Production AI needs more than a launch moment. We design for reliability, governance, adoption, and continuous improvement from day one."
  }
];

const values = [
  ["Clarity", "We make complex AI decisions understandable and actionable."],
  ["Useful ambition", "We pursue meaningful outcomes over novelty for its own sake."],
  ["Responsible by design", "Security, governance, and human judgment belong in the system."],
  ["Built together", "The strongest solutions are shaped with the people who use them."],
  ["Always improving", "We learn from real-world use and keep raising the bar."]
];

const locations = [
  ["North America", "Strategy, product, and enterprise partnerships"],
  ["Europe", "Responsible AI, transformation, and delivery"],
  ["India", "Engineering, data, and AI operations"],
  ["Asia Pacific", "Growth, integration, and customer success"]
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className={className} data-delay={delay}>
      {children}
    </div>
  );
}

function NodeField() {
  const networks = [
    {
      nodes: [[74, 22], [82, 17], [91, 22], [84, 29], [94, 34], [76, 33]],
      links: [[0, 1], [1, 2], [0, 3], [1, 3], [2, 3], [2, 4], [3, 4], [0, 5], [3, 5]],
      triangles: [[0, 1, 3], [1, 2, 3], [2, 3, 4], [0, 3, 5]],
      color: "#7fa7ff",
      accent: "#d0b5ff"
    },
    {
      nodes: [[57, 51], [66, 45], [76, 51], [71, 59], [82, 61], [62, 63]],
      links: [[0, 1], [1, 2], [0, 3], [1, 3], [2, 3], [2, 4], [3, 4], [0, 5], [3, 5]],
      triangles: [[0, 1, 3], [1, 2, 3], [2, 3, 4], [0, 3, 5]],
      color: "#9a92ff",
      accent: "#e2a8ff"
    },
    {
      nodes: [[74, 78], [83, 72], [93, 77], [87, 85], [96, 90], [78, 91]],
      links: [[0, 1], [1, 2], [0, 3], [1, 3], [2, 3], [2, 4], [3, 4], [0, 5], [3, 5]],
      triangles: [[0, 1, 3], [1, 2, 3], [2, 3, 4], [0, 3, 5]],
      color: "#75aaff",
      accent: "#f0b1ff"
    }
  ];
  const [pointer, setPointer] = useState({ x: 0.72, y: 0.42 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPointer({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(91,92,255,0.22),transparent_24%),radial-gradient(circle_at_72%_72%,rgba(202,74,255,0.14),transparent_28%),linear-gradient(115deg,#050719_10%,#080a25_55%,#150c2c_100%)]" />
      <div className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-300/[0.07] blur-[90px] transition-[left,top] duration-700 ease-out" style={{ left: `${pointer.x * 100}%`, top: `${pointer.y * 100}%` }} />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(145,182,255,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(145,182,255,0.09)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(ellipse_at_78%_50%,black,transparent_68%)]" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-75 mix-blend-screen">
        <defs>
          <filter id="network-glow"><feGaussianBlur stdDeviation="1.1" /></filter>
          <radialGradient id="network-halo"><stop stopColor="#d5b8ff" stopOpacity="0.18" /><stop offset="1" stopColor="#d5b8ff" stopOpacity="0" /></radialGradient>
        </defs>
        {networks.map((network, networkIndex) => (
          <motion.g
            key={networkIndex}
            transform={`translate(${(pointer.x - 0.5) * (networkIndex + 1) * 0.8} ${(pointer.y - 0.5) * (networkIndex + 1) * 0.5})`}
            animate={{ x: [0, networkIndex % 2 === 0 ? 0.8 : -0.6, 0], y: [0, networkIndex === 1 ? -0.7 : 0.5, 0] }}
            transition={{ duration: 12 + networkIndex * 2, repeat: Infinity, ease: "easeInOut", delay: networkIndex * 0.7 }}
          >
            <circle cx={network.nodes[2][0]} cy={network.nodes[2][1]} r="8" fill="url(#network-halo)" />
            {network.triangles.map(([first, second, third], triangleIndex) => (
              <motion.polygon
                key={`triangle-${triangleIndex}`}
                points={`${network.nodes[first][0]},${network.nodes[first][1]} ${network.nodes[second][0]},${network.nodes[second][1]} ${network.nodes[third][0]},${network.nodes[third][1]}`}
                fill={triangleIndex % 2 === 0 ? network.color : network.accent}
                fillOpacity="0.022"
                stroke={network.accent}
                strokeWidth="0.1"
                strokeOpacity="0.2"
                strokeDasharray="0.7 1.6"
                animate={{ fillOpacity: [0.012, 0.055, 0.012], strokeOpacity: [0.1, 0.3, 0.1], strokeDashoffset: [0, -3, 0] }}
                transition={{ duration: 7 + networkIndex * 0.9, repeat: Infinity, ease: "easeInOut", delay: triangleIndex * 0.24 }}
              />
            ))}
            {network.links.map(([from, to], linkIndex) => (
              <motion.line
                key={`${from}-${to}`}
                x1={network.nodes[from][0]}
                y1={network.nodes[from][1]}
                x2={network.nodes[to][0]}
                y2={network.nodes[to][1]}
                stroke={network.color}
                strokeWidth="0.13"
                strokeOpacity="0.48"
                strokeDasharray="0.6 1.8"
                animate={{ strokeOpacity: [0.22, 0.62, 0.22], strokeDashoffset: [0, -4, 0] }}
                transition={{ duration: 4.4 + networkIndex * 0.8, repeat: Infinity, ease: "easeInOut", delay: linkIndex * 0.16 }}
              />
            ))}
            {network.nodes.map(([cx, cy], nodeIndex) => (
              <g key={nodeIndex}>
                <motion.circle cx={cx} cy={cy} r="1.7" fill={network.accent} opacity="0.18" filter="url(#network-glow)" animate={{ r: [1.2, 2.5, 1.2], opacity: [0.08, 0.32, 0.08] }} transition={{ duration: 3.2 + nodeIndex * 0.18, repeat: Infinity, ease: "easeInOut", delay: nodeIndex * 0.2 }} />
                <motion.circle cx={cx} cy={cy} r={nodeIndex === 2 ? "0.48" : "0.3"} fill={nodeIndex === 2 ? network.accent : network.color} animate={{ opacity: [0.38, 1, 0.38] }} transition={{ duration: 2.8 + nodeIndex * 0.2, repeat: Infinity, ease: "easeInOut", delay: nodeIndex * 0.17 }} />
              </g>
            ))}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <div className="section-kicker">{eyebrow}</div>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="section-copy max-w-2xl">{copy}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#050719] text-white">
      <SiteHeader mode="home" />

      <section id="about" className="relative isolate min-h-[680px] overflow-hidden pt-28 md:min-h-[720px] md:pt-32">
        <NodeField />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050719_0%,rgba(5,7,25,0.93)_32%,rgba(5,7,25,0.42)_68%,rgba(5,7,25,0.8)_100%)]" />
        <div className="section-shell relative z-10 flex min-h-[520px] items-center">
          <Reveal>
            <div className="section-kicker">About AgyntiQ</div>
            <h1 className="mt-6 max-w-3xl bg-[linear-gradient(90deg,#ffffff_0%,#c7d2fe_38%,#f0abfc_70%,#d946ef_100%)] bg-clip-text text-5xl font-semibold leading-[0.94] tracking-normal text-transparent drop-shadow-[0_0_34px_rgba(202,74,255,0.18)] md:text-7xl">
              Intelligence that moves business forward.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/68 md:text-xl">
              AgyntiQ helps organizations turn AI ambition into intelligent systems that people trust, use, and grow with.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#story" className="rounded-full bg-[linear-gradient(100deg,#2e6ceb,#7547df,#c23bd9)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(126,87,255,0.28)] transition hover:-translate-y-0.5">Our story <span className="ml-2">→</span></Link>
              <Link href="#contact" className="rounded-full border border-fuchsia-200/22 bg-[#180d32]/65 px-6 py-3.5 text-sm font-semibold text-white/82 transition hover:border-fuchsia-200/45 hover:bg-fuchsia-300/[0.08] hover:text-white">Start a conversation</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="story" className="relative py-24 md:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal><SectionHeading eyebrow="Our AI story" title="From curiosity to compounding value." copy="AI is changing how businesses think, decide, and operate. Our role is to make that change practical: grounded in context, measurable in outcome, and built for the people who carry it forward." /></Reveal>
          <Reveal delay={0.1} className="grid gap-3 sm:grid-cols-3">
            {["See the opportunity", "Build what matters", "Scale with confidence"].map((item, index) => <div key={item} className="relative min-h-52 overflow-hidden rounded-[1.35rem] border border-[#4d2aad]/45 bg-[linear-gradient(145deg,rgba(12,8,38,0.9),rgba(42,7,46,0.64))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.22)]"><div className="text-sm text-fuchsia-200/55">0{index + 1}</div><div className="absolute left-5 top-20 h-px w-20 bg-gradient-to-r from-fuchsia-300/70 to-transparent" /><div className="absolute bottom-5 text-lg font-semibold text-white">{item}</div></div>)}
          </Reveal>
        </div>
      </section>

      <section className="relative py-20 md:py-28"><div className="section-shell"><Reveal><SectionHeading eyebrow="Awards & recognition" title="Progress is measured by the trust we earn." copy="Our standard is bigger than a trophy: useful systems, responsible decisions, and outcomes that stand up in the real world." /></Reveal><div className="mt-12 grid items-stretch gap-4 md:grid-cols-3">{["Responsible AI", "Enterprise readiness", "Outcome-led innovation"].map((item, index) => <Reveal key={item} delay={index * 0.08} className="h-full"><div className="group flex h-full flex-col rounded-[1.4rem] border border-fuchsia-200/12 bg-[#0b0d2a]/65 p-6 transition duration-500 hover:-translate-y-1 hover:border-fuchsia-200/30"><div className="flex h-14 w-14 items-center justify-center rounded-full border border-fuchsia-200/18 bg-fuchsia-300/[0.07] text-2xl text-fuchsia-100">✦</div><div className="mt-8 text-xl font-semibold">{item}</div><p className="mt-3 flex-1 text-sm leading-7 text-white/52">A principle we bring into every engagement, from the first workshop to production operations.</p><div className="mt-8 text-xs uppercase tracking-[0.24em] text-fuchsia-200/42">Our benchmark · 0{index + 1}</div></div></Reveal>)}</div></div></section>

      <section id="industries" className="relative py-20 md:py-28"><div className="section-shell"><Reveal><SectionHeading eyebrow="Industry expertise & solutions" title="Built around the realities of your industry." copy="We combine deep business context with modern AI capabilities to create systems that fit the work, language, and constraints of each organization." /></Reveal><div className="mt-12 grid items-stretch gap-3 md:grid-cols-2 lg:grid-cols-3">{industries.map((item, index) => <Reveal key={item.name} delay={index * 0.04} className="h-full"><article className="group relative flex h-full min-h-[15rem] flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0a0d28]/70 p-5 transition duration-500 hover:-translate-y-1 hover:border-fuchsia-200/26"><div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-fuchsia-400/[0.08] blur-3xl transition group-hover:bg-fuchsia-400/[0.16]" /><div className="relative flex h-full flex-col"><div className="text-xs uppercase tracking-[0.25em] text-blue-200/50">0{index + 1}</div><h3 className="mt-9 text-xl font-semibold">{item.name}</h3><p className="mt-3 flex-1 text-sm leading-7 text-white/52">{item.detail}</p><div className="mt-7 text-sm font-semibold text-fuchsia-100/70">Explore capability <span className="ml-2 transition group-hover:ml-3">→</span></div></div></article></Reveal>)}</div></div></section>

      <section id="services" className="relative py-20 md:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><Reveal><SectionHeading eyebrow="Services" title="A clear line from ambition to operation." copy="Five connected services help teams move from the first important question to AI systems that keep getting better." /></Reveal><div className="relative border-l border-fuchsia-200/15 pl-7 md:pl-10">{services.map(([number, title, detail], index) => <Reveal key={number} delay={index * 0.07} className="group relative border-b border-white/10 py-6 first:pt-0"><span className="absolute -left-[2.15rem] top-8 h-3 w-3 rounded-full border-2 border-[#0b0d2a] bg-fuchsia-300 shadow-[0_0_18px_rgba(202,74,255,0.65)] md:-left-[2.65rem]" /><div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between"><h3 className="text-2xl font-semibold transition group-hover:text-fuchsia-100">{title}</h3><span className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/42">{number}</span></div><p className="mt-2 max-w-xl text-sm leading-7 text-white/52">{detail}</p></Reveal>)}</div></div></section>

      <section className="relative py-20 md:py-28"><div className="section-shell"><Reveal><SectionHeading eyebrow="Board perspectives" title="Leadership with a point of view." copy="The people guiding AgyntiQ believe enterprise AI should be ambitious, understandable, and grounded in the work it is meant to improve." /></Reveal><div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">{boardPerspectives.map((person, index) => <Reveal key={person.role} delay={index * 0.08} className="h-full"><article className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0a0d28]/72"><div className="relative h-60 shrink-0 overflow-hidden"><Image src={person.image} alt={person.role} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-center grayscale-[20%] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#0a0d28] via-transparent to-transparent" /></div><div className="flex flex-1 flex-col p-6"><div className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/50">{person.role}</div><h3 className="mt-4 text-2xl font-semibold leading-tight">{person.title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-white/52">{person.story}</p></div></article></Reveal>)}</div></div></section>

      <section className="relative py-20 md:py-28"><div className="section-shell"><Reveal><SectionHeading eyebrow="Corporate values" title="The way we work is part of what we build." copy="Our values shape how we listen, decide, design, and stay accountable long after a system goes live." /></Reveal><div className="mt-12 grid items-stretch gap-3 md:grid-cols-5">{values.map(([title, detail], index) => <Reveal key={title} delay={index * 0.05} className="h-full"><div className="flex h-full min-h-[14rem] flex-col rounded-[1.2rem] border border-fuchsia-200/12 bg-[linear-gradient(145deg,rgba(12,8,38,0.82),rgba(42,7,46,0.5))] p-5"><div className="text-sm text-fuchsia-200/48">0{index + 1}</div><h3 className="mt-10 text-xl font-semibold">{title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-white/50">{detail}</p></div></Reveal>)}</div></div></section>

      <section className="relative py-20 md:py-28"><div className="section-shell"><Reveal><SectionHeading eyebrow="Locations worldwide" title="One connected team, close to the work." copy="Our distributed model brings local understanding and global delivery together across the markets we serve." /></Reveal><div className="relative mt-12 overflow-hidden rounded-[1.6rem] border border-blue-200/12 bg-[#080b25]/80 p-6 md:p-10"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(46,108,235,0.15),transparent_42%)]" /><svg viewBox="0 0 900 260" className="relative h-auto w-full opacity-80" aria-label="Connected global locations"><path d="M78 123C190 55 257 160 366 104S548 54 638 125 781 185 840 107" fill="none" stroke="url(#world-line)" strokeWidth="2" strokeDasharray="4 8" /><defs><linearGradient id="world-line"><stop stopColor="#5b5cff" /><stop offset=".5" stopColor="#ca4aff" /><stop offset="1" stopColor="#8ab6ff" /></linearGradient></defs>{[[78,123],[215,113],[366,104],[510,93],[638,125],[744,158],[840,107]].map(([cx, cy], index) => <g key={index}><circle cx={cx} cy={cy} r="11" fill="#ca4aff" opacity=".1" /><circle cx={cx} cy={cy} r="4" fill="#f0abfc" /></g>)}</svg><div className="relative mt-3 grid gap-3 md:grid-cols-4">{locations.map(([region, detail]) => <div key={region} className="rounded-xl border border-white/8 bg-white/[0.035] p-4"><div className="font-semibold text-white">{region}</div><div className="mt-2 text-xs leading-5 text-white/45">{detail}</div></div>)}</div></div></div></section>

      <section id="contact" className="relative py-20 md:py-32"><div className="section-shell"><div className="relative overflow-hidden rounded-[1.75rem] border border-fuchsia-200/16 bg-[linear-gradient(135deg,rgba(12,8,38,0.96),rgba(42,7,46,0.78))] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.3)] md:p-10 lg:p-14"><div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-fuchsia-400/[0.12] blur-[100px]" /><div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><Reveal><div className="section-kicker">Contact us</div><h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-6xl">Let&apos;s build what comes next.</h2><p className="mt-5 max-w-lg text-base leading-8 text-white/58">Tell us what you are trying to make possible. We&apos;ll bring the right people, questions, and next steps.</p></Reveal><Reveal delay={0.1}><form className="grid gap-3" onSubmit={(event) => event.preventDefault()}><input aria-label="Name" placeholder="Your name" className="rounded-xl border border-white/10 bg-[#080b25]/70 px-4 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-fuchsia-300/45" /><input aria-label="Work email" type="email" placeholder="Work email" className="rounded-xl border border-white/10 bg-[#080b25]/70 px-4 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-fuchsia-300/45" /><textarea aria-label="Project details" placeholder="What would you like to explore?" rows={4} className="resize-none rounded-xl border border-white/10 bg-[#080b25]/70 px-4 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-fuchsia-300/45" /><button type="submit" className="mt-2 w-fit rounded-full bg-[linear-gradient(100deg,#2e6ceb,#7547df,#c23bd9)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(126,87,255,0.25)] transition hover:-translate-y-0.5">Send an enquiry <span className="ml-2">→</span></button></form></Reveal></div></div></div></section>

      <Link
        href="#contact"
        aria-label="Talk to the Agyntiq team"
        className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full border border-fuchsia-200/25 bg-[#17103a]/95 px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_42px_rgba(0,0,0,0.35),0_0_28px_rgba(202,74,255,0.2)] backdrop-blur-xl transition-colors hover:border-fuchsia-200/50 hover:bg-[#24134d] md:bottom-7 md:right-7 md:px-5"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-blue-400 to-fuchsia-400 text-xs text-white">↗</span>
        <span>Talk to us</span>
      </Link>
      <ServiceFooter />
    </main>
  );
}
