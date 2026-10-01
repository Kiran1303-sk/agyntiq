"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "@/components/site-header";
import ServiceFooter from "@/components/service-footer";

const industries = [
  { name: "Healthcare", detail: "Smarter care journeys, clinical intelligence, and secure automation." },
  { name: "Financial services", detail: "Decision systems, risk intelligence, and compliant customer experiences." },
  { name: "Retail & commerce", detail: "Connected demand signals, personalization, and operations at scale." },
  { name: "Manufacturing", detail: "Predictive operations, connected plants, and measurable productivity." },
  { name: "Public sector", detail: "Accessible services, governed data, and responsible AI adoption." },
  { name: "Enterprise functions", detail: "AI copilots and workflows designed around the work teams already do." }
];

const industryAccentStyles = [
  "from-cyan-400/20 via-blue-500/10 to-transparent",
  "from-violet-400/20 via-fuchsia-500/10 to-transparent",
  "from-pink-400/20 via-rose-500/10 to-transparent",
  "from-amber-300/20 via-orange-500/10 to-transparent",
  "from-emerald-300/20 via-teal-500/10 to-transparent",
  "from-indigo-300/20 via-blue-500/10 to-transparent"
];

const industryCardBackgrounds = [
  "linear-gradient(135deg,rgba(20,25,67,0.98),rgba(25,13,56,0.94))",
  "linear-gradient(135deg,rgba(24,21,67,0.98),rgba(20,13,54,0.94))",
  "linear-gradient(135deg,rgba(69,31,62,0.96),rgba(22,17,55,0.96))",
  "linear-gradient(135deg,rgba(34,27,47,0.98),rgba(20,15,43,0.96))",
  "linear-gradient(135deg,rgba(13,39,59,0.98),rgba(14,21,49,0.96))",
  "linear-gradient(135deg,rgba(22,29,65,0.98),rgba(19,15,51,0.96))"
];

const services = [
  ["01", "AI Strategy & readiness", "Turn AI ambition into a roadmap leaders can fund."],
  ["02", "AI Solutions development", "Build assistants, agents, products, and decision systems."],
  ["03", "AI Integration services", "Connect AI to the tools and workflows where work happens."],
  ["04", "AI Data services", "Create reliable, governed foundations for production AI."],
  ["05", "AI Managed services", "Keep systems monitored, optimized, and improving after launch."]
];

const boardPerspectives = [
  {
    image: "/slide1.jpeg",
    role: "Strategy & transformation",
    title: "Start with the decision, not the technology.",
    story: "Every strong AI program begins with a clear business question. We help leadership teams connect opportunity, value, and responsible adoption before the build begins."
  },
  {
    image: "/visual-story.png",
    role: "Technology & innovation",
    title: "Make intelligence useful in the flow of work.",
    story: "The best AI experiences feel natural: they meet people inside familiar systems, reduce friction, and turn complex information into confident action."
  },
  {
    image: "/hero1.png",
    role: "Operations & growth",
    title: "Build for the long term.",
    story: "Production AI needs more than a launch moment. We design for reliability, governance, adoption, and continuous improvement from day one."
  }
];

const values = [
  ["Clarity", "We make complex AI decisions understandable and actionable."],
  ["Useful ambition", "We pursue meaningful outcomes over novelty for its own sake."],
  ["Responsible by design", "Security, governance, and human judgment belong in the system."],
  ["Built together", "The strongest solutions are shaped with the people who use them."],
  ["Always improving", "We learn from real-world use and keep raising the bar."]
];

const recognitionIconStyles = [
  "text-amber-200 border-amber-200/45 bg-amber-300/[0.1]",
  "text-emerald-200 border-emerald-200/45 bg-emerald-300/[0.1]",
  "text-pink-200 border-pink-200/45 bg-pink-300/[0.1]"
];

const recognitionCardHoverStyles = [
  "group-hover:border-amber-200/65 group-hover:bg-[linear-gradient(145deg,rgba(40,29,8,0.78),rgba(23,16,40,0.72))] group-hover:shadow-[0_24px_70px_rgba(251,191,36,0.14)]",
  "group-hover:border-emerald-200/65 group-hover:bg-[linear-gradient(145deg,rgba(8,38,31,0.72),rgba(15,20,43,0.76))] group-hover:shadow-[0_24px_70px_rgba(52,211,153,0.14)]",
  "group-hover:border-pink-200/65 group-hover:bg-[linear-gradient(145deg,rgba(45,12,39,0.76),rgba(25,13,45,0.74))] group-hover:shadow-[0_24px_70px_rgba(244,114,182,0.14)]"
];

// Retained as an alternate service-card palette for future UI variants.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const serviceColorStyles = [
  "text-amber-200 border-amber-200/30 bg-amber-300/[0.08] group-hover:border-amber-200/65 group-hover:shadow-[0_24px_80px_rgba(251,191,36,0.16)]",
  "text-sky-200 border-sky-200/30 bg-sky-300/[0.08] group-hover:border-sky-200/65 group-hover:shadow-[0_24px_80px_rgba(56,189,248,0.16)]",
  "text-pink-200 border-pink-200/30 bg-pink-300/[0.08] group-hover:border-pink-200/65 group-hover:shadow-[0_24px_80px_rgba(244,114,182,0.16)]",
  "text-emerald-200 border-emerald-200/30 bg-emerald-300/[0.08] group-hover:border-emerald-200/65 group-hover:shadow-[0_24px_80px_rgba(52,211,153,0.16)]",
  "text-violet-200 border-violet-200/30 bg-violet-300/[0.08] group-hover:border-violet-200/65 group-hover:shadow-[0_24px_80px_rgba(167,139,250,0.16)]"
];

