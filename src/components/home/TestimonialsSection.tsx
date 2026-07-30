import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site-config";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-orange" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <Star
            key={i}
            size={15}
            className={filled || half ? "fill-orange" : "text-plate-dark"}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Customer Feedback" title="What fleet owners and drivers say" align="center" />
        <p className="text-center text-xs font-mono text-steel -mt-8 mb-10">
          Sample testimonials shown for illustration — replace with verified customer reviews.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-plate-dark p-6 flex flex-col">
              <Stars rating={t.rating} />
              <p className="mt-4 text-sm text-steel leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 pt-4 border-t border-plate-dark">
                <p className="font-display font-bold text-sm text-ink">{t.name}</p>
                <p className="text-xs text-steel">{t.vehicle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
