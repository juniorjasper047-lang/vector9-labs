import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { whyUs } from "@/content/why-us";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/animated-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vector9 Labs is a premium AI & software development agency based in Accra, Ghana — senior engineers, AI-first, globally minded.",
};

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "6", label: "Sectors served" },
  { value: "2 wks", label: "Avg. time to launch" },
  { value: "24/7", label: "Automation live" },
];

export default function AboutPage() {
  return (
    <>
      <Section className="!pt-28 border-b border-border/60">
        <SectionHeading
          eyebrow="About us"
          title={
            <>
              We build the{" "}
              <span className="text-gradient">
                systems behind modern businesses
              </span>
            </>
          }
          description="Vector9 Labs is a premium AI & software development agency in Accra, Ghana. We pair international engineering standards with local accountability."
        />
      </Section>

      <Section className="border-t border-border/60">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              AI-first by default, human where it counts
            </h2>
            <p className="mt-5 text-muted-foreground">
              We started Vector9 Labs because too many businesses in Ghana were
              sold either overpriced overseas agencies or unreliable freelancers.
              We built the middle path: senior engineers in your time zone,
              shipping production-grade software with the rigour of an
              international studio.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every engagement begins with one question — what can we automate?
              Whether it&apos;s a customer-facing app or a quiet backend bot,
              we design systems that keep working long after launch day.
            </p>
            <Button asChild variant="gradient" className="mt-7">
              <Link href="/contact">
                Work with us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/40">
              {stats.map((s) => (
                <div key={s.label} className="bg-card/60 p-6 backdrop-blur">
                  <div className="font-display text-3xl font-semibold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border/60 bg-card/20">
        <SectionHeading
          eyebrow="Why Vector9"
          title={
            <>
              What sets us <span className="text-gradient">apart</span>
            </>
          }
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <Card className="h-full p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section className="border-t border-border/60">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border-gradient p-10 text-center sm:p-14">
            <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />{" "}
              {siteConfig.location.city}, {siteConfig.location.country}
            </div>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Built in Accra. Engineered for the world.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We&apos;re proudly Ghanaian — and we ship to clients across Africa
              and beyond. Local understanding, global standards.
            </p>
          </div>
        </Reveal>
      </Section>

      <FinalCTA />
    </>
  );
}
