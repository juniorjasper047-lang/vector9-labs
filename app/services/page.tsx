import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { services } from "@/content/services";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom apps, AI integration, support chatbots, automated workflows, and social growth — engineered in Accra by Vector9 Labs.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="!pt-28 border-b border-border/60">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What we <span className="text-gradient">build</span>
            </>
          }
          description="Five ways we help Ghanaian and global businesses ship smarter, faster, and on autopilot."
        />
      </Section>

      <div className="divide-y divide-border/60">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Section key={service.id} id={service.slug} className="scroll-mt-24">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                <Reveal>
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 text-primary ring-1 ring-inset ring-white/10">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    {service.tagline}
                  </p>
                  <Button asChild variant="outline" className="mt-6">
                    <Link href="/contact">
                      Discuss this <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="text-base text-foreground/85">
                    {service.description}
                  </p>
                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        What&apos;s included
                      </h3>
                      <ul className="mt-4 flex flex-col gap-3">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-foreground/80"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Deliverables
                      </h3>
                      <ul className="mt-4 flex flex-col gap-3">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2.5 text-sm text-foreground/80"
                          >
                            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Section>
          );
        })}
      </div>

      <FinalCTA />
    </>
  );
}
