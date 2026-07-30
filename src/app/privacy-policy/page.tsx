import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Sandhu Motors — how we handle information submitted through our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-black text-3xl sm:text-4xl text-ink mb-2">Privacy Policy</h1>
        <p className="text-sm text-steel mb-10 font-mono">Last updated: July 2026</p>

        <div className="prose-sm space-y-6 text-sm text-steel leading-relaxed">
          <p>
            This Privacy Policy explains how {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) collects
            and uses information submitted through this website ({siteConfig.url}).
          </p>

          <div>
            <h2 className="font-display font-bold text-ink text-lg mb-2">Information We Collect</h2>
            <p>
              When you use our booking form, fleet inquiry form, or contact form, we collect the details
              you provide — such as your name, phone number, email address, vehicle details, and service
              request. We do not collect payment information through this website.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-ink text-lg mb-2">How We Use Information</h2>
            <p>
              Information submitted through our forms is used solely to respond to your service booking
              or inquiry, confirm appointments by phone, and provide the requested workshop services. We
              do not sell or share your information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-ink text-lg mb-2">Third-Party Services</h2>
            <p>
              Our booking forms use EmailJS to deliver form submissions to our workshop email. Our contact
              page embeds Google Maps for directions. These third-party services have their own privacy
              policies governing the data they process.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-ink text-lg mb-2">Contact Us</h2>
            <p>
              For questions about this policy or your information, contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-orange-dark font-semibold">
                {siteConfig.contact.email}
              </a>{" "}
              or call {siteConfig.contact.phonePrimary}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
