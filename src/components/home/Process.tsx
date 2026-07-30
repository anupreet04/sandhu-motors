import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { step: "01", title: "Vehicle Check-In", body: "Tell us the issue or bring it in for a general inspection. We log vehicle details and symptoms." },
  { step: "02", title: "Diagnosis", body: "Mechanical inspection plus laptop scanning where needed, to identify the actual root cause." },
  { step: "03", title: "Estimate & Approval", body: "We explain the fault in plain terms and share a cost and time estimate before starting work." },
  { step: "04", title: "Repair", body: "Our mechanics carry out the repair using genuine or OEM-equivalent parts." },
  { step: "05", title: "Quality Check & Handover", body: "We test the fix, run a final check, and hand the vehicle back ready for the road." },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="A clear, five-step repair workflow"
          description="The same process whether it's a routine service or a full engine overhaul — it's what keeps repairs predictable."
        />
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative pt-6 border-t-2 border-orange">
              <span className="font-mono text-orange text-sm">{s.step}</span>
              <h3 className="font-display font-bold text-base mt-2 mb-2 text-ink">{s.title}</h3>
              <p className="text-sm text-steel leading-relaxed">{s.body}</p>
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-[-2px] right-[-12px] w-6 h-0.5 bg-plate-dark" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
