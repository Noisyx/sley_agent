"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const faqs = [
  {
    question: "Mon numéro WhatsApp peut-il être banni ?",
    answer:
      "Non. Nous utilisons l'API officielle WhatsApp Business — votre numéro est protégé et conforme aux règles de Meta.",
  },
  {
    question: "Quelle est la différence entre Essential et Pro ?",
    answer:
      "Essential digitalise et automatise vos processus WhatsApp (parcours, catalogue, commandes). Pro reprend Essential et ajoute un assistant commercial IA disponible 24h/24, adapté à votre métier.",
  },
  {
    question: "Pour qui est SLEY ?",
    answer:
      "Pour les restaurants et les agences de transport et livraison de colis.",
  },
  {
    question: "Combien de temps pour la mise en place ?",
    answer:
      "Moins de 02 semaines. Vous nous donnez vos infos (offre, prix, horaires), on configure, et vous validez avant la mise en ligne.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait ?",
    answer:
      "Vous avez 30 jours d'essai gratuit, sans engagement. Si ça ne vous convient pas, vous ne payez rien.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background"
      aria-label="Questions fréquentes"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Des réponses claires, sans blabla. Une autre question ? On vous répond sur WhatsApp.
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
                  className={`group flex w-full items-center justify-between gap-6 p-6 text-left rounded-2xl border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${isOpen
                    ? "bg-surface border-primary shadow-sm shadow-foreground/5"
                    : "bg-surface border-border hover:border-border-strong"
                    }`}
                >
                  <span className="text-lg font-semibold text-foreground leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-colors ring-1 ${isOpen
                      ? "bg-primary-subtle text-primary ring-primary/25"
                      : "bg-background text-foreground ring-border group-hover:bg-surface-muted"
                      }`}
                    aria-hidden="true"
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-4">
                      <p className="text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-base font-extrabold text-foreground">
                Vous avez un cas spécifique ?
              </div>
              <div className="mt-1 text-sm text-muted">
                Envoyez-nous un message, on vous répond rapidement.
              </div>
            </div>
            <Link
              href={buildWhatsAppLink({
                text: "Bonjour — j'ai une question à propos de Sley AI.",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-sm transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Poser ma question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
