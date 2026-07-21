export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map your goals, users, and constraints in a focused workshop, then write a tight technical spec with clear success metrics.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "High-fidelity UI/UX in Figma, reviewed with you weekly. We design for trust, clarity, and conversion — not decoration.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Senior engineers ship in vertical slices. You see working software every week, not a big bang at the end.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We deploy to a global edge network (Vercel), wire analytics, and harden performance and security before go-live.",
  },
  {
    step: "05",
    title: "Optimise",
    description:
      "Post-launch, we monitor, iterate, and automate — compounding results long after launch day.",
  },
];
