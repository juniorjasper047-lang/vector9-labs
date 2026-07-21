import {
  Smartphone,
  BrainCircuit,
  MessagesSquare,
  Zap,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "custom-apps",
    slug: "custom-apps",
    title: "Custom App & Website Development",
    icon: Smartphone,
    tagline: "Web + mobile, engineered to scale",
    description:
      "We design and build production-grade web platforms and mobile apps tailored to how your business actually operates — fast, secure, and obsessively polished.",
    features: [
      "Responsive web apps (Next.js, React, TypeScript)",
      "Cross-platform mobile apps (iOS & Android)",
      "Branded design systems and UI kits",
      "Performance budgets and Core Web Vitals tuning",
      "CI/CD, monitoring, and ongoing support",
    ],
    deliverables: [
      "Discovery workshop & technical spec",
      "High-fidelity UI/UX in Figma",
      "Source code in your own repository",
      "Staging + production deployment",
    ],
  },
  {
    id: "ai-integration",
    slug: "ai-integration",
    title: "AI Integration for Businesses",
    icon: BrainCircuit,
    tagline: "Put AI to work on real problems",
    description:
      "From document automation to predictive insights, we embed practical AI into the tools you already use — no hype, measurable outcomes.",
    features: [
      "LLM assistants grounded in your data",
      "Document & invoice extraction (OCR + AI)",
      "Search, summarisation, and knowledge bases",
      "Predictive analytics and forecasting",
      "Secure, private deployments",
    ],
    deliverables: [
      "Use-case audit & ROI estimate",
      "Integrated AI feature in your stack",
      "Evaluation harness & guardrails",
      "Team enablement session",
    ],
  },
  {
    id: "chatbots",
    slug: "chatbots",
    title: "Customer Support Chatbots",
    icon: MessagesSquare,
    tagline: "24/7 support on the channels you use",
    description:
      "Conversational agents that answer customers instantly on WhatsApp, your website, Instagram, and Facebook — trained on your products and tone.",
    features: [
      "WhatsApp, website, Instagram & Facebook",
      "Natural language trained on your FAQs",
      "Human hand-off when it matters",
      "Multi-language (English, Twi, French)",
      "Analytics on volumes and resolutions",
    ],
    deliverables: [
      "Conversation flow design",
      "Knowledge base + training",
      "Omnichannel bot deployment",
      "Live dashboards & weekly report",
    ],
  },
  {
    id: "automated-replies",
    slug: "automated-replies",
    title: "Automated Replies & Workflows",
    icon: Zap,
    tagline: "Replies that send themselves",
    description:
      "We automate the repetitive: acknowledgements, follow-ups, lead routing, and email triage — so your team spends time on work that matters.",
    features: [
      "Email auto-responders & triage",
      "Social DM auto-replies",
      "Lead capture → CRM routing",
      "Appointment booking & reminders",
      "No-code workflow connections",
    ],
    deliverables: [
      "Workflow mapping session",
      "Connected automations",
      "Exception alerts to your team",
      "Monthly optimisation review",
    ],
  },
  {
    id: "social-growth",
    slug: "social-growth",
    title: "Social Media Management & Growth",
    icon: TrendingUp,
    tagline: "Consistent presence, real growth",
    description:
      "Strategy, content, and community management that builds trust and pipeline — paired with the automation that keeps it running while you sleep.",
    features: [
      "Content strategy & calendars",
      "Reels, carousels, and ad creatives",
      "Community management & engagement",
      "Paid social campaign setup",
      "Monthly growth reporting",
    ],
    deliverables: [
      "Brand voice & content pillars",
      "30/60/90-day content plan",
      "Scheduled posts + boosts",
      "Performance dashboard",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
