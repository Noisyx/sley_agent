import { Globe, CreditCard, Clock, UserCheck } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Français local",
      description: "Vos parcours WhatsApp gèrent le langage SMS et les fautes de frappe ('bjr', 'stp', 'dispo').",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Paiement Mobile Money",
      description: "Guide le paiement via T-Money ou Flooz et valide la capture d'écran.",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Disponible en continu",
      description: "Les parcours automatisés prennent les demandes à toute heure. L'assistant commercial 24/7 est inclus dans le Pack Pro.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      title: "Passe le relais",
      description: "En cas de question complexe, votre équipe reprend la conversation.",
    },
  ];

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-subtle px-4 py-2 text-sm font-semibold text-primary mb-4">
            Adapté à vos réalités
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Conçu pour le marché Togolais
          </h2>
          <p className="mt-4 text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Pensé pour les restaurants et les agences de transport & livraison au Togo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-surface rounded-3xl p-8 shadow-sm shadow-foreground/5 border border-border hover:shadow-md hover:shadow-foreground/5 transition-shadow"
            >
              <div className="mb-4 bg-background w-16 h-16 flex items-center justify-center rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
