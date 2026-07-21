import { siteConfig } from "@/lib/site";

export const companyFacts = `Company: ${siteConfig.name} — "${siteConfig.tagline}".
Location: ${siteConfig.location.city}, ${siteConfig.location.country} (Accra-based, works worldwide).
WhatsApp: ${siteConfig.contact.whatsappDisplay} (${siteConfig.contact.whatsappUrl}).
Email: ${siteConfig.contact.email}.
Socials: @vector9labs on Facebook, X, LinkedIn, Instagram.

SERVICES:
1. Custom App & Website Development — web + mobile apps, design systems, performance tuning, CI/CD and support.
2. AI Integration for Businesses — LLM assistants grounded in your data, document & invoice extraction (OCR+AI), search/summarisation, predictive analytics, private deployments.
3. Customer Support Chatbots — WhatsApp, website, Instagram, Facebook; trained on your FAQs; human hand-off; multi-language (English, Twi, French); analytics.
4. Automated Replies & Workflows — email auto-responders/triage, social DM auto-replies, lead→CRM routing, appointment booking/reminders.
5. Social Media Management & Growth — strategy, content (Reels, carousels, ad creatives), community management, paid social, monthly reporting.

PROCESS: Discover → Design → Build → Launch → Optimise. Working software shown every week. Typical delivery ~2 weeks.
PRICING: Transparent fixed pricing per scope — no surprise invoices.
CONTACT: Free quote via the contact page or WhatsApp. Reply within 24 hours.`;

type QA = { keywords: string[]; answer: string };

export const KB: QA[] = [
  {
    keywords: ["services", "offer", "do you", "what can", "help with", "what do you do"],
    answer:
      "We offer five services: (1) Custom Apps & Websites, (2) AI Integration, (3) Customer Support Chatbots, (4) Automated Replies & Workflows, and (5) Social Media Management & Growth. Want details on any one?",
  },
  {
    keywords: ["ai", "artificial intelligence", "llm", "gpt", "integrate", "machine learning"],
    answer:
      "Our AI Integration service embeds practical AI into your stack — LLM assistants grounded in your data, document & invoice extraction (OCR+AI), search/summarisation, and predictive analytics, all in secure private deployments.",
  },
  {
    keywords: ["chatbot", "bot", "whatsapp", "support", "customer", "automation bot"],
    answer:
      "We build customer-support chatbots on WhatsApp, your website, Instagram and Facebook — trained on your FAQs, with human hand-off and analytics. Most clients see support tickets drop 30–40%.",
  },
  {
    keywords: ["price", "pricing", "cost", "quote", "how much", "budget"],
    answer:
      "We work on transparent fixed pricing per project scope — no surprise invoices. Tell me what you need and I'll route you to a free quote, or chat us on WhatsApp.",
  },
  {
    keywords: ["contact", "reach", "email", "phone", "talk", "get in touch"],
    answer: `You can reach ${siteConfig.name} on WhatsApp at ${siteConfig.contact.whatsappDisplay}, by email at ${siteConfig.contact.email}, or via the contact form. We reply within 24 hours.`,
  },
  {
    keywords: ["location", "where", "accra", "ghana", "based", "country"],
    answer: `We're based in ${siteConfig.location.city}, ${siteConfig.location.country} — senior engineers in your time zone, international standards.`,
  },
  {
    keywords: ["process", "timeline", "how long", "deliver", "launch", "start", "begin"],
    answer:
      "Our process is Discover → Design → Build → Launch → Optimise, with working software shown every week. Typical delivery is about 2 weeks.",
  },
  {
    keywords: ["social", "instagram", "facebook", "x ", "growth", "content", "marketing"],
    answer:
      "Our Social Media Management service covers strategy, content (Reels, carousels, ad creatives), community management, paid social, and monthly growth reporting.",
  },
  {
    keywords: ["automation", "automate", "workflow", "reply", "email", "crm", "routing"],
    answer:
      "We automate repetitive work — email triage, social DM replies, lead→CRM routing, appointment booking/reminders — so your team focuses on what matters.",
  },
  {
    keywords: ["hello", "hi", "hey", "greet", "good morning", "good evening"],
    answer:
      "Hey! I'm the Vector9 Labs assistant. Ask me about our services, AI, chatbots, pricing, or how to start a project.",
  },
];

export function matchAnswer(message: string): string {
  const m = message.toLowerCase();
  let best: { score: number; answer: string } | null = null;
  for (const item of KB) {
    let score = 0;
    for (const kw of item.keywords) if (m.includes(kw)) score += kw.length;
    if (score > 0 && (!best || score > best.score)) best = { score, answer: item.answer };
  }
  if (best) return best.answer;
  return `I can help with our services, AI integration, chatbots, automation, pricing, process, and how to reach us. For anything specific, the fastest route is our team on WhatsApp: ${siteConfig.contact.whatsappDisplay}. What would you like to know?`;
}
