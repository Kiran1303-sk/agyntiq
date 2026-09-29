"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

const services = [
  ["01", "Strategy & readiness", "Turn AI ambition into a roadmap leaders can fund."],
  ["02", "Solutions development", "Build assistants, agents, products, and decision systems."],
  ["03", "Integration services", "Connect AI to the tools and workflows where work happens."],
  ["04", "Data services", "Create reliable, governed foundations for production AI."],
  ["05", "Managed services", "Keep systems monitored, optimized, and improving after launch."]
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

const recognitionHoverStyles = [
  "text-amber-200 border-amber-200/45 bg-amber-300/[0.1] group-hover:border-amber-200/70 group-hover:bg-amber-300/[0.16] group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]",
  "text-emerald-200 border-emerald-200/45 bg-emerald-300/[0.1] group-hover:border-emerald-200/70 group-hover:bg-emerald-300/[0.16] group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]",
  "text-pink-200 border-pink-200/45 bg-pink-300/[0.1] group-hover:border-pink-200/70 group-hover:bg-pink-300/[0.16] group-hover:shadow-[0_0_30px_rgba(244,114,182,0.2)]"
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
    <main className="relative overflow-hidden bg-[#050719] text-white">
      <SiteHeader mode="services" />
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
        <DenseNeuralField />
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

      <section id="story" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute right-[-12rem] top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-indigo-500/[0.08] blur-[120px]" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <Reveal>
            <div className="max-w-xl">
              <div className="section-kicker">Our AI story</div>
              <h2 className="mt-6 text-5xl font-semibold leading-[0.94] tracking-tight text-white md:text-7xl">From curiosity to <span className="bg-[linear-gradient(100deg,#c7d2fe,#f0abfc,#d946ef)] bg-clip-text text-transparent">compounding value.</span></h2>
              <p className="mt-8 max-w-lg text-lg leading-8 text-white/58">AI is changing how businesses think, decide, and operate. Our role is to make that change practical: grounded in context, measurable in outcome, and built for the people who carry it forward.</p>
              <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-fuchsia-200/48"><span className="h-px w-12 bg-gradient-to-r from-fuchsia-300 to-transparent" />A practical path to AI value</div>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-blue-300/10 via-fuchsia-300/60 to-blue-300/10" />
            {["See the opportunity", "Build what matters", "Scale with confidence"].map((item, index) => (
              <Reveal key={item} delay={index * 0.12}>
                <motion.div whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 220, damping: 20 }} className="group relative grid grid-cols-[4rem_1fr] gap-6 py-5">
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-fuchsia-200/25 bg-[#08091f] text-sm font-semibold text-fuchsia-100 shadow-[0_0_28px_rgba(202,74,255,0.16)] transition duration-500 group-hover:border-fuchsia-200/70 group-hover:bg-[#19113c] group-hover:shadow-[0_0_34px_rgba(202,74,255,0.35)]">0{index + 1}</div>
                  <div className="border-b border-white/10 pb-6 transition duration-500 group-hover:border-fuchsia-200/35"><div className="text-2xl font-semibold text-white transition group-hover:text-fuchsia-100">{item}</div><p className="mt-2 max-w-md text-sm leading-7 text-white/42">A focused step that turns ambition into a clearer decision, a useful system, and measurable momentum.</p><div className="mt-4 h-px w-20 bg-gradient-to-r from-fuchsia-300/70 to-transparent transition duration-500 group-hover:w-40" /></div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28"><div className="section-shell"><Reveal><SectionHeading eyebrow="Awards & recognition" title="Progress is measured by the trust we earn." copy="Our standard is bigger than a trophy: useful systems, responsible decisions, and outcomes that stand up in the real world." /></Reveal><div className="mt-12 grid items-stretch gap-4 md:grid-cols-3">{["Responsible AI", "Enterprise readiness", "Outcome-led innovation"].map((item, index) => <Reveal key={item} delay={index * 0.08} className="h-full"><div className={`group flex h-full flex-col rounded-[1.4rem] border border-fuchsia-200/12 bg-[#0b0d2a]/65 p-6 transition duration-500 hover:-translate-y-1 ${recognitionHoverStyles[index]}`}><div className={`flex h-14 w-14 items-center justify-center rounded-full border bg-fuchsia-300/[0.07] transition duration-500 group-hover:scale-110 ${recognitionHoverStyles[index]}`}><RecognitionIcon index={index} /></div><div className="mt-8 text-xl font-semibold">{item}</div><p className="mt-3 flex-1 text-sm leading-7 text-white/52">A principle we bring into every engagement, from the first workshop to production operations.</p><div className="mt-8 text-xs uppercase tracking-[0.24em] text-fuchsia-200/42">Our benchmark · 0{index + 1}</div></div></Reveal>)}</div></div></section>

      <section id="industries" className="relative py-20 md:py-28"><div className="section-shell"><Reveal><SectionHeading eyebrow="Industry expertise & solutions" title="Built around the realities of your industry." copy="We combine deep business context with modern AI capabilities to create systems that fit the work, language, and constraints of each organization." /></Reveal><div className="mt-12 grid items-stretch gap-3 md:grid-cols-2 lg:grid-cols-3">{industries.map((item, index) => <Reveal key={item.name} delay={index * 0.04} className="h-full"><article className="group relative flex h-full min-h-[15rem] flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0a0d28]/70 p-5 transition duration-500 hover:-translate-y-1 hover:border-fuchsia-200/26"><div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-fuchsia-400/[0.08] blur-3xl transition group-hover:bg-fuchsia-400/[0.16]" /><div className="relative flex h-full flex-col"><div className="text-xs uppercase tracking-[0.25em] text-blue-200/50">0{index + 1}</div><h3 className="mt-9 text-xl font-semibold">{item.name}</h3><p className="mt-3 flex-1 text-sm leading-7 text-white/52">{item.detail}</p><div className="mt-7 text-sm font-semibold text-fuchsia-100/70">Explore capability <span className="ml-2 transition group-hover:ml-3">→</span></div></div></article></Reveal>)}</div></div></section>

      <section id="services" className="relative overflow-hidden bg-[#050719] py-24 md:py-32"><div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[120px]" /><div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/[0.08] blur-[130px]" /><div className="section-shell relative"><Reveal><SectionHeading eyebrow="Services" title="A clear line from ambition to operation." copy="Five connected services help teams move from the first important question to AI systems that keep getting better." /></Reveal><div className="mt-14 grid gap-4 md:grid-cols-2">{services.map(([number, title, detail], index) => <Reveal key={number} delay={index * 0.08} className={index === services.length - 1 ? "md:col-span-2" : ""}><motion.article whileHover={{ y: -7 }} transition={{ type: "spring", stiffness: 220, damping: 20 }} className="group relative min-h-[15rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(11,13,42,0.92),rgba(18,8,42,0.74))] p-6 transition duration-500 hover:border-fuchsia-200/35 hover:shadow-[0_24px_80px_rgba(86,54,190,0.22)] md:p-7"><div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/[0.07] blur-3xl transition duration-700 group-hover:bg-fuchsia-400/[0.18]" /><div className="relative flex h-full flex-col"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-full border border-fuchsia-200/20 bg-fuchsia-300/[0.06] text-sm font-semibold text-fuchsia-100 transition duration-500 group-hover:scale-110 group-hover:border-fuchsia-200/55 group-hover:bg-fuchsia-300/[0.14]">{number}</span><span className="text-xs uppercase tracking-[0.26em] text-white/30">Capability · 0{index + 1}</span></div><div className="mt-auto"><div className="mb-4 h-px w-16 bg-gradient-to-r from-blue-300/70 via-fuchsia-300/70 to-transparent transition-all duration-500 group-hover:w-32" /><h3 className="text-2xl font-semibold text-white transition group-hover:text-fuchsia-100">{title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-white/52">{detail}</p></div></div></motion.article></Reveal>)}</div></div></section>

      <section className="relative bg-[#050719] py-20 md:py-28"><div className="section-shell"><Reveal><SectionHeading eyebrow="Board perspectives" title="Leadership with a point of view." copy="The people guiding AgyntiQ believe enterprise AI should be ambitious, understandable, and grounded in the work it is meant to improve." /></Reveal><div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">{boardPerspectives.map((person, index) => <Reveal key={person.role} delay={index * 0.08} className="h-full"><article className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0a0d28]/72"><div className="relative h-60 shrink-0 overflow-hidden"><Image src={person.image} alt={person.role} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-center grayscale-[20%] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#0a0d28] via-transparent to-transparent" /></div><div className="flex flex-1 flex-col p-6"><div className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/50">{person.role}</div><h3 className="mt-4 text-2xl font-semibold leading-tight">{person.title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-white/52">{person.story}</p></div></article></Reveal>)}</div></div></section>

      <section className="relative py-20 md:py-28"><div className="section-shell"><Reveal><SectionHeading eyebrow="Corporate values" title="The way we work is part of what we build." copy="Our values shape how we listen, decide, design, and stay accountable long after a system goes live." /></Reveal><div className="mt-12 grid items-stretch gap-3 md:grid-cols-5">{values.map(([title, detail], index) => <Reveal key={title} delay={index * 0.05} className="h-full"><div className="group flex h-full min-h-[14rem] flex-col rounded-[1.2rem] border border-fuchsia-200/12 bg-[linear-gradient(145deg,rgba(12,8,38,0.82),rgba(42,7,46,0.5))] p-5 transition duration-500 hover:-translate-y-2 hover:border-fuchsia-200/35 hover:bg-[linear-gradient(145deg,rgba(25,14,58,0.9),rgba(62,12,64,0.62))]"><div className="text-sm text-fuchsia-200/48">0{index + 1}</div><h3 className="mt-10 text-xl font-semibold transition group-hover:text-fuchsia-100">{title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-white/50">{detail}</p></div></Reveal>)}</div></div></section>

      <section className="relative py-20 md:py-28"><div className="section-shell"><Reveal><SectionHeading eyebrow="Locations worldwide" title="One connected team, close to the work." copy="Our distributed model brings local understanding and global delivery together across the markets we serve." /></Reveal><div className="relative mt-12 overflow-hidden rounded-[1.6rem] border border-blue-200/12 bg-[#080b25]/80 p-6 md:p-10"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(46,108,235,0.15),transparent_42%)]" /><svg viewBox="0 0 900 260" className="relative h-auto w-full opacity-80" aria-label="Connected global locations"><path d="M78 123C190 55 257 160 366 104S548 54 638 125 781 185 840 107" fill="none" stroke="url(#world-line)" strokeWidth="2" strokeDasharray="4 8" /><defs><linearGradient id="world-line"><stop stopColor="#5b5cff" /><stop offset=".5" stopColor="#ca4aff" /><stop offset="1" stopColor="#8ab6ff" /></linearGradient></defs>{[[78,123],[215,113],[366,104],[510,93],[638,125],[744,158],[840,107]].map(([cx, cy], index) => <g key={index}><circle cx={cx} cy={cy} r="11" fill="#ca4aff" opacity=".1" /><circle cx={cx} cy={cy} r="4" fill="#f0abfc" /></g>)}</svg><div className="relative mt-3 grid gap-3 md:grid-cols-4">{locations.map(([region, detail]) => <div key={region} className="rounded-xl border border-white/8 bg-white/[0.035] p-4"><div className="font-semibold text-white">{region}</div><div className="mt-2 text-xs leading-5 text-white/45">{detail}</div></div>)}</div></div></div></section>

      <section id="contact" className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#100b2b_0%,#08071c_48%,#16082d_100%)] py-24 md:py-32"><div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 origin-center -rotate-3 scale-110 opacity-[0.16] md:opacity-[0.12]" aria-hidden="true"><WaveField showBackdrop={false} /></div><div className="section-shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><Reveal><div className="grid gap-6"><div className="section-kicker w-fit rounded-full border border-fuchsia-300/20 bg-fuchsia-300/[0.05] px-5 py-2">Contact</div><h2 className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">Let&apos;s build what comes next.</h2><p className="max-w-xl text-lg leading-8 text-fuchsia-100/60">Tell us what you are trying to make possible. We&apos;ll bring the right people, questions, and next steps.</p></div></Reveal><Reveal delay={0.1}><div className="relative lg:pl-8"><div className="text-xs uppercase tracking-[0.3em] text-fuchsia-100/55">Contact form</div><form className="mt-5 grid gap-4" onSubmit={(event) => event.preventDefault()}><div className="grid gap-4 md:grid-cols-2"><input aria-label="Name" placeholder="Your name" className="rounded-2xl border border-white/10 bg-white/[0.12] px-5 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-fuchsia-300/45" /><input aria-label="Work email" type="email" placeholder="Work email" className="rounded-2xl border border-white/10 bg-white/[0.12] px-5 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-fuchsia-300/45" /></div><textarea aria-label="Project details" placeholder="What would you like to explore?" rows={5} className="resize-none rounded-2xl border border-white/10 bg-white/[0.12] px-5 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-fuchsia-300/45" /><button type="submit" className="mt-1 w-fit rounded-full bg-[linear-gradient(100deg,#7547df,#c23bd9)] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(126,87,255,0.28)] transition hover:-translate-y-0.5">Send an enquiry <span className="ml-2">↗</span></button></form></div></Reveal></div></section>

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
