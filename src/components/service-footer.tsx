import Image from "next/image";
import Link from "next/link";
import { servicePageOrder } from "@/components/service-pages-data";

const companyLinks = [
  { label: "About Agyntiq", href: "/about" },
  { label: "All services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Insights", href: "/#blog" }
] as const;

export default function ServiceFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#050719]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(117,71,223,0.2),transparent_42%),radial-gradient(ellipse_at_88%_35%,rgba(202,74,255,0.12),transparent_36%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/40 to-transparent"
        aria-hidden="true"
      />

      <div className="section-shell relative py-10 sm:py-14 lg:py-16">
        <section
          aria-labelledby="footer-cta-title"
          className="relative mb-12 overflow-hidden rounded-[1.75rem] border border-fuchsia-200/[0.14] bg-[linear-gradient(120deg,rgba(31,18,68,0.88),rgba(12,11,39,0.92)_58%,rgba(39,13,54,0.82))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8 lg:mb-14 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-28 h-64 w-64 rounded-full bg-fuchsia-400/[0.12] blur-[90px]"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-200/65">
              Make your next move count
            </div>
            <h2
              id="footer-cta-title"
              className="mt-3 text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl"
            >
              Turn your AI opportunity into measurable business impact.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/58 sm:text-base sm:leading-7">
              Start with a conversation about your goals, data, and the outcomes that matter.
            </p>
          </div>
          <div className="relative mt-6 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(100deg,#7547df,#ca4aff_58%,#d946ef)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(202,74,255,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(202,74,255,0.34)]"
            >
              Talk to our team <span className="ml-2" aria-hidden="true">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/82 transition hover:border-fuchsia-200/35 hover:bg-fuchsia-200/[0.06] hover:text-white"
            >
              Explore services
            </Link>
          </div>
        </section>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr_0.85fr] lg:gap-12">
          <div>
            <Link href="/" aria-label="Agyntiq home" className="inline-flex">
              <Image
                src="/agyntiq-footer-logo.png"
                alt="Agyntiq"
                width={160}
                height={54}
                className="h-auto w-[140px] object-contain object-left sm:w-[160px]"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
              Strategy, custom solutions, integration, and managed AI for real-world operations.
            </p>
            <Link
              href="mailto:hello@agyntiq.ai"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-100/78 transition hover:text-white"
            >
              hello@agyntiq.ai <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <nav aria-label="Company">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/38">
              Company
            </p>
            <ul className="mt-5 grid gap-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/62 transition hover:text-fuchsia-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/38">
              Services
            </p>
            <ul className="mt-5 grid gap-3">
              {servicePageOrder.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex items-center justify-between gap-3 text-sm font-medium text-white/62 transition hover:text-fuchsia-100"
                  >
                    <span>{service.label}</span>
                    <span
                      className="translate-x-0 text-fuchsia-300/42 transition group-hover:translate-x-1 group-hover:text-fuchsia-200"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/38">
              Connect
            </p>
            <p className="mt-5 text-sm leading-6 text-white/55">
              Have a challenge in mind? We would be glad to hear about it.
            </p>
            <Link
              href="/#contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/82 transition hover:text-fuchsia-100"
            >
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.08] pt-5 text-xs leading-5 text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Agyntiq.ai. All rights reserved.</p>
          <p>Strategy · Build · Integrate · Operate</p>
        </div>
      </div>
    </footer>
  );
}
