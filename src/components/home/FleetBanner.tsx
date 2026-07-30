import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function FleetBanner() {
  return (
    <section className="relative py-24 bg-charcoal overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop')",
        }}
        role="img"
        aria-label="Fleet of commercial trucks"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.2em] text-orange">
            <span className="h-px w-6 bg-orange" />
            For Transport Companies
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight text-balance">
            Keep your whole fleet on schedule, not just one truck
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed max-w-md">
            Annual maintenance contracts, scheduled servicing, and fleet health reports
            designed to cut downtime across every vehicle you run.
          </p>
          <Link
            href="/fleet"
            className="mt-7 inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3.5 transition-colors"
          >
            Explore Fleet Maintenance <ArrowUpRight size={16} />
          </Link>
        </div>
        <ul className="space-y-4 md:justify-self-end">
          {[
            "Priority workshop scheduling",
            "Reduced unplanned downtime",
            "Fleet-wide health reporting",
            "Consolidated billing for fleet accounts",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-white/90">
              <span className="flex h-6 w-6 items-center justify-center bg-orange/20 text-orange shrink-0">
                <Check size={14} strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
