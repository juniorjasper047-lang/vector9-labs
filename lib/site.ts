export const siteConfig = {
  name: "Vector9 Labs",
  shortName: "Vector9",
  tagline: "Intelligent systems for modern businesses",
  description:
    "Vector9 Labs is a premium AI & software development agency in Accra, Ghana. We design custom web and mobile apps, integrate AI into existing businesses, and build customer-support chatbots and social-media automation for companies across Ghana and worldwide.",
  // Update this to your production domain before going live.
  url: "https://vector9labs.com",
  locale: "en_GH",
  location: {
    city: "Accra",
    region: "Greater Accra",
    country: "Ghana",
    countryCode: "GH",
  },
  contact: {
    whatsapp: "+233597207808",
    whatsappUrl: "https://wa.me/233597207808",
    whatsappDisplay: "+233 597 207 808",
    email: "vector9labs@gmail.com",
  },
  socials: {
    facebook: "https://facebook.com/vector9labs",
    x: "https://x.com/vector9labs",
    linkedin: "https://linkedin.com/company/vector9labs",
    instagram: "https://instagram.com/vector9labs",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Testimonials", href: "/testimonials" },
    { title: "Contact", href: "/contact" },
  ],
  keywords: [
    "AI agency Accra",
    "chatbot development Ghana",
    "website development Accra",
    "AI integration Ghana",
    "social media automation Ghana",
    "software development company Ghana",
    "custom app development Accra",
    "WhatsApp chatbot Ghana",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
