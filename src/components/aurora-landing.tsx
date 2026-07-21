"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

type NavItem =
  | {
      label: string;
      href: `#${string}`;
    }
  | {
      label: string;
      href: "/services";
    };

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
] satisfies NavItem[];

const serviceMenuDisplay = [
  {
    title: "AI Strategy",
    subtitle: "Roadmaps for AI success",
    href: "/services/ai-strategy-readiness",
    icon: "brain"
  },
  {
    title: "AI Development",
    subtitle: "Custom AI solutions",
    href: "/services/ai-solution-development",
    icon: "cube"
  },
  {
    title: "Data & Analytics",
    subtitle: "Actionable insights",
    href: "/services/ai-data-services",
    icon: "chart"
  },
  {
    title: "AI Integration",
    subtitle: "Seamless system integration",
    href: "/services/ai-integration-services",
    icon: "shield"
  }
] as const;

const premiumSurface =
  "border border-[#7547df]/14 bg-[linear-gradient(135deg,rgba(5,12,38,0.9)_0%,rgba(7,8,28,0.96)_52%,rgba(10,14,48,0.86)_100%)] shadow-[0_20px_70px_rgba(0,0,0,0.26)]";
const premiumSurfaceHover =
  "transition duration-500 hover:-translate-y-1 hover:border-[#e457ff]/24 hover:shadow-[0_24px_90px_rgba(147,51,234,0.14)]";
const premiumFlatCard =
  "bg-[linear-gradient(135deg,rgba(5,12,38,0.9)_0%,rgba(7,8,28,0.96)_52%,rgba(10,14,48,0.86)_100%)] shadow-[0_20px_70px_rgba(0,0,0,0.24)]";
const premiumDivider = "divide-y divide-transparent border-y border-transparent";
const premiumSoftBorder = "border-transparent";
const premiumInput =
  "rounded-2xl border border-[#315cff]/18 bg-[#05081f]/72 px-4 py-3 text-sm text-white placeholder:text-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition focus:border-fuchsia-300/70 focus:bg-[#080a28] focus:outline-none focus:shadow-[0_0_0_4px_rgba(217,70,239,0.12)]";

function MenuIcon({ name }: { name: (typeof serviceMenuDisplay)[number]["icon"] }) {
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

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3.5 19 6v5.5c0 4.2-2.8 7.1-7 8.9-4.2-1.8-7-4.7-7-8.9V6l7-2.5Z" />
      <path d="m9.4 12.1 1.7 1.7 3.8-3.9" />
    </svg>
  );
}

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

