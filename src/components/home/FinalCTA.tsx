import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section className="relative py-20 bg-orange overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,#111_1px,transparent_0)] bg-[length:22px_22px]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-ink leading-tight text-balance">
          Truck acting up? Get it diagnosed properly, the first time.
        </h2>
        <p className="mt-4 text-ink/80 max-w-xl mx-auto">
          Call now to speak with the workshop directly, or book a slot online in under a minute.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={siteConfig.contact.phonePrimaryHref}
            className="flex items-center gap-2 bg-ink hover:bg-charcoal text-white font-semibold px-7 py-3.5 transition-colors"
          >
            <Phone size={18} /> {siteConfig.contact.phonePrimary}
          </a>
          <Link
            href="/contact#booking"
            className="flex items-center gap-2 border-2 border-ink text-ink hover:bg-ink hover:text-white font-semibold px-7 py-3.5 transition-colors"
          >
            Book Online
          </Link>
        </div>
      </div>
    </section>
  );
}
