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

type SiteHeaderProps = {
  mode: HeaderMode;
};

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
                    className={`absolute left-1/2 top-full z-[90] mt-3 w-[31rem] -translate-x-1/2 transition-all duration-200 ${
                      servicesOpen
                        ? "pointer-events-auto visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible translate-y-2 opacity-0"
                    }`}
                    role="menu"
                    aria-label="Services menu"
                  >
                    <div className="relative overflow-hidden rounded-[1.25rem] border border-[#4d2aad]/70 bg-[linear-gradient(135deg,rgba(5,12,38,0.98)_0%,rgba(7,8,28,0.98)_48%,rgba(42,7,46,0.98)_100%)] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.48),0_0_34px_rgba(119,57,255,0.14)] backdrop-blur-2xl">
                      <div className="absolute left-1/2 top-[-0.3rem] h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-l border-t border-[#4d2aad]/70 bg-[#080b25]" />
                      <div className="grid min-h-[16.5rem] grid-cols-[0.9fr_1.1fr]">
                        <div className="relative overflow-hidden border-r border-white/[0.08] bg-[radial-gradient(circle_at_48%_46%,rgba(58,104,255,0.2),transparent_28%),linear-gradient(180deg,rgba(5,16,48,0.32),rgba(6,8,26,0.06))]">
                          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-cyan-400/25" />
                          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-violet-400/35" />
                          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-fuchsia-400/35" />
                          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,103,255,0.1),transparent_42%,rgba(216,62,255,0.12))]" />
                          <div className="relative flex h-full items-center justify-center">
                            <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[0.85rem] border border-white/10 bg-[#0c0b2c]/70 text-4xl font-semibold text-white shadow-[0_0_38px_rgba(126,87,255,0.42)]">
                              A
                            </div>
                          </div>
                        </div>

                        <div className="px-4 py-1">
                          {serviceMenuDisplay.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`group flex items-center gap-3 border-b border-white/[0.08] py-3 transition last:border-b-0 ${
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
                            className="mt-1 flex items-center justify-between pt-3 text-[1rem] font-semibold text-fuchsia-300 transition hover:text-fuchsia-100"
                          >
                            <span>View All Services</span>
                            <span className="text-2xl leading-none">-&gt;</span>
                          </Link>
                        </div>
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