const slideShowcase = [
  {
    src: "/slide.jpeg",
    title: "Workspace focus",
    copy: "The first image captures the calm, attentive start of the workday.",
    tag: "01"
  },
  {
    src: "/slide1.jpeg",
    title: "Team alignment",
    copy: "The second image shows people gathering around shared context and ideas.",
    tag: "02"
  },
  {
    src: "/slide2.jpeg",
    title: "Digital execution",
    copy: "The third image reflects systems, tools, and the work moving ahead.",
    tag: "03"
  },
  {
    src: "/slide3.jpeg",
    title: "Finished momentum",
    copy: "The final image suggests a polished result and a wider sense of scale.",
    tag: "04"
  }
] as const;

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();
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

  const isNavItemActive = (href: string) =>
    href.startsWith("/") ? pathname === href : active === href.slice(1);

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
      .filter((item) => item.href.startsWith("#"))
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
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-[linear-gradient(90deg,#2E6CEB_0%,#5B5CFF_52%,#7547DF_100%)]"
        style={{ scaleX: progress }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#050c26_0%,#07081c_52%,#0a0e30_100%)]" />
        <div className="aurora-blob absolute left-[-8%] top-[-6%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(46,108,235,0.16),transparent_66%)] blur-3xl animate-drift" />
        <div className="aurora-blob absolute right-[-6%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(117,71,223,0.15),transparent_64%)] blur-3xl animate-drift" />
        <div className="aurora-blob absolute bottom-[16%] left-[26%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(117,71,223,0.13),transparent_64%)] blur-3xl animate-drift" />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-[#050816]/72 backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <div className="section-shell flex h-20 items-center justify-between gap-4 md:grid md:h-24 md:grid-cols-[1fr_auto_1fr] md:gap-10 md:gap-12">
          <Link href="/" className="group flex w-fit items-center justify-self-start pl-0">
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
          </Link>

          <nav className="hidden items-center gap-1 justify-self-center rounded-full border border-[#31215f] bg-[#0d1029]/96 p-2 shadow-[0_14px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:flex">
            {navItems.map((item) => {
              const isActive = isNavItemActive(item.href);
              const isRoute = item.href === "/services";
              return (
                isRoute ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onFocusCapture={() => setServicesOpen(true)}
                    onBlurCapture={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setServicesOpen(false);
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-[0.95rem] font-medium tracking-[-0.01em] transition-all ${
                        isActive
                          ? "bg-[linear-gradient(180deg,rgba(72,62,214,0.95)_0%,rgba(101,55,214,0.96)_45%,rgba(149,53,215,0.96)_100%)] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_26px_rgba(127,63,255,0.25)]"
                          : "text-white/72 hover:bg-white/[0.06] hover:text-white"
                      }`}
                      aria-haspopup="menu"
                      aria-expanded={servicesOpen}
                    >
                      {item.label}
                      <span className={`text-[0.75rem] transition ${servicesOpen ? "rotate-180" : ""}`}>
                        ▾
                      </span>
                    </Link>
                    <div
                      className={`absolute left-1/2 top-full z-[90] mt-3 w-[31rem] -translate-x-1/2 transition-all duration-200 ${
                        servicesOpen
                          ? "pointer-events-auto visible translate-y-0 opacity-100"
                          : "pointer-events-none invisible translate-y-2 opacity-0"
                      }`}
                      role="menu"
                      aria-label="Services menu"
                    >
                      <div className="relative overflow-hidden rounded-[1.25rem] border border-[#4d2aad]/70 bg-[linear-gradient(135deg,rgba(5,12,38,0.98)_0%,rgba(7,8,28,0.98)_52%,rgba(10,14,48,0.98)_100%)] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.48),0_0_34px_rgba(119,57,255,0.14)] backdrop-blur-2xl">
                        <div className="absolute left-1/2 top-[-0.3rem] h-3.5 w-3.5 -translate-x-1/2 rotate-45 bg-[#080b25]" />
                        <div className="grid min-h-[16.5rem] grid-cols-[0.9fr_1.1fr]">
                          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_48%_46%,rgba(58,104,255,0.16),transparent_28%),linear-gradient(180deg,rgba(5,16,48,0.32),rgba(24,8,42,0.08))]">
                            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#2e6ceb]/16" />
                            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-violet-400/20" />
                            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-fuchsia-400/22" />
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,103,255,0.1),transparent_42%,rgba(117,71,223,0.1))]" />
                            <div className="relative flex h-full items-center justify-center">
                              <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[0.85rem] border border-fuchsia-200/14 bg-[#0c0b2c]/70 text-4xl font-semibold text-white shadow-[0_0_38px_rgba(126,87,255,0.42)]">
                                A
                              </div>
                            </div>
                          </div>

                          <div className="px-4 py-1">
                            {serviceMenuDisplay.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className={`group flex items-center gap-3 rounded-[1rem] px-2 py-3 transition hover:bg-[#315cff]/[0.055] ${
                                  pathname === service.href ? "text-white" : "text-white/78 hover:text-white"
                                }`}
                              >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.8rem] border border-fuchsia-400/18 bg-[#151239]/72 text-fuchsia-300 shadow-[0_0_24px_rgba(202,74,255,0.14)] transition group-hover:border-fuchsia-300/35 group-hover:text-fuchsia-200">
                                  <MenuIcon name={service.icon} />
                                </span>
                                <span>
                                  <span className="block text-[1rem] font-semibold leading-6 text-white">
                                    {service.title}
                                  </span>
                                  <span className="mt-0.5 block text-sm leading-5 text-white/56">
                                    {service.subtitle}
                                  </span>
                                </span>
                              </Link>
                            ))}

                            <Link
                              href="/services"
                              className="mt-1 grid grid-cols-[1fr_auto] items-center gap-4 pt-4 text-[1rem] font-semibold text-fuchsia-300 transition hover:text-fuchsia-100"
                            >
                              <span>View All Services</span>
                              <span className="grid h-9 w-9 place-items-center rounded-full border border-[#7547df]/20 bg-[#315cff]/[0.08]">
                                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                                  <path
                                    d="M5 12h13m-5-5 5 5-5 5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-5 py-3 text-[0.95rem] font-medium tracking-[-0.01em] transition-all ${
                      isActive
                        ? "bg-[linear-gradient(180deg,rgba(72,62,214,0.95)_0%,rgba(101,55,214,0.96)_45%,rgba(149,53,215,0.96)_100%)] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_26px_rgba(127,63,255,0.25)]"
                        : "text-white/72 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                )
              );
            })}
          </nav>

          <Link
            href="/services"
            className="magnetic hidden items-center justify-center gap-2 justify-self-end whitespace-nowrap rounded-full border border-[#7547df]/24 bg-[linear-gradient(90deg,#2E6CEB_0%,#5B5CFF_50%,#7547DF_100%)] px-6 py-3.5 text-sm font-semibold leading-none text-white shadow-[0_18px_60px_rgba(91,92,255,0.28)] backdrop-blur-xl transition hover:shadow-[0_20px_70px_rgba(117,71,223,0.28)] md:flex"
          >
            Explore Services
            <IconArrow />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="magnetic ml-auto shrink-0 rounded-full border border-[#7547df]/22 bg-[#10183a]/72 px-3.5 py-2.5 text-xs font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition hover:border-[#8b7cff]/36 hover:bg-[#315cff]/[0.08] md:hidden"
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
          <div className="relative mt-3 overflow-hidden rounded-[1.75rem] border border-[#7547df]/24 bg-[linear-gradient(135deg,rgba(5,12,38,0.98)_0%,rgba(7,8,28,0.98)_52%,rgba(10,14,48,0.98)_100%)] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(14,103,255,0.12),transparent_32%),radial-gradient(circle_at_92%_80%,rgba(117,71,223,0.12),transparent_36%)]" />
            <div className="relative grid gap-2">
              {navItems.map((item) => {
                const isRoute = item.href === "/services";
                const commonClassName = `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isNavItemActive(item.href)
                    ? "bg-[linear-gradient(90deg,#4f73ff_0%,#6d3fe7_52%,#8b35d8_100%)] text-white"
                    : "text-white/75 hover:bg-white/[0.06] hover:text-white"
                }`;

                return isRoute ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={commonClassName}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.href} href={item.href} className={commonClassName}>
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="relative mt-5 pt-4">
              <div className="px-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-100/58">
                Services
              </div>
              <div className="mt-3 grid gap-2">
                {serviceMenuDisplay.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center gap-3 rounded-[0.95rem] border border-[#315cff]/12 bg-[#080b25]/62 p-3 text-white/82 transition hover:border-[#8b7cff]/32 hover:bg-[#315cff]/[0.07] hover:text-white"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.75rem] border border-[#7547df]/18 bg-[#10183a]/72 text-indigo-200 shadow-[0_0_24px_rgba(91,92,255,0.12)] transition group-hover:text-white">
                      <MenuIcon name={service.icon} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold leading-5">{service.title}</span>
                      <span className="mt-0.5 block text-xs leading-5 text-white/52">
                        {service.subtitle}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="aurora-button inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_70px_rgba(79,140,255,0.22)]"
              >
                Explore Services
                <IconArrow />
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="magnetic inline-flex items-center justify-center gap-2 rounded-2xl border border-fuchsia-200/18 bg-[#151239]/72 px-5 py-4 text-sm font-semibold text-white/90 backdrop-blur-xl"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden bg-[linear-gradient(135deg,#050c26_0%,#07081c_52%,#0a0e30_100%)] pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(14,103,255,0.18),transparent_24%),radial-gradient(circle_at_88%_34%,rgba(117,71,223,0.14),transparent_25%),radial-gradient(circle_at_48%_70%,rgba(91,140,255,0.11),transparent_30%)]" />
        <div className="pointer-events-none absolute left-[-8rem] top-[36rem] h-[34rem] w-[34rem] rounded-full bg-[#0e67ff]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-10rem] top-[74rem] h-[38rem] w-[38rem] rounded-full bg-[#7547df]/12 blur-3xl" />
        <section
          id="hero"
          className="relative scroll-mt-28 overflow-hidden pb-10 pt-16 md:scroll-mt-32 md:pb-28 md:pt-24"
        >
          <div className="section-shell relative z-10">
            <div className="noise-overlay" />
            <div className="absolute inset-x-0 top-[-18%] h-[54rem] bg-[radial-gradient(circle_at_18%_18%,rgba(14,103,255,0.2),transparent_25%),radial-gradient(circle_at_82%_22%,rgba(117,71,223,0.16),transparent_22%),radial-gradient(circle_at_52%_78%,rgba(91,140,255,0.12),transparent_28%)]" />
            <div className="absolute right-[10%] top-[4%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(117,71,223,0.16),transparent_70%)] blur-3xl" />
            <div className="absolute left-[6%] top-[10%] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(126,87,255,0.22),transparent_70%)] blur-3xl" />
            <div className="absolute bottom-[8%] left-1/2 h-44 w-[82%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(126,87,255,0.18),rgba(46,108,235,0.08)_34%,transparent_70%)] blur-2xl" />

            <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <motion.div
                data-reveal
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative z-10 max-w-3xl self-start"
              >
                <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,rgba(5,12,38,0.36),rgba(10,14,48,0.24))] blur-2xl" />
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-200/16 bg-[#151239]/58 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-100/66 shadow-[0_0_32px_rgba(126,87,255,0.14)] backdrop-blur-xl">
                  <IconSpark />
                  Flagship enterprise AI platform
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.08em] text-white drop-shadow-[0_0_34px_rgba(126,87,255,0.16)] md:text-7xl xl:text-[6.4rem]">
                  <span className="block bg-[linear-gradient(90deg,#ffffff_0%,#dbe7ff_45%,#f0abfc_100%)] bg-clip-text text-transparent">
                    AI That Acts.
                  </span>
                  <span className="mt-2 block bg-[linear-gradient(90deg,#ffffff_0%,#c7d2fe_38%,#d946ef_100%)] bg-clip-text text-transparent">
                    Results That Matter.
                  </span>
                </h1>

                <p className="section-copy mt-7 max-w-2xl [text-shadow:0_0_24px_rgba(126,87,255,0.12)] md:text-xl">
                  Agentic AI systems that plan, decide, and act autonomously to solve real-world
                  problems at scale.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/services"
                    className="aurora-button hover-sheen magnetic inline-flex items-center justify-center gap-2 rounded-full border border-[#7547df]/22 px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_70px_rgba(91,92,255,0.26)] transition hover:shadow-[0_18px_80px_rgba(117,71,223,0.26)]"
                  >
                    Explore Services
                    <IconArrow />
                  </Link>
                  <Link
                    href="#contact"
                    className="hover-glow magnetic inline-flex items-center justify-center gap-2 rounded-full border border-[#7547df]/20 bg-[#10183a]/62 px-7 py-4 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:border-[#8b7cff]/36 hover:bg-[#315cff]/[0.08]"
                  >
                    Book Demo
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#315cff]/18 bg-[#08102d]/72 px-3 py-2 text-xs uppercase tracking-[0.26em] text-white/70 shadow-[0_0_30px_rgba(79,140,255,0.12)]">
                    Goal: Increase conversion by 25%
                  </span>
                  {["Analyze data", "Identify opportunities", "Execute strategy"].map((item) => (
                    <span
                      key={item}
                      className="hover-glow rounded-full border border-[#7547df]/18 bg-[#10183a]/72 px-3 py-2 text-sm text-white/68"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  {clientLogos.map((name) => (
                    <span
                      key={name}
                      className="hover-glow rounded-full border border-[#315cff]/18 bg-[#060b25]/74 px-4 py-2 text-sm text-white/68 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
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

        <section className="relative scroll-soft-glow py-4 md:py-12">
          <div className="section-shell relative z-10">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6" data-parallax="14">
              {statCards.map((item) => (
                <div
                  key={item.label}
                  className={`hover-sheen hover-glow magnetic rounded-[1.7rem] p-5 ${premiumSurface} ${premiumSurfaceHover}`}
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

            <div className={premiumDivider} data-parallax="8">
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
              className={`mt-10 grid gap-0 overflow-hidden rounded-[2rem] md:grid-cols-3 ${premiumSurface}`}
              data-parallax="12"
            >
              {workflowSteps.map((step, index) => (
                <div
                  key={step}
                  className={`hover-underline border-b ${premiumSoftBorder} px-6 py-6 md:border-b-0 md:border-r md:last:border-r-0`}
                  data-reveal
                >
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.28em] text-white/40">
                    <span>Step 0{index + 1}</span>
                    <span className="text-white/30">0{index + 1}</span>
                  </div>
                  <div className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="scroll-mt-28 py-12 md:scroll-mt-32 md:py-16">
          <div className="section-shell">
            <div className="section-heading mb-10" data-reveal>
              <div className="section-kicker">Solutions</div>
              <h2 className="section-title">AI solutions that feel like a product, not a pitch.</h2>
              <p className="section-copy">
                From copilots to analytics, the system should feel polished, fast, and
                enterprise-grade.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3" data-parallax="10">
              {solutions.map((item, index) => (
                <article
                  key={item.title}
                  className={`hover-sheen hover-glow group relative overflow-hidden rounded-[1.4rem] px-5 py-5 ${premiumSurface} ${premiumSurfaceHover}`}
                  data-reveal
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                        0{index + 1}
                      </div>
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-7 text-aurora-muted">
                        {item.copy}
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
                    className={`hover-underline border-t ${premiumSoftBorder} py-4`}
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
                  className={`hover-sheen hover-glow group relative overflow-hidden rounded-[1.4rem] px-5 py-5 ${premiumSurface} ${premiumSurfaceHover}`}
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

            <div className={premiumDivider} data-parallax="8">
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
                className={`${premiumDivider} hover-sheen`}
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

        <section id="pricing" className="relative scroll-mt-28 overflow-hidden py-12 md:scroll-mt-32 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(46,108,235,0.12),transparent_28%),radial-gradient(circle_at_82%_64%,rgba(117,71,223,0.11),transparent_30%)]" />
          <div className="section-shell relative z-10">
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
                  className={`hover-sheen hover-glow rounded-[1.4rem] p-6 md:p-7 ${premiumSurface} ${premiumSurfaceHover}`}
                  data-reveal
                >
                  <div className="inline-flex rounded-full border border-[#315cff]/18 bg-[#08143a]/76 px-3 py-1 text-xs uppercase tracking-[0.28em] text-indigo-100/72">
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

        <section className="relative overflow-hidden py-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(91,140,255,0.1),transparent_28%),radial-gradient(circle_at_18%_76%,rgba(117,71,223,0.09),transparent_30%)]" />
          <div className="section-shell relative z-10">
            <div className="section-heading mb-10" data-reveal>
              <div className="section-kicker">Testimonials</div>
              <h2 className="section-title">Built to feel credible to enterprise buyers.</h2>
              <p className="section-copy">
                The tone, motion, and layout should communicate reliability before a sales
                conversation even starts.
              </p>
            </div>

            <div className="grid gap-4" data-parallax="10">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className={`group relative grid gap-5 overflow-hidden rounded-[1.4rem] p-5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_92px_rgba(91,92,255,0.15)] lg:grid-cols-[0.34fr_0.66fr] lg:items-center ${premiumFlatCard}`}
                  data-reveal
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(46,108,235,0.12),transparent_28%),radial-gradient(circle_at_88%_84%,rgba(117,71,223,0.1),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 rounded-full bg-[linear-gradient(90deg,#2e6ceb_0%,#5b5cff_52%,#7547df_100%)] opacity-90 transition duration-500 group-hover:scale-x-100" />
                  <div className="relative flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#07143a,#10183a)] text-sm font-semibold text-white shadow-[0_0_28px_rgba(79,140,255,0.18)] transition duration-500 group-hover:scale-105 group-hover:shadow-[0_0_38px_rgba(91,92,255,0.24)]">
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
                  <div className="relative">
                    <div className="mb-3 text-5xl font-semibold leading-none text-[#5b5cff]/28 transition duration-500 group-hover:text-[#8b7cff]/42">
                      &ldquo;
                    </div>
                    <p className="text-base leading-7 text-white/78 transition duration-500 group-hover:text-white/88">
                      {item.quote}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_14%,rgba(46,108,235,0.1),transparent_30%),radial-gradient(circle_at_78%_76%,rgba(91,92,255,0.1),transparent_32%)]" />
          <div className="section-shell relative z-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="section-heading" data-reveal>
                <div className="section-kicker">FAQ</div>
                <h2 className="section-title">Common questions from enterprise teams.</h2>
                <p className="section-copy">
                  The interface stays light and easy to scan while still giving depth for
                  decision-makers.
                </p>
              </div>

              <div className="space-y-4 lg:pt-0" data-reveal>
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className={`group hover-underline overflow-hidden rounded-[1.25rem] p-5 ${premiumFlatCard} transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(91,92,255,0.13)]`}
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
        className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#8b7cff]/20 bg-[radial-gradient(circle_at_24%_12%,rgba(255,255,255,0.2),transparent_25%),linear-gradient(135deg,#4f73ff_0%,#6d3fe7_52%,#8b35d8_100%)] text-white shadow-[0_18px_58px_rgba(109,63,231,0.34),0_0_0_1px_rgba(139,124,255,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#a79bff]/32 hover:shadow-[0_22px_72px_rgba(109,63,231,0.44),0_0_0_1px_rgba(139,124,255,0.22)] md:bottom-8 md:right-8 ${
          showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <span className="text-lg leading-none">↑</span>
      </button>

      <footer
        id="contact"
        className="relative overflow-hidden bg-[linear-gradient(135deg,#050c26_0%,#07081c_52%,#0a0e30_100%)] py-12 md:py-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(14,103,255,0.18),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(117,71,223,0.13),transparent_26%),linear-gradient(180deg,rgba(5,12,38,0),rgba(5,8,22,0.62))]" />
        <div className="pointer-events-none absolute bottom-[-10rem] left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(91,140,255,0.16),rgba(117,71,223,0.1)_36%,transparent_70%)] blur-3xl" />
        <div className="section-shell relative z-10">
          <div className={`hover-sheen overflow-hidden rounded-[2rem] p-7 md:p-10 ${premiumSurface}`}>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="grid gap-5">
                <div className="section-kicker">Contact</div>
                <h2 className="section-title max-w-3xl bg-[linear-gradient(90deg,#ffffff_0%,#dbe7ff_44%,#f0abfc_100%)] bg-clip-text text-transparent drop-shadow-[0_0_34px_rgba(126,87,255,0.16)]">
                  Let&apos;s build the right AI engagement.
                </h2>
                <p className="section-copy max-w-2xl">
                  Whether you need AI strategy, workflow automation, or a custom product, we&apos;ll
                  help define the highest-value next step.
                </p>
                <div className={`grid gap-4 border-t ${premiumSoftBorder} pt-4 text-sm text-white/72 sm:grid-cols-2`}>
                  <div>hello@agyntiq.ai</div>
                  <div>New Delhi, India</div>
                  <div>Global remote delivery</div>
                  <div>AI implementation</div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="hover-glow rounded-[1.5rem] border border-[#7547df]/20 bg-[#080d2c]/76 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="text-xs uppercase tracking-[0.28em] text-fuchsia-100/55">
                    Contact Form
                  </div>
                  <form className="mt-4 grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        className={premiumInput}
                        placeholder="Full Name"
                      />
                      <input
                        className={premiumInput}
                        placeholder="Company Name"
                      />
                      <input
                        className={premiumInput}
                        placeholder="Email"
                      />
                      <input
                        className={premiumInput}
                        placeholder="Phone"
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        className={premiumInput}
                        placeholder="Business Type"
                      />
                      <input
                        className={premiumInput}
                        placeholder="Industry"
                      />
                    </div>
                    <textarea
                      rows={5}
                      className={premiumInput}
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
                        className="magnetic inline-flex items-center justify-center gap-2 rounded-full border border-[#315cff]/20 bg-[#08102d]/76 px-7 py-4 text-sm font-semibold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition hover:border-[#8b7cff]/38 hover:bg-[#10183a]/82"
                      >
                        Schedule Meeting
                      </a>
                    </div>
                  </form>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className={`border-t ${premiumSoftBorder} pt-4`}>
                    <div className="text-sm uppercase tracking-[0.28em] text-fuchsia-100/50">
                      Navigation
                    </div>
                    <div className="mt-4 space-y-3 text-sm text-white/70">
                      {navItems.map((item) =>
                        item.href === "/services" ? (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block transition hover:text-white"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block transition hover:text-white"
                          >
                            {item.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                  <div className={`border-t ${premiumSoftBorder} pt-4`}>
                    <div className="text-sm uppercase tracking-[0.28em] text-fuchsia-100/50">Social</div>
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

            <div className={`mt-8 flex flex-col gap-3 border-t ${premiumSoftBorder} pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between`}>
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
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goToSlide = (nextIndex: number) => {
    setActiveSlide((current) => {
      const movingForward =
        nextIndex > current || (current === slideShowcase.length - 1 && nextIndex === 0);
      setDirection(movingForward ? 1 : -1);
      return nextIndex;
    });
  };

  useEffect(() => {
    if (isPaused || slideShowcase.length < 2) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const id = window.setInterval(() => {
      setDirection(1);
      setActiveSlide((current) => (current + 1) % slideShowcase.length);
    }, 2800);

    return () => {
      window.clearInterval(id);
    };
  }, [isPaused]);

  return (
    <section className="relative py-12 md:py-16">
      <div className="section-shell">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="section-heading mx-auto max-w-2xl text-center" data-reveal>
            <div className="section-kicker">Visual Story</div>
            <h2 className="section-title mx-auto max-w-[12ch] sm:max-w-none text-balance">
              Four scenes, one polished image story.
            </h2>
            <p className="section-copy mx-auto max-w-xl">
              Tap the dots to switch between scenes and let the image motion feel like a premium
              feature card.
            </p>
          </div>

          <div className={`mt-10 w-full max-w-5xl rounded-[2rem] p-4 sm:p-5 ${premiumSurface}`}>
            <div className="mb-4 flex items-center justify-between gap-4 px-1 text-xs uppercase tracking-[0.32em] text-fuchsia-100/50">
              <span>Visual story</span>
              <span>{String(activeSlide + 1).padStart(2, "0")} / 04</span>
            </div>
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="overflow-hidden rounded-[1.5rem] bg-[#050816] shadow-[0_24px_90px_rgba(0,0,0,0.35)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className={`relative min-h-[18rem] overflow-hidden border-b ${premiumSoftBorder} lg:min-h-[28rem] lg:border-b-0 lg:border-r`}>
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={activeSlide}
                      custom={direction}
                      initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={slideShowcase[activeSlide].src}
                        alt={slideShowcase[activeSlide].title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.06)_0%,rgba(5,8,22,0.2)_40%,rgba(5,8,22,0.78)_100%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_34%)]" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex min-h-[18rem] flex-col justify-between bg-[linear-gradient(135deg,rgba(5,12,38,0.78),rgba(10,14,48,0.58))] p-5 sm:p-6 lg:min-h-[28rem] lg:p-8">
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-[0.32em] text-white/45">
                      {slideShowcase[activeSlide].tag}
                    </div>
                    <h3 className="max-w-sm text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
                      {slideShowcase[activeSlide].title}
                    </h3>
                    <p className="max-w-md text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
                      {slideShowcase[activeSlide].copy}
                    </p>
                  </div>

                  <div className={`grid gap-3 border-t ${premiumSoftBorder} pt-5 text-sm text-white/62`}>
                    <div className="flex items-center justify-between gap-4">
                      <span>Next frame updates automatically</span>
                      <span className="text-white/35">{String(activeSlide + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              {slideShowcase.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "w-10 bg-gradient-to-r from-[#1d8fff] to-[#7547df] shadow-[0_0_0_4px_rgba(117,71,223,0.12)]"
                      : "w-2.5 bg-white/25 hover:bg-[#8b7cff]/55"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


