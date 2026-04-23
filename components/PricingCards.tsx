import React from "react";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const tiers = [
  {
    name: "Pro",
    price: "79€",
    description:
      "Le système complet pour convertir automatiquement et gagner du temps au quotidien.",
    idealFor: "Business en croissance",
    features: [
      "Connexion à WhatsApp Business",
      "Configuration rapide (moins de 24h)",
      "Assistant intelligent (ton & offres)",
      "Qualification automatique des prospects",
      "Scénarios de vente optimisés",
      "Intégrations (n8n, CRM…)",
    ],
    cta: "Commencer",
    highlighted: true,
  },
];

export default function PricingCards() {
  return (
    <section
      aria-label="Offres"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700 ring-1 ring-green-200 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Une offre simple, prête à installer
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Boostez votre business avec notre offre unique
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Installation en moins de 24h. Messages optimisés. Support inclus.
          </p>
        </div>

        <div className="flex justify-center max-w-lg mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative w-full rounded-3xl bg-white border shadow-sm transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none ${
                tier.highlighted
                  ? "border-green-500 ring-2 ring-green-500/20 shadow-[0_24px_60px_-30px_rgba(16,185,129,0.35)] z-10"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white text-xs font-bold tracking-wide px-3 py-1 shadow-sm">
                    Offre Recommandée
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                      Idéal pour: {tier.idealFor}
                    </p>
                  </div>
                  <div className="hidden sm:inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200">
                    Setup inclus
                  </div>
                </div>

                <p className="mt-4 text-gray-600 min-h-[3.5rem]">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-extrabold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-gray-500 font-medium pb-1">/mois</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Sans engagement • Assistance à l’installation
                </p>

                <div className="mt-8">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Inclus
                  </div>
                  <ul className="mt-4 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-gray-700">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex flex-col gap-3">
                  <Link
                    href={buildWhatsAppLink({
                      text: `Bonjour — je veux démarrer avec l’offre ${tier.name} (${tier.price}/mois). Pouvez-vous me guider ?`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full py-4 px-6 rounded-xl text-center font-extrabold transition-all hover:scale-[1.02] motion-reduce:hover:scale-100 ${
                      tier.highlighted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg"
                        : "bg-gray-900 hover:bg-gray-950 text-white shadow-sm"
                    }`}
                  >
                    {tier.cta}
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-center text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 ring-1 ring-gray-200 transition-colors"
                  >
                    Poser une question
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
