import Link from "next/link";
import Image from "next/image";
import { servicePageOrder } from "@/components/service-pages-data";

export default function ServiceFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040615] px-4 py-10 md:px-6 md:py-12">
      <div className="pointer-events-none absolute left-[-10rem] top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-400/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8rem] bottom-[-14rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/[0.08] blur-[120px]" />
      <div className="relative mx-auto max-w-[1120px]">
        <div className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/agyntiq-footer-logo.png"
              alt="Agyntiq.ai"
              width={220}
              height={72}
              className="h-auto w-[170px] object-contain object-left md:w-[220px]"
            />
            <span className="hidden h-10 w-px bg-gradient-to-b from-fuchsia-300/0 via-fuchsia-300/60 to-blue-300/0 sm:block" />
            <span className="hidden max-w-[12rem] text-xs leading-5 text-white/42 sm:block">
              Enterprise AI for real-world operations.
            </span>
          </div>
          <div className="text-sm text-white/45 md:text-right">
            Strategy · Build · Integrate · Operate
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.8fr_0.8fr]">
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-fuchsia-200/55">
              Build what matters
            </div>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl">
              From the right AI idea to a system that creates value.
            </h2>
            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center rounded-full bg-[linear-gradient(100deg,#2e6ceb,#7547df,#c23bd9)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(126,87,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(194,59,217,0.3)]"
            >
              Talk to our team <span className="ml-2">→</span>
            </Link>
          </div>
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-fuchsia-200/48">
              Company
            </div>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-white/58">
              <Link href="/#about" className="transition hover:text-fuchsia-100">
                About AgyntiQ
              </Link>
              <Link href="/#blog" className="transition hover:text-fuchsia-100">
                Insights
              </Link>
              <Link href="/#industries" className="transition hover:text-fuchsia-100">
                Industries
              </Link>
              <Link href="/#contact" className="transition hover:text-fuchsia-100">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-fuchsia-200/48">
              Explore services
            </div>
            <div className="mt-5 grid gap-3">
              {servicePageOrder.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center justify-between text-sm font-semibold text-white/58 transition hover:text-fuchsia-100"
                >
                  <span>{service.label}</span>
                  <span className="translate-x-0 text-fuchsia-300/40 transition group-hover:translate-x-1 group-hover:text-fuchsia-200">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-fuchsia-200/48">
              Navigate
            </div>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-white/58">
              <Link href="/services" className="transition hover:text-fuchsia-100">
                All services
              </Link>
              <Link href="/#solutions" className="transition hover:text-fuchsia-100">
                Solutions
              </Link>
              <Link href="/#industries" className="transition hover:text-fuchsia-100">
                Industries
              </Link>
              <Link href="/#contact" className="transition hover:text-fuchsia-100">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-4 border-t border-white/10 pt-4 text-xs text-white/35 md:grid-cols-[1fr_auto] md:items-end">
          <div>© 2026 Agyntiq.ai. All rights reserved.</div>
          <div className="flex flex-wrap gap-4 md:justify-self-end">
            <Link href="#" className="transition hover:text-fuchsia-100">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-fuchsia-100">
              Terms
            </Link>
            <Link href="mailto:hello@agyntiq.ai" className="transition hover:text-fuchsia-100">
              hello@agyntiq.ai
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
