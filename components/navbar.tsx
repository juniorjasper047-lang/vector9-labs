"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.title}
              {isActive(item.href) ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-brand-blue to-brand-purple"
                />
              ) : null}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild variant="gradient" size="sm">
            <Link href="/contact">
              Get a quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/40 text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-3 text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-secondary/60 text-foreground"
                        : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <Button asChild variant="gradient" className="mt-3 w-full">
                <Link href="/contact">
                  Get a quote <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
