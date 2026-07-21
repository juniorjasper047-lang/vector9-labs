import { whyUs } from "@/content/why-us";
import { Stagger, StaggerItem } from "@/components/animated-section";
import { Card } from "@/components/ui/card";

export function WhyUsSection() {
  return (
    <section className="relative border-t border-border/60 bg-card/20">
      {/* Full-width orange band behind the heading (edge to edge) */}
      <div className="w-full bg-gradient-to-r from-[#f97316] to-[#f59e0b]">
        <div className="container py-16 text-center text-white sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white">
            Why Vector9
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            A serious partner, not a{" "}
            <span className="underline decoration-white/50 decoration-2 underline-offset-4">
              freelance gamble
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-white/90 sm:text-lg">
            We combine international engineering standards with Accra-based
            accountability. Here&apos;s what that buys you.
          </p>
        </div>
      </div>

      <div className="container py-20 sm:py-28">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((point) => {
            const Icon = point.icon;
            return (
              <StaggerItem key={point.title}>
                <Card className="h-full p-6 transition-colors hover:border-primary/30">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
