import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Check, Gift } from "lucide-react";

const packs = [
  {
    name: "Essential",
    price: "45 000",
    tagline: "Digitalisation et automatisation WhatsApp",
    features: [
      "Parcours WhatsApp automatisés",
      "Catalogue et prix",
      "Prise de commandes",
      "Passage à l'humain si besoin",
    ],
    cta: "Découvrir Essential",
    message:
      "Bonjour, je suis intéressé par le Pack Essential (45 000 FCFA / mois) et l'essai de 30 jours.",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "65 000",
    tagline: "Essential + assistant commercial IA 24/7",
    features: [
      "Tout le Pack Essential",
      "Assistant commercial IA 24/7",
      "Adapté à votre métier",
      "Réponses naturelles, jour et nuit",
    ],
    cta: "Découvrir Pro",
    message:
      "Bonjour, je suis intéressé par le Pack Pro (65 000 FCFA / mois) et l'essai de 30 jours.",
    highlighted: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Deux packs, un WhatsApp métier.
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Digitalisez vos processus sur WhatsApp. Ajoutez un assistant commercial 24/7 quand vous en avez besoin.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-subtle px-4 py-1.5 text-sm font-semibold text-primary">
            <Gift className="w-4 h-4" /> 30 jours d&apos;essai gratuit — sans engagement
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packs.map((pack) => (
            <div
              key={pack.name}
              className={`bg-surface rounded-[2.5rem] overflow-hidden border ${
                pack.highlighted
                  ? "border-primary shadow-xl shadow-primary/10"
                  : "border-border shadow-xl shadow-foreground/5"
              }`}
            >
              {pack.highlighted && (
                <div className="bg-primary px-8 py-3 text-center">
                  <p className="text-inverse text-sm font-semibold">Pack recommandé</p>
                </div>
              )}

              <div className="p-8 sm:p-10">
                <div className="text-sm font-bold uppercase tracking-wide text-primary mb-2">
                  Pack {pack.name}
                </div>
                <p className="text-muted mb-6 leading-relaxed">{pack.tagline}</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-extrabold text-foreground">{pack.price}</span>
                  <span className="text-muted font-semibold">FCFA / mois</span>
                </div>

                <ul className="space-y-4 mb-10 text-left text-muted">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={buildWhatsAppLink({ text: pack.message })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block py-4 px-6 text-center font-bold text-lg rounded-xl transition-transform hover:-translate-y-1 ${
                    pack.highlighted
                      ? "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20"
                      : "bg-background hover:bg-surface-muted text-foreground ring-1 ring-border"
                  }`}
                >
                  {pack.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
