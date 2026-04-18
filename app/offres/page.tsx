import React from 'react';
import Navbar from '@/components/Navbar';
import PricingHero from '@/components/PricingHero';
import PricingCards from '@/components/PricingCards';
import ReassuranceSection from '@/components/ReassuranceSection';
import FAQ from '@/components/FAQ';
import PricingCTA from '@/components/PricingCTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nos Offres | Sley',
  description: 'Choisissez l’offre adaptée à votre business et scalez sans friction.',
};

export default function OffresPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <PricingHero />
        <PricingCards />
        <ReassuranceSection />
        <FAQ />
        <PricingCTA />
      </main>

      <Footer />
    </div>
  );
}
