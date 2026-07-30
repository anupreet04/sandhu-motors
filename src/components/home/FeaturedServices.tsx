import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/site-config";

const featuredSlugs = [
  "engine-repair",
  "bs6-diagnostics",
  "fleet-maintenance",
  "brake-repairs",
  "electrical-repairs",
  "emergency-repairs",
];

export default function FeaturedServices() {
  const featured = services.filter((s) => featuredSlugs.includes(s.slug));

  return (
    <section className="py-24 bg-plate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-4">
          <SectionHeading
            eyebrow="What We Do"
            title="Core workshop services"
            description="A snapshot of our most-requested work. See the full list, with time estimates and vehicle fit, on the Services page."
          />
          <Link
            href="/services"
            className="hidden sm:flex items-center gap-1.5 mb-12 text-sm font-semibold text-ink hover:text-orange transition-colors"
          >
            View all services <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-plate-dark border border-plate-dark">
          {featured.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group bg-white p-7 hover:bg-ink transition-colors duration-300"
            >
              <span className="font-mono text-xs text-orange">{s.category}</span>
              <h3 className="font-display font-bold text-xl mt-2 mb-2 text-ink group-hover:text-white transition-colors">
                {s.name}
              </h3>
              <p className="text-sm text-steel group-hover:text-white/70 transition-colors leading-relaxed">
                {s.short}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-orange">
                Learn more <ArrowUpRight size={15} />
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/services"
          className="sm:hidden mt-8 flex items-center justify-center gap-1.5 text-sm font-semibold text-ink hover:text-orange"
        >
          View all services <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
