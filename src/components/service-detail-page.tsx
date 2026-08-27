"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import SiteHeader from "@/components/site-header";
import ServiceFooter from "@/components/service-footer";
import { servicePageOrder, type ServicePageData } from "@/components/service-pages-data";

type ServiceDetailPageProps = { data: ServicePageData };
const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 24, filter: "blur(10px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };

function ArrowIcon() { return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>; }
function CheckIcon() { return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>; }
function ServiceIcon({ index }: { index: number }) {
  const paths = [
    <path key="one" d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5M12 7v5l3.5 2M20.5 3.5v5h-5" />,
    <path key="two" d="M5 5h14v14H5zM8 9h8M8 12h5M8 15h7" />,
    <path key="three" d="M4 18.5 9 13l3 2 7-8M15 7h4v4M4 21h16" />,
    <path key="four" d="M12 4v16M4 8h16M4 16h16M6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4Z" />,
    <path key="five" d="m13 3-8 11h6l-1 7 8-11h-6l1-7Z" />
  ];
  return <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true"><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">{paths[index % paths.length]}</g></svg>;
}

export default function ServiceDetailPage({ data }: ServiceDetailPageProps) {
  const activeIndex = servicePageOrder.findIndex((service) => service.label === data.title);
  const nextService = servicePageOrder[(activeIndex + 1) % servicePageOrder.length];
  const stages = data.serviceStages ?? data.focusPoints.map((point, index) => ({ title: point, eyebrow: ["Focus", "Build", "Scale"][index] ?? "Deliver", description: data.summary, output: data.deliverables[index] ?? data.deliverables[0], points: [point] }));

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050719] text-white">
      <SiteHeader mode="services" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_8%,rgba(202,74,255,0.15),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(46,108,235,0.13),transparent_30%),linear-gradient(180deg,#050719,#0b0825_48%,#050719)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(240,171,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(240,171,252,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <motion.div animate={{ x: [0, 20, 0], y: [0, -16, 0], opacity: [0.25, 0.48, 0.25] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute right-[6%] top-[12rem] h-72 w-72 rounded-full bg-fuchsia-400/[0.08] blur-[100px]" />

      <section className="section-shell relative pt-36 pb-16 md:pt-44 md:pb-24">
        <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-5xl">
          <motion.div variants={fadeUp} className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-fuchsia-100/78"><span className="h-0.5 w-12 rounded-full bg-fuchsia-200 shadow-[0_0_12px_rgba(240,171,252,0.9)]" />Service {String(activeIndex + 1).padStart(2, "0")} / {data.eyebrow}</motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.94] tracking-normal text-white md:text-7xl">{data.title}</motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-white/64 md:text-xl">{data.intro}</motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3"><Link href="#service-system" className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(100deg,#2e6ceb,#7547df,#c23bd9)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(126,87,255,0.25)] transition hover:-translate-y-0.5"><span>Explore service system</span><span className="transition group-hover:translate-x-1"><ArrowIcon /></span></Link><Link href="/#contact" className="inline-flex items-center rounded-full border border-fuchsia-200/22 bg-[#180d32]/65 px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-fuchsia-200/45 hover:bg-fuchsia-300/[0.08] hover:text-white">Start a conversation</Link></motion.div>
        </motion.div>
      </section>

      <section id="service-system" className="section-shell scroll-mt-28 pb-20 md:pb-28">
        <div className="mb-10 grid gap-4 md:grid-cols-[0.8fr_1fr] md:items-end"><div><div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-200/55">{data.eyebrow} capability system</div><h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl">A connected system for enterprise impact.</h2></div><p className="max-w-xl text-sm leading-7 text-white/52 md:justify-self-end">{data.summary}</p></div>
        <div className="grid gap-5">{stages.map((stage, index) => <motion.article key={stage.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-90px" }} transition={{ duration: 0.65, delay: index * 0.08, ease }} className="group relative grid gap-6 overflow-hidden rounded-[1.5rem] border border-white/10 border-l-fuchsia-300/55 border-b-violet-400/45 bg-[linear-gradient(120deg,rgba(10,8,36,0.94),rgba(7,8,28,0.82))] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1 hover:border-fuchsia-200/30 hover:border-l-fuchsia-200 hover:border-b-fuchsia-200/70 hover:shadow-[0_28px_90px_rgba(117,71,223,0.18)] md:grid-cols-[5rem_minmax(0,1fr)_18rem] md:items-center md:p-7"><span className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-fuchsia-300/70 to-transparent transition duration-500 group-hover:via-white/90" /><span className="pointer-events-none absolute bottom-6 left-0 top-6 w-px bg-gradient-to-b from-fuchsia-300/0 via-fuchsia-300/80 to-blue-400/0" /><div className="flex items-start justify-between gap-5 md:block"><div className="grid h-14 w-14 place-items-center rounded-[1.15rem] border border-fuchsia-200/25 bg-[linear-gradient(145deg,rgba(117,71,223,0.38),rgba(46,108,235,0.2))] text-fuchsia-100 shadow-[0_0_30px_rgba(117,71,223,0.16)] transition duration-500 group-hover:rotate-6 group-hover:scale-110"><ServiceIcon index={index} /></div><div className="rounded-full border border-fuchsia-200/14 bg-fuchsia-300/[0.05] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-fuchsia-100/62 md:hidden">{stage.eyebrow}</div></div><div><div className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-fuchsia-200/55 md:block">{stage.eyebrow}</div><h3 className="mt-2 text-2xl font-semibold leading-tight tracking-normal text-white md:text-3xl">{stage.title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{stage.description}</p><div className="mt-5 flex flex-wrap gap-2">{stage.points.map((point) => <span key={point} className="rounded-full border border-fuchsia-200/25 bg-fuchsia-300/[0.06] px-3 py-1.5 text-xs font-semibold text-white/78 shadow-[0_0_18px_rgba(202,74,255,0.06)] transition group-hover:border-fuchsia-200/45 group-hover:bg-fuchsia-300/[0.1] group-hover:text-white">{point}</span>)}</div></div><div className="rounded-[1.1rem] border border-white/[0.08] bg-white/[0.04] p-5 transition group-hover:border-fuchsia-200/20 group-hover:bg-fuchsia-300/[0.06] md:self-stretch md:flex md:flex-col md:justify-center"><div className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-fuchsia-200/48">Output</div><p className="mt-3 text-sm font-semibold leading-6 text-white/84">{stage.output}</p></div></motion.article>)}</div>
      </section>

      <section className="section-shell pb-20 md:pb-28"><div className="grid gap-8 rounded-[1.6rem] border border-fuchsia-200/16 bg-[linear-gradient(135deg,rgba(24,13,50,0.78),rgba(7,8,28,0.86))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.24)] md:grid-cols-[0.8fr_1.2fr] md:p-8 lg:p-10"><div><div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-200/58">Expected outcomes</div><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl">Built for clarity, adoption, and measurable progress.</h2></div><div className="grid gap-3 sm:grid-cols-2">{data.deliverables.map((item) => <div key={item} className="flex items-start gap-3 rounded-[1rem] border border-white/[0.07] bg-[#080b25]/64 p-4"><span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-fuchsia-300/[0.1] text-fuchsia-100"><CheckIcon /></span><p className="text-sm font-semibold leading-6 text-white/72">{item}</p></div>)}</div></div></section>

      <section className="section-shell pb-28"><div className="relative overflow-hidden rounded-[1.6rem] bg-[linear-gradient(105deg,#3f207f,#7547df,#4d238a)] p-7 shadow-[0_24px_90px_rgba(117,71,223,0.22)] md:p-10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(46,108,235,0.24),transparent_34%)]" /><div className="relative max-w-4xl"><div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/62">Continue the journey</div><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal md:text-5xl">Move from capability design to confident execution.</h2><Link href={nextService.href} className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#3f207f] transition hover:-translate-y-0.5">Explore {nextService.label} <ArrowIcon /></Link></div></div><Link href="/services" className="mt-7 inline-flex items-center text-sm font-semibold text-white/52 transition hover:text-fuchsia-100">Back to all services <span className="ml-2">-&gt;</span></Link></section>

      <ServiceFooter /><ScrollToTopButton />
    </main>
  );
}
