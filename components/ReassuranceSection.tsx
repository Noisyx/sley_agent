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
    title: 'Fiable au quotidien',
    description: 'Vos clients reçoivent une réponse même quand vous êtes occupé, en route, ou fermé.',
  },
  {
    icon: Sliders,
    title: 'Adapté à votre activité',
    description: 'On configure vos prix, horaires, zones, règles et messages pour coller à votre réalité.',
  },
  {
    icon: Users,
    title: 'Accompagnement VIP',
    description: 'On vous guide, on ajuste vos messages, et on optimise pour vendre plus.',
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
