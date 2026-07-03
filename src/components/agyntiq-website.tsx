"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// ============ Types ============
type NavItem = {
  label: string;
  href: string;
};

// ============ Navigation Items ============
const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" }
];

// ============ Services Data ============
const services = [
  {
    title: "AI Consulting",
    description: "Strategic guidance for AI implementation and digital transformation.",
    icon: "🤖"
  },
  {
    title: "Generative AI",
    description: "Cutting-edge generative AI solutions for your business needs.",
    icon: "✨"
  },
  {
    title: "Machine Learning",
    description: "Advanced ML models trained on your specific business data.",
    icon: "🧠"
  },
  {
    title: "Computer Vision",
    description: "Image processing and visual intelligence solutions.",
    icon: "👁️"
  },
  {
    title: "Natural Language Processing",
    description: "Text analysis, sentiment detection, and language understanding.",
    icon: "📝"
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven predictions for business forecasting.",
    icon: "📊"
  },
  {
    title: "AI Agents",
    description: "Autonomous agents that learn and adapt to your workflows.",
    icon: "🎯"
  },
  {
    title: "LLM Integration",
    description: "Seamless integration with leading language models.",
    icon: "🔗"
  },
  {
    title: "Business Automation",
    description: "Automate complex business processes with AI.",
    icon: "⚙️"
  },
  {
    title: "Cloud AI",
    description: "Scalable cloud-based AI infrastructure.",
    icon: "☁️"
  },
  {
    title: "Custom AI Development",
    description: "Tailor-made AI solutions for unique challenges.",
    icon: "🛠️"
  },
  {
    title: "Enterprise AI Solutions",
    description: "Comprehensive AI transformation for enterprises.",
    icon: "🏢"
  }
];

// ============ Industries Data ============
const industries = [
  {
    name: "Healthcare",
    description: "AI-powered diagnosis, treatment planning, and patient care optimization.",
    icon: "🏥"
  },
  {
    name: "Finance",
    description: "Risk analysis, fraud detection, and algorithmic trading.",
    icon: "💰"
  },
  {
    name: "Retail",
    description: "Personalization, inventory management, and demand forecasting.",
    icon: "🛍️"
  },
  {
    name: "Manufacturing",
    description: "Predictive maintenance, quality control, and production optimization.",
    icon: "🏭"
  },
  {
    name: "Education",
    description: "Personalized learning, student success prediction, and content creation.",
    icon: "📚"
  },
  {
    name: "Real Estate",
    description: "Property valuation, market analysis, and customer matching.",
    icon: "🏠"
  },
  {
    name: "Logistics",
    description: "Route optimization, demand forecasting, and supply chain efficiency.",
    icon: "📦"
  },
  {
    name: "HR",
    description: "Recruitment optimization, performance analysis, and talent retention.",
    icon: "👥"
  },
  {
    name: "Legal",
    description: "Contract analysis, document review, and legal research automation.",
    icon: "⚖️"
  },
  {
    name: "Marketing",
    description: "Customer segmentation, campaign optimization, and content personalization.",
    icon: "📢"
  }
];

// ============ Statistics Data ============
const stats = [
  { value: "500+", label: "Enterprise Clients", icon: "🎯" },
  { value: "10M+", label: "AI Predictions", icon: "📊" },
  { value: "99.98%", label: "System Accuracy", icon: "✅" },
  { value: "35+", label: "Countries", icon: "🌍" },
  { value: "24/7", label: "Support", icon: "💬" },
  { value: "100+", label: "AI Models", icon: "🤖" }
];

