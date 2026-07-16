export type ServiceSlide = {
  number: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  bullets: string[];
  chips: string[];
};

export const serviceSlides: ServiceSlide[] = [
  {
    number: "02",
    eyebrow: "Core Services",
    title: "AI Strategy & Readiness Services",
    subtitle: "Help organizations identify, prioritize, and justify AI adoption.",
    summary:
      "A strategic starting point that turns AI ambition into a business case, an operating model, and a roadmap.",
    bullets: [
      "Help organizations identify, prioritize, and justify AI adoption",
      "Core services: AI Strategy & Readiness, AI Solution Development, AI Integration Services, AI Data Services, AI Managed Services",
      "Build the right foundation before anything is deployed"
    ],
    chips: ["Discovery-first", "Enterprise context", "ROI led"]
  },
  {
    number: "03",
    eyebrow: "Customer Value",
    title: "From curiosity to compounding value",
    subtitle: "A clean value map for business leaders deciding where AI should go next.",
    summary:
      "This slide shows how AI moves from interest to adoption, and then into measurable enterprise value.",
    bullets: [
      "Curiosity -> investment decisions",
      "Strategy -> deployable AI products",
      "AI becomes part of existing enterprise workflows, not a separate tool",
      "Improved enterprise productivity within familiar tools and processes",
      "Sustained long-term AI value through continuous optimization"
    ],
    chips: ["Value clarity", "Faster realization", "Reusable platform thinking"]
  },
  {
    number: "04",
    eyebrow: "Starting Point",
    title: "Opportunity Identification and Roadmap Design",
    subtitle: "Map the highest-value opportunities before you invest in the build.",
    summary:
      "A focused planning screen that organizes the strategy work into a clear sequence of decisions.",
    bullets: [
      "Enterprise AI opportunity mapping across departments",
      "AI use-case identification workshops",
      "AI maturity assessment",
      "AI ROI modeling and value estimation",
      "AI investment prioritization frameworks"
    ],
    chips: ["3-5 year roadmap", "Governed adoption", "Business case"]
  },
  {
    number: "05",
    eyebrow: "Core Revenue Generator",
    title: "AI Solution Development",
    subtitle: "Building AI-powered applications and tools.",
    summary:
      "This track turns strategy into usable products, accelerators, and enterprise-ready AI experiences.",
    bullets: [
      "Assistants and agents for internal teams",
      "GenAI applications for summarization and report generation",
      "Predictive AI solutions for forecasting and risk",
      "Decision intelligence platforms with dashboards and recommendations",
      "Industry-ready AI accelerators and reusable modules"
    ],
    chips: ["Productized delivery", "Reusable modules", "Faster build cycles"]
  },
  {
    number: "06",
    eyebrow: "Across the stack",
    title: "AI Integration Services",
    subtitle: "Embedding AI into existing enterprise technology systems.",
    summary:
      "Designed to make AI feel native inside the tools, workflows, and systems people already use.",
    bullets: [
      "Enterprise system integration",
      "Workflow automation integration",
      "Knowledge integration including RAG",
      "Data and application connectivity",
      "Digital workplace AI with copilots and assistants"
    ],
    chips: ["Workflow automation", "RAG ready", "Into existing tools"]
  },
  {
    number: "07",
    eyebrow: "Recurring Revenue Generator",
    title: "AI Data Services",
    subtitle: "Preparing and managing data required for AI systems.",
    summary:
      "This layer creates the structured, governed data foundation that makes every downstream model more reliable.",
    bullets: [
      "AI data engineering",
      "AI data preparation",
      "Data annotation and labeling",
      "AI knowledge architecture",
      "Data quality and governance"
    ],
    chips: ["Structured data", "Knowledge layer", "Governance first"]
  },
  {
    number: "08",
    eyebrow: "Subscription Based Value",
    title: "AI Managed Services",
    subtitle: "Long-term operation and optimization of AI systems.",
    summary:
      "An always-on service layer that keeps AI reliable, compliant, and improving after launch.",
    bullets: [
      "AI model monitoring",
      "AI optimization services",
      "AI reliability and support",
      "AI governance and compliance",
      "Continuous AI improvement"
    ],
    chips: ["Always-on operations", "Continuous optimization", "Subscription value"]
  }
];
