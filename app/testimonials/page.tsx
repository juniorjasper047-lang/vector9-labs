import type { Metadata } from "next";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What founders and operators across Ghana say about working with Vector9 Labs.",
};

export default function TestimonialsPage() {
  return (
    <>
      <div className="pt-16">
        <TestimonialsSection />
      </div>
      <FinalCTA />
    </>
  );
}
