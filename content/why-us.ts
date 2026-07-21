import {
  MapPin,
  Users,
  Sparkles,
  BadgeDollarSign,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type WhyUs = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyUs: WhyUs[] = [
  {
    icon: MapPin,
    title: "Accra-based, globally minded",
    description:
      "We operate in Ghana's time zone with international engineering standards — no overnight hand-offs, no lost-in-translation specs.",
  },
  {
    icon: Users,
    title: "Senior engineers, not juniors",
    description:
      "Your project is built by experienced developers and designers. You get judgement, not just code.",
  },
  {
    icon: Sparkles,
    title: "AI-first by default",
    description:
      "Every engagement looks for the automation lever first. We ship systems that keep working after we log off.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent fixed pricing",
    description:
      "Clear scope, clear quotes, no surprise invoices. You always know what you're paying for.",
  },
  {
    icon: Gauge,
    title: "Speed without the mess",
    description:
      "Tight feedback loops and weekly demos. Production-ready in weeks, not quarters.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & private",
    description:
      "Data protection baked in from day one — encrypted, access-controlled, and compliant by design.",
  },
];