// ============ Why Choose Us Data ============
const whyChooseUs = [
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.",
    icon: "🔒"
  },
  {
    title: "Scalable AI",
    description: "Infrastructure that grows with your business from startup to enterprise scale.",
    icon: "📈"
  },
  {
    title: "Fast Deployment",
    description: "Get production-ready AI solutions in weeks, not months.",
    icon: "⚡"
  },
  {
    title: "Cloud Native",
    description: "Built for cloud with automatic scaling and high availability.",
    icon: "☁️"
  },
  {
    title: "Real-time Analytics",
    description: "Instant insights and decision-making with millisecond response times.",
    icon: "⏱️"
  },
  {
    title: "Expert Engineers",
    description: "PhD-level researchers and AI engineers with 15+ years experience.",
    icon: "👨‍🎓"
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team always available for your business needs.",
    icon: "🌙"
  },
  {
    title: "Custom Solutions",
    description: "Flexible solutions tailored to your specific industry and requirements.",
    icon: "🎨"
  }
];

// ============ AI Products Data ============
const aiProducts = [
  {
    title: "AI Chatbot",
    description: "Intelligent conversational AI that understands context and intent.",
    features: ["Multi-language", "24/7 availability", "Human handoff"]
  },
  {
    title: "AI Copilot",
    description: "Smart assistant that enhances human productivity and decision-making.",
    features: ["Context aware", "Learning capabilities", "Integration ready"]
  },
  {
    title: "AI Search",
    description: "Advanced semantic search engine with deep understanding.",
    features: ["Vector search", "Semantic matching", "Real-time indexing"]
  },
  {
    title: "AI Analytics",
    description: "Transform raw data into actionable business intelligence.",
    features: ["Dashboards", "Predictive modeling", "Anomaly detection"]
  },
  {
    title: "AI Voice Assistant",
    description: "Natural voice interaction with advanced speech recognition.",
    features: ["Voice synthesis", "Accent support", "Emotion detection"]
  },
  {
    title: "Document Intelligence",
    description: "Extract and analyze information from any document type.",
    features: ["OCR+", "Table extraction", "Entity recognition"]
  },
  {
    title: "Recommendation Engine",
    description: "Personalized recommendations that drive engagement and revenue.",
    features: ["Real-time", "Collaborative filtering", "A/B testing"]
  },
  {
    title: "Fraud Detection",
    description: "AI-powered anomaly detection for fraud prevention.",
    features: ["Real-time alerts", "Pattern learning", "False-positive reduction"]
  }
];

// ============ Pricing Data ============
const pricing = [
  {
    name: "Starter",
    price: "$2,999",
    period: "/month",
    description: "Perfect for small teams and MVPs",
    features: [
      "Up to 10,000 API calls",
      "1 AI model",
      "Email support",
      "Basic analytics",
      "Community access"
    ],
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: "$9,999",
    period: "/month",
    description: "For growing companies",
    features: [
      "Up to 1M API calls",
      "10 AI models",
      "Priority support",
      "Advanced analytics",
      "API documentation",
      "Custom integrations"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large-scale operations",
    features: [
      "Unlimited API calls",
      "Unlimited models",
      "24/7 dedicated support",
      "Custom SLAs",
      "On-premise deployment",
      "Advanced security features"
    ],
    cta: "Contact Sales"
  }
];

// ============ Testimonials Data ============
const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVentures",
    company: "TechVentures",
    text: "AgyntiQ transformed our operations. Their AI solutions increased our productivity by 340% in just 6 months.",
    rating: 5,
    image: "👩‍💼"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO, DataFlow",
    company: "DataFlow",
    text: "Exceptional team and exceptional results. The integration was seamless and the support is outstanding.",
    rating: 5,
    image: "👨‍💼"
  },
  {
    name: "Emma Thompson",
    role: "Director of Innovation, FutureScale",
    company: "FutureScale",
    text: "AgyntiQ's AI solutions helped us reduce operational costs by 45% while improving customer satisfaction.",
    rating: 5,
    image: "👩‍🔬"
  },
  {
    name: "David Park",
    role: "Founder, InnovateLabs",
    company: "InnovateLabs",
    text: "The expertise and dedication of the AgyntiQ team is unmatched. Highly recommended for any enterprise.",
    rating: 5,
    image: "👨‍🔧"
  }
];

