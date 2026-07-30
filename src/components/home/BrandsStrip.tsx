import { siteConfig } from "@/lib/site-config";

export default function BrandsStrip() {
  return (
    <section className="py-16 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-white/50 mb-8">
          Brands We Service
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {siteConfig.brands.map((brand) => (
            <span
              key={brand}
              className="font-display font-bold text-lg sm:text-xl text-white/70 hover:text-orange transition-colors tracking-wide"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
