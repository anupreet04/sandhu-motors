"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.83 2 .9 2.15.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.12.63-.07.17-.19.72-.83.91-1.12.19-.29.38-.24.63-.14.26.1 1.64.77 1.92.91.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
    </svg>
  );
}

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed z-50 bottom-5 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-3">
      {showTop && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-11 w-11 items-center justify-center bg-charcoal text-white border border-white/10 shadow-lg hover:bg-orange transition-colors"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <a
        href={siteConfig.mapsDirectionsHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get directions on Google Maps"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white shadow-lg hover:brightness-110 transition"
      >
        <MapPin size={20} />
      </a>

      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:brightness-105 transition"
      >
        <WhatsAppIcon size={26} />
      </a>

      <a
        href={siteConfig.contact.phonePrimaryHref}
        aria-label="Call Sandhu Motors now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white shadow-xl hover:bg-orange-dark transition animate-pulse"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