// ============ Blog Articles Data ============
const blogArticles = [
  {
    title: "The Future of Enterprise AI: Trends to Watch in 2025",
    category: "AI Trends",
    readTime: "8 min read",
    excerpt: "Explore the emerging trends shaping the enterprise AI landscape.",
    image: "🚀"
  },
  {
    title: "How to Successfully Implement AI in Your Organization",
    category: "Implementation",
    readTime: "12 min read",
    excerpt: "A comprehensive guide to AI adoption without common pitfalls.",
    image: "📘"
  },
  {
    title: "Case Study: 10x ROI with Intelligent Automation",
    category: "Case Study",
    readTime: "6 min read",
    excerpt: "Real-world results from a Fortune 500 client's AI transformation.",
    image: "📊"
  },
  {
    title: "Security Best Practices for AI Systems",
    category: "Security",
    readTime: "9 min read",
    excerpt: "Protecting your AI infrastructure from emerging threats.",
    image: "🔐"
  },
  {
    title: "Building Ethical AI: A Framework for Responsible Implementation",
    category: "Ethics",
    readTime: "11 min read",
    excerpt: "Integrating ethical considerations into your AI development process.",
    image: "⚖️"
  },
  {
    title: "AI-Powered Customer Experience: Personalization at Scale",
    category: "Customer Experience",
    readTime: "7 min read",
    excerpt: "Delivering personalized experiences to millions of users.",
    image: "💎"
  }
];

// ============ SVG Icons ============
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
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
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
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
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ============ Counter Component ============
function Counter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(interval);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient-blue-purple mb-2">
        {count}
      </div>
      <div className="text-sm md:text-base text-agyntiq-text-secondary">{label}</div>
    </div>
  );
}

