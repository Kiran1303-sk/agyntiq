"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import SiteHeader from "@/components/site-header";

const stages = [
  { title: "Opportunity Identification", description: "Identify high-impact areas where AI can solve real business problems and create measurable value.", items: ["Business process discovery", "Pain point analysis", "AI use case ideation", "Value vs. feasibility screening"], output: "Prioritized AI opportunity list", question: "Where can AI create the most impact?" },
  { title: "ROI & Business Case Design", description: "Quantify the potential value and build a defensible business case for prioritized AI opportunities.", items: ["Benefits estimation", "Cost analysis", "ROI and payback calculation", "Business case prioritization"], output: "Business case with ROI potential", question: "What is the expected return?" },
  { title: "Operating Model Design", description: "Define the people, processes, capabilities, and governance needed to deliver and scale AI successfully.", items: ["Roles and responsibilities", "Governance framework", "Ways of working", "Center of Excellence design"], output: "Target operating model", question: "Who will own and drive AI?" },
  { title: "Risk & Compliance Assessment", description: "Assess risk and ensure AI initiatives are ethical, secure, explainable, and compliant with regulations.", items: ["Ethical AI assessment", "Data privacy and security", "Regulatory compliance", "Risk register and mitigation plan"], output: "Risk assessment report", question: "How do we ensure responsible AI?" },
  { title: "Transformation & Adoption Roadmap", description: "Create a phased roadmap to implement, adopt, and scale AI across the organization.", items: ["Short, medium, and long-term plan", "Quick wins and pilot projects", "Change management plan", "Adoption and capability building"], output: "AI transformation roadmap", question: "What should we do first?" }
] as const;

