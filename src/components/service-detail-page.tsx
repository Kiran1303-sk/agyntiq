import Link from "next/link";
import SiteHeader from "@/components/site-header";
import { servicePageOrder, type ServicePageData } from "@/components/service-pages-data";

type ServiceDetailPageProps = {
  data: ServicePageData;
};

export default function ServiceDetailPage({ data }: ServiceDetailPageProps) {
  return (
    <main className="relative overflow-hidden pt-32 md:pt-36">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.16),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-12%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(0,214,255,0.12),transparent_68%)] blur-3xl" />
      </div>

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-2xl" data-reveal>
            <div className="section-kicker">{data.eyebrow}</div>
            <h1 className="section-title max-w-[11ch] text-balance">{data.title}</h1>
            <p className="section-copy mt-5 max-w-xl">{data.intro}</p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
              {data.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                Back to Services
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-cyan px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(79,140,255,0.24)]"
              >
                Talk to us
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3" data-reveal>
            <div className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03] p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-white/35">Focus</div>
              <div className="mt-3 space-y-3 text-sm leading-7 text-white/78">
                {data.focusPoints.map((point) => (
                  <div key={point}>{point}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03] p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-white/35">Deliverables</div>
              <div className="mt-3 space-y-3 text-sm leading-7 text-white/78">
                {data.deliverables.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03] p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-white/35">Next</div>
              <div className="mt-3 space-y-3 text-sm leading-7 text-white/70">
                <p>Send the specific content for this service and I’ll refine this page.</p>
                <p>The structure is ready for premium copy, imagery, and case-study details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/[0.08] px-1 pb-4 text-xs uppercase tracking-[0.3em] text-white/35">
            <span>Other services</span>
            <span>01 - 05</span>
          </div>
          <div className="grid gap-3 pt-4 md:grid-cols-2 xl:grid-cols-5">
            {servicePageOrder.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-[1.2rem] border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm text-white/78 transition hover:border-white/[0.14] hover:bg-white/[0.06]"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
