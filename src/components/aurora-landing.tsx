"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Blog", href: "#blog" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" }
];

const problems = [
  {
    title: "Fragmented context",
    description:
      "Customer history, decisions, and operational notes live across calls, docs, CRM, Slack, and internal systems.",
    stat: "Scattered across systems"
  },
  {
    title: "Incomplete AI output",
    description:
      "When the workflow lacks structure, the model returns partial answers and teams still have to coordinate by hand.",
    stat: "Incomplete outputs"
  },
  {
    title: "Pilots that stall",
    description:
      "Many AI experiments never become operational systems because the underlying process stays unchanged.",
    stat: "No measurable P&L impact"
  }
];

const solutions = [
  {
    title: "Trusted context",
    copy: "Connect the data, documents, conversations, and rules your business already depends on."
  },
  {
    title: "Usable outputs",
    copy: "Generate summaries, recommendations, drafts, reports, and decisions your team can actually use."
  },
  {
    title: "Reliable actions",
    copy: "Route, update, draft, escalate, and execute inside the systems where work already happens."
  }
];

const clientLogos = ["Google", "Microsoft", "AWS", "NVIDIA", "OpenAI", "Meta"];

const services = [
  "AI Assessment",
  "Context Engineering",
  "AI Agents & Workflows",
  "Continuous AI Operations",
  "Product Development",
  "Lightning Pods"
];

const caseStudies = [
  {
    industry: "Mamazen",
    title: "85% monthly retention",
    summary: "Mindful parenting platform built with a retention-focused product and AI layer."
  },
  {
    industry: "Drop Offer",
    title: "82% faster UX workflow",
    summary: "Product delivery that streamlined the experience and tightened the execution flow."
  },
  {
    industry: "G-Sight",
    title: "2.0 to 4.7 app rating",
    summary: "Mobile product execution that turned a rough release into a stronger App Store outcome."
  }
];

const team = [
  {
    title: "Engineering leadership",
    copy: "MIT-trained, patents to our name, and 20+ years shipping production systems."
  },
  {
    title: "AI-native execution",
    copy: "100+ products launched. Full-stack, full-lifecycle, from MVP to scale."
  },
  {
    title: "Fractional CTO depth",
    copy: "We&apos;ve been the first hire, the person on call, the one who fixes it at 2am."
  }
];

const statCards = [
  { value: 500, suffix: "+", label: "Enterprise clients" },
  { value: 10, suffix: "M+", label: "AI predictions" },
  { value: 99.98, suffix: "%", label: "System accuracy", decimals: 2 },
  { value: 35, suffix: "+", label: "Countries served" },
  { value: 24, suffix: "/7", label: "Support coverage" },
  { value: 100, suffix: "+", label: "AI models deployed" }
];

const workflowSteps = [
  "Business Data",
  "AI Processing",
  "Training",
  "Prediction",
  "Automation",
  "Business Growth"
];

const reasons = [
  "Enterprise Security",
  "Scalable AI",
  "Fast Deployment",
  "Cloud Native",
  "Real-time Analytics",
  "Experienced AI Engineers",
  "24/7 Support",
  "Custom Solutions"
];

const aiProducts = [
  "AI Chatbot",
  "AI Copilot",
  "AI Search",
  "AI Analytics",
  "AI Voice Assistant",
  "Document Intelligence",
  "Recommendation Engine",
  "Fraud Detection"
];

const industryCards = [
  {
    name: "Healthcare",
    summary: "Patient workflows, triage support, and operational analytics designed for regulated environments."
  },
  {
    name: "Finance",
    summary: "Risk, compliance, and customer intelligence systems built for accuracy and trust."
  },
  {
    name: "Retail",
    summary: "Personalization, forecasting, and support automation that improves conversion and retention."
  },
  {
    name: "Manufacturing",
    summary: "Predictive maintenance, quality insights, and industrial intelligence for faster decisions."
  },
  {
    name: "Education",
    summary: "Learning support, content intelligence, and student-facing AI experiences."
  },
  {
    name: "Logistics",
    summary: "Routing, exception handling, and supply chain automation for faster operations."
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Pilot engagement",
    description: "For teams validating one high-value AI workflow with expert support."
  },
  {
    name: "Growth",
    price: "Build + deploy",
    description: "For businesses ready to launch multiple automations and AI products."
  },
  {
    name: "Enterprise",
    price: "Custom partnership",
    description: "For orgs that need ongoing delivery, governance, and scale."
  }
];

