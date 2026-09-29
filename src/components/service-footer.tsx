import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicePageOrder } from "@/components/service-pages-data";

// Retained as an alternate flowing treatment for future page sections.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FooterWaves() {
  const paths = Array.from({ length: 22 }, (_, index) => {
    const offset = index * 1.5;
    return `M -8 ${56 + offset} C 10 ${45 + offset * 0.4}, 20 ${67 + offset * 0.7}, 37 ${56 + offset * 0.58} S 61 ${75 + offset * 0.5}, 74 ${58 + offset * 0.48} S 91 ${43 + offset * 0.45}, 108 ${55 + offset * 0.68}`;
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-[-8%] h-[116%] w-[116%] rotate-6">
        <defs>
          <linearGradient id="footer-wave-line" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#8a6bff" stopOpacity="0.34" />
            <stop offset="0.52" stopColor="#e45bff" stopOpacity="0.9" />
            <stop offset="0.82" stopColor="#ff20aa" stopOpacity="1" />
            <stop offset="1" stopColor="#ff72d4" stopOpacity="0.38" />
          </linearGradient>
          <filter id="footer-wave-glow"><feGaussianBlur stdDeviation="1.8" /></filter>
        </defs>
        <motion.g
          animate={{ x: [0, -1.5, 0], y: [0, -1, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          {paths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              fill="none"
              stroke="url(#footer-wave-line)"
              strokeWidth={index % 5 === 0 ? "0.34" : "0.2"}
              strokeOpacity={0.4 + (index % 5) * 0.07}
              animate={{ strokeOpacity: [0.3, 0.68, 0.3] }}
              transition={{ duration: 5 + (index % 4) * 0.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
            />
          ))}
          <path d={paths[10]} fill="none" stroke="#ff3fca" strokeWidth="1.2" strokeOpacity="0.78" filter="url(#footer-wave-glow)" />
        </motion.g>
      </svg>
    </div>
  );
}

// Retained as an alternate corner treatment for future sections.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CornerWave({ corner }: { corner: "top-right" | "bottom-left" }) {
  const isTopRight = corner === "top-right";
  const arcs = Array.from({ length: 12 }, (_, index) => {
    const inset = index * 4.2;
    return isTopRight
      ? `M ${106 - inset} ${-8 + inset * 0.32} C ${82 - inset * 0.15} ${-8 + inset * 0.32}, ${57 - inset * 0.18} ${1 + inset * 0.55}, ${57 - inset * 0.18} ${25 + inset * 0.85} S ${78 - inset * 0.12} ${52 + inset * 0.9}, ${61 - inset * 0.18} ${63 + inset}`
      : `M ${-6 + inset} ${106 - inset * 0.32} C ${18 + inset * 0.15} ${106 - inset * 0.32}, ${43 + inset * 0.18} ${97 - inset * 0.55}, ${43 + inset * 0.18} ${73 - inset * 0.85} S ${22 + inset * 0.12} ${48 - inset * 0.9}, ${39 + inset * 0.18} ${37 - inset}`;
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-45" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`corner-wave-${corner}`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#8b72ff" stopOpacity="0.12" />
            <stop offset="0.58" stopColor="#e45bff" stopOpacity="0.8" />
            <stop offset="1" stopColor="#ff2aae" stopOpacity="0.28" />
          </linearGradient>
          <filter id={`corner-glow-${corner}`}><feGaussianBlur stdDeviation="1.2" /></filter>
        </defs>
        {arcs.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            fill="none"
            stroke={`url(#corner-wave-${corner})`}
            strokeWidth={index % 4 === 0 ? "0.42" : "0.22"}
            strokeOpacity={0.28 + (index % 5) * 0.06}
            strokeDasharray="1.2 1.8"
            filter={index % 4 === 0 ? `url(#corner-glow-${corner})` : undefined}
            animate={{ strokeOpacity: [0.18, 0.58, 0.18], strokeDashoffset: [0, -5, 0] }}
            transition={{ duration: 5 + (index % 4) * 0.7, repeat: Infinity, ease: "easeInOut", delay: index * 0.14 }}
          />
        ))}
      </svg>
    </div>
  );
}

function CircularCornerWave({ corner }: { corner: "top-left" | "bottom-right" }) {
  const isTopLeft = corner === "top-left";
  const arcs = Array.from({ length: 12 }, (_, index) => {
    const radius = 22 + index * 5.2;
    return isTopLeft
      ? `M 0 ${radius} A ${radius} ${radius} 0 0 1 ${radius} 0`
      : `M ${100 - radius} 100 A ${radius} ${radius} 0 0 1 100 ${100 - radius}`;
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-45" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`circular-wave-${corner}`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#7c63ff" stopOpacity="0.2" />
            <stop offset="0.58" stopColor="#db5aff" stopOpacity="0.78" />
            <stop offset="1" stopColor="#ff27b0" stopOpacity="0.3" />
          </linearGradient>
          <filter id={`circular-glow-${corner}`}><feGaussianBlur stdDeviation="1.1" /></filter>
        </defs>
        {arcs.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            fill="none"
            stroke={`url(#circular-wave-${corner})`}
            strokeWidth={index % 4 === 0 ? "0.42" : "0.22"}
            strokeOpacity={0.28 + (index % 5) * 0.06}
            strokeDasharray="1.1 1.7"
            filter={index % 4 === 0 ? `url(#circular-glow-${corner})` : undefined}
            animate={{ strokeOpacity: [0.18, 0.58, 0.18], strokeDashoffset: [0, -5, 0] }}
            transition={{ duration: 5 + (index % 4) * 0.7, repeat: Infinity, ease: "easeInOut", delay: index * 0.14 }}
          />
        ))}
      </svg>
    </div>
  );
}

