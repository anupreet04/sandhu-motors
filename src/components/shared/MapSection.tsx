import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function MapSection() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="h-80 lg:h-auto">
          <iframe
            title="Sandhu Motors location on Google Maps"
            src={siteConfig.mapsEmbedSrc}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="bg-ink text-white flex flex-col justify-center px-6 sm:px-12 py-16">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.2em] text-orange">
            <span className="h-px w-6 bg-orange" />
            Find Us
          </div>
          <h2 className="font-display font-black text-3xl leading-tight mb-4">Visit The Workshop</h2>
          <p className="flex gap-3 text-white/75 leading-relaxed mb-6">
            <MapPin size={20} className="text-orange shrink-0 mt-0.5" />
            {siteConfig.address.full}
          </p>
          <div className="text-sm text-white/60 mb-8 font-mono">
            {siteConfig.hours.weekdays}
            <br />
            {siteConfig.hours.sunday}
          </div>
          <a
            href={siteConfig.mapsDirectionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3.5 w-fit transition-colors"
          >
            <Navigation size={16} /> Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