// ============ Main Component ============
export default function AgyntiQWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2
  });

  // Smooth scrolling with Lenis
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

  // Scroll effects
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu responsive
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Apply theme to document root
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Active section tracking
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

  // GSAP animations
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
    <div className={`relative overflow-hidden transition-colors duration-500 ${theme === "dark" ? "dark bg-agyntiq-deep-black" : "bg-agyntiq-light-bg"}`}>
      {/* Progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-blue-purple"
        style={{ scaleX: progress }}
      />

      {/* Background blobs */}
      <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${theme === "light" ? "hidden" : ""}`}>
        <div className="aurora-blob absolute left-[-8%] top-[-6%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(45,156,255,0.24),transparent_66%)] blur-3xl animate-drift" />
        <div className="aurora-blob absolute right-[-6%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(108,75,255,0.2),transparent_64%)] blur-3xl animate-drift" />
        <div className="aurora-blob absolute bottom-[16%] left-[26%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(45,156,255,0.14),transparent_64%)] blur-3xl animate-drift" />
      </div>

      {/* Navigation */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? theme === "dark"
              ? "border-b border-agyntiq-border bg-agyntiq-deep-black/72 backdrop-blur-2xl"
              : "border-b border-agyntiq-light-border bg-white/72 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="section-shell flex h-20 items-center justify-between gap-4 md:grid md:h-24 md:grid-cols-[1fr_auto_1fr] md:gap-10">
          <a href="#hero" className="group flex w-fit items-center justify-self-start">
            <div className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-gradient-blue-purple" : "bg-gradient-to-r from-agyntiq-primary-blue to-agyntiq-purple bg-clip-text text-transparent"}`}>
              AgyntiQ
            </div>
          </a>

          <nav className={`hidden items-center gap-1 justify-self-center rounded-full bg-white/[0.06] p-2 shadow-glass backdrop-blur-2xl md:flex ${theme === "light" ? "bg-agyntiq-light-surface/60 shadow-glass-light" : ""}`}>
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? `bg-gradient-to-r from-agyntiq-primary-blue/18 via-agyntiq-purple/18 to-agyntiq-primary-blue/18 ${theme === "dark" ? "text-white" : "text-agyntiq-light-text-primary"}`
                      : theme === "dark"
                        ? "text-white/60 hover:bg-white/[0.08] hover:text-white"
                        : "text-agyntiq-light-text-secondary hover:bg-agyntiq-deep-black/10 hover:text-agyntiq-light-text-primary"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 justify-self-end">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full border transition ${theme === "dark" ? "border-agyntiq-border bg-white/5 hover:bg-white/10" : "border-agyntiq-light-border bg-agyntiq-deep-black/5 hover:bg-agyntiq-deep-black/10"}`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <a
              href="#contact"
              className="hidden md:flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-agyntiq-border bg-gradient-blue-purple px-6 py-3 text-sm font-semibold leading-none text-white hover:shadow-glow transition md:flex"
            >
              Get Started
              <IconArrow />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="md:hidden shrink-0 rounded-full border border-agyntiq-border bg-white/5 px-3.5 py-2.5 text-xs font-medium text-white/90 hover:bg-white/10 transition"
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`section-shell md:hidden transition-all duration-300 ${
            mobileOpen ? "pointer-events-auto max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="mt-3 rounded-[1.75rem] border border-agyntiq-border bg-agyntiq-surface/92 p-4 shadow-premium backdrop-blur-2xl">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-white/75 hover:bg-white/[0.06] hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-blue-purple px-5 py-4 text-sm font-semibold text-white hover:shadow-glow transition"
            >
              Get Started
              <IconArrow />
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24 md:pt-32">
        {/* ============ HERO SECTION ============ */}
        <section id="hero" className="relative scroll-mt-28 overflow-hidden pb-20 pt-20 md:scroll-mt-32 md:pb-24 md:pt-24">
          <div className="section-shell relative">
            <div className="noise-overlay" />
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                data-reveal
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative z-10 max-w-3xl"
              >
                <div className="section-kicker mb-6">
                  ✨ Transform Your Business with AI
                </div>

                <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                  Next-Generation
                  <span className="text-gradient-blue-purple"> AI Solutions</span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-agyntiq-text-secondary">
                  AgyntiQ helps enterprises automate workflows, improve decision-making, build intelligent AI agents, and accelerate digital transformation with cutting-edge artificial intelligence.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-blue-purple px-8 py-4 text-base font-semibold text-white hover:shadow-glow transition"
                  >
                    Start Free Trial
                    <IconArrow />
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-agyntiq-border bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition"
                  >
                    Book Demo
                  </a>
                </div>

                <div className="mt-12">
                  <p className="text-sm text-agyntiq-text-muted mb-4">Trusted by leading companies:</p>
                  <div className="flex flex-wrap gap-6 md:gap-8">
                    {["Google", "Microsoft", "AWS", "NVIDIA", "OpenAI", "Meta"].map((company) => (
                      <div key={company} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-blue-purple/20 flex items-center justify-center text-sm">
                          {company[0]}
                        </div>
                        <span className="text-sm text-agyntiq-text-secondary">{company}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm font-semibold text-agyntiq-primary-blue">
                    ✓ Trusted by 500+ Businesses Worldwide
                  </p>
                </div>
              </motion.div>

              <motion.div
                data-reveal
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className="relative h-full min-h-[500px] md:min-h-[600px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-agyntiq-primary-blue/20 to-agyntiq-purple/20 rounded-3xl blur-3xl opacity-50" />
                <div className="relative glass-panel rounded-3xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-6 animate-bounce-subtle">🤖</div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI-Powered Intelligence</h3>
                    <p className="text-agyntiq-text-secondary">Experience the future of business automation</p>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {[
                        { icon: "✨", label: "AI Automation" },
                        { icon: "🧠", label: "Machine Learning" },
                        { icon: "📊", label: "Predictive Analytics" },
                        { icon: "👁️", label: "Computer Vision" }
                      ].map((item) => (
                        <div key={item.label} className="p-4 bg-white/5 rounded-xl border border-agyntiq-border hover:border-agyntiq-primary-blue/50 transition">
                          <div className="text-3xl mb-2">{item.icon}</div>
                          <p className="text-xs text-agyntiq-text-secondary">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ STATISTICS SECTION ============ */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="section-shell">
            <div className="mb-16 text-center" data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Proven Results at Scale
              </h2>
              <p className="text-lg text-agyntiq-text-secondary">
                AgyntiQ delivers measurable impact for enterprises globally
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  data-reveal
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass-panel rounded-2xl p-6 text-center card-hover"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <Counter end={parseInt(stat.value)} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVICES SECTION ============ */}
        <section id="services" className="relative py-20 md:py-24 overflow-hidden">
          <div className="section-shell">
            <div className="mb-16 text-center" data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Comprehensive AI Services
              </h2>
              <p className="text-lg text-agyntiq-text-secondary">
                From consulting to deployment, we cover the full spectrum of AI solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  data-reveal
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass-panel rounded-2xl p-8 card-hover border border-agyntiq-border hover:border-agyntiq-primary-blue/50 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-agyntiq-text-secondary">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ INDUSTRIES SECTION ============ */}
        <section id="industries" className="relative py-20 md:py-24 overflow-hidden">
          <div className="section-shell">
            <div className="mb-16 text-center" data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-lg text-agyntiq-text-secondary">
                Tailored AI solutions for every vertical
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  data-reveal
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="glass-panel rounded-2xl p-6 card-hover border border-agyntiq-border hover:border-agyntiq-purple/50 text-center"
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-agyntiq-text-secondary">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY CHOOSE US SECTION ============ */}
        <section id="solutions" className="relative py-20 md:py-24 overflow-hidden">
          <div className="section-shell">
            <div className="mb-16" data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose AgyntiQ
              </h2>
              <p className="text-lg text-agyntiq-text-secondary max-w-2xl">
                We combine cutting-edge technology with industry expertise to deliver transformative AI solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={idx}
                  data-reveal
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass-panel rounded-2xl p-6 card-hover"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-agyntiq-text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ AI PRODUCTS SECTION ============ */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="section-shell">
            <div className="mb-16 text-center" data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AI Products & Solutions
              </h2>
              <p className="text-lg text-agyntiq-text-secondary">
                Ready-to-deploy solutions for immediate impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiProducts.map((product, idx) => (
                <motion.div
                  key={idx}
                  data-reveal
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass-panel rounded-2xl p-6 card-hover group cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-agyntiq-primary-blue transition">
                    {product.title}
                  </h3>
                  <p className="text-sm text-agyntiq-text-secondary mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs text-agyntiq-text-secondary">
                        <IconCheck />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PRICING SECTION ============ */}
        <section id="pricing" className="relative py-20 md:py-24 overflow-hidden">
          <div className="section-shell">
            <div className="mb-16 text-center" data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-agyntiq-text-secondary">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan, idx) => (
                <motion.div
                  key={idx}
                  data-reveal
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative rounded-2xl p-8 card-hover transition-all ${
                    plan.popular
                      ? "glass-panel-strong border-agyntiq-primary-blue/50 ring-1 ring-agyntiq-primary-blue/30 md:scale-105"
                      : "glass-panel border-agyntiq-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-blue-purple text-white text-xs font-bold px-4 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-agyntiq-text-secondary text-sm mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-agyntiq-text-secondary">/{plan.period}</span>
                  </div>
                  <button className="w-full mb-8 py-3 rounded-xl bg-gradient-blue-purple text-white font-semibold hover:shadow-glow transition">
                    {plan.cta}
                  </button>
                  <div className="space-y-4">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <IconCheck />
                        <span className="text-sm text-agyntiq-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS SECTION ============ */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="section-shell">
            <div className="mb-16 text-center" data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-agyntiq-text-secondary">
                See what our clients have to say
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  data-reveal
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass-panel rounded-2xl p-8 card-hover"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-agyntiq-text-secondary">{testimonial.role}</p>
                      <p className="text-xs text-agyntiq-text-muted">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-agyntiq-text-secondary italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BLOG SECTION ============ */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="section-shell">
            <div className="mb-16" data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Latest Insights & Resources
              </h2>
              <p className="text-lg text-agyntiq-text-secondary">
                Stay informed with the latest AI trends and best practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogArticles.map((article, idx) => (
                <motion.div
                  key={idx}
                  data-reveal
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass-panel rounded-2xl overflow-hidden card-hover group cursor-pointer"
                >
                  <div className="h-40 bg-gradient-to-br from-agyntiq-primary-blue/20 to-agyntiq-purple/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                    {article.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-agyntiq-primary-blue uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-agyntiq-text-muted">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-agyntiq-primary-blue transition">
                      {article.title}
                    </h3>
                    <p className="text-sm text-agyntiq-text-secondary">{article.excerpt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CONTACT SECTION ============ */}
        <section id="contact" className="relative py-20 md:py-24 overflow-hidden">
          <div className="section-shell">
            <div className="glass-panel-strong rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div data-reveal>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-agyntiq-text-secondary mb-8">
                    Ready to transform your business with AI? Our team is here to help you succeed.
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="text-2xl">📧</div>
                      <div>
                        <p className="text-sm text-agyntiq-text-muted">Email</p>
                        <p className="text-white font-medium">hello@agyntiq.ai</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-2xl">📱</div>
                      <div>
                        <p className="text-sm text-agyntiq-text-muted">Phone</p>
                        <p className="text-white font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-2xl">📍</div>
                      <div>
                        <p className="text-sm text-agyntiq-text-muted">Office</p>
                        <p className="text-white font-medium">New Delhi, India</p>
                        <p className="text-white font-medium">Global Remote Delivery</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-agyntiq-border">
                    <p className="text-sm text-agyntiq-text-muted mb-4">Follow us:</p>
                    <div className="flex gap-4">
                      {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/5 border border-agyntiq-border flex items-center justify-center hover:bg-gradient-blue-purple hover:border-transparent transition"
                        >
                          {social[0]}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.form
                  data-reveal
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="rounded-xl px-4 py-3 bg-white/5 border border-agyntiq-border text-white placeholder-agyntiq-text-muted focus:outline-none focus:ring-2 focus:ring-agyntiq-primary-blue/50"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="rounded-xl px-4 py-3 bg-white/5 border border-agyntiq-border text-white placeholder-agyntiq-text-muted focus:outline-none focus:ring-2 focus:ring-agyntiq-primary-blue/50"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl px-4 py-3 bg-white/5 border border-agyntiq-border text-white placeholder-agyntiq-text-muted focus:outline-none focus:ring-2 focus:ring-agyntiq-primary-blue/50"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full rounded-xl px-4 py-3 bg-white/5 border border-agyntiq-border text-white placeholder-agyntiq-text-muted focus:outline-none focus:ring-2 focus:ring-agyntiq-primary-blue/50"
                  />
                  <select className="w-full rounded-xl px-4 py-3 bg-white/5 border border-agyntiq-border text-white focus:outline-none focus:ring-2 focus:ring-agyntiq-primary-blue/50">
                    <option value="">Select Industry</option>
                    {industries.map((ind) => (
                      <option key={ind.name} value={ind.name}>
                        {ind.name}
                      </option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full rounded-xl px-4 py-3 bg-white/5 border border-agyntiq-border text-white placeholder-agyntiq-text-muted focus:outline-none focus:ring-2 focus:ring-agyntiq-primary-blue/50 resize-none"
                  />
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm text-agyntiq-text-secondary">
                      I agree to the terms and privacy policy
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-blue-purple text-white font-semibold hover:shadow-glow transition"
                  >
                    Send Message
                  </button>
                </motion.form>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ SECTION ============ */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="section-shell max-w-4xl mx-auto">
            <div className="mb-16 text-center" data-reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-agyntiq-text-secondary">
                Have questions? We have answers
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How long does it take to implement AgyntiQ?",
                  a: "Most implementations are completed within 4-8 weeks depending on complexity and your existing infrastructure."
                },
                {
                  q: "What kind of support do you provide?",
                  a: "We offer 24/7 support across all plans with dedicated account managers for Enterprise clients."
                },
                {
                  q: "Is my data secure with AgyntiQ?",
                  a: "Yes, we use bank-level encryption and comply with GDPR, HIPAA, and SOC 2 Type II standards."
                },
                {
                  q: "Can I integrate with my existing systems?",
                  a: "Absolutely. We provide APIs and SDKs for seamless integration with your existing tech stack."
                },
                {
                  q: "What industries do you specialize in?",
                  a: "We serve healthcare, finance, retail, manufacturing, education, and many other sectors."
                },
                {
                  q: "Do you offer custom training?",
                  a: "Yes, we provide custom training and documentation tailored to your team's needs."
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  data-reveal
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-panel rounded-xl p-6 cursor-pointer hover:border-agyntiq-primary-blue/50 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                      <p className="text-agyntiq-text-secondary text-sm">{faq.a}</p>
                    </div>
                    <span className="text-agyntiq-primary-blue text-xl shrink-0">+</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className={`relative border-t py-16 md:py-20 overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "border-agyntiq-border bg-agyntiq-deep-black/80"
          : "border-agyntiq-light-border bg-white"
      }`}>
        <div className="section-shell">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="text-2xl font-bold text-gradient-blue-purple mb-4">
                AgyntiQ
              </div>
              <p className={`text-sm ${
                theme === "dark"
                  ? "text-agyntiq-text-secondary"
                  : "text-agyntiq-light-text-secondary"
              }`}>
                Enterprise AI solutions for the future of business.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-agyntiq-light-text-primary"}`}>Product</h4>
              <div className="space-y-2 text-sm">
                {["Features", "Pricing", "Security", "Enterprise"].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className={`transition ${
                      theme === "dark"
                        ? "text-agyntiq-text-secondary hover:text-white"
                        : "text-agyntiq-light-text-secondary hover:text-agyntiq-light-text-primary"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-agyntiq-light-text-primary"}`}>Company</h4>
              <div className="space-y-2 text-sm">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className={`transition ${
                      theme === "dark"
                        ? "text-agyntiq-text-secondary hover:text-white"
                        : "text-agyntiq-light-text-secondary hover:text-agyntiq-light-text-primary"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-agyntiq-light-text-primary"}`}>Legal</h4>
              <div className="space-y-2 text-sm">
                {["Privacy", "Terms", "Security", "Compliance"].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className={`transition ${
                      theme === "dark"
                        ? "text-agyntiq-text-secondary hover:text-white"
                        : "text-agyntiq-light-text-secondary hover:text-agyntiq-light-text-primary"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`border-t pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm ${
            theme === "dark"
              ? "border-agyntiq-border text-agyntiq-text-secondary"
              : "border-agyntiq-light-border text-agyntiq-light-text-secondary"
          }`}>
            <p>© 2026 AgyntiQ. All rights reserved.</p>
            <div className="flex gap-6">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className={`transition ${
                    theme === "dark"
                      ? "hover:text-agyntiq-primary-blue"
                      : "text-agyntiq-light-text-secondary hover:text-agyntiq-primary-blue"
                  }`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-blue-purple text-white flex items-center justify-center hover:shadow-glow transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </motion.button>
    </div>
  );
}
