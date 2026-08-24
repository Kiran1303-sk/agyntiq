import Link from "next/link";
import { servicePageOrder } from "@/components/service-pages-data";

export default function ServiceFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-fuchsia-200/10 bg-[#050719] px-4 py-16 md:px-6 md:py-20">
      <div className="pointer-events-none absolute left-[-10rem] top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-400/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8rem] bottom-[-14rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/[0.08] blur-[120px]" />
      <div className="relative mx-auto max-w-[1120px]">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.8fr_0.8fr]">
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-fuchsia-200/55">AgyntiQ services</div>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.05em] text-white md:text-5xl">From the right AI idea to a system that creates value.</h2>
            <Link href="/#contact" className="mt-7 inline-flex items-center rounded-full bg-[linear-gradient(100deg,#2e6ceb,#7547df,#c23bd9)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(126,87,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(194,59,217,0.3)]">Talk to our team <span className="ml-2">→</span></Link>
          </div>
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-fuchsia-200/48">Company</div>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-white/58">
              <Link href="/#about" className="transition hover:text-fuchsia-100">About AgyntiQ</Link>
              <Link href="/#blog" className="transition hover:text-fuchsia-100">Insights</Link>
              <Link href="/#industries" className="transition hover:text-fuchsia-100">Industries</Link>
              <Link href="/#contact" className="transition hover:text-fuchsia-100">Contact</Link>
            </div>
          </div>
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-fuchsia-200/48">Explore services</div>
            <div className="mt-5 grid gap-3">
              {servicePageOrder.map((service) => <Link key={service.href} href={service.href} className="group flex items-center justify-between text-sm font-semibold text-white/58 transition hover:text-fuchsia-100"><span>{service.label}</span><span className="translate-x-0 text-fuchsia-300/40 transition group-hover:translate-x-1 group-hover:text-fuchsia-200">→</span></Link>)}
            </div>
          </div>
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-fuchsia-200/48">Navigate</div>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-white/58">
              <Link href="/services" className="transition hover:text-fuchsia-100">All services</Link>
              <Link href="/#solutions" className="transition hover:text-fuchsia-100">Solutions</Link>
              <Link href="/#industries" className="transition hover:text-fuchsia-100">Industries</Link>
              <Link href="/#contact" className="transition hover:text-fuchsia-100">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-5 border-t border-white/10 pt-5 text-xs text-white/35 md:grid-cols-[1fr_auto] md:items-end"><div><div>hello@agyntiq.ai · New Delhi, India · Global remote delivery</div><div className="mt-2">© 2026 AgyntiQ. Enterprise AI for real-world operations.</div></div><div className="flex gap-4 md:justify-self-end"><Link href="#" className="transition hover:text-fuchsia-100">Privacy</Link><Link href="#" className="transition hover:text-fuchsia-100">Terms</Link><span>Strategy · Build · Integrate · Operate</span></div></div>
      </div>
    </footer>
  );
}
