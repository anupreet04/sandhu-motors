import type { Metadata } from "next";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "@fontsource/archivo/900.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Truck & Heavy Vehicle Repair Workshop, Nanded`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Sandhu Motors is a trusted commercial truck and heavy vehicle repair workshop in Nanded, Maharashtra, since 1996 — BS4 & BS6 diagnostics, engine overhauls, fleet maintenance, and emergency repairs.",
  keywords: [
    "Truck Repair Nanded",
    "Heavy Vehicle Repair",
    "Commercial Vehicle Workshop",
    "BS6 Truck Diagnostics",
    "Fleet Maintenance Nanded",
    "Truck Mechanic Nanded",
    "Tata Truck Service",
    "Ashok Leyland Repair",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Truck & Heavy Vehicle Repair Workshop, Nanded`,
    description: siteConfig.shortDescription,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Truck & Heavy Vehicle Repair Workshop, Nanded`,
    description: siteConfig.shortDescription,
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.jpg`,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    telephone: siteConfig.contact.phonePrimary,
    email: siteConfig.contact.email,
    foundingDate: String(siteConfig.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.line3}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pin,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    priceRange: "₹₹",
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
