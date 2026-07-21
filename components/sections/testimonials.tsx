import Link from "next/link";
import { Quote, Star, ArrowRight } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/animated-section";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function TestimonialsSection({ preview = false }: { preview?: boolean }) {
  const items = preview ? testimonials.slice(0, 3) : testimonials;

  return (
    <Section id="testimonials" className="border-t border-border/60">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          className="mx-0"
          eyebrow="Client stories"
          title={
            <>
              Results our clients{" "}
              <span className="text-gradient">can feel</span>
            </>
          }
          description="Real businesses across Ghana, running on systems we built."
        />
        {preview ? (
          <Link
            href="/testimonials"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            All testimonials <ArrowRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>

      <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <StaggerItem key={t.id}>
            <Card className="flex h-full flex-col p-7">
              <Quote className="h-7 w-7 text-primary/40" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < t.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/40"
                    )}
                  />
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-sm font-semibold text-white">
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">
                    {t.name}
                  </div>
                  <div className="truncate text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </div>
                </div>
                <span className="ml-auto shrink-0 rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground">
                  {t.sector}
                </span>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
