import type { Metadata } from "next";
import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Customer reviews and ratings for Sandhu Motors truck and heavy vehicle repair workshop in Nanded.",
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <Star
            key={i}
            size={16}
            className={filled || half ? "text-orange fill-orange" : "text-plate-dark fill-plate-dark"}
          />
        );
      })}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(90deg,#fff_0px,#fff_1px,transparent_1px,transparent_48px)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-6 bg-orange" /> Customer Feedback
          </div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight text-balance">
            What customers say about the workshop
          </h1>
        </div>
      </section>

      <section className="py-16 bg-plate">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
          <div className="bg-white border border-plate-dark p-8 text-center">
            <div className="font-display font-black text-4xl text-ink mb-1">4.8<span className="text-xl text-steel">/5</span></div>
            <Stars rating={4.8} />
            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-steel">Google Rating (placeholder)</p>
          </div>
          <div className="bg-white border border-plate-dark p-8 text-center">
            <div className="font-display font-black text-4xl text-ink mb-1">4.6<span className="text-xl text-steel">/5</span></div>
            <Stars rating={4.6} />
            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-steel">Justdial Rating (placeholder)</p>
          </div>
        </div>
        <p className="text-center mt-4 text-xs text-steel-light font-mono">
          Ratings shown are placeholders — replace with live figures once review profiles are connected.
        </p>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sample Reviews"
            title="Testimonials"
            description="The reviews below are sample/placeholder testimonials representative of the feedback we aim for — to be replaced with real, verified customer reviews."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bracket-card bg-plate border border-plate-dark p-7">
                <Stars rating={t.rating} />
                <p className="mt-4 text-sm text-ink leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-plate-dark">
                  <p className="font-display font-bold text-ink text-sm">{t.name}</p>
                  <p className="text-xs text-steel font-mono">{t.vehicle}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-steel-light font-mono">
            Sample / placeholder testimonials — to be replaced with real customer reviews.
          </p>
        </div>
      </section>
    </>
  );
}
