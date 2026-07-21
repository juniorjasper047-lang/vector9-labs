export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  sector: string;
  initials: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "joyce-njador",
    quote:
      "Vector9 built our customer onboarding portal and a WhatsApp bot that handles KYC questions. Support tickets dropped 40% in the first month and our agents finally focus on complex cases.",
    name: "Mrs Joyce Njador",
    role: "Founder & CEO",
    company: "JN Microfinance",
    sector: "Fintech",
    initials: "JN",
    rating: 5,
  },
  {
    id: "peter-yamoah",
    quote:
      "Our store used to crash every payday. Vector9 rebuilt it on a modern stack and added an AI search that actually understands 'the black dress under 200 cedis'. Conversion is up 28%.",
    name: "Peter Yamoah",
    role: "Founder",
    company: "AccraMart",
    sector: "E-commerce",
    initials: "PY",
    rating: 5,
  },
  {
    id: "omar-fashion",
    quote:
      "We get 30+ WhatsApp enquiries a day. Their chatbot qualifies leads and books fittings automatically. Our sales team closes more because they only talk to serious buyers now.",
    name: "Omar Fashion Experience",
    role: "Brand Owner",
    company: "Omar Fashion",
    sector: "Fashion & Retail",
    initials: "OF",
    rating: 5,
  },
  {
    id: "edugate",
    quote:
      "Vector9 automated our admission replies across email and Instagram and built a parent portal. Response time went from hours to seconds. Parents noticed immediately.",
    name: "Mrs. Adwoa Boateng",
    role: "Administrator",
    company: "EduGate Academy",
    sector: "Education",
    initials: "AB",
    rating: 5,
  },
  {
    id: "transgo",
    quote:
      "As a logistics startup, we needed speed. They shipped a tracking app and an AI dispatcher in just two weeks. It's now the backbone of how we run deliveries across Accra.",
    name: "Emmanuel Kwofie",
    role: "CTO",
    company: "TransGo Logistics",
    sector: "Logistics",
    initials: "EK",
    rating: 5,
  },
];
