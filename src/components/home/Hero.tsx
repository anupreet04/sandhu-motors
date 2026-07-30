"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Wrench, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.83 2 .9 2.15.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.12.63-.07.17-.19.72-.83.91-1.12.19-.29.38-.24.63-.14.26.1 1.64.77 1.92.91.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop')",
        }}
        role="img"
        aria-label="Heavy commercial truck in a repair workshop"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />

      {/* Signature scanline motif */}
      <div className="scanline" />

      {/* Diagonal service-bay cut at base */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-plate"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 0 100%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 pt-40 w-full">
        <div className="flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-[0.25em] text-orange">
          <span className="h-px w-8 bg-orange" />
          Nanded, Maharashtra · Est. 1996
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display font-black text-white text-[13vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-tight max-w-4xl text-balance"
        >
          HEAVY VEHICLE
          <br />
          <span className="text-orange">DIAGNOSTICS</span> & REPAIR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-white/75 text-base sm:text-lg max-w-xl leading-relaxed"
        >
          {siteConfig.tagline}. Full mechanical repair, laptop diagnostics, and fleet
          maintenance for trucks and buses — trusted by owner-drivers and transport
          companies across Nanded.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a
            href={siteConfig.contact.phonePrimaryHref}
            className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3.5 transition-colors"
          >
            <Phone size={18} /> Call Now
          </a>
          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:brightness-105 text-white font-semibold px-6 py-3.5 transition"
          >
            <WhatsAppIcon /> WhatsApp Us
          </a>
          <Link
            href="/contact#booking"
            className="flex items-center gap-2 border border-white/30 hover:border-orange hover:text-orange text-white font-semibold px-6 py-3.5 transition-colors"
          >
            <CalendarCheck size={18} /> Book Service
          </Link>
        </motion.div>
      </div>

      <div className="absolute top-28 right-6 hidden lg:flex flex-col items-end gap-1 text-white/50 font-mono text-xs z-10">
        <Wrench size={16} className="text-orange mb-1" />
        BS4 / BS6 SCAN READY
      </div>
    </section>
  );
}
