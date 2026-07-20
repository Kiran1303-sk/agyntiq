"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderMode = "home" | "services";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
] as const;

const serviceMenuItems = [
  { label: "AI Strategy & Readiness Services", href: "/services/ai-strategy-readiness" },
  { label: "AI Solution Development", href: "/services/ai-solution-development" },
  { label: "AI Integration Services", href: "/services/ai-integration-services" },
  { label: "AI Data Services", href: "/services/ai-data-services" },
  { label: "AI Managed Services", href: "/services/ai-managed-services" }
] as const;

type SiteHeaderProps = {
  mode: HeaderMode;
};

export default function SiteHeader({ mode }: SiteHeaderProps) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/services") {
      return pathname.startsWith("/services");
    }

    if (mode === "home") {
      return pathname === "/" && href === "#hero";
    }

    return false;
  };

  const sectionHref = (href: string) => (mode === "home" ? href : `/${href}`);

  return (
    <header className="fixed inset-x-0 top-0 z-40 transition-all duration-500 border-b border-white/10 bg-[#050816]/72 backdrop-blur-2xl">
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
            const active = isActive(item.href);
            const className = `rounded-full px-5 py-3 text-[0.95rem] font-medium tracking-[-0.01em] transition-all ${
              active
                ? "bg-[linear-gradient(180deg,rgba(72,62,214,0.95)_0%,rgba(101,55,214,0.96)_45%,rgba(149,53,215,0.96)_100%)] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_26px_rgba(127,63,255,0.25)]"
                : "text-white/72 hover:bg-white/[0.06] hover:text-white"
            }`;

            if (item.href === "/services") {
              return (
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
                    href="/services"
                    className={`${className} inline-flex items-center gap-1.5`}
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <span className={`text-[0.75rem] transition ${servicesOpen ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </Link>
                  <div
                    className={`absolute left-1/2 top-full z-[90] mt-4 w-[38rem] -translate-x-1/2 overflow-hidden rounded-[1.6rem] border border-[#4b2ba9]/55 bg-[linear-gradient(180deg,rgba(8,10,28,0.98)_0%,rgba(9,8,27,0.98)_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-200 ${
                      servicesOpen
                        ? "pointer-events-auto visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible translate-y-2 opacity-0"
                    }`}
                    role="menu"
                    aria-label="Services menu"
                  >
                    <div className="grid grid-cols-[0.95fr_1.05fr]">
                      <div className="relative min-h-[18rem] border-r border-white/[0.08] bg-[radial-gradient(circle_at_50%_40%,rgba(69,68,255,0.2),transparent_25%),radial-gradient(circle_at_50%_58%,rgba(159,74,255,0.18),transparent_31%),linear-gradient(180deg,rgba(6,10,28,0.98)_0%,rgba(7,8,24,0.98)_100%)] p-5">
                        <div className="absolute inset-0 opacity-70">
                          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15" />
                          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-400/15" />
                          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                          <div className="absolute left-1/2 top-[47%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/18" />
                        </div>
                        <div className="relative flex h-full items-center justify-center">
                          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-4xl text-white shadow-[0_0_48px_rgba(128,88,255,0.3)]">
                            A
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="grid gap-1">
                          {serviceMenuItems.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`flex items-start gap-4 rounded-[1.05rem] px-4 py-3.5 transition ${
                                pathname === service.href
                                  ? "bg-white/[0.08] text-white"
                                  : "text-white/78 hover:bg-white/[0.05] hover:text-white"
                              }`}
                            >
                              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.85rem] border border-fuchsia-400/20 bg-white/[0.03] text-fuchsia-200 shadow-[0_0_24px_rgba(168,85,247,0.16)]">
                                {service.label === "AI Strategy & Readiness Services" ? "🧠" : service.label === "AI Solution Development" ? "⬡" : service.label === "AI Integration Services" ? "↔" : service.label === "AI Data Services" ? "▮" : "🛡"}
                              </span>
                              <span className="flex-1">
                                <span className="block text-[1rem] font-semibold leading-6">
                                  {service.label === "AI Strategy & Readiness Services"
                                    ? "AI Strategy"
                                    : service.label === "AI Solution Development"
                                      ? "AI Development"
                                      : service.label === "AI Integration Services"
                                        ? "AI Integration"
                                        : service.label === "AI Data Services"
                                          ? "Data & Analytics"
                                          : "AI Managed Services"}
                                </span>
                                <span className="mt-1 block text-[0.92rem] leading-5 text-white/55">
                                  {service.label === "AI Strategy & Readiness Services"
                                    ? "Roadmaps for AI success"
                                    : service.label === "AI Solution Development"
                                      ? "Custom AI solutions"
                                      : service.label === "AI Integration Services"
                                        ? "Seamless system integration"
                                        : service.label === "AI Data Services"
                                          ? "Actionable insights"
                                          : "Always-on optimization"}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>

                        <Link
                          href="/services"
                          className="mt-2 flex items-center justify-between rounded-[1rem] px-4 py-3 text-[1.02rem] font-semibold text-fuchsia-200 transition hover:bg-white/[0.05] hover:text-white"
                        >
                          <span>View All Services</span>
                          <span className="text-xl leading-none">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a key={item.href} href={sectionHref(item.href)} className={className}>
                {item.label}
              </a>
            );
          })}
        </nav>

        {mode === "home" ? (
          <Link
            href="/services"
            className="magnetic hidden items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/[0.12] bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-cyan px-6 py-3.5 text-sm font-semibold leading-none text-white shadow-[0_18px_60px_rgba(79,140,255,0.26)] backdrop-blur-xl transition hover:shadow-[0_20px_70px_rgba(0,214,255,0.28)] md:flex"
          >
            Explore Services
          </Link>
        ) : (
          <Link
            href="/#contact"
            className="magnetic hidden items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/[0.12] bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-cyan px-6 py-3.5 text-sm font-semibold leading-none text-white shadow-[0_18px_60px_rgba(79,140,255,0.26)] backdrop-blur-xl transition hover:shadow-[0_20px_70px_rgba(0,214,255,0.28)] md:flex"
          >
            Book Demo
          </Link>
        )}
      </div>
    </header>
  );
}
