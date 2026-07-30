import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedServices from "@/components/home/FeaturedServices";
import BrandsStrip from "@/components/home/BrandsStrip";
import Process from "@/components/home/Process";
import FleetBanner from "@/components/home/FleetBanner";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/shared/FAQSection";
import MapSection from "@/components/shared/MapSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <WhyChooseUs />
      <FeaturedServices />
      <BrandsStrip />
      <Process />
      <FleetBanner />
      <GalleryPreview />
      <TestimonialsSection />
      <FAQSection />
      <MapSection />
      <FinalCTA />
    </>
  );
}
