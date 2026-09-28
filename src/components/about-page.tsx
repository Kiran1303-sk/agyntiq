"use client";

import Image from "next/image";
import Link from "next/link";
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
  const nodes = [
    [4, 18], [12, 30], [20, 12], [29, 24], [38, 8], [48, 19], [58, 10], [69, 24], [80, 12], [91, 27], [98, 16],
    [2, 48], [12, 59], [24, 42], [34, 55], [45, 39], [55, 57], [65, 43], [75, 60], [86, 41], [97, 54],
    [5, 84], [16, 73], [27, 91], [37, 75], [48, 88], [59, 72], [69, 94], [79, 78], [89, 90], [98, 73]
  ];
  const links = nodes.flatMap((node, index) => {
    return nodes
      .map((candidate, candidateIndex) => ({ candidate, candidateIndex }))
      .filter(({ candidateIndex }) => candidateIndex > index)
      .map(({ candidate, candidateIndex }) => ({ candidate, candidateIndex, distance: Math.hypot(candidate[0] - node[0], candidate[1] - node[1]) }))
      .filter(({ distance }) => distance < 22)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3)
      .map(({ candidateIndex }) => [index, candidateIndex]);
  });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_34%,rgba(91,92,255,0.26),transparent_25%),radial-gradient(circle_at_54%_68%,rgba(202,74,255,0.16),transparent_32%),linear-gradient(115deg,#050719_8%,#090b2b_52%,#18092f_100%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(145,182,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(145,182,255,0.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_72%_45%,black,transparent_62%)]" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-90 mix-blend-screen">
        <defs>
          <linearGradient id="node-line" x1="0" x2="1">
            <stop offset="0" stopColor="#5b5cff" stopOpacity="0" />
            <stop offset="0.48" stopColor="#e0a6ff" stopOpacity="0.62" />
            <stop offset="1" stopColor="#91b8ff" stopOpacity="0.12" />
          </linearGradient>
          <filter id="node-glow"><feGaussianBlur stdDeviation="0.7" /></filter>
        </defs>
        {links.map(([from, to]) => (
          <line key={`${from}-${to}`} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} stroke="url(#node-line)" strokeWidth="0.16" opacity="0.86" />
        ))}
        {nodes.map(([cx, cy], index) => (
          <g key={index}>
            <circle cx={cx} cy={cy} r="1.1" fill="#ca4aff" opacity="0.2" filter="url(#node-glow)" />
            <circle cx={cx} cy={cy} r={index % 5 === 0 ? "0.48" : "0.27"} fill={index % 3 === 0 ? "#b8cfff" : "#f0abfc"} />
          </g>
        ))}
      </svg>
      {["right-[14%] top-[20%]", "right-[27%] top-[62%]", "right-[7%] top-[72%]", "right-[40%] top-[30%]", "right-[52%] top-[78%]"].map((position, index) => (
        <span key={position} className={`absolute ${position} ${index % 3 === 0 ? "h-2 w-2" : "h-1.5 w-1.5"} rounded-full ${index % 2 === 0 ? "bg-fuchsia-100 shadow-[0_0_22px_6px_rgba(240,171,252,0.48)]" : "bg-blue-100 shadow-[0_0_18px_5px_rgba(147,197,253,0.42)]"}`} />
      ))}
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
        <div className="section-shell absolute inset-x-0 bottom-8 z-10"><div className="h-px bg-gradient-to-r from-transparent via-fuchsia-300/50 to-transparent" /></div>
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

      <section className="relative py-20 md:py-28"><div className="section-shell"><Reveal><SectionHeading eyebrow="Board perspectives" title="Leadership with a point of view." copy="The people guiding AgyntiQ believe enterprise AI should be ambitious, understandable, and grounded in the work it is meant to improve." /></Reveal><div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">{boardPerspectives.map((person, index) => <Reveal key={person.role} delay={index * 0.08} className="h-full"><article className="flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0a0d28]/72"><div className="relative h-60 shrink-0 overflow-hidden"><Image src={person.image} alt={person.role} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-center grayscale-[20%]" /><div className="absolute inset-0 bg-gradient-to-t from-[#0a0d28] via-transparent to-transparent" /></div><div className="flex flex-1 flex-col p-6"><div className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/50">{person.role}</div><h3 className="mt-4 text-2xl font-semibold leading-tight">{person.title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-white/52">{person.story}</p></div></article></Reveal>)}</div></div></section>

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
