"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
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

type ServiceSlide = {
  number: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  bullets: string[];
  chips: string[];
};

const serviceSlides: ServiceSlide[] = [
  {
    number: "02",
    eyebrow: "Core Services",
    title: "AI Strategy & Readiness Services",
    subtitle: "Help organizations identify, prioritize, and justify AI adoption.",
    summary:
      "A strategic starting point that turns AI ambition into a business case, an operating model, and a roadmap.",
    bullets: [
      "Help organizations identify, prioritize, and justify AI adoption",
      "Core services: AI Strategy & Readiness, AI Solution Development, AI Integration Services, AI Data Services, AI Managed Services",
      "Build the right foundation before anything is deployed"
    ],
    chips: ["Discovery-first", "Enterprise context", "ROI led"]
  },
  {
    number: "03",
    eyebrow: "Customer Value",
    title: "From curiosity to compounding value",
    subtitle: "A clean value map for business leaders deciding where AI should go next.",
    summary:
      "This slide shows how AI moves from interest to adoption, and then into measurable enterprise value.",
    bullets: [
      "Curiosity -> investment decisions",
      "Strategy -> deployable AI products",
      "AI becomes part of existing enterprise workflows, not a separate tool",
      "Improved enterprise productivity within familiar tools and processes",
      "Sustained long-term AI value through continuous optimization"
    ],
    chips: ["Value clarity", "Faster realization", "Reusable platform thinking"]
  },
  {
    number: "04",
    eyebrow: "Starting Point",
    title: "Opportunity Identification and Roadmap Design",
    subtitle: "Map the highest-value opportunities before you invest in the build.",
    summary:
      "A focused planning screen that organizes the strategy work into a clear sequence of decisions.",
    bullets: [
      "Enterprise AI opportunity mapping across departments",
      "AI use-case identification workshops",
      "AI maturity assessment",
      "AI ROI modeling and value estimation",
      "AI investment prioritization frameworks"
    ],
    chips: ["3-5 year roadmap", "Governed adoption", "Business case"]
  },
  {
    number: "05",
    eyebrow: "Core Revenue Generator",
    title: "AI Solution Development",
    subtitle: "Building AI-powered applications and tools.",
    summary:
      "This track turns strategy into usable products, accelerators, and enterprise-ready AI experiences.",
    bullets: [
      "Assistants and agents for internal teams",
      "GenAI applications for summarization and report generation",
      "Predictive AI solutions for forecasting and risk",
      "Decision intelligence platforms with dashboards and recommendations",
      "Industry-ready AI accelerators and reusable modules"
    ],
    chips: ["Productized delivery", "Reusable modules", "Faster build cycles"]
  },
  {
    number: "06",
    eyebrow: "Across the stack",
    title: "AI Integration Services",
    subtitle: "Embedding AI into existing enterprise technology systems.",
    summary:
      "Designed to make AI feel native inside the tools, workflows, and systems people already use.",
    bullets: [
      "Enterprise system integration",
      "Workflow automation integration",
      "Knowledge integration including RAG",
      "Data and application connectivity",
      "Digital workplace AI with copilots and assistants"
    ],
    chips: ["Workflow automation", "RAG ready", "Into existing tools"]
  },
  {
    number: "07",
    eyebrow: "Recurring Revenue Generator",
    title: "AI Data Services",
    subtitle: "Preparing and managing data required for AI systems.",
    summary:
      "This layer creates the structured, governed data foundation that makes every downstream model more reliable.",
    bullets: [
      "AI data engineering",
      "AI data preparation",
      "Data annotation and labeling",
      "AI knowledge architecture",
      "Data quality and governance"
    ],
    chips: ["Structured data", "Knowledge layer", "Governance first"]
  },
  {
    number: "08",
    eyebrow: "Subscription Based Value",
    title: "AI Managed Services",
    subtitle: "Long-term operation and optimization of AI systems.",
    summary:
      "An always-on service layer that keeps AI reliable, compliant, and improving after launch.",
    bullets: [
      "AI model monitoring",
      "AI optimization services",
      "AI reliability and support",
      "AI governance and compliance",
      "Continuous AI improvement"
    ],
    chips: ["Always-on operations", "Continuous optimization", "Subscription value"]
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
    summary:
      "Patient workflows, triage support, and operational analytics designed for regulated environments."
  },
  {
    name: "Finance",
    summary: "Risk, compliance, and customer intelligence systems built for accuracy and trust."
  },
  {
    name: "Retail",
    summary:
      "Personalization, forecasting, and support automation that improves conversion and retention."
  },
  {
    name: "Manufacturing",
    summary:
      "Predictive maintenance, quality insights, and industrial intelligence for faster decisions."
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
  const [showScrollTop, setShowScrollTop] = useState(false);
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
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setShowScrollTop(y > 600);
    };
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
          scrolled ? "border-b border-white/10 bg-[#050816]/72 backdrop-blur-2xl" : "bg-transparent"
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
            mobileOpen
              ? "pointer-events-auto max-h-[32rem] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
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
        <section
          id="hero"
          className="relative scroll-mt-28 overflow-hidden pb-10 pt-16 md:scroll-mt-32 md:pb-28 md:pt-24"
        >
          <div className="section-shell relative z-10">
            <div className="noise-overlay" />
            <div className="absolute inset-x-0 top-[-10%] h-[48rem] bg-[radial-gradient(circle_at_18%_18%,rgba(76,110,255,0.22),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(0,162,255,0.2),transparent_20%),radial-gradient(circle_at_52%_78%,rgba(74,93,255,0.12),transparent_26%)]" />
            <div className="absolute left-[6%] top-[10%] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(80,122,255,0.26),transparent_70%)] blur-3xl" />
            <div className="absolute right-[4%] top-[8%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.22),transparent_68%)] blur-3xl" />
            <div className="absolute bottom-[8%] left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(17,101,255,0.26),rgba(17,101,255,0.08)_34%,transparent_70%)] blur-2xl" />

            <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <motion.div
                data-reveal
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative z-10 max-w-3xl self-start"
              >
                <div className="section-kicker mb-6">
                  <IconSpark />
                  Flagship enterprise AI platform
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.08em] text-white md:text-7xl xl:text-[6.4rem]">
                  <span className="block">AI That Acts.</span>
                  <span className="mt-2 block bg-[linear-gradient(90deg,#f7fbff_0%,#9aa8ff_42%,#5a62ff_76%,#8b7bff_100%)] bg-clip-text text-transparent">
                    Results That Matter.
                  </span>
                </h1>

                <p className="section-copy mt-7 max-w-2xl md:text-xl">
                  Agentic AI systems that plan, decide, and act autonomously to solve real-world
                  problems at scale.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#services"
                    className="aurora-button hover-sheen magnetic inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_70px_rgba(79,140,255,0.24)] transition hover:shadow-[0_18px_80px_rgba(0,214,255,0.28)]"
                  >
                    Explore Solutions
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
                    Goal: Increase conversion by 25%
                  </span>
                  {["Analyze data", "Identify opportunities", "Execute strategy"].map((item) => (
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
                className="scroll-float relative self-start justify-self-end"
                data-parallax="30"
              >
                <div className="relative min-h-[560px] overflow-visible md:min-h-[680px]">
                  <div className="absolute right-0 top-[-48px] w-[320px] md:top-[-72px] md:w-[390px] lg:top-[-92px] lg:w-[470px]">
                    <Image
                      src="/hero2.png"
                      alt="AI hero visual"
                      width={1024}
                      height={1536}
                      priority
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="scroll-soft-glow py-4 md:py-12">
          <div className="section-shell relative z-10">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6" data-parallax="14">
              {statCards.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel hover-sheen hover-glow magnetic rounded-[1.7rem] p-5"
                  data-reveal
                >
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    <AnimatedCounter
                      value={item.value}
                      suffix={item.suffix}
                      decimals={item.decimals}
                    />
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="relative overflow-hidden scroll-mt-28 py-12 md:scroll-mt-32 md:py-16"
        >
          <div className="section-shell relative z-10">
            <div className="section-heading mb-10" data-reveal>
              <div className="section-kicker">About</div>
              <h2 className="section-title">Built for enterprise AI adoption.</h2>
              <p className="section-copy">
                We design AI systems around business context, execution, and measurable outcomes, so
                the experience feels premium and operationally useful.
              </p>
            </div>

            <div
              className="divide-y divide-white/[0.08] border-y border-white/[0.08]"
              data-parallax="8"
            >
              {problems.map((item) => (
                <article
                  key={item.title}
                  className="hover-underline grid gap-4 py-6 md:grid-cols-[0.9fr_1.1fr]"
                  data-reveal
                >
                  <div className="text-sm uppercase tracking-[0.3em] text-white/40">
                    {item.stat}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-aurora-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ScrollShowcaseSection />

        <section className="py-12 md:py-16">
          <div className="section-shell">
            <div className="section-heading max-w-3xl" data-reveal>
              <div className="section-kicker">Workflow</div>
              <h2 className="section-title">Built around an intelligent business workflow.</h2>
              <p className="section-copy">
                We connect data, intelligence, and automation into one production-ready flow that
                compounds business value.
              </p>
            </div>

            <div
              className="mt-10 grid gap-0 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] md:grid-cols-3"
              data-parallax="12"
            >
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
                  <div className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {step}
                  </div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-white/15 via-cyan-300/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="relative overflow-hidden scroll-mt-28 py-12 md:scroll-mt-32 md:py-16"
        >
          <div className="section-shell">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="section-heading" data-reveal>
                <div className="section-kicker">Services</div>
                <h2 className="section-title">
                  Enterprise AI services built to move the business.
                </h2>
                <p className="section-copy">
                  Strategy, product, automation, and AI delivery under one premium brand system.
                </p>
              </div>

              <div
                className="divide-y divide-white/[0.08] border-y border-white/[0.08]"
                data-parallax="8"
              >
                {solutions.map((item, index) => (
                  <div
                    key={item.title}
                    className="hover-underline grid gap-4 py-5 md:grid-cols-[0.18fr_0.82fr]"
                    data-reveal
                  >
                    <div className="text-sm uppercase tracking-[0.3em] text-white/40">
                      0{index + 1}
                    </div>
                    <div>
                      <div className="text-xl font-semibold tracking-[-0.03em] text-white">
                        {item.title}
                      </div>
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
              <h2 className="section-title">Service capabilities, organized by slide.</h2>
              <p className="section-copy">
                The service deck now powers this compact index, so each capability stays connected
                to the presentation content.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3" data-parallax="10">
              {serviceSlides.map((item) => (
                <article
                  key={item.number}
                  className="hover-sheen hover-glow group relative overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03] px-5 py-5 transition hover:border-white/16 hover:bg-white/[0.05]"
                  data-reveal
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                        Slide {item.number}
                      </div>
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-7 text-aurora-muted">
                        {item.subtitle}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.chips.slice(0, 2).map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-white/55"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
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
                <h2 className="section-title">The team and platform behind the execution.</h2>
                <p className="section-copy">
                  We bring product thinking, enterprise delivery, and AI engineering together so the
                  final system feels polished and dependable.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map((item) => (
                  <div
                    key={item}
                    className="hover-underline border-t border-white/[0.08] py-4"
                    data-reveal
                  >
                    <div className="text-lg font-semibold tracking-[-0.03em] text-white">
                      {item}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-white/60">
                      Enterprise-grade delivery with a premium interface and measurable business
                      value.
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
              <h2 className="section-title">Interactive products your team can actually use.</h2>
              <p className="section-copy">
                Each product feels integrated into the system instead of sitting inside another
                heavy card.
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
                      <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                        0{index + 1}
                      </div>
                      <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white">
                        {item}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-aurora-muted">
                        AI-powered experiences crafted for enterprise workflows, customer-facing
                        experiences, and internal operations.
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
              <h2 className="section-title">Designed for the teams that need AI most.</h2>
              <p className="section-copy">
                Healthcare, finance, retail, manufacturing, education, and more.
              </p>
            </div>

            <div
              className="divide-y divide-white/[0.08] border-y border-white/[0.08]"
              data-parallax="8"
            >
              {industryCards.map((item, index) => (
                <article
                  key={item.name}
                  className="hover-underline grid gap-4 py-5 md:grid-cols-[0.25fr_0.75fr]"
                  data-reveal
                >
                  <div className="text-sm uppercase tracking-[0.3em] text-white/40">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                      {item.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-aurora-muted">
                      {item.summary}
                    </p>
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
                <h2 className="section-title">Insights on building enterprise AI.</h2>
                <p className="section-copy max-w-xl">
                  Thought leadership, product notes, and delivery patterns for AI that ships.
                </p>
              </div>

              <div
                className="divide-y divide-white/[0.08] border-y border-white/[0.08] hover-sheen"
                data-reveal
                data-parallax="8"
              >
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
              <h2 className="section-title">Flexible engagement models for different stages.</h2>
              <p className="section-copy">
                Whether you need a focused AI pilot or a full embedded team, we shape the engagement
                around the outcome.
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
              <h2 className="section-title">Built to feel credible to enterprise buyers.</h2>
              <p className="section-copy">
                The tone, motion, and layout should communicate reliability before a sales
                conversation even starts.
              </p>
            </div>

            <div
              className="divide-y divide-white/[0.08] border-y border-white/[0.08]"
              data-parallax="10"
            >
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
                  <p className="mt-5 text-base leading-7 text-aurora-muted">
                    &ldquo;{item.quote}&rdquo;
                  </p>
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
                <h2 className="section-title">Common questions from enterprise teams.</h2>
                <p className="section-copy">
                  The interface stays light and easy to scan while still giving depth for
                  decision-makers.
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

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-[#050816]/82 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 md:bottom-8 md:right-8 ${
          showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <span className="text-lg leading-none">↑</span>
      </button>

      <footer
        id="contact"
        className="relative mt-8 overflow-hidden border-t border-white/10 bg-[#050816]/80 py-12 md:py-16"
      >
        <div className="section-shell relative z-10">
          <div className="hover-sheen overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-7 md:p-10 backdrop-blur-[2px]">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="grid gap-5">
                <div className="section-kicker">Contact</div>
                <h2 className="section-title max-w-3xl">
                  Let&apos;s build the right AI engagement.
                </h2>
                <p className="section-copy max-w-2xl">
                  Whether you need AI strategy, workflow automation, or a custom product, we&apos;ll
                  help define the highest-value next step.
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
                  <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                    Contact Form
                  </div>
                  <form className="mt-4 grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none"
                        placeholder="Full Name"
                      />
                      <input
                        className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none"
                        placeholder="Company Name"
                      />
                      <input
                        className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none"
                        placeholder="Email"
                      />
                      <input
                        className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none"
                        placeholder="Business Type"
                      />
                      <input
                        className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none"
                        placeholder="Industry"
                      />
                    </div>
                    <textarea
                      rows={5}
                      className="rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-cyan-300 focus:outline-none"
                      placeholder="Tell us about your AI requirement, budget, timeline, and country."
                    />
                    <label className="flex items-center gap-3 text-sm text-white/65">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-white/20 bg-white/10"
                      />
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
                    <div className="text-sm uppercase tracking-[0.28em] text-white/45">
                      Navigation
                    </div>
                    <div className="mt-4 space-y-3 text-sm text-white/70">
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block transition hover:text-white"
                        >
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

function ScrollShowcaseSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeService = serviceSlides[activeSlide];
  const nextService = serviceSlides[(activeSlide + 1) % serviceSlides.length];

  const goToSlide = (nextIndex: number) => {
    setActiveSlide((current) => {
      const movingForward =
        nextIndex > current || (current === serviceSlides.length - 1 && nextIndex === 0);
      setDirection(movingForward ? 1 : -1);
      return nextIndex;
    });
  };

  return (
    <section className="relative overflow-x-clip py-12 md:py-16">
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
          <div className="section-heading mx-auto max-w-3xl text-center" data-reveal>
            <div className="section-kicker">Services</div>
            <h2 className="section-title max-w-[12ch] sm:max-w-none text-balance">
              Slides 02 to 08, turned into a service navigator.
            </h2>
            <p className="section-copy mx-auto max-w-2xl">
              The presentation content now lives inside a centered, animated service deck with
              navigation for strategy, delivery, integration, data, and managed services.
            </p>
          </div>

          <div
            className="mt-8 flex gap-2 overflow-x-auto rounded-full border border-white/[0.08] bg-white/[0.03] p-2 text-xs uppercase tracking-[0.3em] text-white/50 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            data-reveal
          >
            {serviceSlides.map((slide, index) => (
              <button
                key={slide.number}
                type="button"
                aria-pressed={activeSlide === index}
                onClick={() => goToSlide(index)}
                className={`group flex min-w-[9.5rem] items-center gap-3 rounded-full px-4 py-3 text-left transition ${
                  activeSlide === index
                    ? "bg-white/[0.1] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.14)]"
                    : "bg-transparent hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-[0.72rem] font-semibold tracking-[0.26em] text-white/80">
                  {slide.number}
                </span>
                <span className="text-[0.68rem] leading-4 tracking-[0.22em]">{slide.eyebrow}</span>
              </button>
            ))}
          </div>

          <div className="relative mx-auto mt-8 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_30px_110px_rgba(0,0,0,0.34)]">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute right-[-8%] top-[-12%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,214,255,0.16),transparent_68%)] blur-3xl" />
              <div className="absolute left-[-6%] bottom-[-12%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.14),transparent_68%)] blur-3xl" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeService.number}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 48 : -48, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -48 : 48, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid gap-0 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative overflow-hidden border-b border-white/[0.08] lg:border-b-0 lg:border-r">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.12)_0%,rgba(5,8,22,0.78)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_28%)]" />
                  <div className="relative flex min-h-[24rem] flex-col justify-between p-6 sm:p-8 lg:min-h-[34rem]">
                    <div className="space-y-5">
                      <div className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-[0.7rem] uppercase tracking-[0.28em] text-white/55">
                        {activeService.eyebrow}
                      </div>
                      <div className="text-7xl font-semibold tracking-[-0.1em] text-white/12 sm:text-8xl">
                        {activeService.number}
                      </div>
                      <div className="max-w-md">
                        <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                          {activeService.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                          {activeService.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {activeService.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/[0.1] bg-white/[0.05] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-white/60"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs uppercase tracking-[0.32em] text-white/45">
                      Slide {activeSlide + 1} of 07
                    </div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/35">
                      Service navigator
                    </div>
                  </div>

                  <div className="space-y-5">
                    <p className="max-w-2xl text-base leading-7 text-white/72">
                      {activeService.summary}
                    </p>

                    <div className="grid gap-3 md:grid-cols-2">
                      {activeService.bullets.map((bullet, index) => (
                        <motion.div
                          key={bullet}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.45, delay: index * 0.04 }}
                          className="hover-sheen rounded-[1.2rem] border border-white/[0.08] bg-white/[0.04] p-4"
                        >
                          <div className="text-xs uppercase tracking-[0.28em] text-white/35">
                            0{index + 1}
                          </div>
                          <div className="mt-2 text-sm leading-6 text-white/85">{bullet}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto grid gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-white/35">Slide</div>
                      <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
                        {String(activeSlide + 1).padStart(2, "0")} of 07
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-white/35">Format</div>
                      <div className="mt-2 text-sm leading-6 text-white/75">
                        Animated service deck
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-white/35">Next</div>
                      <div className="mt-2 text-sm leading-6 text-white/75">
                        {nextService.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
