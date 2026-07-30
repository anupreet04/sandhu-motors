import type { Metadata } from "next";
import Link from "next/link";
import { Laptop2, Cpu, AlertTriangle, Activity, Filter, Droplet, Wind, ScanLine as ScanLineIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Advanced Diagnostics",
  description:
    "Laptop scanning, ECU diagnostics, BS4 & BS6 systems, DPF, AdBlue, and emission control diagnostics for commercial trucks and buses in Nanded.",
};

const diagnosticAreas = [
  { icon: Laptop2, title: "Laptop Scanning", body: "Full-system scan tools pull live fault codes and freeze-frame data straight from the vehicle's onboard computer." },
  { icon: Cpu, title: "ECU Diagnostics", body: "Deep inspection of engine control unit behaviour to separate wiring faults from software or sensor issues." },
  { icon: AlertTriangle, title: "Error Code Reading", body: "Every fault code is read, explained in plain language, and checked against real symptoms before repair." },
  { icon: Activity, title: "Live Sensor Testing", body: "Sensor values are monitored in real time — under load and at idle — to catch intermittent faults static tests miss." },
  { icon: ScanLineIcon, title: "BS4 Systems", body: "Diagnostics tuned for BS4-generation fuel maps, sensors, and emission-related warning lights." },
  { icon: ScanLineIcon, title: "BS6 Systems", body: "Specialised BS6 diagnostics covering the tighter emission-control architecture of newer engines." },
  { icon: Filter, title: "DPF (Diesel Particulate Filter)", body: "Diagnosis of DPF clogging, failed regeneration cycles, and related derate or warning conditions." },
  { icon: Droplet, title: "AdBlue / SCR Systems", body: "Fault-finding for AdBlue dosing, SCR catalyst, and NOx sensor issues common in BS6 trucks." },
  { icon: Wind, title: "Emission Controls", body: "Full emission-system check to keep vehicles compliant and avoid repeat breakdowns from ignored faults." },
];

export default function DiagnosticsPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink overflow-hidden">
        <div className="scanline" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-6 bg-orange" /> Computerised Fault Finding
          </div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight text-balance">
            Advanced Diagnostics for BS4 & BS6 Commercial Vehicles
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">
            Modern trucks hide their real faults behind sensors and software. We use laptop-based
            diagnostic tools to find the actual problem before touching a single bolt.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Diagnostic Capability"
            title="What our diagnostic scan actually checks"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnosticAreas.map((d) => (
              <div key={d.title} className="bracket-card border border-plate-dark p-6">
                <d.icon className="text-orange mb-4" size={26} strokeWidth={1.75} />
                <h3 className="font-display font-bold text-ink mb-2">{d.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading eyebrow="Why It Matters" title="Guesswork costs more than diagnostics" dark />
            <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
              <p>
                On modern BS6 vehicles, a warning light can point to a dozen different systems —
                engine, emission control, sensors, or wiring. Replacing parts without a proper scan
                often means paying twice: once for the wrong part, and again for the right repair.
              </p>
              <p>
                Our diagnostic process reads the actual fault codes and live sensor data from your
                vehicle&apos;s computer, so the repair plan is based on evidence, not guesswork.
              </p>
            </div>
            <Link
              href="/contact#booking"
              className="mt-7 inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3.5 transition-colors"
            >
              Book a Diagnostic Scan
            </Link>
          </div>

          <div className="relative border border-white/10 bg-ink p-8 font-mono text-xs text-white/70 overflow-hidden">
            <div className="scanline" />
            <p className="text-orange mb-3">&gt;&gt;&gt; DIAGNOSTIC READOUT — SAMPLE</p>
            <p>SYSTEM: SCR / AdBlue</p>
            <p>FAULT CODE: P20EE</p>
            <p>DESCRIPTION: SCR reagent quality — below threshold</p>
            <p>STATUS: <span className="text-orange">ACTIVE</span></p>
            <p className="mt-3">SYSTEM: DPF</p>
            <p>FAULT CODE: P2463</p>
            <p>DESCRIPTION: Soot accumulation — regeneration required</p>
            <p>STATUS: <span className="text-orange">PENDING</span></p>
            <p className="mt-4 text-white/40">Sample output for illustration only.</p>
          </div>
        </div>
      </section>
    </>
  );
}
