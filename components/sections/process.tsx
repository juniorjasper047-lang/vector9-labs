import { processSteps } from "@/content/process";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/animated-section";

export function ProcessSection() {
  return (
    <Section id="process" className="border-t border-border/60 bg-card/20">
      <SectionHeading
        eyebrow="How we work"
        title={
          <>
            A clear path from{" "}
            <span className="text-gradient">idea to impact</span>
          </>
        }
        description="No chaos, no black boxes. You see working software every week."
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-brand-blue/40 via-border to-brand-purple/40" />
        <Stagger className="flex flex-col gap-8">
          {processSteps.map((s) => (
            <StaggerItem key={s.step}>
              <div className="relative flex gap-5">
                <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card font-display text-sm font-semibold text-gradient">
                  {s.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
