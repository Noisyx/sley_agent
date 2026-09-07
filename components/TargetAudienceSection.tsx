import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Utensils, Truck } from "lucide-react";

export default function TargetAudienceSection() {
  const audiences = [
    {
      title: "Restaurants",
      description:
        "Présentez le menu, prenez les commandes et suivez la salle ou la livraison — directement sur WhatsApp.",
      icon: <Utensils className="w-12 h-12" />,
      buttonText: "Tester la démo Restaurant",
      message: "Bonjour, je suis un restaurant et je souhaite tester la démo SLEY.",
      bgColor: "bg-accent-subtle",
      textColor: "text-accent",
      btnColor: "bg-accent hover:bg-accent/90",
    },
    {
      title: "Transport & Livraison",
      description:
        "Informez vos clients, suivez les colis et coordonnez vos livreurs depuis WhatsApp.",
      icon: <Truck className="w-12 h-12" />,
      buttonText: "Tester la démo Livraison",
      message:
        "Bonjour, je suis une agence de transport et livraison et je souhaite tester la démo SLEY.",
      bgColor: "bg-primary-subtle",
      textColor: "text-primary",
      btnColor: "bg-primary hover:bg-primary-hover",
    },
  ];

  return (
    <section id="demos" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-success-subtle blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Conçu pour <span className="text-primary">votre métier</span>
          </h2>
          <p className="mt-4 text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Testez SLEY sur WhatsApp. Choisissez le secteur qui correspond à votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((audience) => (
            <div 
              key={audience.title} 
              className={`rounded-[2rem] p-8 ${audience.bgColor} border border-white/50 shadow-sm shadow-foreground/5 flex flex-col h-full`}
            >
              <div className={`mb-6 ${audience.textColor}`}>{audience.icon}</div>
              <h3 className={`text-2xl font-semibold ${audience.textColor} mb-4`}>
                {audience.title}
              </h3>
              <p className="text-foreground mb-8 flex-grow leading-relaxed">
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
