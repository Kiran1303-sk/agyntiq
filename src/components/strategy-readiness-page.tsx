"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import SiteHeader from "@/components/site-header";

const stages = [
  {
    title: "Opportunity Identification",
    description: "Identify high-impact areas where AI can solve real business problems and create value.",
    items: ["Business process discovery", "Pain point analysis", "AI use case ideation", "Value vs. feasibility screening"],
    output: "Prioritized AI opportunity list",
    questions: ["Where can AI create the most impact?", "What problems are worth solving?", "What data do we have?"]
  },
  {
    title: "ROI & Business Case Design",
    description: "Quantify the potential value and build a strong business case for prioritized AI opportunities.",
    items: ["Benefits estimation", "Cost analysis", "ROI / payback calculation", "Business case & prioritization"],
    output: "Business case with ROI & value potential",
    questions: ["What is the expected ROI?", "What are the costs involved?", "How does it compare to other investments?"]
  },
  {
    title: "Operating Model Design",
    description: "Define the people, process and governance model needed to deliver and scale AI successfully.",
    items: ["Roles & responsibilities", "Governance framework", "Ways of working", "Center of Excellence design"],
    output: "Target operating model & governance structure",
    questions: ["Who will own and drive AI?", "What capabilities do we need?", "How will decisions be made and monitored?"]
  },
  {
    title: "Risk & Compliance Assessment",
    description: "Assess risks and ensure AI initiatives are ethical, secure, and compliant with regulations.",
    items: ["Ethical AI assessment", "Data privacy & security", "Regulatory compliance", "Risk register & mitigation plan"],
    output: "Risk assessment report & mitigation plan",
    questions: ["What are the key risks?", "Are we compliant with regulations?", "How do we ensure ethical AI?"]
  },
  {
    title: "Transformation & Adoption Roadmap",
    description: "Create a phased roadmap to implement, adopt and scale AI across the organization.",
    items: ["Short, medium & long-term plan", "Quick wins & pilot projects", "Change management plan", "Adoption & capability building"],
    output: "AI transformation roadmap (3-5 years)",
    questions: ["What should we do first?", "How will we adopt and scale?", "How will we measure success?"]
  }
] as const;

const outcomes = [
  ["Better Decisions", "Make data-driven investment decisions with clarity."],
  ["Measurable Value", "Focus on initiatives with the highest business impact."],
  ["Stronger Foundation", "Build the right capabilities, governance and processes."],
  ["Reduced Risk", "Ensure responsible, secure and compliant AI."],
  ["Faster Results", "Clear roadmap to achieve quicker and sustainable value."]
] as const;

