export type ServicePageData = {
  title: string;
  eyebrow: string;
  intro: string;
  summary: string;
  focusPoints: string[];
  deliverables: string[];
  serviceStages?: {
    title: string;
    eyebrow: string;
    description: string;
    output: string;
    points: string[];
  }[];
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
    ],
    serviceStages: [
      {
        title: "Assistants & Agents",
        eyebrow: "Empower",
        description: "Build intelligent assistants and autonomous agents that help employees research, decide, and execute work faster.",
        output: "Enterprise AI assistants and agents",
        points: ["Enterprise AI assistants for employees", "AI research assistants", "AI operations agents"]
      },
      {
        title: "GenAI Applications",
        eyebrow: "Create",
        description: "Design generative AI applications that turn documents, knowledge, and workflows into useful business experiences.",
        output: "Production-ready GenAI applications",
        points: ["Document summarization tools", "Automated report generation platforms", "AI content generation systems"]
      },
      {
        title: "Predictive AI Solutions",
        eyebrow: "Predict",
        description: "Use predictive models to anticipate demand, identify risk, and detect anomalies before they become business problems.",
        output: "Predictive intelligence solutions",
        points: ["Demand forecasting models", "Risk prediction models", "Anomaly detection systems"]
      },
      {
        title: "Decision Intelligence Platforms",
        eyebrow: "Decide",
        description: "Create decision systems that combine recommendations, scenario modeling, and AI-driven insights for better action.",
        output: "Decision intelligence platform",
        points: ["AI recommendation engines", "Scenario simulation tools", "AI-driven decision dashboards"]
      },
      {
        title: "Industry-ready AI Accelerators",
        eyebrow: "Accelerate",
        description: "Start from reusable, industry-aware AI capabilities that shorten delivery time and create a stronger path to scale.",
        output: "Reusable industry AI accelerator",
        points: ["Prebuilt AI modules for HR, finance, and procurement", "Document intelligence engines", "AI knowledge search platforms"]
      }
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
    ],
    serviceStages: [
      {
        title: "Enterprise System Integration",
        eyebrow: "Connect",
        description: "Embed AI into the enterprise systems teams already rely on, creating connected experiences across core business operations.",
        output: "Connected enterprise AI foundation",
        points: ["AI integration with CRM platforms", "AI integration with ERP systems", "AI integration with document management systems"]
      },
      {
        title: "Workflow Automation Integration",
        eyebrow: "Automate",
        description: "Combine AI with automation to remove repetitive work, coordinate processes, and orchestrate business operations intelligently.",
        output: "AI-enabled workflow automation",
        points: ["AI-enabled workflow automation", "Robotic process automation + AI integration", "AI-driven business process orchestration"]
      },
      {
        title: "Knowledge Integration",
        eyebrow: "Understand",
        description: "Make organizational knowledge easier to discover and use through connected knowledge bases, retrieval, and enterprise search.",
        output: "Enterprise knowledge intelligence layer",
        points: ["Enterprise knowledge base creation", "Retrieval-augmented generation (RAG) systems", "AI search across company documents"]
      },
      {
        title: "Data & Application Connectivity",
        eyebrow: "Extend",
        description: "Connect AI services to applications and live data sources through reliable APIs, plugins, and enterprise connectors.",
        output: "Real-time AI data connectivity",
        points: ["API integration for AI services", "AI plug-ins for enterprise applications", "Real-time AI data connectors"]
      },
      {
        title: "Digital Workplace AI",
        eyebrow: "Enable",
        description: "Bring AI into the everyday digital workplace so teams can collaborate, meet, and create with greater productivity.",
        output: "AI-enabled digital workplace",
        points: ["AI embedded in collaboration tools", "AI meeting assistants", "AI productivity copilots"]
      }
    ]
  },
  "ai-data-services": {
    title: "AI Data Services",
    eyebrow: "Data",
    intro: "Preparing and managing the data required for reliable AI systems.",
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
    ],
    serviceStages: [
      {
        title: "AI Data Engineering",
        eyebrow: "Engineer",
        description: "Build reliable pipelines that make enterprise information available, structured, and ready for AI workloads.",
        output: "Enterprise AI data pipelines",
        points: ["Enterprise data pipelines for AI", "Structured and unstructured data processing", "Real-time data ingestion systems"]
      },
      {
        title: "AI Data Preparation",
        eyebrow: "Prepare",
        description: "Prepare raw information for dependable AI use through cleaning, normalization, training data preparation, and knowledge structuring.",
        output: "Prepared AI training and knowledge data",
        points: ["Data cleaning and normalization", "Training dataset preparation", "Knowledge base structuring"]
      },
      {
        title: "Data Annotation & Labelling",
        eyebrow: "Enrich",
        description: "Enrich training data with consistent labels and annotations that improve the accuracy and usefulness of AI models.",
        output: "Enriched AI training datasets",
        points: ["Document labeling for AI models", "Image and text annotation services", "AI training dataset enrichment"]
      },
      {
        title: "AI Knowledge Architecture",
        eyebrow: "Structure",
        description: "Organize enterprise knowledge into a connected architecture that supports retrieval, semantic search, and intelligent applications.",
        output: "Enterprise AI knowledge architecture",
        points: ["Enterprise knowledge graph development", "Vector database implementation", "Semantic search architecture"]
      },
      {
        title: "Data Quality & Governance",
        eyebrow: "Govern",
        description: "Create the standards, controls, and visibility required to keep AI data trustworthy, compliant, and useful over time.",
        output: "Governed and measurable AI data layer",
        points: ["Data quality monitoring frameworks", "AI data governance policies", "Enterprise metadata management"]
      }
    ]
  },
  "ai-managed-services": {
    title: "AI Managed Services",
    eyebrow: "Operate",
    intro: "Long-term operation and optimization of AI systems.",
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
    ],
    serviceStages: [
      {
        title: "AI Model Monitoring",
        eyebrow: "Observe",
        description: "Track model health and performance continuously so teams can detect drift and maintain prediction quality over time.",
        output: "Always-on AI performance visibility",
        points: ["AI performance monitoring", "Model drift detection", "Prediction accuracy tracking"]
      },
      {
        title: "AI Optimization Services",
        eyebrow: "Improve",
        description: "Improve the efficiency, quality, and economics of AI systems through ongoing engineering and operational refinement.",
        output: "Optimized AI system performance",
        points: ["Prompt engineering optimization", "Model fine-tuning services", "AI cost optimization"]
      },
      {
        title: "AI Reliability & Support",
        eyebrow: "Support",
        description: "Keep AI applications dependable with uptime monitoring, proactive maintenance, and responsive incident support.",
        output: "Reliable AI operations and support",
        points: ["AI system uptime monitoring", "AI application maintenance", "Incident response support"]
      },
      {
        title: "AI Governance & Compliance",
        eyebrow: "Protect",
        description: "Maintain responsible AI practices with continuous monitoring, regulatory traceability, and audit-ready controls.",
        output: "Responsible AI governance operations",
        points: ["Responsible AI monitoring", "Regulatory compliance tracking", "AI audit services"]
      },
      {
        title: "Continuous AI Improvement",
        eyebrow: "Evolve",
        description: "Create a continuous improvement cycle that expands AI capability, keeps models current, and supports long-term value creation.",
        output: "Continuous AI improvement program",
        points: ["New AI feature deployment", "Model retraining cycles", "AI capability expansion programs"]
      }
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