const faqItems = [
  {
    question: "How fast can AgyntiQ launch an AI pilot?",
    answer:
      "Most discovery-led pilots can move from strategy to a working prototype in a few weeks, depending on data readiness and scope."
  },
  {
    question: "Do you work with enterprise data and compliance needs?",
    answer:
      "Yes. We design around security, governance, access control, and the operational realities of enterprise systems."
  },
  {
    question: "Can you integrate into existing tools?",
    answer:
      "Absolutely. We connect AI into the systems teams already use, including CRMs, internal tools, knowledge bases, and cloud workflows."
  }
];

const testimonials = [
  {
    name: "Alicia Wong",
    role: "VP of Digital, Northstar Health",
    quote:
      "AgyntiQ made the system feel enterprise-ready from day one. The interface is premium and the execution is calm, clear, and fast."
  },
  {
    name: "Rahul Mehta",
    role: "Head of Product, Finverse",
    quote:
      "What stood out was the product thinking. They helped us turn a vague AI idea into a real workflow with measurable value."
  },
  {
    name: "Sophia Turner",
    role: "Operations Director, Elevate Commerce",
    quote:
      "The brand, the motion, and the clarity all feel like a top-tier AI company. It doesn’t look like a template at all."
  }
];

function formatStat(value: number, decimals = 0) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

