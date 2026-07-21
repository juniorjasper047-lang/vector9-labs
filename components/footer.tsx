import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Facebook, label: "Facebook", href: siteConfig.socials.facebook },
  { icon: Twitter, label: "X", href: siteConfig.socials.x },
  { icon: Instagram, label: "Instagram", href: siteConfig.socials.instagram },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.socials.linkedin },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.tagline}. A premium AI & software development agency
              based in {siteConfig.location.city}, {siteConfig.location.country}.
            </p>
            <div className="flex items-center gap-2">
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
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Services
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="transition-colors hover:text-foreground">
                  App & Website Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-foreground">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-foreground">
                  Support Chatbots
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-foreground">
                  Social Media Automation
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="transition-colors hover:text-foreground">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Get in touch
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary" />
                {siteConfig.location.city}, {siteConfig.location.country}
              </li>
            </ul>
            <ButtonWhatsApp />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2">
            Engineered with precision in {siteConfig.location.city}
            <MapPin className="h-3.5 w-3.5" />
          </p>
        </div>
      </div>
    </footer>
  );
}

function ButtonWhatsApp() {
  return (
    <Button asChild variant="gradient" size="sm" className="mt-1 w-fit">
      <Link href="/contact">
        Start a project <ArrowUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}
