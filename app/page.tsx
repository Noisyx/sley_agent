import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/FAQ';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-screen bg-background selection:bg-primary-subtle text-foreground pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <TargetAudienceSection />
      <PricingSection />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
}
