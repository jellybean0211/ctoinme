import { TopBanner } from "@/components/TopBanner";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { CoursesSection } from "@/components/CoursesSection";
import { ToolsMarquee } from "@/components/ToolsMarquee";
import { AuthorSection } from "@/components/AuthorSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <TopBanner />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CoursesSection />
        <ToolsMarquee />
        <AuthorSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
