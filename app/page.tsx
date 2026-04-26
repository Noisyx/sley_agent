import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProofSection from '@/components/SocialProofSection';
import CaseStudySection from '@/components/CaseStudySection';
import SolutionSection from '@/components/SolutionSection';
import ExamplesSection from '@/components/ExamplesSection';
import FAQ from '@/components/FAQ';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-green-200 text-gray-900">
      <Navbar />
      <Hero />
      {/* <SocialProofSection /> */}
      <CaseStudySection />
      <SolutionSection />
      <ExamplesSection />
      <FAQ />
      <CtaSection />
      <Footer />
    </main>
  );
}
