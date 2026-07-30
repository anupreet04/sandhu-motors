import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, ShieldCheck, Handshake, Wrench, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MapSection from "@/components/shared/MapSection";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sandhu Motors — a commercial vehicle repair workshop in Nanded, Maharashtra, serving fleets and drivers since 1996.",
};

const timeline = [
  { year: "1996", title: "Workshop Founded", body: "Sandhu Motors opens in Nanded, focused on mechanical repair for commercial trucks." },
  { year: "2000s", title: "Fleet Relationships Grow", body: "Local transport operators begin bringing multi-vehicle fleets for regular maintenance." },
  { year: "2017", title: "BS4 Diagnostics Added", body: "Laptop-based scanning introduced to keep pace with BS4 emission-compliant engines." },
  { year: "2020", title: "BS6 Capability", body: "Workshop equipped for BS6 diagnostics — DPF, AdBlue/SCR, and NOx sensor systems." },
  { year: "Today", title: "Full-Service Workshop", body: "Complete mechanical, electrical, and diagnostic capability for trucks and buses under one roof." },
];

const values = [
  { icon: ShieldCheck, title: "Honesty", body: "We explain the actual fault before quoting or starting repair work." },
  { icon: Wrench, title: "Craftsmanship", body: "Repairs done properly the first time, not just patched to pass inspection." },
  { icon: Handshake, title: "Reliability", body: "If we commit to a timeline, we work to hold it — your vehicle is your income." },
  { icon: Users, title: "Long-Term Relationships", body: "Many of our customers have been with us for years, not just one visit." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-ink overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e70?q=80&w=2000&auto=format&fit=crop')" }}
          role="img"
          aria-label="Mechanic working on a commercial truck"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-6 bg-orange" /> Since 1996 <span className="h-px w-6 bg-orange" />
          </div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight text-balance">
            Nearly three decades keeping Nanded&apos;s trucks running
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading eyebrow="Our Story" title="Built on the road, not in a boardroom" />
            <div className="space-y-4 text-steel leading-relaxed text-sm sm:text-base">
              <p>
                Sandhu Motors started in 1996 as a workshop focused on one thing: getting commercial
                trucks and buses back on the road, correctly repaired. Over nearly three decades, that
                focus hasn&apos;t changed — even as the vehicles have, from mechanically simple engines
                to today&apos;s BS6 systems with onboard diagnostics.
              </p>
              <p>
                What started as general mechanical repair has grown into a full-capability workshop:
                engine rebuilding, laptop-based fault diagnosis, electrical work, and structured fleet
                maintenance programs for transport companies operating out of Nanded and the surrounding
                region.
              </p>
              <p>
                We work on Tata Motors, Ashok Leyland, Mahindra, BharatBenz, Eicher, and Force Motors
                commercial vehicles — buses and trucks alike — for owner-drivers and fleet operators.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1632823471565-1ecdf7ba2c8b?q=80&w=1200&auto=format&fit=crop"
              alt="Heavy truck being repaired in Sandhu Motors workshop bay"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-plate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-plate-dark p-8">
            <Target className="text-orange mb-4" size={28} />
            <h3 className="font-display font-bold text-xl text-ink mb-2">Our Mission</h3>
            <p className="text-steel text-sm leading-relaxed">
              To keep commercial vehicles safely and reliably on the road through honest diagnosis,
              skilled repair, and maintenance that fleet owners and drivers can plan around.
            </p>
          </div>
          <div className="bg-white border border-plate-dark p-8">
            <Eye className="text-orange mb-4" size={28} />
            <h3 className="font-display font-bold text-xl text-ink mb-2">Our Vision</h3>
            <p className="text-steel text-sm leading-relaxed">
              To be the leading heavy vehicle repair and diagnostics workshop in the Nanded region,
              trusted by owner-drivers and transport companies alike.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Journey" title="Since 1996" align="center" />
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex gap-6 sm:gap-10">
                <div className="flex flex-col items-center">
                  <span className="font-mono text-orange text-sm w-16 shrink-0 pt-1">{t.year}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="w-2.5 h-2.5 bg-orange shrink-0 mt-1.5" />
                  {i < timeline.length - 1 && <span className="w-px flex-1 bg-plate-dark my-1" />}
                </div>
                <div className="pb-10">
                  <h3 className="font-display font-bold text-ink">{t.title}</h3>
                  <p className="text-sm text-steel mt-1 leading-relaxed max-w-md">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Owner's Message" title="A note from the workshop" dark />
          <blockquote className="max-w-3xl text-white/80 text-lg sm:text-xl leading-relaxed font-display italic">
            &ldquo;We started this workshop with a simple idea — treat every truck like it&apos;s
            someone&apos;s livelihood, because it is. Nearly thirty years later, that&apos;s still how
            we run Sandhu Motors.&rdquo;
          </blockquote>
          <p className="mt-4 font-mono text-sm text-orange">— Sandhu Motors, Workshop Owner</p>
        </div>
      </section>

      <section className="py-24 bg-plate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Core Values" title="What guides the work here" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bracket-card bg-white border border-plate-dark p-6">
                <v.icon className="text-orange mb-3" size={26} />
                <h3 className="font-display font-bold text-ink mb-2">{v.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Workshop & equipment"
            description="A dedicated bay setup for heavy vehicles, with mechanical tooling and laptop-based diagnostic equipment for BS4 and BS6 systems. Certifications and equipment details available on request."
          />
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
            ].map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden bg-plate-dark">
                <Image src={src} alt="Sandhu Motors workshop infrastructure" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-steel font-mono">
            Team and certification photos to be added — placeholder imagery shown above.
          </p>
        </div>
      </section>

      <MapSection />
    </>
  );
}
