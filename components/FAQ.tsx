"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Est-ce que ça marche pour mon business ?",
    answer: "Oui, absolument. Que vous soyez artisan, e-commerçant, consultant ou restaurateur, Sley Agent s'adapte à votre activité. Nous avons déjà accompagné des dizaines d'entreprises dans des secteurs variés et nous configurons ensemble l'assistant pour qu'il réponde parfaitement à vos besoins spécifiques."
  },
  {
    question: "Combien de temps pour la mise en place ?",
    answer: "La plupart de nos clients sont opérationnels en moins de 24h. Une fois votre offre choisie, nous planifions ensemble un court appel de configuration et nous vous guidons pas à pas. Vous pouvez commencer à automatiser vos réponses dès la première heure."
  },
  {
    question: "Est-ce que je peux modifier les messages ?",
    answer: "Absolument. Vous pouvez modifier les messages à tout moment depuis votre espace client. Nous vous accompagnons pour configurer les messages qui correspondent le mieux à votre activité."
  },
  {
    question: "Est-ce que je peux changer d'offre en cours de route ?",
    answer: "Bien sûr, vous pouvez passer à une offre supérieure à tout moment."
  },
  {
    question: "Est-ce que vous proposez un accompagnement ?",
    answer: "Oui, surtout dans les offres Pro et Premium. Nous vous accompagnons dans la mise en place et l'utilisation de nos services. Contactez-nous pour en bénéficier."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 ">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-gray-600 ">
            Trouvez les réponses à vos questions. Si vous ne trouvez pas ce que vous cherchez, contactez-nous.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl transition-all duration-200 border ${isOpen ? 'border-green-500 shadow-md flex-col' : 'border-gray-200 hover:border-gray-300'
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span className={`ml-6 flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-colors ${isOpen ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
