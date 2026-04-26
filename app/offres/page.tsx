
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/PricingCards";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nos Offres | Sley Agent",
  description:
    "Deux offres claires pour automatiser WhatsApp, répondre en <2s et convertir plus de clients.",
};

export default function OffresPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <PricingCards />
      </main>

      <Footer />
    </div>
  );
}
