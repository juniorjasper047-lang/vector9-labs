import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animated-section";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site";

export function FinalCTA() {
  return (
    <Section className="border-t border-border/60">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border-gradient p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-purple/20 blur-3xl" />
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to automate what slows you down?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-muted-foreground">
            Tell us your goal. We&apos;ll map the fastest path to ship — and the
            automation that keeps it running.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="gradient" size="lg">
              <Link href="/contact">
                Get a free quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary/40"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> Chat on
              WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
