import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Utensils, ShoppingBag, Plane } from "lucide-react";

export default function TargetAudienceSection() {
  const audiences = [
    {
      title: "Restaurants & Fast-foods",
      description: "Présente le menu, demande l'adresse et encaisse la commande.",
      icon: <Utensils className="w-12 h-12" />,
      buttonText: "Tester la démo Restaurant",
      message: "Bonjour, je suis un restaurant et je souhaite tester la démo de l'Agent IA.",
      bgColor: "bg-orange-50",
      textColor: "text-orange-900",
      btnColor: "bg-orange-500 hover:bg-orange-600",
    },
    {
      title: "Vendeurs en ligne",
      description: "Répond aux questions de tailles, prix et frais de livraison par quartier.",
      icon: <ShoppingBag className="w-12 h-12" />,
      buttonText: "Tester la démo Boutique",
      message: "Bonjour, je suis vendeur en ligne et je souhaite tester la démo de l'Agent IA.",
      bgColor: "bg-pink-50",
      textColor: "text-pink-900",
      btnColor: "bg-pink-500 hover:bg-pink-600",
    },
    {
      title: "Agences & Services",
      description: "Filtre les vrais acheteurs des simples curieux avant de vous passer la main.",
      icon: <Plane className="w-12 h-12" />,
      buttonText: "Tester la démo Agence",
      message: "Bonjour, je suis une agence/prestataire de service et je souhaite tester la démo de l'Agent IA.",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      btnColor: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  return (
    <section id="demos" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-green-50 blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900">
            Essayez par <span className="text-[#25D366]">vous-même !</span>
          </h2>
          <p className="mt-4 text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Testez nos agents en direct sur WhatsApp. Choisissez le secteur qui correspond à votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, idx) => (
            <div 
              key={idx} 
              className={`rounded-[2rem] p-8 ${audience.bgColor} border border-white/50 shadow-sm shadow-zinc-200/50 flex flex-col h-full`}
            >
              <div className={`mb-6 ${audience.textColor}`}>{audience.icon}</div>
              <h3 className={`text-2xl font-semibold ${audience.textColor} mb-4`}>
                {audience.title}
              </h3>
              <p className="text-zinc-700 mb-8 flex-grow leading-relaxed">
                {audience.description}
              </p>
              <Link
                href={buildWhatsAppLink({ text: audience.message })}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex justify-center gap-2 items-center px-6 py-4 rounded-xl text-white font-bold text-lg shadow-md transition-transform hover:-translate-y-1 ${audience.btnColor}`}
              >
                {audience.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
