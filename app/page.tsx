import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import VisionSection from '@/components/VisionSection';
import ProcessSection from '@/components/ProcessSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-green-200 text-gray-900">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <VisionSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
