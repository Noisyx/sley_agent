import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    href: '#',
    price: '29€',
    description: 'L’essentiel pour ne plus laisser vos messages sans réponse.',
    features: ['Connexion à WhatsApp Business', 'Réponses automatiques simple', 'Messages d’accueil optimisés', 'Configuration rapide (moins de 24h)'],
    cta: 'Commencer maintenant',
    highlighted: false,
  },
  {
    name: 'Pro',
    href: '#',
    price: '79€',
    description: 'Transformez vos conversations en clients automatiquement.',
    features: ['Tout dans Starter', 'Assistant intelligent qui répond comme vous', 'Qualification automatique des prospects', 'Scénarios de vente optimisés', 'Intégration avec vos outils (n8n, CRM…)'],
    cta: 'Automatiser mon business',
    highlighted: true,
  },
  {
    name: 'Premium',
    href: '#',
    price: '199€',
    description: 'Un système entièrement automatisé qui travaille pour vous 24h/24.',
    features: ['Tout dans Pro', 'Automatisations avancées sur mesure', 'Optimisation continue des performances', 'Suivi stratégique personnalisé', 'Support prioritaire 24/7'],
    cta: 'Discuter avec un expert',
    highlighted: false,
  },
];

export default function PricingCards() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 bg-white  shadow-xl transition-transform hover:-translate-y-2 duration-300 border focus-within:ring-2 ring-green-500 ${tier.highlighted ? 'border-green-500 shadow-green-100 md:-mt-8 md:mb-8 z-10' : 'border-gray-200'
                }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-green-500 text-white text-sm font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                    Offre la plus populaire
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-gray-500 mb-6 min-h-[3rem]">{tier.description}</p>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-gray-900">{tier.price}</span>
                <span className="text-gray-500 font-medium">/mois</span>
              </div>

              <ul className="mb-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`block w-full py-4 px-6 rounded-xl text-center font-bold transition-all hover:scale-[1.02] ${tier.highlighted
                  ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg'
                  : 'bg-green-50 w-full border border-transparent hover:border-green-100 hover:bg-green-100 text-green-600'
                  }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
