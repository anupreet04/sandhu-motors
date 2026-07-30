import { Gauge, ShieldCheck, Laptop2, Clock3, Users, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const points = [
  {
    icon: Clock3,
    title: "Nearly 30 Years in Nanded",
    body: "Serving commercial vehicle owners and fleets in the region since 1996 — we know the routes, the loads, and the vehicles.",
  },
  {
    icon: Laptop2,
    title: "Laptop-Based Diagnostics",
    body: "BS4 and BS6 fault scanning with live sensor data, not just guesswork — so repairs target the actual problem.",
  },
  {
    icon: Wrench,
    title: "Full Mechanical Capability",
    body: "From brake and suspension work to complete engine overhauls, handled under one roof.",
  },
  {
    icon: Users,
    title: "Fleet-Ready Service",
    body: "Structured maintenance contracts and priority scheduling built for transport companies running multiple vehicles.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Estimates",
    body: "You see the diagnosis and get an estimate before we start any repair — no surprises on the bill.",
  },
  {
    icon: Gauge,
    title: "Multi-Brand Expertise",
    body: "Tata, Ashok Leyland, Mahindra, BharatBenz, Eicher, and Force Motors commercial vehicles, all serviced in-house.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Sandhu Motors"
          title="Built for vehicles that can't afford downtime"
          description="Commercial vehicles earn money only when they're on the road. Every part of how we work is aimed at getting yours back there, correctly fixed, the first time."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="bracket-card border border-plate-dark p-6 hover:bg-plate/40 transition-colors">
              <p.icon className="text-orange mb-4" size={28} strokeWidth={1.75} />
              <h3 className="font-display font-bold text-lg text-ink mb-2">{p.title}</h3>
              <p className="text-sm text-steel leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
