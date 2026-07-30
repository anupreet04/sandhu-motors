import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { siteConfig } from "@/lib/site-config";

export default function StatsStrip() {
  return (
    <section className="bg-plate border-y border-plate-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left md:border-l md:border-plate-dark md:pl-6 first:md:border-l-0 first:md:pl-0">
            <div className="font-display font-black text-3xl sm:text-4xl text-ink">
              {stat.isYear ? "" : ""}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} isYear={stat.isYear} />
            </div>
            <div className="mt-1 text-xs sm:text-sm font-mono uppercase tracking-wider text-steel">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
