export type ServicePageData = {
  title: string;
  eyebrow: string;
  intro: string;
  summary: string;
  focusPoints: string[];
  deliverables: string[];
};

export const servicePages: Record<string, ServicePageData> = {
  "ai-strategy-readiness": {
    title: "AI Strategy & Readiness Services",
    eyebrow: "Strategy",
    intro: "Build the roadmap, operating model, and AI business case before implementation.",
    summary:
      "This page will hold the strategy-led narrative for helping teams identify, prioritize, and justify AI adoption.",
    focusPoints: [
      "Opportunity discovery and use-case prioritization",
      "AI maturity and readiness assessment",
      "Roadmap design and business case alignment"
    ],
    deliverables: [
      "Executive-ready AI roadmap",
      "Priority use-case matrix",
      "Implementation and governance plan"
    ]
  },
  "ai-solution-development": {
    title: "AI Solution Development",
    eyebrow: "Build",
    intro: "Turn AI strategy into products, copilots, and workflow experiences that people use.",
    summary:
      "This page will become the product and engineering story for building enterprise AI applications with a premium execution style.",
    focusPoints: [
      "Product design and prototype delivery",
      "Custom AI application build",
      "GenAI workflow experiences"
    ],
    deliverables: [
      "Working AI product or prototype",
      "Reusable component set",
      "Delivery backlog and roadmap"
    ]
  },
  "ai-integration-services": {
    title: "AI Integration Services",
    eyebrow: "Connect",
    intro: "Embed AI into the systems, workflows, and platforms your teams already use.",
    summary:
      "This page will explain how AI gets connected to business systems so it feels native instead of bolted on.",
    focusPoints: [
      "Systems and workflow integration",
      "Knowledge and retrieval integration",
      "Automation across existing tools"
    ],
    deliverables: [
      "Integration architecture",
      "Workflow mapping",
      "Deployment guidance"
    ]
  },
  "ai-data-services": {
    title: "AI Data Services",
    eyebrow: "Data",
    intro: "Prepare, structure, and govern the data layer AI needs to stay reliable.",
    summary:
      "This page will focus on the data foundation behind AI, including preparation, labeling, and governance.",
    focusPoints: [
      "Data preparation and engineering",
      "Annotation, labeling, and quality",
      "AI knowledge architecture"
    ],
    deliverables: [
      "Data readiness plan",
      "Governance checklist",
      "Knowledge architecture map"
    ]
  },
  "ai-managed-services": {
    title: "AI Managed Services",
    eyebrow: "Operate",
    intro: "Keep AI systems monitored, supported, and improving after launch.",
    summary:
      "This page will become the operations and managed-services story for long-term AI reliability and improvement.",
    focusPoints: [
      "Monitoring and optimization",
      "Reliability and support",
      "Compliance and governance operations"
    ],
    deliverables: [
      "Managed service model",
      "Support and escalation plan",
      "Optimization cadence"
    ]
  }
};

export const servicePageOrder = [
  { label: "AI Strategy & Readiness Services", href: "/services/ai-strategy-readiness" },
  { label: "AI Solution Development", href: "/services/ai-solution-development" },
  { label: "AI Integration Services", href: "/services/ai-integration-services" },
  { label: "AI Data Services", href: "/services/ai-data-services" },
  { label: "AI Managed Services", href: "/services/ai-managed-services" }
] as const;
