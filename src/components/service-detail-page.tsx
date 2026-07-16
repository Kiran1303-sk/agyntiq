import Link from "next/link";
import SiteHeader from "@/components/site-header";
import { servicePageOrder, type ServicePageData } from "@/components/service-pages-data";

type ServiceDetailPageProps = {
  data: ServicePageData;
};

export default function ServiceDetailPage({ data }: ServiceDetailPageProps) {
  const activeServiceIndex = servicePageOrder.findIndex((service) => service.label === data.title);
  const activeServiceNumber = String(activeServiceIndex + 1).padStart(2, "0");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] pt-52 text-white md:pt-56">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#08111d_0%,#0c1827_46%,#07111f_100%)]" />
        <div className="absolute left-0 top-0 hidden h-full w-[30rem] lg:block xl:w-[36rem]">
          <div
            className="h-full w-full bg-contain bg-left-top bg-no-repeat opacity-80 mix-blend-screen"
            style={{ backgroundImage: "url('/background.png')" }}
          />
        </div>
        <div className="absolute inset-y-0 left-[22%] hidden w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.18),transparent)] lg:block" />
        <div className="absolute right-[-10rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(31,180,255,0.12),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[10%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(96,120,255,0.12),transparent_70%)] blur-3xl" />
      </div>

      <section className="section-shell pb-16 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,24rem)] xl:grid-cols-[minmax(0,1.2fr)_minmax(20rem,25rem)]">
          <div className="relative z-10">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 text-[0.72rem] uppercase tracking-[0.38em] text-cyan-200/58">
                <span>{data.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
                <span>Service {activeServiceNumber}</span>
              </div>

              <h1 className="mt-7 max-w-[10ch] text-balance text-5xl font-semibold leading-[0.88] tracking-[-0.08em] text-white md:text-6xl xl:text-[6rem]">
                {data.title}
              </h1>

              <div className="mt-8 max-w-3xl border-l border-cyan-300/18 pl-6">
                <p className="text-lg leading-8 text-white/82 md:text-[1.35rem] md:leading-9">
                  {data.intro}
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/38">
                  Core mandate
                </div>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/64 md:text-lg">
                  {data.summary}
                </p>
              </div>

              <div>
                <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/38">
                  Engagement stance
                </div>
                <p className="mt-5 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.05em] text-white">
                  Structured for teams that need signal, sequence, and operational momentum.
                </p>
              </div>
            </div>

            <div className="mt-16 border-t border-white/10 pt-10">
              <div className="max-w-5xl">
                <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/38">
                  Focus areas
                </div>
                <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                  {data.focusPoints.map((point, index) => (
                    <div
                      key={point}
                      className="grid gap-3 py-6 md:grid-cols-[5rem_minmax(0,1fr)] md:items-start"
                    >
                      <div className="text-[0.72rem] uppercase tracking-[0.34em] text-cyan-200/52">
                        0{index + 1}
                      </div>
                      <div className="max-w-3xl text-xl leading-8 text-white/86">{point}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 border-t border-white/10 pt-10">
              <div className="max-w-5xl">
                <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/38">
                  Deliverables
                </div>
                <div className="mt-8 grid gap-8 lg:grid-cols-3">
                  {data.deliverables.map((item, index) => (
                    <div key={item} className="border-t border-white/12 pt-5">
                      <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/28">
                        Deliverable 0{index + 1}
                      </div>
                      <div className="mt-4 text-lg leading-8 text-white/82">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 border-t border-white/10 pt-10">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#1e69ff_0%,#23c0ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(26,124,255,0.28)]"
                >
                  Start a conversation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white/86 transition hover:border-white/22 hover:bg-white/[0.04]"
                >
                  View all services
                </Link>
              </div>
            </div>
          </div>

          <aside className="relative z-10 lg:pt-6">
            <div className="lg:sticky lg:top-36">
              <div className="border-b border-white/10 pb-5">
                <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/38">
                  Service navigation
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {servicePageOrder.map((service, index) => {
                  const isCurrent = service.label === data.title;

                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block border-l pl-5 transition ${
                        isCurrent
                          ? "border-cyan-300/70 text-white"
                          : "border-white/10 text-white/54 hover:border-white/24 hover:text-white/88"
                      }`}
                    >
                      <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/26">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-lg leading-7">{service.label}</div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/38">
                  Theme note
                </div>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/56">
                  The dropdown-linked pages now use a more open editorial system with the visual
                  artwork anchored into the layout instead of hidden beneath panel overlays.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
