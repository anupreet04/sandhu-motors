"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Loader2, CheckCircle2 } from "lucide-react";

type FormValues = {
  company: string;
  contactName: string;
  phone: string;
  email: string;
  fleetSize: string;
  vehicleTypes: string;
  message: string;
};

const inputClass =
  "w-full bg-white border border-plate-dark px-4 py-3 text-sm text-ink placeholder:text-steel-light focus:border-orange focus:outline-none transition-colors";
const labelClass = "block text-xs font-mono uppercase tracking-wider text-steel mb-1.5";

export default function FleetInquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_FLEET_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS is not configured yet.");
      }
      await emailjs.send(serviceId, templateId, { ...data }, { publicKey });
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white border border-plate-dark p-10 text-center">
        <CheckCircle2 className="mx-auto text-orange mb-4" size={40} />
        <h3 className="font-display font-bold text-xl text-ink mb-2">Inquiry received</h3>
        <p className="text-steel text-sm leading-relaxed max-w-sm mx-auto">
          Our team will reach out to discuss a fleet maintenance plan for your vehicles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-plate-dark p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Company / Fleet Name *</label>
          <input className={inputClass} {...register("company", { required: true })} placeholder="Transport company name" />
          {errors.company && <p className="text-xs text-red-600 mt-1">Required.</p>}
        </div>
        <div>
          <label className={labelClass}>Contact Person *</label>
          <input className={inputClass} {...register("contactName", { required: true })} placeholder="Your name" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone *</label>
          <input className={inputClass} {...register("phone", { required: true })} placeholder="Mobile number" type="tel" />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input className={inputClass} {...register("email")} placeholder="you@company.com" type="email" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Fleet Size *</label>
          <input className={inputClass} {...register("fleetSize", { required: true })} placeholder="e.g. 12 vehicles" />
        </div>
        <div>
          <label className={labelClass}>Vehicle Types</label>
          <input className={inputClass} {...register("vehicleTypes")} placeholder="e.g. Tata trucks, buses" />
        </div>
      </div>
      <div>
        <label className={labelClass}>What are you looking for? *</label>
        <textarea className={inputClass} rows={4} {...register("message", { required: true })} placeholder="Tell us about your maintenance needs" />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please call us directly or try again.</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark disabled:opacity-60 text-white font-semibold px-8 py-3.5 transition-colors"
      >
        {isSubmitting && <Loader2 className="animate-spin" size={16} />}
        Submit Fleet Inquiry
      </button>
    </form>
  );
}
