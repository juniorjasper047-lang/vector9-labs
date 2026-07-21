import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/content/services";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/animated-section";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <Section id="services" className="border-t border-border/60">
      <SectionHeading
        eyebrow="What we do"
        title={
          <>
            End-to-end AI & software,{" "}
            <span className="text-gradient">under one roof</span>
          </>
        }
        description="From a single landing page to a fully automated AI operation — pick the lever, we build the system."
      />

      <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <StaggerItem key={service.id}>
              <Card
                className={cn(
                  "group relative h-full overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                )}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 text-primary ring-1 ring-inset ring-white/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.tagline}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {service.features.slice(0, 3).map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
                >
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
