"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingWhatsApp() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={siteConfig.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      initial={reduce ? false : { opacity: 0, scale: 0.6, y: 20 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] pl-3 pr-4 py-3 text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
    >
      {!reduce ? (
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      ) : null}
      <MessageCircle className="relative h-6 w-6" />
      <span className="relative hidden text-sm font-semibold sm:inline">
        WhatsApp us
      </span>
    </motion.a>
  );
}
