import { Globe, CreditCard, Clock, UserCheck } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Comprend le français local",
      description: "Gère le langage SMS et les fautes de frappe ('bjr', 'stp', 'dispo').",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Paiement Mobile Money",
      description: "Guide le paiement via T-Money ou Flooz et valide la capture d'écran.",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Ouvert 24/7",
      description: "Encaissez des commandes à toute heure, même pendant votre sommeil.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-green-600" />,
      title: "Passe le relais",
      description: "En cas de question complexe, il vous passe immédiatement la main.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 mb-4">
            Adapté à vos réalités
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900">
            Conçu pour le marché Togolais
          </h2>
          <p className="mt-4 text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Une IA qui comprend comment vos clients discutent et achètent réellement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-8 shadow-sm shadow-zinc-200/50 border border-zinc-100 hover:shadow-md hover:shadow-zinc-200/50 transition-shadow"
            >
              <div className="mb-4 bg-zinc-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