const outcomes = [
  ["Better decisions", "Make data-driven investment decisions with clarity."],
  ["Measurable value", "Focus resources on initiatives with the highest business impact."],
  ["Stronger foundation", "Build the capabilities, governance, and processes AI needs."],
  ["Reduced risk", "Create a responsible, secure, and compliant path to adoption."],
  ["Faster results", "Move from ambition to practical action with a clear roadmap."]
] as const;

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function OutcomeIcon({ index }: { index: number }) {
  return <div className="grid h-11 w-11 place-items-center rounded-[0.9rem] bg-fuchsia-300/[0.1] text-fuchsia-200 shadow-[0_0_28px_rgba(202,74,255,0.14)]"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    {index === 0 && <><path d="M4 19V9M10 19V5M16 19v-8M22 19H2" /><path d="m4 7 5-3 4 3 7-5" /></>}
    {index === 1 && <><circle cx="12" cy="12" r="8" /><path d="M12 7v10M15 9.5c-.7-.7-1.7-1-3-1-1.8 0-3 .9-3 2.2 0 3.4 6 1.4 6 4.1 0 1.3-1.2 2.2-3 2.2-1.3 0-2.3-.3-3-1" /></>}
    {index === 2 && <><circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" /><path d="M3 20c.5-3 2.1-4.5 5-4.5S12.5 17 13 20M11 20c.5-3 2.1-4.5 5-4.5s4.5 1.5 5 4.5" /></>}
    {index === 3 && <><path d="m12 3 8 3v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>}
    {index === 4 && <><path d="m4 17 6-6 3 3 7-8" /><path d="M15 6h5v5" /></>}
  </svg></div>;
}

export default function StrategyReadinessPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050719] text-white">
      <SiteHeader mode="services" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_8%_4%,rgba(202,74,255,0.15),transparent_28%),radial-gradient(circle_at_92%_20%,rgba(46,108,235,0.12),transparent_30%),linear-gradient(180deg,#050719,#100826_50%,#050719)]" />
      <div className="pointer-events-none absolute left-[-15rem] top-[30rem] h-[34rem] w-[34rem] rounded-full bg-fuchsia-400/[0.07] blur-[130px]" />

      <section className="section-shell pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-fuchsia-200/58"><span className="h-px w-10 bg-fuchsia-300/55" />Service 01 / AI Strategy</div>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-white md:text-6xl xl:text-[5rem]">Build the right AI strategy before you build AI products.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64 md:text-xl">A practical operating model, business case, and transformation roadmap for organizations ready to make AI matter.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="#journey" className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(100deg,#2e6ceb,#7547df,#c23bd9)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(126,87,255,0.25)] transition hover:-translate-y-0.5"><span>Explore the journey</span><span className="transition group-hover:translate-x-1"><ArrowIcon /></span></Link><Link href="/#contact" className="inline-flex items-center rounded-full border border-fuchsia-200/22 bg-[#180d32]/65 px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-fuchsia-200/45 hover:bg-fuchsia-300/[0.08] hover:text-white">Exclusive Today</Link></div>
          </motion.div>
          <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative overflow-hidden rounded-[1.5rem] border border-fuchsia-200/20 bg-[linear-gradient(145deg,rgba(24,13,50,0.94),rgba(7,8,28,0.9))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.32)]"><div className="absolute right-[-3rem] top-[-3rem] h-36 w-36 rounded-full bg-fuchsia-400/15 blur-3xl" /><div className="relative text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-200/55">Readiness snapshot</div><div className="relative mt-8 flex items-end gap-4"><div className="text-7xl font-semibold tracking-[-0.1em] text-white">05</div><div className="pb-2 text-sm leading-5 text-white/48">connected stages<br />from intent to action</div></div><div className="relative mt-8 space-y-3 border-t border-white/10 pt-5 text-sm text-white/64"><div className="flex justify-between"><span>Business case</span><span className="text-fuchsia-200">Defined</span></div><div className="flex justify-between"><span>Operating model</span><span className="text-fuchsia-200">Designed</span></div><div className="flex justify-between"><span>Adoption roadmap</span><span className="text-fuchsia-200">Ready</span></div></div></motion.aside>
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-28"><div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]"><div className="rounded-[1.5rem] border border-fuchsia-200/16 bg-fuchsia-300/[0.045] p-6 md:p-8"><div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-200/58">Why this matters</div><h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.05em] text-white md:text-4xl">Readiness is the difference between AI activity and AI impact.</h2></div><div className="rounded-[1.5rem] border border-white/10 bg-[#0b0929]/55 p-6 md:p-8"><p className="max-w-3xl text-lg leading-8 text-white/68">We define the right opportunities, quantify the value, prepare the organization, manage risk, and create a clear path to adoption across people, process, data, and technology.</p><div className="mt-7 grid gap-3 sm:grid-cols-3"><div className="rounded-[1rem] bg-white/[0.04] p-4"><div className="text-2xl font-semibold text-white">360°</div><div className="mt-1 text-xs text-white/45">Readiness view</div></div><div className="rounded-[1rem] bg-white/[0.04] p-4"><div className="text-2xl font-semibold text-white">3-5 yr</div><div className="mt-1 text-xs text-white/45">Transformation horizon</div></div><div className="rounded-[1rem] bg-white/[0.04] p-4"><div className="text-2xl font-semibold text-white">1 plan</div><div className="mt-1 text-xs text-white/45">Shared direction</div></div></div></div></div></section>

      <section id="journey" className="section-shell scroll-mt-28 pb-20 md:pb-28"><div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"><div><div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-200/55">The strategy system</div><h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">A connected path to confident action.</h2></div><p className="max-w-md text-sm leading-6 text-white/48">Each stage produces the evidence and decisions required for the next one.</p></div><div className="grid gap-4 border-l border-fuchsia-300/25 pl-5 md:gap-6 md:pl-8">{stages.map((stage, index) => <motion.article key={stage.title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.05 }} className="group relative grid gap-6 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(120deg,rgba(12,8,38,0.86),rgba(7,8,28,0.72))] p-5 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-200/28 hover:shadow-[0_24px_80px_rgba(117,71,223,0.14)] md:grid-cols-[4rem_minmax(0,1fr)_16rem] md:items-start md:p-7"><span className="absolute -left-[2.05rem] top-8 grid h-8 w-8 place-items-center rounded-full border border-fuchsia-200/45 bg-[#180d32] text-xs font-semibold text-fuchsia-100 shadow-[0_0_0_6px_#050719]">0{index + 1}</span><div className="grid h-14 w-14 place-items-center rounded-[1rem] bg-[linear-gradient(145deg,rgba(117,71,223,0.3),rgba(46,108,235,0.18))] text-2xl text-fuchsia-200">{index === 0 ? "⌁" : index === 1 ? "↗" : index === 2 ? "⌘" : index === 3 ? "◇" : "✦"}</div><div><div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-fuchsia-200/55">Stage 0{index + 1}</div><h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{stage.title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{stage.description}</p><div className="mt-5 grid gap-2 sm:grid-cols-2">{stage.items.map((item) => <div key={item} className="rounded-lg bg-white/[0.04] px-3 py-2 text-xs text-white/58">{item}</div>)}</div></div><div className="rounded-[1rem] border border-fuchsia-200/12 bg-fuchsia-300/[0.045] p-4"><div className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-fuchsia-200/48">Stage output</div><div className="mt-3 text-sm font-semibold leading-6 text-white/82">{stage.output}</div><div className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-white/48"><span className="text-fuchsia-200/75">Decision question</span><br />{stage.question}</div></div></motion.article>)}</div></section>

      <section className="section-shell pb-20 md:pb-28"><div className="mb-8"><div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-200/55">Business impact</div><h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">What this workflow unlocks.</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{outcomes.map(([title, text], index) => <div key={title} className="group rounded-[1.25rem] border border-white/10 bg-[#0b0929]/62 p-5 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-200/28 hover:bg-fuchsia-300/[0.06]"><OutcomeIcon index={index} /><h3 className="mt-5 text-lg font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-white/52">{text}</p></div>)}</div></section>

      <section className="section-shell pb-28"><div className="rounded-[1.5rem] bg-[linear-gradient(105deg,#3f207f,#7547df,#4d238a)] p-7 shadow-[0_24px_90px_rgba(117,71,223,0.22)] md:p-10"><div className="max-w-4xl"><div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/58">The result</div><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">Start with the right opportunities. Build the right foundation. Move with confidence.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-white/72">AI Strategy &amp; Readiness turns ambition into a practical operating model and a measurable path to sustainable business value.</p><Link href="/#contact" className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#3f207f] transition hover:-translate-y-0.5">Talk through your readiness <ArrowIcon /></Link></div></div><Link href="/services" className="mt-7 inline-flex items-center text-sm font-semibold text-white/52 transition hover:text-fuchsia-100">Back to all services <span className="ml-2">→</span></Link></section>
      <ScrollToTopButton />
    </main>
  );
}
