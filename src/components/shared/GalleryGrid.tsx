"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryCategories } from "@/lib/site-config";

const photos = [
  { category: "Workshop", src: "https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e70?q=80&w=900&auto=format&fit=crop", alt: "Workshop bay with truck under repair" },
  { category: "Mechanics At Work", src: "https://images.unsplash.com/photo-1632823471565-1ecdf7ba2c8b?q=80&w=900&auto=format&fit=crop", alt: "Mechanic working under a heavy truck" },
  { category: "Truck Repairs", src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=900&auto=format&fit=crop", alt: "Commercial truck engine bay open for repair" },
  { category: "Engine Repairs", src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=900&auto=format&fit=crop", alt: "Diesel engine component being inspected" },
  { category: "Diagnostic Equipment", src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop", alt: "Laptop diagnostic scanning equipment" },
  { category: "Heavy Vehicles", src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=900&auto=format&fit=crop", alt: "Heavy commercial truck parked at workshop" },
  { category: "Workshop", src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=900&auto=format&fit=crop", alt: "Workshop interior with tools and equipment" },
  { category: "Before & After", src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=900&auto=format&fit=crop", alt: "Truck exterior after servicing" },
  { category: "Customer Deliveries", src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=900&auto=format&fit=crop", alt: "Truck ready for delivery to customer" },
  { category: "Mechanics At Work", src: "https://images.unsplash.com/photo-1632823470456-1e9d1e15c4c2?q=80&w=900&auto=format&fit=crop", alt: "Mechanic using hand tools on truck part" },
  { category: "Truck Repairs", src: "https://images.unsplash.com/photo-1580983559478-cca35f7d9be7?q=80&w=900&auto=format&fit=crop", alt: "Truck suspension component repair" },
  { category: "Heavy Vehicles", src: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=900&auto=format&fit=crop", alt: "Fleet of heavy trucks" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...galleryCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-colors ${
                active === cat
                  ? "bg-ink text-white border-ink"
                  : "bg-white text-steel border-plate-dark hover:border-orange hover:text-orange-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((p, i) => (
            <div key={`${p.src}-${i}`} className="relative mb-4 break-inside-avoid overflow-hidden group">
              <Image
                src={p.src}
                alt={p.alt}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-mono uppercase tracking-wider">{p.category}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-steel-light font-mono">
          Placeholder photos shown for illustration — to be replaced with real workshop photography.
        </p>
      </div>
    </section>
  );
}
