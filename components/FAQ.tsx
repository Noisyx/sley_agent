"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const faqs = [
  {
    question: "Est-ce que ça marche pour mon business ?",
    answer:
      "Oui. On configure vos réponses, vos prix, vos horaires et votre ton pour coller à votre activité.",
  },
  {
    question: "Combien de temps pour la mise en place ?",
    answer:
      "Généralement en moins de 24h. Vous nous donnez vos infos, on paramètre, et vous validez.",
  },
  {
    question: "Est-ce que je peux modifier les messages ?",
    answer:
      "Oui. Vous gardez la main et on vous aide à garder un ton qui convertit.",
  },
  {
    question: "Est-ce que je peux changer d'offre en cours de route ?",
    answer:
      "Oui. Vous pouvez passer à une offre supérieure à tout moment, selon votre volume et vos besoins.",
  },
  {
    question: "Transport / livraison : est-ce que l’agent peut prendre une réservation ?",
    answer:
      "Oui. Il peut confirmer une course, demander les infos utiles (lieu, heure, destination), et envoyer un récapitulatif au client.",
  },
  {
    question: "Et si un client écrit la nuit ou le week-end ?",
    answer:
      "Il reçoit une réponse tout de suite. Vous ne perdez plus de clients à cause d’un message vu trop tard.",
  },
  {
    question: "Est-ce que vous proposez un accompagnement ?",
    answer:
      "Oui. Mise en place incluse, puis optimisation continue selon votre offre.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-label="Questions fréquentes"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Des réponses claires, sans blabla. Si vous avez un cas spécifique,
            on vous répond sur WhatsApp.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-faq-btn-${index}`;
            const panelId = `${baseId}-faq-panel-${index}`;
            return (
              <div key={faq.question} className="rounded-2xl">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className={`group flex w-full items-center justify-between gap-6 p-6 text-left rounded-2xl border transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    isOpen
                      ? "bg-white border-green-500 shadow-sm"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="text-lg font-semibold text-gray-900 leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-colors ring-1 ${
                      isOpen
                        ? "bg-green-50 text-green-700 ring-green-200"
                        : "bg-gray-50 text-gray-700 ring-gray-200 group-hover:bg-gray-100"
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-base font-extrabold text-gray-900">
                Vous avez un cas spécifique ?
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Envoyez-nous un message, on vous répond rapidement.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={buildWhatsAppLink({
                  text: "Bonjour — j’ai une question à propos de Sley Agent.",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-sm transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold ring-1 ring-gray-200 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
