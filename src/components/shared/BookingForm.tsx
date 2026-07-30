"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { services } from "@/lib/site-config";
import { Loader2, CheckCircle2 } from "lucide-react";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  vehicleBrand: string;
  vehicleModel: string;
  regNumber: string;
  service: string;
  issue: string;
  preferredDate: string;
  preferredTime: string;
};

const inputClass =
  "w-full bg-white border border-plate-dark px-4 py-3 text-sm text-ink placeholder:text-steel-light focus:border-orange focus:outline-none transition-colors";
const labelClass = "block text-xs font-mono uppercase tracking-wider text-steel mb-1.5";

export default function BookingForm() {
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
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS is not configured yet.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          phone: data.phone,
          email: data.email,
          vehicle_brand: data.vehicleBrand,
          vehicle_model: data.vehicleModel,
          reg_number: data.regNumber,
          service: data.service,
          issue: data.issue,
          preferred_date: data.preferredDate,
          preferred_time: data.preferredTime,
        },
        { publicKey }
      );
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
        <h3 className="font-display font-bold text-xl text-ink mb-2">Booking request received</h3>
        <p className="text-steel text-sm leading-relaxed max-w-sm mx-auto">
          We&apos;ll call you shortly to confirm your slot. For anything urgent, call us directly at{" "}
          <span className="font-mono text-ink">+91 99602 23737</span>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-orange hover:text-orange-dark"
        >
          Book another service →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-plate-dark p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Customer Name *</label>
          <input className={inputClass} {...register("name", { required: true })} placeholder="Full name" />
          {errors.name && <p className="text-xs text-red-600 mt-1">Name is required.</p>}
        </div>
        <div>
          <label className={labelClass}>Mobile Number *</label>
          <input
            className={inputClass}
            {...register("phone", { required: true, minLength: 10 })}
            placeholder="10-digit mobile number"
            type="tel"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">Valid mobile number is required.</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email</label>
          <input className={inputClass} {...register("email")} placeholder="you@example.com" type="email" />
        </div>
        <div>
          <label className={labelClass}>Vehicle Brand *</label>
          <input className={inputClass} {...register("vehicleBrand", { required: true })} placeholder="e.g. Tata Motors" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Vehicle Model *</label>
          <input className={inputClass} {...register("vehicleModel", { required: true })} placeholder="e.g. 1613" />
        </div>
        <div>
          <label className={labelClass}>Registration Number</label>
          <input className={inputClass} {...register("regNumber")} placeholder="e.g. MH26 AB 1234" />
        </div>
      </div>

      <div>
        <label className={labelClass}>Service Required *</label>
        <select className={inputClass} {...register("service", { required: true })} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other">Other / Not sure</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Issue Description *</label>
        <textarea
          className={inputClass}
          rows={4}
          {...register("issue", { required: true })}
          placeholder="Briefly describe the issue or work needed"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Preferred Date *</label>
          <input className={inputClass} {...register("preferredDate", { required: true })} type="date" />
        </div>
        <div>
          <label className={labelClass}>Preferred Time *</label>
          <input className={inputClass} {...register("preferredTime", { required: true })} type="time" />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your request. Please call us directly at +91 99602 23737, or try again.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark disabled:opacity-60 text-white font-semibold px-8 py-3.5 transition-colors"
      >
        {isSubmitting && <Loader2 className="animate-spin" size={16} />}
        Book Service
      </button>
      <p className="text-xs text-steel-light">
        We&apos;ll confirm your booking by phone. This form requires EmailJS to be configured — see .env.example.
      </p>
    </form>
  );
}
