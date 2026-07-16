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
    <main className="relative overflow-hidden pt-44 md:pt-48">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/background.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0.72)_0%,rgba(5,10,24,0.94)_50%,rgba(4,8,20,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,111,255,0.18),transparent_26%),radial-gradient(circle_at_top_right,rgba(0,193,255,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(109,89,255,0.12),transparent_22%)]" />
        <div className="absolute left-[-8%] top-[4%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(74,114,255,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[12%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(0,203,255,0.12),transparent_72%)] blur-3xl" />
        <div className="absolute bottom-[-8%] left-[16%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(130,106,255,0.14),transparent_72%)] blur-3xl" />
      </div>

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-stretch">
          <div
            className="relative overflow-hidden rounded-[2.4rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(12,18,42,0.78)_0%,rgba(7,12,29,0.94)_100%)] p-7 shadow-[0_30px_110px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:p-8 lg:p-10"
            data-reveal
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_45%)]" />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.34em] text-white/60">
                  {data.eyebrow}
                </div>
                <div className="text-sm uppercase tracking-[0.42em] text-white/28">
                  Service {activeServiceNumber}
                </div>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <h1 className="max-w-[11ch] text-balance text-4xl font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
                    {data.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                    {data.intro}
                  </p>
                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/56 sm:text-base">
                    {data.summary}
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-5">
                  <div className="text-xs uppercase tracking-[0.34em] text-white/40">
                    Scope snapshot
                  </div>
                  <div className="mt-5 space-y-4">
                    {data.focusPoints.map((point, index) => (
                      <div
                        key={point}
                        className="rounded-[1.2rem] border border-white/[0.08] bg-[#071021]/72 px-4 py-4"
                      >
                        <div className="text-[0.7rem] uppercase tracking-[0.32em] text-cyan-200/58">
                          Focus {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="mt-2 text-sm leading-6 text-white/82">{point}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-300/18 bg-gradient-to-r from-[#2871ff] via-[#5a5dff] to-[#10b8ff] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(64,126,255,0.3)]"
                >
                  Start a conversation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/88 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  View all services
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-6" data-reveal>
            <div className="overflow-hidden rounded-[2.2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(10,15,33,0.84)_0%,rgba(6,10,25,0.98)_100%)] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
                <div className="text-xs uppercase tracking-[0.34em] text-white/38">Deliverables</div>
                <div className="text-xs uppercase tracking-[0.34em] text-white/24">Included</div>
              </div>
              <div className="mt-5 space-y-4">
                {data.deliverables.map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-[1.25rem] bg-white/[0.03] px-4 py-4">
                    <div className="min-w-12 text-xs uppercase tracking-[0.32em] text-white/28">
                      0{index + 1}
                    </div>
                    <div className="text-sm leading-6 text-white/82 sm:text-[0.95rem]">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] p-6 backdrop-blur-2xl sm:p-7">
              <div className="text-xs uppercase tracking-[0.34em] text-white/38">Engagement note</div>
              <div className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white">
                Built for teams that need clarity before scale.
              </div>
              <p className="mt-4 text-sm leading-7 text-white/64">
                Each service page is now framed with stronger hierarchy, darker surfaces, and a
                more premium layout so it feels separate from the home page and easier to scan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2.2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(8,14,31,0.86)_0%,rgba(4,8,21,0.96)_100%)] p-6 backdrop-blur-2xl sm:p-7">
            <div className="text-xs uppercase tracking-[0.34em] text-white/38">Service framing</div>
            <div className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
              A darker, more premium interface shaped around the background theme.
            </div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
              These dropdown-linked pages now use layered panels, tighter content grouping, and
              the `background.png` treatment to create a more distinct service experience.
            </p>
          </div>

          <div className="rounded-[2.2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(10,16,35,0.82)_0%,rgba(6,10,24,0.98)_100%)] p-4 backdrop-blur-2xl sm:p-5">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-2 pb-4 text-xs uppercase tracking-[0.34em] text-white/34">
              <span>Other services</span>
              <span>{activeServiceNumber} / 05</span>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-1">
              {servicePageOrder.map((service, index) => {
                const isCurrent = service.label === data.title;

                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`group rounded-[1.5rem] border px-4 py-4 transition ${
                      isCurrent
                        ? "border-cyan-300/18 bg-[linear-gradient(90deg,rgba(40,113,255,0.16),rgba(16,184,255,0.08))]"
                        : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.14] hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[0.7rem] uppercase tracking-[0.34em] text-white/32">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="mt-2 text-sm font-medium leading-6 text-white/86">
                          {service.label}
                        </div>
                      </div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/22 transition group-hover:text-white/42">
                        Open
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