const locations = [
  ["North America", "Strategy, product, and enterprise partnerships"],
  ["Europe", "Responsible AI, transformation, and delivery"],
  ["India", "Engineering, data, and AI operations"],
  ["Asia Pacific", "Growth, integration, and customer success"]
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      data-delay={delay}
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Kept as a reusable alternate background treatment for future sections.
// Retained as an alternate neural field treatment for future sections.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function NodeField() {
  const networks = [
    {
      nodes: [[74, 22], [82, 17], [91, 22], [84, 29], [94, 34], [76, 33]],
      links: [[0, 1], [1, 2], [0, 3], [1, 3], [2, 3], [2, 4], [3, 4], [0, 5], [3, 5]],
      triangles: [[0, 1, 3], [1, 2, 3], [2, 3, 4], [0, 3, 5]],
      color: "#7fa7ff",
      accent: "#d0b5ff"
    },
    {
      nodes: [[57, 51], [66, 45], [76, 51], [71, 59], [82, 61], [62, 63]],
      links: [[0, 1], [1, 2], [0, 3], [1, 3], [2, 3], [2, 4], [3, 4], [0, 5], [3, 5]],
      triangles: [[0, 1, 3], [1, 2, 3], [2, 3, 4], [0, 3, 5]],
      color: "#9a92ff",
      accent: "#e2a8ff"
    },
    {
      nodes: [[74, 78], [83, 72], [93, 77], [87, 85], [96, 90], [78, 91]],
      links: [[0, 1], [1, 2], [0, 3], [1, 3], [2, 3], [2, 4], [3, 4], [0, 5], [3, 5]],
      triangles: [[0, 1, 3], [1, 2, 3], [2, 3, 4], [0, 3, 5]],
      color: "#75aaff",
      accent: "#f0b1ff"
    }
  ];
  const [pointer, setPointer] = useState({ x: 0.72, y: 0.42 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPointer({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(91,92,255,0.22),transparent_24%),radial-gradient(circle_at_72%_72%,rgba(202,74,255,0.14),transparent_28%),linear-gradient(115deg,#050719_10%,#080a25_55%,#150c2c_100%)]" />
      <div className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-300/[0.07] blur-[90px] transition-[left,top] duration-700 ease-out" style={{ left: `${pointer.x * 100}%`, top: `${pointer.y * 100}%` }} />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(145,182,255,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(145,182,255,0.09)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(ellipse_at_78%_50%,black,transparent_68%)]" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-75 mix-blend-screen">
        <defs>
          <filter id="network-glow"><feGaussianBlur stdDeviation="1.1" /></filter>
          <radialGradient id="network-halo"><stop stopColor="#d5b8ff" stopOpacity="0.18" /><stop offset="1" stopColor="#d5b8ff" stopOpacity="0" /></radialGradient>
        </defs>
        {networks.map((network, networkIndex) => (
          <motion.g
            key={networkIndex}
            transform={`translate(${(pointer.x - 0.5) * (networkIndex + 1) * 0.8} ${(pointer.y - 0.5) * (networkIndex + 1) * 0.5})`}
            animate={{ x: [0, networkIndex % 2 === 0 ? 0.8 : -0.6, 0], y: [0, networkIndex === 1 ? -0.7 : 0.5, 0] }}
            transition={{ duration: 12 + networkIndex * 2, repeat: Infinity, ease: "easeInOut", delay: networkIndex * 0.7 }}
          >
            <circle cx={network.nodes[2][0]} cy={network.nodes[2][1]} r="8" fill="url(#network-halo)" />
            {network.triangles.map(([first, second, third], triangleIndex) => (
              <motion.polygon
                key={`triangle-${triangleIndex}`}
                points={`${network.nodes[first][0]},${network.nodes[first][1]} ${network.nodes[second][0]},${network.nodes[second][1]} ${network.nodes[third][0]},${network.nodes[third][1]}`}
                fill={triangleIndex % 2 === 0 ? network.color : network.accent}
                fillOpacity="0.022"
                stroke={network.accent}
                strokeWidth="0.1"
                strokeOpacity="0.2"
                strokeDasharray="0.7 1.6"
                animate={{ fillOpacity: [0.012, 0.055, 0.012], strokeOpacity: [0.1, 0.3, 0.1], strokeDashoffset: [0, -3, 0] }}
                transition={{ duration: 7 + networkIndex * 0.9, repeat: Infinity, ease: "easeInOut", delay: triangleIndex * 0.24 }}
              />
            ))}
            {network.links.map(([from, to], linkIndex) => (
              <motion.line
                key={`${from}-${to}`}
                x1={network.nodes[from][0]}
                y1={network.nodes[from][1]}
                x2={network.nodes[to][0]}
                y2={network.nodes[to][1]}
                stroke={network.color}
                strokeWidth="0.13"
                strokeOpacity="0.48"
                strokeDasharray="0.6 1.8"
                animate={{ strokeOpacity: [0.22, 0.62, 0.22], strokeDashoffset: [0, -4, 0] }}
                transition={{ duration: 4.4 + networkIndex * 0.8, repeat: Infinity, ease: "easeInOut", delay: linkIndex * 0.16 }}
              />
            ))}
            {network.nodes.map(([cx, cy], nodeIndex) => (
              <g key={nodeIndex}>
                <motion.circle cx={cx} cy={cy} r="1.7" fill={network.accent} opacity="0.18" filter="url(#network-glow)" animate={{ r: [1.2, 2.5, 1.2], opacity: [0.08, 0.32, 0.08] }} transition={{ duration: 3.2 + nodeIndex * 0.18, repeat: Infinity, ease: "easeInOut", delay: nodeIndex * 0.2 }} />
                <motion.circle cx={cx} cy={cy} r={nodeIndex === 2 ? "0.48" : "0.3"} fill={nodeIndex === 2 ? network.accent : network.color} animate={{ opacity: [0.38, 1, 0.38] }} transition={{ duration: 2.8 + nodeIndex * 0.2, repeat: Infinity, ease: "easeInOut", delay: nodeIndex * 0.17 }} />
              </g>
            ))}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// Retained as a local fallback neural treatment for environments without CDN access.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DenseNeuralField() {
  const nodes: [number, number][] = Array.from({ length: 72 }, (_, index) => {
    const column = index % 9;
    const row = Math.floor(index / 9);
    return [
      8 + column * 10.6 + Math.sin(index * 2.7) * 4.2 + (row % 2) * 1.8,
      7 + row * 12.4 + Math.cos(index * 1.9) * 4.8 + Math.sin(column * 1.4) * 2.2
    ];
  });
  const links: [number, number][] = nodes.flatMap((node, index) =>
    nodes
      .slice(index + 1)
      .map((candidate, offset) => ({ candidate, candidateIndex: index + offset + 1, distance: Math.hypot(candidate[0] - node[0], candidate[1] - node[1]) }))
      .filter(({ distance }) => distance < 15.5)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 4)
      .map(({ candidateIndex }) => [index, candidateIndex] as [number, number])
  );
  const particles = Array.from({ length: 24 }, (_, index) => [8 + ((index * 17) % 88), 8 + ((index * 23) % 84)]);
  const [pointer, setPointer] = useState({ x: 0.72, y: 0.4 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => setPointer({ x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_24%,rgba(61,83,255,0.24),transparent_34%),radial-gradient(ellipse_at_75%_72%,rgba(196,44,255,0.16),transparent_42%),linear-gradient(115deg,#050719_8%,#080a25_56%,#150a2e_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(0deg,rgba(4,5,18,0.88),transparent)]" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-90 mix-blend-screen">
        <defs>
          <linearGradient id="dense-neural-line" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#5b77ff" stopOpacity="0.08" />
            <stop offset="0.48" stopColor="#8b7cff" stopOpacity="0.58" />
            <stop offset="0.78" stopColor="#dc4dff" stopOpacity="0.72" />
            <stop offset="1" stopColor="#ff35b8" stopOpacity="0.18" />
          </linearGradient>
          <filter id="dense-node-glow"><feGaussianBlur stdDeviation="0.9" /></filter>
          <filter id="dense-particle-glow"><feGaussianBlur stdDeviation="1.4" /></filter>
        </defs>
        {particles.map(([cx, cy], index) => (
          <motion.circle key={`particle-${index}`} cx={cx} cy={cy} r={index % 4 === 0 ? "0.32" : "0.16"} fill={index % 3 === 0 ? "#a9c9ff" : "#e78dff"} filter="url(#dense-particle-glow)" animate={{ opacity: [0.08, 0.7, 0.08], cy: [cy, cy - 2.5, cy] }} transition={{ duration: 6 + (index % 5), repeat: Infinity, ease: "easeInOut", delay: index * 0.24 }} />
        ))}
        <motion.g animate={{ x: [(pointer.x - 0.5) * 1.2, (pointer.x - 0.5) * 2.2, (pointer.x - 0.5) * 1.2], y: [(pointer.y - 0.5) * 0.7, (pointer.y - 0.5) * 1.1, (pointer.y - 0.5) * 0.7] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
          {links.map(([from, to], index) => (
            <line key={`${from}-${to}`} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} stroke="url(#dense-neural-line)" strokeWidth={index % 9 === 0 ? "0.2" : "0.12"} strokeOpacity={0.28 + (index % 5) * 0.055} />
          ))}
          {links.filter((_, index) => index % 13 === 0).map(([from, to], index) => (
            <motion.circle key={`pulse-${from}-${to}`} r="0.38" fill={index % 2 === 0 ? "#8fc7ff" : "#f08dff"} animate={{ cx: [nodes[from][0], nodes[to][0], nodes[from][0]], cy: [nodes[from][1], nodes[to][1], nodes[from][1]], opacity: [0, 0.95, 0] }} transition={{ duration: 5.5 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: index * 0.75 }} />
          ))}
          {nodes.map(([cx, cy], index) => (
            <g key={`node-${index}`}>
              <motion.circle cx={cx} cy={cy} r={index % 6 === 0 ? "1.7" : "1.1"} fill={index % 3 === 0 ? "#8ab8ff" : "#d866ff"} opacity="0.2" filter="url(#dense-node-glow)" animate={{ opacity: [0.08, 0.34, 0.08], r: [0.8, index % 6 === 0 ? 2.2 : 1.5, 0.8] }} transition={{ duration: 3.8 + (index % 5) * 0.42, repeat: Infinity, ease: "easeInOut", delay: index * 0.06 }} />
              <motion.circle cx={cx} cy={cy} r={index % 6 === 0 ? "0.46" : "0.27"} fill={index % 4 === 0 ? "#a9d2ff" : index % 3 === 0 ? "#b6a2ff" : "#f08bdf"} animate={{ opacity: [0.32, 1, 0.32] }} transition={{ duration: 3 + (index % 4) * 0.45, repeat: Infinity, ease: "easeInOut", delay: index * 0.08 }} />
            </g>
          ))}
        </motion.g>
      </svg>
    </div>
  );
}

function VantaNetworkField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: { destroy: () => void } | undefined;
    let cancelled = false;
    const win = window as Window & {
      THREE?: unknown;
      VANTA?: { NET: (options: Record<string, unknown>) => { destroy: () => void } };
    };

    const loadScript = (src: string, id: string) => new Promise<void>((resolve, reject) => {
      const existing = document.getElementById(id);
      if (existing) {
        existing.addEventListener("load", () => resolve(), { once: true });
        if ((existing as HTMLScriptElement).dataset.loaded === "true") resolve();
        return;
      }

      const script = document.createElement("script");
      script.id = id;
      script.src = src;
      script.async = true;
      script.onload = () => {
        script.dataset.loaded = "true";
        resolve();
      };
      script.onerror = () => reject(new Error(`Unable to load ${src}`));
      document.body.appendChild(script);
    });

    const start = async () => {
      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js", "three-r134");
        await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js", "vanta-net");
        if (!cancelled && containerRef.current && win.VANTA?.NET) {
          effect = win.VANTA.NET({
            el: containerRef.current,
            THREE: win.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1,
            scaleMobile: 1,
            color: 0x8b7cff,
            backgroundColor: 0x050719,
            points: 12,
            maxDistance: 22,
            spacing: 18,
            showDots: true
          });
        }
      } catch {
        // Keep the CSS hero gradient as a graceful fallback if the CDN is unavailable.
      }
    };

    start();
    return () => {
      cancelled = true;
      effect?.destroy();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050719]" aria-hidden="true">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_34%,rgba(236,72,153,0.3),transparent_28%),radial-gradient(ellipse_at_64%_78%,rgba(217,70,239,0.18),transparent_34%)] mix-blend-screen" />
    </div>
  );
}

const aboutPillars = [["01", "Intelligence", "Turn complexity into clear, useful decisions."], ["02", "Automation", "Make repetitive work flow with less friction."], ["03", "Data", "Create trusted foundations for better action."], ["04", "Innovation", "Build capabilities that keep evolving."]];
const workStages = [["Discover", "Understand challenges and uncover opportunities."], ["Strategize", "Define the right technology and roadmap."], ["Build", "Design intelligent, scalable solutions around real needs."], ["Integrate", "Connect capabilities with systems and teams."], ["Optimize", "Measure, learn, improve, and evolve."]];
const technologyOrbit = ["AI", "DATA", "CLOUD", "AUTOMATION", "APPLICATIONS", "INTEGRATION"];

function NeuralConstellation({ compact = false }: { compact?: boolean }) {
  const points = [[18, 52], [34, 28], [49, 58], [67, 24], [82, 48], [65, 76], [38, 78]];
  const links = [[0, 1], [0, 2], [1, 2], [1, 3], [2, 3], [2, 5], [2, 6], [3, 4], [3, 5], [4, 5], [5, 6]];
  return <div className={compact ? "relative h-64 w-full" : "relative h-[30rem] w-full"}><div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(91,92,255,.2),transparent_58%)] blur-2xl" /><svg viewBox="0 0 100 100" className="relative h-full w-full overflow-visible"><defs><linearGradient id="about-network-line" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#6ea8ff" stopOpacity=".45" /><stop offset=".55" stopColor="#a78bfa" stopOpacity=".7" /><stop offset="1" stopColor="#f472b6" stopOpacity=".45" /></linearGradient><filter id="about-network-glow"><feGaussianBlur stdDeviation="1.5" /></filter></defs><motion.g animate={{ rotate: [0, 1.5, 0], scale: [1, 1.025, 1] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "50% 50%" }}>{links.map(([from, to], index) => <motion.line key={`${from}-${to}`} x1={points[from][0]} y1={points[from][1]} x2={points[to][0]} y2={points[to][1]} stroke="url(#about-network-line)" strokeWidth=".35" strokeOpacity=".52" animate={{ strokeOpacity: [.22, .72, .22] }} transition={{ duration: 4 + index * .2, repeat: Infinity, ease: "easeInOut", delay: index * .18 }} />)}{points.map(([cx, cy], index) => <g key={`${cx}-${cy}`}><motion.circle cx={cx} cy={cy} r={index === 2 ? 7 : 4} fill="#a78bfa" opacity=".2" filter="url(#about-network-glow)" animate={{ opacity: [.08, .34, .08] }} transition={{ duration: 3 + index * .25, repeat: Infinity, ease: "easeInOut" }} /><circle cx={cx} cy={cy} r={index === 2 ? 1.25 : .75} fill={index % 2 ? "#f0abfc" : "#8ab8ff"} /></g>)}<motion.circle r="1" fill="#f9a8d4" animate={{ cx: [18, 34, 49, 67, 82], cy: [52, 28, 58, 24, 48], opacity: [0, 1, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} /></motion.g></svg></div>;
}

function AboutContent() {
  return <>
    <section id="story" className="relative overflow-hidden border-t border-white/[.06] py-16 md:py-24"><div className="section-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><Reveal><div className="section-kicker">Who we are</div><h2 className="section-title mt-5">Technology with intelligence at its core.</h2><p className="section-copy mt-6">AgynTiq is an AI and technology company focused on helping businesses evolve through intelligent automation, digital transformation, and data-driven solutions.</p><p className="mt-5 max-w-xl text-base leading-8 text-white/52">We combine technology, business understanding, and human expertise to simplify operations, improve decisions, and create new opportunities for growth.</p></Reveal><Reveal delay={.1} className="rounded-[2rem] border border-blue-200/15 bg-[#090b28]/70 p-6 shadow-[0_24px_100px_rgba(42,53,180,.16)] md:p-10"><div className="mb-5 flex justify-between text-xs uppercase tracking-[.28em] text-white/40"><span>AGYNTIQ</span><span>Live intelligence</span></div><NeuralConstellation /><div className="grid grid-cols-2 gap-3 text-center text-xs uppercase tracking-[.2em] text-fuchsia-100/55 md:grid-cols-4">{["Intelligence", "Automation", "Data", "Innovation"].map(item => <span key={item}>{item}</span>)}</div></Reveal></div></section>
    <section className="relative overflow-hidden py-16 md:py-24"><div className="section-shell"><Reveal><SectionHeading eyebrow="Our mission" title="Make technology work smarter." copy="We make advanced technology practical, accessible, and impactful for modern businesses—reducing complexity, unlocking insight, and helping people focus on what matters most." /></Reveal><div className="relative mt-12 grid gap-4 md:grid-cols-4"><div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-blue-400/10 via-fuchsia-300/70 to-pink-300/10 md:block" />{aboutPillars.map(([number, title, detail], index) => <Reveal key={number} delay={index * .08}><div className="group relative border border-white/10 bg-[#090b28]/75 p-5 transition duration-500 hover:-translate-y-2 hover:border-fuchsia-200/45 hover:bg-[#15103a]"><div className="relative z-10 grid h-7 w-7 place-items-center rounded-full border border-fuchsia-200/45 bg-[#090b28] text-xs text-fuchsia-100">{number}</div><h3 className="mt-8 text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-white/48">{detail}</p></div></Reveal>)}</div></div></section>
    <section className="relative overflow-hidden border-y border-white/[.06] bg-[#07091f] py-16 md:py-24"><div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><Reveal><SectionHeading eyebrow="Our vision" title="A future where intelligence drives every possibility." copy="We envision intelligent technology working seamlessly alongside people—helping organizations decide better, operate efficiently, and continuously adapt." /></Reveal><Reveal delay={.1} className="relative"><div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-blue-300/10 via-fuchsia-300/70 to-pink-300/10" />{["HUMAN INTELLIGENCE", "+", "ARTIFICIAL INTELLIGENCE", "=", "INTELLIGENT ENTERPRISE"].map((item, index) => <motion.div key={item} initial={{ opacity: 0, x: index % 2 ? 0 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: .5 }} transition={{ duration: .65, delay: index * .12 }} className={`relative z-10 py-2 text-center ${item === "+" || item === "=" ? "text-2xl text-fuchsia-200" : index === 4 ? "text-2xl font-semibold text-fuchsia-100 md:text-4xl" : "text-lg font-semibold tracking-[.16em] text-white/80 md:text-2xl"}`}>{item}</motion.div>)}</Reveal></div></section>
    <section className="relative py-16 md:py-24"><div className="section-shell"><Reveal><SectionHeading eyebrow="What we do" title="From business challenges to intelligent solutions." copy="We combine emerging technologies with practical business thinking to improve the way organizations operate, connect, and grow." /></Reveal><div className="mt-12 grid gap-4 md:grid-cols-2">{["AI-powered automation and decision systems.", "Connected digital transformation and experiences.", "Data intelligence for faster, informed decisions.", "Secure, scalable platforms for evolving organizations."].map((item, index) => <Reveal key={item} delay={index * .06}><motion.div whileHover={{ x: 8 }} className="group relative flex min-h-40 items-end overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(12,15,48,.9),rgba(28,10,50,.72))] p-6 transition duration-500 hover:border-fuchsia-200/45"><div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-400/10 blur-3xl transition group-hover:scale-150" /><div className="relative"><div className="text-xs uppercase tracking-[.25em] text-fuchsia-200/45">0{index + 1} · capability</div><h3 className="mt-5 max-w-md text-xl font-semibold text-white">{item}</h3><div className="mt-5 text-sm font-semibold text-fuchsia-100/65">Explore <span className="ml-2 transition group-hover:ml-4">→</span></div></div></motion.div></Reveal>)}</div></div></section>
    <section className="relative overflow-hidden bg-[#07091f] py-16 md:py-24"><div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><Reveal><SectionHeading eyebrow="Why AgynTiq" title="Technology is powerful when it creates real value." copy="Every solution should solve a problem, improve an experience, or create a new opportunity. We begin with your objectives, then build for flexibility, growth, and responsible adoption." /></Reveal><Reveal delay={.1}><div className="relative space-y-5 border-l border-fuchsia-200/25 pl-8">{["AI", "BUSINESS", "SCALABILITY", "HUMAN + AI"].map((item, index) => <div key={item} className="relative flex items-center gap-4"><span className="absolute -left-[2.15rem] h-3 w-3 rounded-full bg-fuchsia-200 shadow-[0_0_18px_rgba(240,171,252,.8)]" /><span className="text-2xl font-semibold tracking-[.1em] text-white md:text-4xl">{item}</span>{index < 3 && <span className="absolute -bottom-5 left-0 text-fuchsia-200/60">↓</span>}</div>)}</div></Reveal></div></section>
    <section className="relative py-16 md:py-24"><div className="section-shell"><Reveal><SectionHeading eyebrow="How we work" title="From idea to intelligent impact." copy="Every transformation begins with understanding the problem. Our approach combines strategy, technology, and continuous improvement." /></Reveal><div className="relative mt-14"><div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-blue-300/20 via-fuchsia-300/70 to-pink-300/20 md:block" /><div className="grid gap-8 md:grid-cols-5">{workStages.map(([title, detail], index) => <Reveal key={title} delay={index * .08}><div className="relative"><motion.span animate={{ boxShadow: ["0 0 0 rgba(240,171,252,0)", "0 0 24px rgba(240,171,252,.7)", "0 0 0 rgba(240,171,252,0)"] }} transition={{ duration: 3, repeat: Infinity, delay: index * .35 }} className="relative z-10 block h-10 w-10 rounded-full border border-fuchsia-200/60 bg-[#080a25]" /><h3 className="mt-6 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-white/48">{detail}</p></div></Reveal>)}</div></div></div></section>
    <section className="relative overflow-hidden border-y border-white/[.06] bg-[#07091f] py-16 md:py-24"><div className="section-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><Reveal><SectionHeading eyebrow="Technology" title="Where intelligence meets engineering." copy="Modern technologies, connected into digital ecosystems that are intelligent, scalable, and built for the real world." /></Reveal><Reveal delay={.1} className="relative mx-auto h-[25rem] w-full max-w-xl"><div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-fuchsia-200/55 bg-[#17103b] text-center text-xs font-semibold tracking-[.2em] text-white shadow-[0_0_50px_rgba(202,74,255,.24)]">AGYNTIQ</div>{technologyOrbit.map((item, index) => { const angle = (index / technologyOrbit.length) * Math.PI * 2; const x = 50 + Math.cos(angle) * 39; const y = 50 + Math.sin(angle) * 39; return <div key={item}><div className="absolute left-1/2 top-1/2 h-px origin-left bg-gradient-to-r from-fuchsia-300/60 to-transparent" style={{ width: "39%", transform: `rotate(${angle}rad)` }} /><motion.div animate={{ y: [0, index % 2 ? -7 : 7, 0] }} transition={{ duration: 4 + index * .4, repeat: Infinity, ease: "easeInOut" }} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/25 bg-[#0d1235] px-4 py-2 text-xs tracking-[.16em] text-blue-100/75" style={{ left: `${x}%`, top: `${y}%` }}>{item}</motion.div></div>; })}</Reveal></div></section>
    <section id="industries" className="relative py-16 md:py-24"><div className="section-shell"><Reveal><SectionHeading eyebrow="Industries we serve" title="Intelligence across industries." copy="We apply intelligent technology in ways that align with the unique processes, goals, and opportunities of each organization." /></Reveal><div className="mt-12 grid gap-4 md:grid-cols-3">{industries.map((item, index) => <Reveal key={item.name} delay={index * .05}><motion.article whileHover={{ y: -6 }} style={{ background: industryCardBackgrounds[index] }} className="group relative min-h-44 overflow-hidden border border-white/10 p-6 transition duration-500 hover:border-fuchsia-200/50"><div className={`absolute inset-0 bg-gradient-to-br opacity-40 ${industryAccentStyles[index]}`} /><div className="relative"><span className="text-xs tracking-[.25em] text-white/35">0{index + 1}</span><h3 className="mt-10 text-xl font-semibold text-white">{item.name}</h3><p className="mt-3 max-h-0 overflow-hidden text-sm leading-6 text-white/55 transition-all duration-500 group-hover:max-h-24">{item.detail}</p></div></motion.article></Reveal>)}</div></div></section>
    <section className="relative overflow-hidden bg-[#07091f] py-16 md:py-24"><div className="section-shell"><Reveal><SectionHeading eyebrow="What drives us" title="Principles behind everything we build." copy="Innovation, integrity, collaboration, impact, and evolution keep us focused on meaningful outcomes." /></Reveal><Reveal delay={.1} className="mx-auto mt-12 max-w-3xl"><div className="relative grid grid-cols-2 gap-10 text-center md:grid-cols-3"><div className="col-span-2 md:col-span-3 text-sm font-semibold tracking-[.25em] text-fuchsia-100">INNOVATION</div><div className="text-sm tracking-[.2em] text-blue-100/75">COLLABORATION</div><div className="text-sm tracking-[.2em] text-fuchsia-100/75">INTEGRITY</div><div className="col-span-2 md:col-span-3 mx-auto grid h-28 w-28 place-items-center rounded-full border border-fuchsia-200/55 bg-[#17103b] text-xs font-semibold tracking-[.2em] text-white shadow-[0_0_50px_rgba(202,74,255,.25)]">AGYNTIQ</div><div className="text-sm tracking-[.2em] text-violet-100/75">IMPACT</div><div className="text-sm tracking-[.2em] text-pink-100/75">EVOLUTION</div></div></Reveal></div></section>
    <section className="relative py-16 md:py-24"><div className="section-shell grid gap-10 lg:grid-cols-3"><Reveal><div className="section-kicker">The future of work</div><h2 className="section-title mt-5">People bring the vision. Intelligence amplifies it.</h2></Reveal><Reveal delay={.1} className="lg:col-span-2"><div className="grid gap-4 md:grid-cols-3"><div className="border border-blue-200/20 bg-blue-400/[.06] p-6"><div className="text-xs tracking-[.25em] text-blue-100/60">HUMAN</div><p className="mt-6 text-lg leading-8 text-white/75">Creativity · Experience · Strategy · Empathy</p></div><div className="flex items-center justify-center text-4xl text-fuchsia-200">+</div><div className="border border-fuchsia-200/20 bg-fuchsia-400/[.06] p-6"><div className="text-xs tracking-[.25em] text-fuchsia-100/60">AI</div><p className="mt-6 text-lg leading-8 text-white/75">Speed · Intelligence · Automation · Scale</p></div></div><div className="mt-5 border border-fuchsia-200/40 bg-[linear-gradient(100deg,rgba(46,108,235,.16),rgba(202,74,255,.18))] p-6 text-center text-xl font-semibold tracking-[.18em] text-white">INTELLIGENT ENTERPRISE</div></Reveal></div></section>
    <section className="relative overflow-hidden border-y border-white/[.06] bg-[#07091f] py-16 md:py-24"><div className="section-shell"><Reveal><SectionHeading eyebrow="Our impact" title="Built to create measurable change." copy="We are building smarter workflows, connected systems, data-driven decisions, and scalable solutions—not vanity metrics." /></Reveal><div className="mt-12 grid gap-4 md:grid-cols-4">{["Smarter workflows", "Connected systems", "Data-driven decisions", "Scalable solutions"].map((item, index) => <Reveal key={item} delay={index * .08}><div className="border border-white/10 bg-[#0b0e2b] p-6"><div className="text-3xl font-semibold text-fuchsia-100">0{index + 1}</div><div className="mt-8 text-sm uppercase tracking-[.14em] text-white/65">{item}</div></div></Reveal>)}</div></div></section>
    <section id="contact" className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#100b2b_0%,#08071c_48%,#16082d_100%)] py-20 md:py-28"><div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true"><NeuralConstellation /></div><div className="section-shell relative grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><Reveal><div className="section-kicker">Let&apos;s build what&apos;s next</div><h2 className="section-title mt-5 max-w-2xl">We are building more than technology.</h2><p className="section-copy mt-6 max-w-xl">We are building the systems, experiences, and intelligence that will shape how businesses operate tomorrow.</p><div className="mt-8 text-sm font-semibold tracking-[.18em] text-fuchsia-100">AI · AUTOMATION · INTELLIGENCE · EVOLUTION</div></Reveal><Reveal delay={.1}><div className="flex flex-wrap gap-3 lg:justify-end"><Link href="#about" className="rounded-full bg-[linear-gradient(100deg,#2e6ceb,#7547df,#c23bd9)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(126,87,255,.28)] transition hover:-translate-y-1">Talk to AgynTiq →</Link><Link href="#story" className="rounded-full border border-fuchsia-200/25 px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-fuchsia-200/60 hover:text-white">Explore our story</Link></div></Reveal></div></section>
  </>;
}

function ServicesShowcase() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#050719]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_18%,rgba(91,92,255,0.16),transparent_32%),radial-gradient(ellipse_at_18%_78%,rgba(202,74,255,0.1),transparent_34%)]" aria-hidden="true" />
      {services.map(([number, title, detail], index) => (
        <motion.article
          key={number}
          initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex min-h-[68svh] items-center overflow-hidden border-t border-white/[0.08] py-14 md:min-h-[78svh] md:py-16"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,7,25,0.98),rgba(10,11,42,0.8),rgba(22,10,44,0.72))]" />
          <motion.div
            animate={{ x: index % 2 ? ["10%", "-8%", "10%"] : ["-8%", "10%", "-8%"], y: ["-5%", "7%", "-5%"] }}
            transition={{ duration: 16 + index * 2, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute ${index % 2 ? "-right-40" : "-left-40"} top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full ${index % 2 ? "bg-fuchsia-500/[0.13]" : "bg-blue-500/[0.12]"} blur-[120px]`}
            aria-hidden="true"
          />
          <div className="section-shell relative grid w-full gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="section-kicker w-fit">Services · {number}</div>
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-fuchsia-300 via-blue-300 to-transparent transition-all duration-700 group-hover:w-48" />
              <h2 className="section-title mt-8 max-w-2xl">{title}</h2>
            </div>
            <div className="relative border-l border-white/10 pl-8 md:pl-14">
              <span className="text-sm uppercase tracking-[0.3em] text-fuchsia-200/60">Capability · 0{index + 1}</span>
              <p className="section-copy mt-8 max-w-2xl text-lg md:text-xl">{detail}</p>
              <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-white/35">
                <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-200 shadow-[0_0_18px_rgba(240,171,252,0.85)]" />
                Scroll for the next capability
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 text-xs tracking-[0.3em] text-white/25">0{index + 1} / 0{services.length}</div>
        </motion.article>
      ))}
    </section>
  );
}


function WaveField({ showBackdrop = true }: { showBackdrop?: boolean }) {
  const wavePaths = Array.from({ length: 25 }, (_, index) => {
    const offset = index * 1.45;
    return `M -8 ${61 + offset} C 8 ${49 + offset * 0.4}, 18 ${67 + offset * 0.75}, 34 ${57 + offset * 0.6} S 57 ${76 + offset * 0.55}, 70 ${59 + offset * 0.5} S 88 ${43 + offset * 0.45}, 108 ${57 + offset * 0.7}`;
  });

  if (!showBackdrop) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {showBackdrop && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_12%,rgba(71,47,187,0.52),transparent_42%),radial-gradient(ellipse_at_78%_64%,rgba(255,0,145,0.2),transparent_32%),linear-gradient(145deg,#15104c_0%,#0b0a25_48%,#070817_100%)]" />}
      {showBackdrop && <div className="absolute -bottom-24 left-[24%] h-80 w-[65%] rounded-[50%] bg-fuchsia-500/[0.12] blur-[110px]" />}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="wave-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#734eff" stopOpacity="0.62" />
            <stop offset="0.48" stopColor="#d84dff" stopOpacity="0.92" />
            <stop offset="0.78" stopColor="#ff159e" stopOpacity="0.98" />
            <stop offset="1" stopColor="#ff55cb" stopOpacity="0.46" />
          </linearGradient>
          <filter id="wave-blur"><feGaussianBlur stdDeviation="1.4" /></filter>
          <filter id="wave-soft-blur"><feGaussianBlur stdDeviation="4" /></filter>
          <linearGradient id="wave-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0b0a25" stopOpacity="0" />
            <stop offset="0.34" stopColor="#0b0a25" stopOpacity="0.08" />
            <stop offset="1" stopColor="#070817" stopOpacity="0.72" />
          </linearGradient>
        </defs>
        <path d="M -5 67 C 16 50, 27 72, 44 60 S 70 78, 104 52 L 104 106 L -5 106 Z" fill="url(#wave-fade)" />
        <g opacity="0.55" filter="url(#wave-soft-blur)">
          <path d={wavePaths[5]} fill="none" stroke="#633dff" strokeWidth="2.8" />
          <path d={wavePaths[12]} fill="none" stroke="#ff159e" strokeWidth="3.4" />
          <path d={wavePaths[19]} fill="none" stroke="#ff36c0" strokeWidth="2.8" />
        </g>
        <motion.g
          animate={{ x: [0, -1.8, 0], y: [0, -1.2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          {wavePaths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              fill="none"
              stroke="url(#wave-line)"
              strokeWidth={index % 5 === 0 ? "0.34" : "0.2"}
              strokeOpacity={0.34 + (index % 6) * 0.07}
              animate={{ strokeOpacity: [0.28 + (index % 4) * 0.05, 0.58 + (index % 3) * 0.08, 0.28 + (index % 4) * 0.05] }}
              transition={{ duration: 4.5 + (index % 5) * 0.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.09 }}
            />
          ))}
        </motion.g>
        <motion.path
          d={wavePaths[11]}
          fill="none"
          stroke="url(#wave-line)"
          strokeWidth="0.75"
          strokeOpacity="0.9"
          filter="url(#wave-blur)"
          animate={{ x: [0, 2, 0], y: [0, -1, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <div className="section-kicker">{eyebrow}</div>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="section-copy max-w-2xl">{copy}</p>
    </div>
  );
}

function RecognitionIcon({ index }: { index: number }) {
  if (index === 0) {
    return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 3 19 6v5c0 4.6-2.8 8.1-7 10-4.2-1.9-7-5.4-7-10V6l7-3Z" /><path d="m8.7 12 2.1 2.1 4.6-4.7" /></svg>;
  }

  if (index === 1) {
    return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 21h16M6 21V8h12v13M9 8V5h6v3M9 12h2M13 12h2M9 16h2M13 16h2" /><path d="M3 8h18" /></svg>;
  }

  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 17 9 12l3 3 7-8" /><path d="M15 7h4v4" /><path d="M4 21h16" /></svg>;
}

// Retained as an alternate service icon set for future UI variants.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ServiceIcon({ index }: { index: number }) {
  const paths = [
    <><circle cx="12" cy="12" r="7" /><path d="m12 8 1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2L12 8Z" /></>,
    <><circle cx="6" cy="12" r="2" /><circle cx="18" cy="7" r="2" /><circle cx="18" cy="17" r="2" /><path d="m8 11 8-3M8 13l8 3" /></>,
    <><path d="M8 7v5a4 4 0 0 0 8 0V7M6 7h4M14 7h4M12 16v3M9 19h6" /></>,
    <><ellipse cx="12" cy="6" rx="6" ry="2.5" /><path d="M6 6v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6M6 12v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-6" /></>,
    <><path d="M4 15h3l2-6 3 10 2-6h6" /><path d="M4 5h16" /></>
  ];
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[index]}</svg>;
}

export default function AboutPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > window.innerHeight * 0.65);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="about-page relative bg-[#050719] text-white">
      <SiteHeader mode="services" />
      <style jsx global>{`
        .about-page > section:not(#about):not(#services) {
          padding-top: 3.5rem !important;
          padding-bottom: 3.5rem !important;
        }

        @media (min-width: 768px) {
          .about-page > section:not(#about):not(#services) {
            padding-top: 4.5rem !important;
            padding-bottom: 4.5rem !important;
          }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-x-0 top-[680px] bottom-[420px] z-0 opacity-[0.22] md:opacity-[0.16]" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-[28%] origin-center -rotate-6 scale-110">
          <WaveField showBackdrop={false} />
        </div>
        <div className="absolute inset-x-0 top-[34%] h-[28%] origin-center rotate-[172deg] scale-110 opacity-90">
          <WaveField showBackdrop={false} />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[30%] origin-center rotate-6 scale-110 opacity-85">
          <WaveField showBackdrop={false} />
        </div>
      </div>

      <section id="about" className="relative isolate min-h-[680px] overflow-hidden pt-28 md:min-h-[720px] md:pt-32">
        <VantaNetworkField />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050719_0%,rgba(5,7,25,0.93)_32%,rgba(5,7,25,0.42)_68%,rgba(5,7,25,0.8)_100%)]" />
        <div className="section-shell relative z-10 flex min-h-[520px] items-center">
          <Reveal>
            <div className="section-kicker">About AgyntiQ</div>
            <h1 className="mt-6 max-w-3xl bg-[linear-gradient(90deg,#ffffff_0%,#c7d2fe_70%,#e8eaff_100%)] bg-clip-text text-5xl font-semibold leading-[0.94] tracking-normal text-transparent drop-shadow-[0_0_24px_rgba(91,92,255,0.14)] md:bg-[linear-gradient(90deg,#ffffff_0%,#c7d2fe_38%,#f0abfc_70%,#d946ef_100%)] md:drop-shadow-[0_0_34px_rgba(202,74,255,0.18)] md:text-7xl">
              Intelligence that moves business forward.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/68 md:text-xl">
              AgyntiQ helps organizations turn AI ambition into intelligent systems that people trust, use, and grow with.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#story" className="rounded-full bg-[linear-gradient(100deg,#2e6ceb,#7547df,#c23bd9)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(126,87,255,0.28)] transition hover:-translate-y-0.5">Our story <span className="ml-2">→</span></Link>
              <Link href="#contact" className="rounded-full border border-fuchsia-200/22 bg-[#180d32]/65 px-6 py-3.5 text-sm font-semibold text-white/82 transition hover:border-fuchsia-200/45 hover:bg-fuchsia-300/[0.08] hover:text-white">Start a conversation</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutContent />

      {showBackToTop && (
        <Link
          href="#about"
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full border border-fuchsia-200/25 bg-[#17103a]/95 text-xl font-semibold text-white shadow-[0_14px_42px_rgba(0,0,0,0.35),0_0_28px_rgba(202,74,255,0.2)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-fuchsia-200/50 hover:bg-[#24134d] md:bottom-7 md:right-7"
        >
          <span aria-hidden="true">↑</span>
        </Link>
      )}
      <ServiceFooter showWaves={false} />
    </main>
  );
}
