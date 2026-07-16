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
    <main className="relative min-h-screen overflow-hidden bg-[#050816] pt-44 md:pt-48">
      <SiteHeader mode="services" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0.8)_0%,rgba(4,8,20,0.9)_38%,rgba(4,8,20,0.96)_100%)]" />
        <div className="absolute inset-y-0 right-[-10%] hidden w-[42rem] opacity-75 lg:block xl:right-[2%] xl:w-[48rem]">
          <div
            className="h-full w-full bg-contain bg-right bg-no-repeat"
            style={{ backgroundImage: "url('/background.png')" }}
          />
        </div>
        <div className="absolute left-[-8%] top-[8%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(72,107,255,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(0,201,255,0.14),transparent_72%)] blur-3xl" />
      </div>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-14 xl:grid-cols-[minmax(0,0.95fr)_minmax(18rem,24rem)] xl:gap-20">
          <div>
            <div className="max-w-4xl">
              <div className="text-[0.72rem] uppercase tracking-[0.4em] text-cyan-200/62">
                {data.eyebrow} / Service {activeServiceNumber}
              </div>
              <h1 className="mt-6 max-w-[11ch] text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.08em] text-white md:text-6xl xl:text-[5.5rem]">
                {data.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                {data.intro}
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-white/56 md:text-base">
                {data.summary}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/18 bg-gradient-to-r from-[#2871ff] via-[#5a5dff] to-[#10b8ff] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(64,126,255,0.26)]"
              >
                Start a conversation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.12] px-6 py-3 text-sm font-semibold text-white/86 transition hover:border-white/22 hover:bg-white/[0.04]"
              >
                View all services
              </Link>
            </div>

            <div className="mt-16 border-t border-white/10 pt-10">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/34">
                    Service focus
                  </div>
                  <div className="mt-5 space-y-6">
                    {data.focusPoints.map((point, index) => (
                      <div key={point} className="border-l border-cyan-300/18 pl-5">
                        <div className="text-[0.72rem] uppercase tracking-[0.34em] text-cyan-200/50">
                          0{index + 1}
                        </div>
                        <div className="mt-2 text-lg leading-8 text-white/84">{point}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/34">
                    What gets delivered
                  </div>
                  <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
                    {data.deliverables.map((item, index) => (
                      <div key={item} className="grid gap-3 py-5 sm:grid-cols-[4rem_minmax(0,1fr)] sm:items-start">
                        <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/28">
                          0{index + 1}
                        </div>
                        <div className="text-base leading-8 text-white/82">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/34">
                  Engagement note
                </div>
                <p className="mt-5 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.05em] text-white">
                  Built for teams that need a sharper operating path before they scale AI further.
                </p>
              </div>
              <div>
                <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/34">
                  Interface direction
                </div>
                <p className="mt-5 max-w-xl text-sm leading-8 text-white/62 md:text-base">
                  This page now avoids stacked card blocks. Instead it uses open sections, strong
                  vertical rhythm, line-based grouping, and the background artwork as a visible part
                  of the service identity.
                </p>
              </div>
            </div>
          </div>

          <aside className="xl:pt-12">
            <div className="sticky top-36">
              <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/34">
                Service navigation
              </div>
              <div className="mt-6 space-y-4">
                {servicePageOrder.map((service, index) => {
                  const isCurrent = service.label === data.title;

                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block border-l pl-5 transition ${
                        isCurrent
                          ? "border-cyan-300/70 text-white"
                          : "border-white/10 text-white/56 hover:border-white/26 hover:text-white/88"
                      }`}
                    >
                      <div className="text-[0.72rem] uppercase tracking-[0.34em] text-white/28">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-base leading-7">{service.label}</div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <div className="text-[0.72rem] uppercase tracking-[0.36em] text-white/34">
                  Visual layer
                </div>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/56">
                  The neural background is now pushed into the page composition itself so the
                  dropdown-linked service pages feel more distinct and premium.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
