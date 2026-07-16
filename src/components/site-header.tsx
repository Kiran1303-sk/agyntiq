"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderMode = "home" | "services";

const serviceMenuItems = [
  { label: "Services Overview", href: "/services" },
  { label: "AI Strategy & Readiness Services", href: "/services/ai-strategy-readiness" },
  { label: "AI Solution Development", href: "/services/ai-solution-development" },
  { label: "AI Integration Services", href: "/services/ai-integration-services" },
  { label: "AI Data Services", href: "/services/ai-data-services" },
  { label: "AI Managed Services", href: "/services/ai-managed-services" }
] as const;

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Blog", href: "#blog" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" }
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
  const showServicesMenu = servicesOpen;

  const openServicesMenu = () => setServicesOpen(true);
  const closeServicesMenu = () => setServicesOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 transition-all duration-500 border-b border-white/10 bg-[#050816]/72 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 w-full max-w-[1720px] items-center gap-4 px-6 md:h-24 md:px-8">
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

        <nav className="hidden flex-1 items-center justify-center gap-1 rounded-full bg-white/[0.06] p-2 shadow-glass backdrop-blur-2xl md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const className = `rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active
                ? "bg-gradient-to-r from-aurora-blue/18 via-aurora-violet/18 to-aurora-cyan/18 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                : "text-white/60 hover:bg-white/[0.08] hover:text-white"
            }`;

            if (item.href === "/services") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={closeServicesMenu}
                  onFocusCapture={openServicesMenu}
                  onBlurCapture={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      closeServicesMenu();
                    }
                  }}
                >
                  <Link href="/services" className={className} aria-haspopup="menu" aria-expanded={showServicesMenu}>
                    {item.label}
                  </Link>
                  <div
                    className={`absolute left-1/2 top-full z-[90] mt-4 w-[24rem] -translate-x-1/2 rounded-[1.6rem] border border-white/[0.18] bg-[#02040c]/98 p-4 shadow-[0_28px_100px_rgba(0,0,0,0.48)] backdrop-blur-3xl transition-all duration-200 ${
                      showServicesMenu
                        ? "pointer-events-auto visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible translate-y-2 opacity-0"
                    }`}
                    role="menu"
                    aria-label="Service pages"
                    onMouseEnter={openServicesMenu}
                    onMouseLeave={closeServicesMenu}
                  >
                    <div className="px-2 pb-2 text-[0.65rem] uppercase tracking-[0.28em] text-white/42">
                      Service pages
                    </div>
                    <div className="grid gap-1">
                      {serviceMenuItems.map((service) => {
                        const serviceActive = pathname === service.href;
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`rounded-2xl px-3 py-2.5 text-sm transition ${
                              serviceActive
                                ? "bg-white/[0.16] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                                : "text-white/78 hover:bg-white/[0.08] hover:text-white"
                            }`}
                          >
                            {service.label}
                          </Link>
                        );
                      })}
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
            className="magnetic hidden shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/[0.12] bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-cyan px-6 py-3.5 text-sm font-semibold leading-none text-white shadow-[0_18px_60px_rgba(79,140,255,0.26)] backdrop-blur-xl transition hover:shadow-[0_20px_70px_rgba(0,214,255,0.28)] md:flex"
          >
            Explore Services
          </Link>
        ) : (
          <Link
            href="/#contact"
            className="magnetic hidden shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/[0.12] bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-cyan px-6 py-3.5 text-sm font-semibold leading-none text-white shadow-[0_18px_60px_rgba(79,140,255,0.26)] backdrop-blur-xl transition hover:shadow-[0_20px_70px_rgba(0,214,255,0.28)] md:flex"
          >
            Book Demo
          </Link>
        )}
      </div>
    </header>
  );
}
