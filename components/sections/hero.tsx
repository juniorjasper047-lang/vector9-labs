"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "98%", label: "Client retention" },
  { value: "2 wks", label: "Avg. time to launch" },
  { value: "24/7", label: "Automation live" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12%] h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-radial-fade blur-2xl" />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
        <div className="absolute -right-16 top-8 h-80 w-80 rounded-full bg-brand-purple/20 blur-3xl animate-pulse-glow" />
      </div>

      <div className="container flex min-h-[92vh] flex-col justify-center pb-20 pt-28">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "show"}
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <Badge variant="gradient" className="mb-6 gap-2">
              <Sparkles className="h-3.5 w-3.5" /> AI &amp; Software Studio ·{" "}
              {siteConfig.location.city}, {siteConfig.location.country}
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Intelligent systems for{" "}
            <span className="text-gradient">modern businesses</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance text-lg text-muted-foreground"
          >
            Vector9 Labs designs custom apps, embeds practical AI, and builds
            chatbots &amp; automation that run while you sleep — engineered in
            Accra, for Ghana and the world.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild variant="gradient" size="lg">
              <Link href="/contact">
                Get a free quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore services</Link>
            </Button>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> Chat on
              WhatsApp
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/40 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-card/60 p-5 backdrop-blur">
              <div className="font-display text-2xl font-semibold text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