function AnimatedCounter({
  value,
  suffix,
  decimals = 0
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let started = false;
    let frame = 0;

    const animate = () => {
      const duration = 1200;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextValue = value * eased;
        setCount(nextValue);
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {formatStat(count, decimals)}
      {suffix}
    </span>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 2.75l1.9 5.33L19.25 10l-5.35 1.89L12 17.25l-1.9-5.36L4.75 10l5.35-1.92L12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 7.5h16M4 12h16M4 16.5h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AuroraLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: [0.18, 0.3, 0.45, 0.6],
        rootMargin: "-12% 0px -38% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(".aurora-blob", {
        yPercent: -9,
        xPercent: 7,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });

      gsap.to(".mesh-line", {
        opacity: 0.96,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.08
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const depth = Number(el.dataset.parallax ?? "20");
        gsap.to(el, {
          y: -depth,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-cyan"
        style={{ scaleX: progress }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora-blob absolute left-[-8%] top-[-6%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.24),transparent_66%)] blur-3xl animate-drift" />
        <div className="aurora-blob absolute right-[-6%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.2),transparent_64%)] blur-3xl animate-drift" />
        <div className="aurora-blob absolute bottom-[16%] left-[26%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,166,216,0.14),transparent_64%)] blur-3xl animate-drift" />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#050816]/72 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="section-shell flex h-20 items-center justify-between gap-4 md:grid md:h-24 md:grid-cols-[1fr_auto_1fr] md:gap-10 md:gap-12">
          <a href="#hero" className="group flex w-fit items-center justify-self-start pl-0">
            <span className="relative block h-[64px] w-[176px] shrink-0 md:h-[108px] md:w-[324px]">
              <Image
                src="/main-logo.png"
                alt="Agyntiq.ai logo"
                fill
                priority
                sizes="(min-width: 768px) 324px, 176px"
                className="object-contain object-left scale-[1.12] md:scale-[1.28]"
              />
            </span>
          </a>

          <nav className="hidden items-center gap-1 justify-self-center rounded-full bg-white/[0.06] p-2 shadow-glass backdrop-blur-2xl md:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-aurora-blue/18 via-aurora-violet/18 to-aurora-cyan/18 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                      : "text-white/60 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            className="magnetic hidden items-center justify-center gap-2 justify-self-end whitespace-nowrap rounded-full border border-white/[0.12] bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-cyan px-6 py-3.5 text-sm font-semibold leading-none text-white shadow-[0_18px_60px_rgba(79,140,255,0.26)] backdrop-blur-xl transition hover:shadow-[0_20px_70px_rgba(0,214,255,0.28)] md:flex"
          >
            Get Started
            <IconArrow />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="magnetic ml-auto shrink-0 rounded-full border border-white/[0.12] bg-white/5 px-3.5 py-2.5 text-xs font-medium text-white/90 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 md:hidden"
          >
            <span className="flex items-center gap-2">
              {mobileOpen ? <IconClose /> : <IconMenu />}
              <span>{mobileOpen ? "Close" : "Menu"}</span>
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`section-shell md:hidden transition-all duration-300 ${
            mobileOpen ? "pointer-events-auto max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="mt-3 rounded-[1.75rem] border border-white/[0.12] bg-[#050816]/92 p-4 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active === item.href.slice(1)
                      ? "bg-white/[0.12] text-white"
                      : "text-white/75 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href="#services"
                onClick={() => setMobileOpen(false)}
                className="aurora-button inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_70px_rgba(79,140,255,0.22)]"
              >
                Get Started
                <IconArrow />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="magnetic inline-flex items-center justify-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white/90 backdrop-blur-xl"
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section id="hero" className="relative scroll-mt-28 overflow-hidden pb-20 pt-20 md:scroll-mt-32 md:pb-28 md:pt-24">
          <div className="section-shell relative">
            <div className="noise-overlay" />
            <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.16),transparent_66%)] blur-3xl" />

            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div
                data-reveal
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative z-10 max-w-3xl"
              >
                <div className="section-kicker mb-6">
                  <IconSpark />
                  Flagship enterprise AI platform
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.08em] text-white md:text-7xl xl:text-[6.4rem]">
                  Build AI systems
                  <span className="text-gradient block">enterprise teams can trust.</span>
                </h1>

                <p className="section-copy mt-7 max-w-2xl md:text-xl">
                  AgyntiQ helps companies automate workflows, improve decision-making, and launch AI-powered products with a premium, future-facing experience.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#services"
                    className="aurora-button hover-sheen magnetic inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_70px_rgba(79,140,255,0.24)] transition hover:shadow-[0_18px_80px_rgba(0,214,255,0.28)]"
                  >
                    Start Free
                    <IconArrow />
                  </a>
                  <a
                    href="#contact"
                    className="hover-glow magnetic inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    Book Demo
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.26em] text-white/65">
                    Trusted by 500+ businesses
                  </span>
                  {["Secure by design", "Fast deployment", "Enterprise support"].map((item) => (
                    <span
                      key={item}
                      className="hover-glow rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white/65"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  {clientLogos.map((name) => (
                    <span
                      key={name}
                      className="hover-glow rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm text-white/65 backdrop-blur-xl"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                data-reveal
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className="scroll-float relative mx-auto w-full max-w-4xl"
                data-parallax="30"
              >
                <div className="hero-glow hover-sheen hover-glow glass-panel-strong relative overflow-hidden rounded-[2.5rem] p-5 md:p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(91,140,255,0.28),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(0,217,255,0.16),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(124,77,255,0.14),transparent_28%)]" />
                  <div className="absolute inset-0 soft-grid opacity-[0.08]" />

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[#070d1d]/90 p-4 md:p-5">
                    <div className="relative min-h-[520px] overflow-hidden rounded-[1.7rem] border border-white/[0.08] bg-[radial-gradient(circle_at_top,rgba(91,140,255,0.18),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))]">
                      <Image
                        src="/hero.png"
                        alt="Enterprise AI dashboard"
                        fill
                        priority
                        className="object-cover opacity-95"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.02),rgba(5,8,22,0.62))]" />

                      <div className="absolute left-5 top-5 rounded-full border border-white/[0.12] bg-[#050816]/60 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/75 backdrop-blur-xl">
                        Enterprise AI dashboard
                      </div>

                      <div className="absolute left-5 right-5 top-20 grid gap-3 sm:grid-cols-2">
                        {["AI automation", "Context engineering", "Predictive analytics", "Agentic workflows"].map((item) => (
                          <div
                            key={item}
                            className="glass-panel hover-glow rounded-2xl px-4 py-3 text-sm font-medium text-white/88"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                        {[
                          ["99.98%", "Accuracy"],
                          ["24/7", "Support"],
                          ["100+", "Deployments"]
                        ].map(([value, label]) => (
                          <div
                            key={label}
                            className="glass-panel hover-glow rounded-2xl px-4 py-3 text-left"
                          >
                            <div className="text-xl font-semibold tracking-[-0.04em] text-white">{value}</div>
                            <div className="mt-1 text-xs uppercase tracking-[0.26em] text-white/55">{label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="scroll-soft-glow py-8 md:py-12">
          <div className="section-shell">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6" data-parallax="14">
              {statCards.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel hover-sheen hover-glow magnetic rounded-[1.7rem] p-5"
                  data-reveal
                >
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    <AnimatedCounter value={item.value} suffix={item.suffix} decimals={item.decimals} />
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 py-12 md:scroll-mt-32 md:py-16">
          <div className="section-shell">
            <div className="section-heading mb-10" data-reveal>
              <div className="section-kicker">About</div>
              <h2 className="section-title">
                Built for enterprise AI adoption.
              </h2>
              <p className="section-copy">
                We design AI systems around business context, execution, and measurable outcomes,
                so the experience feels premium and operationally useful.
              </p>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]" data-parallax="8">
              {problems.map((item) => (
                <article
                  key={item.title}
                  className="hover-underline grid gap-4 py-6 md:grid-cols-[0.9fr_1.1fr]"
                  data-reveal
                >
                  <div className="text-sm uppercase tracking-[0.3em] text-white/40">{item.stat}</div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-aurora-muted">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="section-shell">
            <div className="section-heading max-w-3xl" data-reveal>
              <div className="section-kicker">Workflow</div>
              <h2 className="section-title">
                Built around an intelligent business workflow.
              </h2>
              <p className="section-copy">
                We connect data, intelligence, and automation into one production-ready flow that compounds business value.
              </p>
            </div>

            <div className="mt-10 grid gap-0 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] md:grid-cols-3" data-parallax="12">
              {workflowSteps.map((step, index) => (
                <div
                  key={step}
                  className="hover-underline border-b border-white/[0.08] px-6 py-6 md:border-b-0 md:border-r md:last:border-r-0"
                  data-reveal
                >
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.28em] text-white/40">
                    <span>Step 0{index + 1}</span>
                    <span className="text-white/30">0{index + 1}</span>
                  </div>
                  <div className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">{step}</div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-white/15 via-cyan-300/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 py-12 md:scroll-mt-32 md:py-16">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="section-heading" data-reveal>
                <div className="section-kicker">Services</div>
                <h2 className="section-title">
                  Enterprise AI services built to move the business.
                </h2>
                <p className="section-copy">
                  Strategy, product, automation, and AI delivery under one premium brand system.
                </p>
              </div>

              <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]" data-parallax="8">
                {solutions.map((item, index) => (
                  <div
                    key={item.title}
                    className="hover-underline grid gap-4 py-5 md:grid-cols-[0.18fr_0.82fr]"
                    data-reveal
                  >
                    <div className="text-sm uppercase tracking-[0.3em] text-white/40">0{index + 1}</div>
                    <div>
                      <div className="text-xl font-semibold tracking-[-0.03em] text-white">{item.title}</div>
                      <p className="mt-2 max-w-2xl text-base leading-7 text-aurora-muted">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="scroll-mt-28 py-12 md:scroll-mt-32 md:py-16">
          <div className="section-shell">
            <div className="section-heading mb-10" data-reveal>
              <div className="section-kicker">Solutions</div>
              <h2 className="section-title">
                AI solutions that feel like a product, not a pitch.
              </h2>
              <p className="section-copy">
                From copilots to analytics, the system should feel polished, fast, and enterprise-grade.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3" data-parallax="10">
              {services.map((item, index) => (
                <article
                  key={item}
                  className="hover-sheen hover-glow group relative overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03] px-5 py-5 transition hover:border-white/16 hover:bg-white/[0.05]"
                  data-reveal
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/40">0{index + 1}</div>
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">{item}</h3>
                      <p className="mt-3 max-w-lg text-sm leading-7 text-aurora-muted">
                        {[
                          "Assess AI readiness and identify the highest-value opportunity before you build.",
                          "Structure the context behind your workflows so AI can actually use it.",
                          "Deploy production agents and workflows that fit the business.",
                          "Keep AI systems reliable after launch with continuous operations.",
                          "Full-stack product engineering for companies modernizing or rescuing products.",
                          "Embedded engineering teams combining expert operators and AI execution."
                        ][index]}
                      </p>
                    </div>
                    <div className="mt-1 text-white/30 transition group-hover:text-white/70">
                      <IconArrow />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="section-heading" data-reveal>
                <div className="section-kicker">Why Us</div>
                <h2 className="section-title">
                  The team and platform behind the execution.
                </h2>
                <p className="section-copy">
                  We bring product thinking, enterprise delivery, and AI engineering together so the final system feels polished and dependable.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map((item) => (
                  <div key={item} className="hover-underline border-t border-white/[0.08] py-4" data-reveal>
                    <div className="text-lg font-semibold tracking-[-0.03em] text-white">{item}</div>
                    <div className="mt-2 text-sm leading-6 text-white/60">
                      Enterprise-grade delivery with a premium interface and measurable business value.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="section-shell">
            <div className="section-heading mb-10" data-reveal>
              <div className="section-kicker">AI Products</div>
              <h2 className="section-title">
                Interactive products your team can actually use.
              </h2>
              <p className="section-copy">
                Each product feels integrated into the system instead of sitting inside another heavy card.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4" data-parallax="10">
              {aiProducts.map((item, index) => (
                <article
                  key={item}
                  className="hover-sheen hover-glow group relative overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03] px-5 py-5 transition hover:border-white/16 hover:bg-white/[0.05]"
                  data-reveal
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/40">0{index + 1}</div>
                      <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white">{item}</h3>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-aurora-muted">
                        AI-powered experiences crafted for enterprise workflows, customer-facing experiences, and internal operations.
                      </p>
                    </div>
                    <div className="mt-1 text-white/30 transition group-hover:text-white/70">
                      <IconArrow />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="scroll-mt-28 py-12 md:scroll-mt-32 md:py-16">
          <div className="section-shell">
            <div className="section-heading mb-10" data-reveal>
              <div className="section-kicker">Industries</div>
              <h2 className="section-title">
                Designed for the teams that need AI most.
              </h2>
              <p className="section-copy">
                Healthcare, finance, retail, manufacturing, education, and more.
              </p>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]" data-parallax="8">
              {industryCards.map((item, index) => (
                <article
                  key={item.name}
                  className="hover-underline grid gap-4 py-5 md:grid-cols-[0.25fr_0.75fr]"
                  data-reveal
                >
                  <div className="text-sm uppercase tracking-[0.3em] text-white/40">0{index + 1}</div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                      {item.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-aurora-muted">{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="scroll-mt-28 py-12 md:scroll-mt-32 md:py-16">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="section-heading" data-reveal>
                <div className="section-kicker">Blog</div>
                <h2 className="section-title">
                  Insights on building enterprise AI.
                </h2>
                <p className="section-copy max-w-xl">
                  Thought leadership, product notes, and delivery patterns for AI that ships.
                </p>
              </div>

              <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] hover-sheen" data-reveal data-parallax="8">
                {team.map((item) => (
                  <div key={item.title} className="hover-underline py-5">
                    <div className="text-lg font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </div>
                    <div className="mt-2 text-base leading-7 text-aurora-muted">{item.copy}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-28 py-12 md:scroll-mt-32 md:py-16">
          <div className="section-shell">
            <div className="section-heading mb-10" data-reveal>
              <div className="section-kicker">Pricing</div>
              <h2 className="section-title">
                Flexible engagement models for different stages.
              </h2>
              <p className="section-copy">
                Whether you need a focused AI pilot or a full embedded team, we shape the engagement around the outcome.
              </p>
            </div>

            <div className="grid gap-3 xl:grid-cols-3" data-parallax="10">
              {pricingTiers.map((tier) => (
                <article
                  key={tier.name}
                  className="hover-sheen hover-glow rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03] p-6 md:p-7"
                  data-reveal
                >
                  <div className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/55">
                    {tier.name}
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {tier.price}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-aurora-muted">{tier.description}</p>
                  <div className="mt-6 text-sm text-white/55">Contact us for a tailored scope.</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="section-shell">
            <div className="section-heading mb-10" data-reveal>
              <div className="section-kicker">Testimonials</div>
              <h2 className="section-title">
                Built to feel credible to enterprise buyers.
              </h2>
              <p className="section-copy">
                The tone, motion, and layout should communicate reliability before a sales conversation even starts.
              </p>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]" data-parallax="10">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="hover-underline grid gap-4 py-5 lg:grid-cols-[0.35fr_0.65fr]"
                  data-reveal
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.06] text-sm font-semibold text-white">
                      {item.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-sm text-white/55">{item.role}</div>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-aurora-muted">"{item.quote}"</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="section-heading" data-reveal>
                <div className="section-kicker">FAQ</div>
                <h2 className="section-title">
                  Common questions from enterprise teams.
                </h2>
                <p className="section-copy">
                  The interface stays light and easy to scan while still giving depth for decision-makers.
                </p>
              </div>

              <div className="space-y-4">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group hover-underline border-b border-white/[0.08] py-5"
                    data-reveal
                  >
                    <summary className="cursor-pointer list-none text-lg font-semibold tracking-[-0.03em] text-white">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-base leading-7 text-aurora-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="relative mt-8 overflow-hidden border-t border-white/10 bg-[#050816]/80 py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(79,140,255,0.12),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(0,214,255,0.14),transparent_24%)]" />
        <div className="section-shell relative">
          <div className="hover-sheen overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-7 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="grid gap-5">
                <div className="section-kicker">Contact</div>
                <h2 className="section-title max-w-3xl">
                  Let&apos;s build the right AI engagement.
                </h2>
                <p className="section-copy max-w-2xl">
                  Whether you need AI strategy, workflow automation, or a custom product, we&apos;ll help
                  define the highest-value next step.
                </p>
                <div className="grid gap-4 border-t border-white/[0.08] pt-4 text-sm text-white/70 sm:grid-cols-2">
                  <div>hello@agyntiq.ai</div>
                  <div>New Delhi, India</div>
                  <div>Global remote delivery</div>
                  <div>AI implementation</div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="hover-glow rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-5">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/40">Contact Form</div>
                  <form className="mt-4 grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <input className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none" placeholder="Full Name" />
                      <input className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none" placeholder="Company Name" />
                      <input className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none" placeholder="Email" />
                      <input className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none" placeholder="Phone" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <input className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none" placeholder="Business Type" />
                      <input className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none" placeholder="Industry" />
                    </div>
                    <textarea
                      rows={5}
                      className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none"
                      placeholder="Tell us about your AI requirement, budget, timeline, and country."
                    />
                    <label className="flex items-center gap-3 text-sm text-white/65">
                      <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/10" />
                      I agree to Terms
                    </label>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        className="aurora-button magnetic inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white"
                      >
                        Submit
                        <IconArrow />
                      </button>
                      <a
                        href="mailto:hello@agyntiq.ai"
                        className="magnetic inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white/90 backdrop-blur-xl"
                      >
                        Schedule Meeting
                      </a>
                    </div>
                  </form>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border-t border-white/[0.08] pt-4">
                    <div className="text-sm uppercase tracking-[0.28em] text-white/45">Navigation</div>
                    <div className="mt-4 space-y-3 text-sm text-white/70">
                      {navItems.map((item) => (
                        <a key={item.href} href={item.href} className="block transition hover:text-white">
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/[0.08] pt-4">
                    <div className="text-sm uppercase tracking-[0.28em] text-white/45">Social</div>
                    <div className="mt-4 space-y-3 text-sm text-white/70">
                      <div>LinkedIn</div>
                      <div>GitHub</div>
                      <div>Twitter</div>
                      <div>Newsletter</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
              <span>© 2026 Agyntiq.ai. All rights reserved.</span>
              <span>Premium AI solutions for enterprise transformation.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
