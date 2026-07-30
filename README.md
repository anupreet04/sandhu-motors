# Sandhu Motors — Website

A production-ready marketing and booking website for Sandhu Motors, a commercial truck and
heavy vehicle repair workshop in Nanded, Maharashtra (est. 1996).

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in your EmailJS keys — see below
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

The project builds with **zero errors** (`npm run build`) and is ready to deploy on Vercel
as-is — just import the repo in Vercel and add the environment variables from `.env.example`
in your Vercel project settings.

## What's included (fully built)

- **Pages:** Home, About, Services (17 services with benefits/vehicle-fit/time estimates),
  Advanced Diagnostics, Fleet Maintenance (with inquiry form), Gallery (filterable masonry),
  Reviews, Contact (with booking form), Privacy Policy, Terms & Conditions.
- **Booking form** on `/contact#booking` — all fields from the spec (name, mobile, email,
  vehicle brand/model/reg number, service, issue description, preferred date/time), built with
  React Hook Form and wired to send via EmailJS once you add your keys.
- **Fleet inquiry form** on `/fleet#fleet-inquiry`, same pattern, separate EmailJS template.
- **Header** — sticky, scroll-aware, mobile menu, "Book Service" CTA.
- **Footer** — quick links, services, contact info, hours, social links, legal links.
- **Floating buttons** — Call, WhatsApp (pre-filled message), Google Maps directions, back-to-top.
- **Google Maps** embedded on the homepage and Contact page, with a "Get Directions" link.
- **SEO:** per-page metadata, Open Graph/Twitter cards, canonical URL, `robots.txt` and
  `sitemap.xml` generated dynamically (`src/app/robots.ts`, `src/app/sitemap.ts`), and
  `LocalBusiness`/`AutoRepair` JSON-LD schema in the root layout.
- **Design system:** industrial brand palette (ink/steel/plate/orange/blue), Archivo (display),
  Inter (body), and JetBrains Mono (data/stats) — self-hosted via `@fontsource` so the build
  never depends on reaching Google Fonts at build time.
- **Animations:** Framer Motion for hero entrance, scroll reveals on stats, hover/press states;
  a signature animated "scanline" motif ties back to the laptop-diagnostics identity.
- **Accessibility basics:** visible focus rings, semantic headings, `prefers-reduced-motion`
  respected globally.
- All content (address, phone numbers, hours, brands serviced, FAQs) is centralized in
  `src/lib/site-config.ts` — edit that one file to update business details site-wide.

## What's stubbed or intentionally out of scope for this pass

The original brief is very large (it lists a blog, careers page, customer/admin dashboards,
AI chat assistant, service tracking, online payments, PWA install, and more). Building all of
that in one pass would mean shipping many things shallowly rather than a smaller set of things
well, so here's what's **not** built yet and why:

- **EmailJS is not connected to a live account.** The forms are fully wired in code — you just
  need to create a free EmailJS account, add a service + two templates (booking, fleet), and
  drop the IDs into `.env.local` (see `.env.example`). Until then, submitting a form shows a
  clear "not configured" error rather than failing silently.
- **PWA is a stub, not a full install experience.** `public/manifest.json` exists with
  placeholder icons (`public/icon-192.png`, `icon-512.png` — simple generated placeholders, swap
  for real branded icons), but there's no service worker yet. Add `next-pwa` or a hand-rolled
  service worker if you want offline support and an install prompt.
- **Dark mode toggle:** the design system supports it (all colors are CSS variables), but the
  toggle UI itself isn't wired up. Worth adding as a follow-up if you want it.
- **Blog / Careers pages:** not built. The nav and footer don't currently link to them; add
  `src/app/blog/` and `src/app/careers/` following the pattern of the existing pages when ready.
- **Customer dashboard, admin dashboard, fleet portal, AI chat assistant, service tracking,
  online payments, SMS notifications, invoice downloads:** all listed in the original brief as
  "future features to prepare architecture for." None of these are built — they'd need a real
  backend/database (this project has no server-side data layer at all right now), authentication,
  and a payment gateway integration, which is a substantial separate project. The folder
  structure (`src/app/`, `src/components/`, `src/lib/`) is a normal Next.js App Router layout,
  so adding `src/app/dashboard/`, an API layer, and a database later won't require a rewrite.
- **Real photography, verified reviews, real Google/Justdial ratings:** the site uses Unsplash
  placeholder photography and testimonials clearly labeled as samples/placeholders throughout
  (Gallery, Reviews, Home). Replace with real photos and verified reviews before going live.
- **Brochure PDF download:** not included — add a real PDF to `public/` and link to it once
  you have one.
- **Certifications:** the About page has a placeholder note; add real certification images/logos
  when available.

## Project structure

```
src/
  app/                  Route segments (one folder per page), robots.ts, sitemap.ts, layout.tsx
  components/
    layout/              Header, Footer, FloatingButtons
    home/                Homepage-only sections (Hero, StatsStrip, WhyChooseUs, ...)
    shared/               Reused across pages (BookingForm, FleetInquiryForm, FAQSection, MapSection, GalleryGrid)
    ui/                   Small primitives (SectionHeading, AnimatedCounter, SocialIcons)
  lib/
    site-config.ts        All business data — single source of truth
public/
  manifest.json, icon-192.png, icon-512.png
```

## Updating business content

Everything — address, phone numbers, working hours, services, FAQs, testimonials, brands
serviced — lives in `src/lib/site-config.ts`. Edit values there; every page reads from it, so
you won't need to hunt through components to change a phone number or add a service.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add the environment variables from `.env.example` in Vercel project settings.
4. Deploy — no build configuration changes needed.
