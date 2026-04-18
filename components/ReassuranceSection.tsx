import React from 'react';
import { Zap, ShieldCheck, Sliders, Users } from 'lucide-react';

const blocks = [
  {
    icon: Zap,
    title: 'Installation rapide',
    description: 'Mise en place en moins de 24h pour être opérationnel immédiatement.',
  },
  {
    icon: ShieldCheck,
    title: 'Solution fiable et sécurisée',
    description: 'Vos données sont chiffrées et hébergées en Europe avec une disponibilité de 99.9%.',
  },
  {
    icon: Sliders,
    title: '100% adaptable',
    description: 'Une plateforme sur mesure qui s\'intègre avec vos outils du quotidien.',
  },
  {
    icon: Users,
    title: 'Accompagnement VIP',
    description: 'Un expert dédié vous accompagne tout au long de votre croissance.',
  },
];

export default function ReassuranceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tout est fait pour vous simplifier la vie
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <div key={block.title} className="text-center group">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-green-50 text-green-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{block.title}</h4>
                <p className="text-gray-600">{block.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
