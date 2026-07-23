"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { servicePageOrder, type ServicePageData } from "@/components/service-pages-data";

type ServiceDetailPageProps = {
  data: ServicePageData;
};

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

const serviceStages = ["Diagnose", "Design", "Build", "Scale"];

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 14.5 9.5 9l4 4L20 6.5" />
      <path d="M4 19h16" />
    </svg>
  );
}

function ServiceOrbital() {
  return (
    <div className="relative min-h-[25rem] overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,rgba(5,13,40,0.96)_0%,rgba(7,8,28,0.98)_50%,rgba(24,8,46,0.94)_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.32),inset_0_0_0_1px_rgba(83,65,170,0.32)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(46,108,235,0.2),transparent_34%),radial-gradient(circle_at_78%_70%,rgba(117,71,223,0.24),transparent_38%)]" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,92,255,0.18),transparent_68%)] blur-2xl" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5b5cff]/18"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7547df]/18"
      />

      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-[#090d27]/90 text-5xl font-semibold text-white shadow-[0_0_55px_rgba(91,92,255,0.34),inset_0_0_0_1px_rgba(122,105,255,0.32)]">
        A
      </div>

      {serviceStages.map((stage, index) => (
        <motion.div
          key={stage}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.08, duration: 0.5, ease }}
          className={[
            "absolute rounded-full bg-[#080c29]/86 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 shadow-[0_14px_44px_rgba(0,0,0,0.26),inset_0_0_0_1px_rgba(91,92,255,0.24)]",
            index === 0 ? "left-8 top-10" : "",
            index === 1 ? "right-8 top-16" : "",
            index === 2 ? "bottom-14 left-10" : "",
            index === 3 ? "bottom-10 right-8" : ""
          ].join(" ")}
        >
          {stage}
        </motion.div>
      ))}

      <div className="absolute inset-x-8 bottom-8 rounded-[1.4rem] bg-[#070a22]/78 p-4 shadow-[inset_0_0_0_1px_rgba(91,92,255,0.2)]">
        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-indigo-200/58">
          Enterprise-ready path
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#12183e]">
          <motion.div
            initial={{ width: "18%" }}
            animate={{ width: ["18%", "74%", "52%", "88%"] }}
            transition={{ duration: 5, repeat: Infinity, ease }}
            className="h-full rounded-full bg-[linear-gradient(90deg,#2e6ceb,#5b5cff,#7547df)]"
          />
        </div>
      </div>
    </div>
  );
}

