import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WhyUsSection } from "@/components/sections/why-us";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ProcessSection } from "@/components/sections/process";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection preview />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
