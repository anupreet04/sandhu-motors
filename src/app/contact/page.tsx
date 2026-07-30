import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Navigation, PhoneCall } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BookingForm from "@/components/shared/BookingForm";
import MapSection from "@/components/shared/MapSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Book Service",
  description:
    "Contact Sandhu Motors in Nanded for truck and heavy vehicle repair — call, WhatsApp, or book a service slot online.",
};

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2Zm5.79 14.13c-.24.68-1.4 1.31-1.94 1.39-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.34-.14-.2-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.31.37-.44.5-.14.14-.29.29-.13.57.17.28.74 1.23 1.6 1.99 1.1.98 2.03 1.29 2.31 1.43.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.29.38-.24.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-ink pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(90deg,#fff_0px,#fff_1px,transparent_1px,transparent_48px)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.2em] text-orange">
            <span className="h-px w-6 bg-orange" />
            Get In Touch
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white max-w-2xl leading-[1.05]">
            Talk to the workshop directly
          </h1>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
            Call, WhatsApp, or book online — whichever is fastest for you. For breakdowns, call us directly for
            priority attention.
          </p>
        </div>
      </section>

      <section className="py-16 bg-plate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Phone, label: "Call Now", value: siteConfig.contact.phonePrimary, href: siteConfig.contact.phonePrimaryHref },
            { icon: PhoneCall, label: "Alternate Line", value: siteConfig.contact.phoneAlternate, href: siteConfig.contact.phoneAlternateHref },
            { icon: WhatsAppIcon, label: "WhatsApp", value: "Message us", href: siteConfig.contact.whatsappHref },
            { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="bracket-card bg-white border border-plate-dark p-6 hover:border-orange transition-colors group"
            >
              <item.icon size={22} className="text-orange mb-4" />
              <div className="text-xs font-mono uppercase tracking-wider text-steel mb-1">{item.label}</div>
              <div className="font-display font-bold text-ink group-hover:text-orange-dark transition-colors break-words">
                {item.value}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="booking" className="py-24 bg-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <SectionHeading
              eyebrow="Book Service"
              title="Reserve your service slot"
              description="Fill in your vehicle and issue details — our team will confirm your slot by phone within working hours."
            />
            <div className="space-y-4 mt-8">
              <div className="flex gap-3">
                <MapPin size={18} className="text-orange shrink-0 mt-0.5" />
                <p className="text-sm text-steel leading-relaxed">{siteConfig.address.full}</p>
              </div>
              <div className="flex gap-3">
                <Clock size={18} className="text-orange shrink-0 mt-0.5" />
                <p className="text-sm text-steel leading-relaxed">
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.sunday}
                </p>
              </div>
              <div className="flex gap-3">
                <Navigation size={18} className="text-orange shrink-0 mt-0.5" />
                <a
                  href={siteConfig.mapsDirectionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-orange-dark font-semibold hover:underline"
                >
                  Get directions on Google Maps
                </a>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <MapSection />
    </>
  );
}
