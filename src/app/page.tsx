import { TopBanner } from "@/components/TopBanner";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";
import { ProcessSection } from "@/components/ProcessSection";
import { AuthorSection } from "@/components/AuthorSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { SiteFooter } from "@/components/SiteFooter";
import { CompaniesSlider } from "@/components/CompaniesSlider";

export default function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <TopBanner />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CompaniesSlider />
        <WhoIsThisFor />
        <ProcessSection />
        <AuthorSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
