import type { Metadata } from "next";
import GalleryGrid from "@/components/shared/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of the Sandhu Motors workshop, mechanics at work, truck repairs, and diagnostic equipment in Nanded.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(90deg,#fff_0px,#fff_1px,transparent_1px,transparent_48px)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-6 bg-orange" /> Inside The Workshop
          </div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight text-balance">
            The workshop, the work, the vehicles
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto">
            Representative photos of the workshop and the type of work we do. Real customer and job photos to
            be added over time.
          </p>
        </div>
      </section>

      <GalleryGrid />
    </>
  );
}
