import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const previewImages = [
  { src: "https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e70?q=80&w=800&auto=format&fit=crop", alt: "Mechanic inspecting a truck engine" },
  { src: "https://images.unsplash.com/photo-1632823471565-1ecdf7ba2c8b?q=80&w=800&auto=format&fit=crop", alt: "Heavy truck undergoing repair in workshop bay" },
  { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop", alt: "Diagnostic laptop connected to commercial vehicle" },
  { src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop", alt: "Workshop interior with tools and equipment" },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-plate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-4">
          <SectionHeading eyebrow="Inside The Workshop" title="A look at where the work happens" />
          <Link href="/gallery" className="hidden sm:flex items-center gap-1.5 mb-12 text-sm font-semibold text-ink hover:text-orange">
            View full gallery <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewImages.map((img) => (
            <div key={img.src} className="relative aspect-[3/4] overflow-hidden bg-plate-dark">
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
        <Link href="/gallery" className="sm:hidden mt-8 flex items-center justify-center gap-1.5 text-sm font-semibold text-ink hover:text-orange">
          View full gallery <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
