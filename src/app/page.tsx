import { TopBanner } from "@/components/TopBanner";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";
import { CoursesSection } from "@/components/CoursesSection";
import { AuthorSection } from "@/components/AuthorSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { SiteFooter } from "@/components/SiteFooter";
import { WaitlistModalRoot } from "@/components/WaitlistModalRoot";

export default function HomePage() {
  const waitlistOnly = process.env.WAITLIST_ONLY === "true";

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <TopBanner waitlistOnly={waitlistOnly} />
      <SiteHeader waitlistOnly={waitlistOnly} />
      <WaitlistModalRoot />
      <main className="flex-1">
        <HeroSection waitlistOnly={waitlistOnly} />
        <WhoIsThisFor />
        <CoursesSection />
        {/* <ToolsMarquee /> */}
        <AuthorSection />
        <FeaturesSection />
        {/* <TestimonialsSection /> */}
        <PricingSection waitlistOnly={waitlistOnly} />
        <FAQSection />
        <CTASection waitlistOnly={waitlistOnly} />
      </main>
      <SiteFooter />
    </div>
  );
}
