import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Vector9 Labs — chat on WhatsApp, email us, or send a message. Based in Accra, working worldwide.",
};

const socials = [
  { icon: Facebook, label: "Facebook", href: siteConfig.socials.facebook },
  { icon: Twitter, label: "X", href: siteConfig.socials.x },
  { icon: Instagram, label: "Instagram", href: siteConfig.socials.instagram },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.socials.linkedin },
];

export default function ContactPage() {
  return (
    <>
      <Section className="!pt-28 border-b border-border/60">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="text-gradient">that runs itself</span>
            </>
          }
          description="Tell us your goal. We'll reply within 24 hours — or sooner on WhatsApp."
        />
      </Section>

      <Section className="border-t border-border/60">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Reach us directly
            </h2>
            <p className="mt-3 text-muted-foreground">
              Prefer to talk? We&apos;re fast on WhatsApp and email.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#25D366]/15 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="font-medium">
                    {siteConfig.contact.whatsappDisplay}
                  </span>
                </span>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    Email
                  </span>
                  <span className="font-medium">
                    {siteConfig.contact.email}
                  </span>
                </span>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    Studio
                  </span>
                  <span className="font-medium">
                    {siteConfig.location.city}, {siteConfig.location.country}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
          >
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We&apos;ll get back to you within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
