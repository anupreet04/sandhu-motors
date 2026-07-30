import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CheckCircle2, Truck, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full list of Sandhu Motors truck and heavy vehicle repair services in Nanded — engine repair, BS6 diagnostics, fleet maintenance, brakes, suspension, and more.",
};

const categories = ["Mechanical", "Diagnostics", "Electrical", "Fleet"] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-ink">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-6 bg-orange" /> Full Service List
          </div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight text-balance">
            Everything your commercial vehicle needs, under one roof
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">
            From routine maintenance to full engine overhauls and computerised diagnostics — every
            service below includes an inspection and estimate before we begin work.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {categories.map((cat) => (
            <div key={cat}>
              <SectionHeading eyebrow={cat} title={`${cat} Services`} />
              <div className="grid md:grid-cols-2 gap-6">
                {services
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <div key={s.slug} id={s.slug} className="scroll-mt-28 bracket-card border border-plate-dark p-7">
                      <h3 className="font-display font-bold text-xl text-ink mb-2">{s.name}</h3>
                      <p className="text-sm text-steel leading-relaxed mb-4">{s.description}</p>

                      <div className="mb-4">
                        <p className="font-mono text-xs uppercase tracking-wider text-orange-dark mb-2">Benefits</p>
                        <ul className="space-y-1.5">
                          {s.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-sm text-steel">
                              <CheckCircle2 size={15} className="text-orange shrink-0 mt-0.5" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5 text-xs font-mono text-steel">
                        <span className="flex items-center gap-1.5">
                          <Truck size={14} className="text-orange" /> {s.suitableFor.join(", ")}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} className="text-orange" /> {s.estimatedTime}
                        </span>
                      </div>

                      <Link
                        href="/contact#booking"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-ink hover:bg-orange px-5 py-2.5 transition-colors"
                      >
                        Book This Service
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-orange">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-ink">
            Not sure which service you need?
          </h2>
          <p className="mt-3 text-ink/80">Call the workshop and describe the issue — we&apos;ll point you in the right direction.</p>
          <a
            href={siteConfig.contact.phonePrimaryHref}
            className="mt-6 inline-flex items-center gap-2 bg-ink hover:bg-charcoal text-white font-semibold px-7 py-3.5 transition-colors"
          >
            <Phone size={18} /> {siteConfig.contact.phonePrimary}
          </a>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