export default function ServiceDetailPage({ data }: ServiceDetailPageProps) {
  const activeServiceIndex = servicePageOrder.findIndex((service) => service.label === data.title);
  const activeServiceNumber = String(activeServiceIndex + 1).padStart(2, "0");
  const nextService = servicePageOrder[(activeServiceIndex + 1) % servicePageOrder.length];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040817] pt-48 text-white md:pt-52">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050a1f_0%,#050817_36%,#07041a_100%)]" />
        <div className="absolute left-[-14%] top-[-10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(46,108,235,0.2),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-16%] top-[12%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(117,71,223,0.2),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-16%] left-[12%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(91,92,255,0.14),transparent_70%)] blur-3xl" />
      </div>

      <section className="section-shell pb-14 md:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid items-center gap-8 xl:grid-cols-[minmax(0,1.02fr)_minmax(22rem,0.82fr)]"
        >
          <div>
            <motion.div variants={fadeUp} className="inline-flex rounded-full bg-[#0b1332]/84 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-indigo-100 shadow-[inset_0_0_0_1px_rgba(91,92,255,0.26),0_0_34px_rgba(91,92,255,0.12)]">
              {activeServiceNumber} / {data.eyebrow}
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-7 max-w-[12ch] text-balance text-5xl font-semibold leading-[0.92] tracking-[-0.08em] text-white drop-shadow-[0_0_34px_rgba(91,92,255,0.18)] md:text-6xl xl:text-[5.2rem]">
              {data.title}
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-indigo-100/72 md:text-[1.25rem] md:leading-9">
              {data.intro}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#service-plan" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#2e6ceb_0%,#5b5cff_48%,#7547df_100%)] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(91,92,255,0.24)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_66px_rgba(91,92,255,0.34)]">
                <span>Explore service plan</span>
                <span className="transition duration-500 group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </Link>
              <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-[#0b1332]/82 px-6 py-4 text-sm font-semibold text-white/86 shadow-[inset_0_0_0_1px_rgba(91,92,255,0.28)] transition duration-500 hover:-translate-y-0.5 hover:bg-[#111a42] hover:text-white">
                Talk to expert
              </Link>
            </motion.div>
          </div>

          <motion.div variants={fadeUp}>
            <ServiceOrbital />
          </motion.div>
        </motion.div>
      </section>

      <section id="service-plan" className="section-shell pb-16 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <motion.div variants={fadeUp} className="rounded-[2rem] bg-[linear-gradient(135deg,rgba(5,13,40,0.9),rgba(12,8,34,0.96))] p-6 shadow-[inset_0_0_0_1px_rgba(91,92,255,0.22),0_24px_80px_rgba(0,0,0,0.24)] md:p-8">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-indigo-200/58">
              Service brief
            </div>
            <p className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.05em] text-white md:text-3xl">
              {data.summary}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Focus", value: String(data.focusPoints.length).padStart(2, "0") },
                { label: "Outputs", value: String(data.deliverables.length).padStart(2, "0") },
                { label: "Mode", value: data.eyebrow }
              ].map((item) => (
                <div key={item.label} className="rounded-[1.2rem] bg-[#070b24]/72 p-4 shadow-[inset_0_0_0_1px_rgba(91,92,255,0.16)]">
                  <div className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-indigo-200/46">
                    {item.label}
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-2">
            {data.focusPoints.map((point, index) => (
              <motion.div
                key={point}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-[1.45rem] bg-[linear-gradient(135deg,rgba(5,13,40,0.9)_0%,rgba(7,8,28,0.96)_58%,rgba(24,8,46,0.82)_100%)] p-5 shadow-[inset_0_0_0_1px_rgba(91,92,255,0.18),0_18px_55px_rgba(0,0,0,0.18)] transition duration-500"
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(46,108,235,0.14),transparent_32%),radial-gradient(circle_at_90%_90%,rgba(117,71,223,0.12),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[0.9rem] bg-[#0d1434] text-indigo-200 shadow-[inset_0_0_0_1px_rgba(91,92,255,0.18)]">
                    <SignalIcon />
                  </div>
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-indigo-200/48">
                    0{index + 1}
                  </span>
                </div>
                <p className="relative mt-5 text-lg font-semibold leading-7 text-white">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="rounded-[2.2rem] bg-[linear-gradient(135deg,rgba(5,13,40,0.9)_0%,rgba(7,8,28,0.98)_52%,rgba(24,8,46,0.9)_100%)] p-6 shadow-[inset_0_0_0_1px_rgba(91,92,255,0.22),0_30px_90px_rgba(0,0,0,0.24)] md:p-8"
        >
          <motion.div variants={fadeUp} className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-indigo-200/58">
                Delivery system
              </div>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-white md:text-5xl">
                What you get
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-indigo-100/62">
              Designed to move from intent to shipped capability with clear ownership, measurable output, and enterprise discipline.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {data.deliverables.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-[1.45rem] bg-[#060a22]/78 p-5 shadow-[inset_0_0_0_1px_rgba(91,92,255,0.16)]"
              >
                <span className="absolute inset-x-5 top-0 h-1 origin-left scale-x-0 rounded-full bg-[linear-gradient(90deg,#2e6ceb,#5b5cff,#7547df)] transition duration-500 group-hover:scale-x-100" />
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-indigo-200/45">
                  Output 0{index + 1}
                </div>
                <div className="mt-4 text-xl font-semibold leading-7 tracking-[-0.04em] text-white">
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-shell pb-20 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="grid gap-5 lg:grid-cols-[0.7fr_1fr]"
        >
          <motion.div variants={fadeUp} className="rounded-[2rem] bg-[#070b24]/78 p-6 shadow-[inset_0_0_0_1px_rgba(91,92,255,0.18)] md:p-8">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-indigo-200/52">
              Next service
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.06em] text-white">
              Continue through the AgyntiQ service stack.
            </h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link href={nextService.href} className="group relative block overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,rgba(46,108,235,0.18)_0%,rgba(91,92,255,0.14)_48%,rgba(117,71,223,0.2)_100%)] p-6 shadow-[inset_0_0_0_1px_rgba(91,92,255,0.22),0_24px_76px_rgba(0,0,0,0.22)] transition duration-500 hover:-translate-y-1 md:p-8">
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_24%,rgba(117,71,223,0.22),transparent_36%)] opacity-60 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-indigo-200/58">
                    {nextService.label}
                  </div>
                  <div className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white">
                    Open next service page
                  </div>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b1332]/88 text-white shadow-[inset_0_0_0_1px_rgba(91,92,255,0.25)] transition duration-500 group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
