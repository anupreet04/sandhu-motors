import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for using the Sandhu Motors website and booking services.",
};

export default function TermsPage() {
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-black text-3xl sm:text-4xl text-ink mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-steel mb-10 font-mono">Last updated: July 2026</p>

        <div className="space-y-6 text-sm text-steel leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-ink text-lg mb-2">Service Bookings</h2>
            <p>
              Bookings made through this website are requests, not confirmed appointments. Our team will
              contact you by phone to confirm the final date, time, and service details based on workshop
              availability.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-ink text-lg mb-2">Estimates &amp; Repairs</h2>
            <p>
              All repair work is carried out only after the customer has been informed of the diagnosis and
              agreed to an estimate. Final costs may vary from initial estimates if further issues are
              discovered during repair, and we will inform you before proceeding with any additional work.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-ink text-lg mb-2">Website Content</h2>
            <p>
              Photos used across this website include representative placeholder imagery alongside
              workshop photography, and testimonials marked as samples are illustrative rather than
              verified customer quotes, pending replacement with real reviews.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-ink text-lg mb-2">Governing Law</h2>
            <p>
              These terms are governed by the laws of India, with courts in Nanded, Maharashtra having
              jurisdiction over any disputes.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-ink text-lg mb-2">Contact</h2>
            <p>
              Questions about these terms can be directed to{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-orange-dark font-semibold">
                {siteConfig.contact.email}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