// Retained as an alternate footer backdrop for future page sections.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FooterLocationBackdrop() {
  const points = [[8, 48], [24, 37], [41, 50], [57, 35], [72, 53], [86, 42], [99, 58]];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-35" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,rgba(46,108,235,0.16),transparent_48%),radial-gradient(ellipse_at_35%_70%,rgba(202,74,255,0.1),transparent_44%)]" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="footer-location-line" x1="0" x2="1">
            <stop stopColor="#5b5cff" stopOpacity="0.18" />
            <stop offset="0.5" stopColor="#ca4aff" stopOpacity="0.62" />
            <stop offset="1" stopColor="#8ab6ff" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 8 48 C 24 28 29 57 41 50 S 57 26 72 53 88 62 99 58"
          fill="none"
          stroke="url(#footer-location-line)"
          strokeWidth="0.38"
          strokeDasharray="1.1 1.8"
          animate={{ strokeDashoffset: [0, -8, 0], opacity: [0.35, 0.8, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        {points.map(([cx, cy], index) => (
          <g key={index}>
            <motion.circle cx={cx} cy={cy} r="3.2" fill="#ca4aff" opacity="0.12" animate={{ opacity: [0.06, 0.22, 0.06], r: [2.2, 4, 2.2] }} transition={{ duration: 3.2 + index * 0.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }} />
            <motion.circle cx={cx} cy={cy} r="0.55" fill={index % 2 === 0 ? "#f0abfc" : "#9bc1ff"} animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 2.8 + index * 0.16, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }} />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function ServiceFooter({ showWaves = true }: { showWaves?: boolean }) {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040615] py-10 md:py-12">
      {showWaves && (
        <>
          <div className="absolute left-0 top-0 h-[72%] w-[52%]">
            <CircularCornerWave corner="top-left" />
          </div>
          <div className="absolute bottom-0 right-0 h-[72%] w-[52%]">
            <CircularCornerWave corner="bottom-right" />
          </div>
        </>
      )}
      <div className="pointer-events-none absolute left-[-10rem] top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-400/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8rem] bottom-[-14rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/[0.08] blur-[120px]" />
      <div className="section-shell relative">
        <div className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/agyntiq-footer-logo.png"
              alt="Agyntiq.ai"
              width={160}
              height={54}
              className="h-auto w-[130px] object-contain object-left md:w-[160px]"
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
              <Link href="/about" className="transition hover:text-fuchsia-100">
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
              <Link href="/#industries" className="transition hover:text-fuchsia-100">
                Industries
              </Link>
              <Link href="/#contact" className="transition hover:text-fuchsia-100">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 grid justify-items-center gap-4 border-t border-white/10 pt-4 text-center text-xs text-white/35 md:grid-cols-[1fr_auto] md:items-end md:justify-items-stretch md:text-left">
          <div>© 2026 Agyntiq.ai. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-4 md:justify-self-end">
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
