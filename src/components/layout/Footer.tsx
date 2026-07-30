import Link from "next/link";
import { Mail, MapPin, Phone, Wrench } from "lucide-react";
import { siteConfig, services } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-9 w-9 items-center justify-center bg-orange text-ink">
              <Wrench size={18} strokeWidth={2.5} />
            </span>
            <span className="font-display font-black text-white text-lg">
              SANDHU<span className="text-orange"> MOTORS</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">{siteConfig.shortDescription}</p>
          <div className="flex gap-3 mt-5">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center border border-white/20 hover:border-orange hover:text-orange transition-colors"
            >
              <FacebookIcon width={16} height={16} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center border border-white/20 hover:border-orange hover:text-orange transition-colors"
            >
              <InstagramIcon width={16} height={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Advanced Diagnostics", "/diagnostics"],
              ["Fleet Maintenance", "/fleet"],
              ["Gallery", "/gallery"],
              ["Reviews", "/reviews"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-orange transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-orange transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin size={16} className="text-orange shrink-0 mt-0.5" />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone size={16} className="text-orange shrink-0" />
              <a href={siteConfig.contact.phonePrimaryHref} className="hover:text-orange font-mono">
                {siteConfig.contact.phonePrimary}
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={16} className="text-orange shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-orange break-all">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="pt-2 text-white/60 text-xs leading-relaxed">
              {siteConfig.hours.weekdays}
              <br />
              {siteConfig.hours.sunday}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Sandhu Motors. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-orange">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
