import type { Metadata } from "next";
import { CalendarClock, FileBarChart, ShieldCheck, Handshake, TrendingDown, ClipboardCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FleetInquiryForm from "@/components/shared/FleetInquiryForm";

export const metadata: Metadata = {
  title: "Fleet Maintenance",
  description:
    "Annual maintenance contracts, scheduled servicing, and fleet health reporting for transport companies and bus operators in Nanded.",
};

const offerings = [
  { icon: CalendarClock, title: "Fleet Service Plans", body: "Structured servicing plans matched to each vehicle's usage and duty cycle, not a generic calendar." },
  { icon: ClipboardCheck, title: "Annual Maintenance Contracts", body: "One agreement covering scheduled servicing for your whole fleet, with predictable costs." },
  { icon: ShieldCheck, title: "Preventive Maintenance", body: "Regular inspection catches wear items before they turn into breakdowns on the road." },
  { icon: TrendingDown, title: "Reduced Downtime", body: "Priority booking slots for fleet accounts mean less time waiting for a service bay." },
  { icon: FileBarChart, title: "Fleet Health Reports", body: "Written condition reports per vehicle, so you can plan repair budgets ahead of time." },
  { icon: Handshake, title: "Corporate Partnerships", body: "Consolidated billing and a single point of contact for transport companies and logistics fleets." },
];

export default function FleetPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(90deg,#fff_0px,#fff_1px,transparent_1px,transparent_48px)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-6 bg-orange" /> For Transport Companies &amp; Bus Operators
          </div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight text-balance">
            Fleet maintenance that keeps every vehicle earning
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">
            Scheduled servicing, priority booking, and health reporting for multi-vehicle fleets — built to
            reduce downtime, not just react to breakdowns.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What's Included" title="Fleet program details" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="bracket-card border border-plate-dark p-6">
                <o.icon className="text-orange mb-4" size={26} strokeWidth={1.75} />
                <h3 className="font-display font-bold text-ink mb-2">{o.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fleet-inquiry" className="py-24 bg-plate scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <SectionHeading
              eyebrow="Fleet Inquiry"
              title="Talk to us about your fleet"
              description="Tell us how many vehicles you run and how they're used — we'll put together a maintenance plan and pricing for your fleet."
            />
          </div>
          <FleetInquiryForm />
        </div>
      </section>
    </>
  );
}