function JourneyIcon({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      {index === 0 && <><circle cx="10.5" cy="10.5" r="5.5" /><path d="m15 15 5 5M8 10.5h5M10.5 8v5" /></>}
      {index === 1 && <><path d="M4 19h16M6 16l4-4 3 2 5-7" /><path d="M15 7h3v3" /></>}
      {index === 2 && <><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><path d="M12 8v4M6 16v-2h12v2" /></>}
      {index === 3 && <><path d="m12 3 8 3v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>}
      {index === 4 && <><path d="m4 17 6-6 3 3 7-8" /><path d="M15 6h5v5" /></>}
    </svg>
  );
}

export default function StrategyReadinessPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050719] text-white">
      <SiteHeader mode="services" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(202,74,255,0.16),transparent_28%),radial-gradient(circle_at_88%_26%,rgba(46,108,235,0.14),transparent_30%),linear-gradient(180deg,#050719,#100826_48%,#050719)]" />

      <section className="section-shell pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-[1rem] bg-[linear-gradient(145deg,#7547df,#2e6ceb)] text-3xl font-bold shadow-[0_0_36px_rgba(126,87,255,0.3)]">#1</span>
              <div>
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-fuchsia-200/62">Enterprise AI service</div>
                <h1 className="mt-1 text-4xl font-semibold leading-none tracking-[-0.06em] md:text-6xl">AI Strategy &amp; Readiness</h1>
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68 md:text-xl">Laying the foundation for successful and responsible AI adoption.</p>
            <div className="mt-8 flex items-start gap-4 rounded-[1.25rem] border border-fuchsia-200/18 bg-[linear-gradient(120deg,rgba(117,71,223,0.16),rgba(202,74,255,0.06))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.2)]">
              <span className="mt-1 text-3xl text-fuchsia-200">◎</span>
              <p className="text-base leading-7 text-white/75"><strong className="text-fuchsia-100">Purpose:</strong> Define the right AI opportunities, build a strong business case, design the operating model, assess risks, and create a clear roadmap to drive measurable business value.</p>
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="rounded-[1.4rem] border border-fuchsia-200/22 bg-[#0b0929]/72 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.26)]">
            <div className="text-xl font-semibold text-fuchsia-200">What it means</div>
            <p className="mt-4 text-base leading-7 text-white/70">It is the critical starting point where we understand your business goals, evaluate AI potential, ensure you are ready across people, process, data and technology, and create a roadmap that turns AI from an idea into real impact.</p>
          </motion.aside>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="mb-8 flex items-center gap-4"><span className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-300/30 to-transparent" /><h2 className="text-center text-xl font-semibold uppercase tracking-[0.12em] text-fuchsia-200 md:text-2xl">The AI Strategy &amp; Readiness Journey</h2><span className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-300/30 to-transparent" /></div>
        <div className="grid gap-4 lg:grid-cols-5">
          {stages.map((stage, index) => (
            <motion.article key={stage.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.06 }} className="relative overflow-hidden rounded-[1.25rem] border border-fuchsia-200/16 bg-[#0b0929]/78 shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
              <div className="bg-[linear-gradient(135deg,#7547df,#2e6ceb_72%,#1e8fc7)] p-5"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-white text-lg font-bold text-[#3f237d]">{index + 1}</span><span className="text-white/85"><JourneyIcon index={index} /></span><span className="text-sm font-semibold leading-5 text-white">{stage.title}</span></div></div>
              <div className="p-5"><p className="text-sm leading-6 text-white/78">{stage.description}</p><ul className="mt-4 space-y-2 text-xs leading-5 text-white/60">{stage.items.map((item) => <li key={item} className="flex gap-2"><span className="text-fuchsia-300">•</span>{item}</li>)}</ul></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20"><div className="grid gap-3 md:grid-cols-[0.7fr_repeat(5,1fr)]"><div className="rounded-[1rem] bg-fuchsia-300/[0.08] p-4 text-lg font-semibold text-fuchsia-100">Key Output</div>{stages.map((stage) => <div key={stage.output} className="rounded-[1rem] bg-blue-300/[0.08] p-4 text-center text-sm font-semibold leading-5 text-white/78">{stage.output}</div>)}</div></section>

      <section className="section-shell pb-14 md:pb-20"><div className="rounded-[1.5rem] border border-white/10 bg-[#0b0929]/62 p-5 md:p-7"><h2 className="text-2xl font-semibold text-fuchsia-100">Key Questions</h2><div className="mt-6 grid gap-6 md:grid-cols-5">{stages.map((stage) => <div key={stage.title} className="space-y-2 text-sm leading-6 text-white/65">{stage.questions.map((question) => <div key={question} className="flex gap-2"><span className="text-fuchsia-300">•</span>{question}</div>)}</div>)}</div></div></section>

      <section className="section-shell pb-14 md:pb-20"><div className="grid gap-3 rounded-[1.5rem] border border-fuchsia-200/22 bg-[linear-gradient(120deg,rgba(117,71,223,0.1),rgba(202,74,255,0.06))] p-5 md:grid-cols-5 md:p-7">{outcomes.map(([title, text]) => <div key={title} className="border-fuchsia-200/15 p-3 md:border-l"><div className="text-lg font-semibold text-fuchsia-100">{title}</div><p className="mt-2 text-sm leading-6 text-white/65">{text}</p></div>)}</div></section>

      <section className="section-shell pb-28"><div className="flex flex-col gap-5 rounded-[1.35rem] bg-[linear-gradient(100deg,#3f207f,#7547df,#4d238a)] p-6 text-white shadow-[0_20px_70px_rgba(117,71,223,0.24)] md:flex-row md:items-center md:p-8"><div className="text-4xl">✦</div><div><strong className="text-lg">In Short:</strong><span className="ml-3 text-base leading-7 text-white/82">AI Strategy &amp; Readiness ensures we start with the right opportunities, build the right foundation and create a clear path so AI delivers real, measurable and sustainable business value.</span></div></div><Link href="/services" className="mt-8 inline-flex items-center rounded-full border border-fuchsia-200/22 px-5 py-3 text-sm font-semibold text-white/78 transition hover:bg-white/[0.08] hover:text-white">Back to all services</Link></section>
      <ScrollToTopButton />
    </main>
  );
}
