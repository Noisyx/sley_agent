"use client";

import React, { useMemo, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Tier = {
  name: string;
  tagline: string;
  price: string;
  description: string;
  idealFor: string;
  capacity: string;
  support: string;
  outcomes: string[];
  features: string[];
  cta: string;
  highlighted: boolean;
  whatsappContext: string;
};

type Persona = "commerce" | "transport";

const personaLabels: Record<Persona, string> = {
  commerce: "Vendeurs",
  transport: "Agences",
};

const conversationDefinitionTitle = "Conversations";
const conversationDefinitionBody =
  "1 conversation = 1 client sur 24h (messages illimités). Au-delà: upgrade ou pack.";

export default function PricingCards() {
  const [persona, setPersona] = useState<Persona>("commerce");

  const tiers = useMemo<Tier[]>(() => {
    if (persona === "transport") {
      return [
        {
          name: "STANDARD",
          tagline: "Réservations & infos",
          price: "15 000 XOF",
          description:
            "Réponses automatiques + infos clés + pré-réservation simple.",
          idealFor: "Petits opérateurs, lignes fixes, faible volume",
          capacity: "500 conversations / mois",
          support: "Mise en place incluse",
          outcomes: [
            "Horaires & tarifs automatiques",
            "Infos passagers collectées",
            "Récapitulatif envoyé à l’équipe",
          ],
          features: [
            "Réponses 24h/24, 7j/7 (horaires, tarifs, départs)",
            "Collecte des infos (départ, destination, date, passagers)",
            "Récapitulatif + transfert à votre équipe",
          ],
          cta: "Choisir STANDARD",
          highlighted: false,
          whatsappContext: "transport/agence",
        },
        {
          name: "PREMIUM",
          tagline: "Fort volume & intégrations",
          price: "45 000 XOF",
          description:
            "Agent sur-mesure + procédures + relances + intégrations.",
          idealFor: "Agences, transporteurs, livraison, fort volume",
          capacity: "2 500 conversations / mois",
          support: "Support VIP",
          outcomes: [
            "Règles métier sur-mesure",
            "Relances automatiques",
            "Intégrations (selon besoin)",
          ],
          features: [
            "Tout le Standard",
            "IA entraînée sur vos règles (bagages, retard, remboursements)",
            "Réservation & paiement (selon intégration)",
            "Relances automatiques",
            "Connexion CRM / outils (via n8n)",
          ],
          cta: "Choisir PREMIUM",
          highlighted: true,
          whatsappContext: "transport/agence",
        },
      ];
    }

    return [
      {
        name: "STARTER",
        tagline: "Catalogue & commandes",
        price: "15 000 XOF",
        description:
          "Réponses automatiques + prix/disponibilités + prise de commande.",
        idealFor: "Vendeurs IG/FB, petites boutiques, restaurants",
        capacity: "500 conversations / mois",
        support: "Mise en place incluse",
        outcomes: [
          "Prix & dispo instantanés",
          "Commandes prises automatiquement",
          "Moins de messages à gérer",
        ],
        features: [
          "Réponses 24h/24, 7j/7",
          "Prix, disponibilité, variantes, FAQ",
          "Commande + récapitulatif (livraison / retrait)",
          "Connexion catalogue / stock",
        ],
        cta: "Choisir STARTER",
        highlighted: false,
        whatsappContext: "commerçant/vendeur",
      },
      {
        name: "PRO",
        tagline: "Vendre plus, avec relances",
        price: "45 000 XOF",
        description:
          "Agent sur-mesure + relances + règles métier + intégrations.",
        idealFor: "Boutiques actives, multi-produits, volume élevé",
        capacity: "2 500 conversations / mois",
        support: "Support VIP",
        outcomes: [
          "Relances pour récupérer des ventes",
          "Règles (zones, délais, promos)",
          "Intégrations (selon besoin)",
        ],
        features: [
          "Tout le Starter",
          "Ton & règles: zones, délais, conditions, promos",
          "Relances paniers / prospects (selon scénario)",
          "Paiement & suivi (selon intégration)",
          "Connexion stock / CRM (via n8n)",
        ],
        cta: "Choisir PRO",
        highlighted: true,
        whatsappContext: "commerçant/vendeur",
      },
    ];
  }, [persona]);

  return (
    <section
      aria-label="Offres"
      className="py-16 mt-32 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700 ring-1 ring-green-200 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Deux forfaits, prêts à activer
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Choisissez votre profil, puis votre plan
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Des offres claires selon votre métier et votre volume.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            {(["commerce", "transport"] as const).map((p) => {
              const active = persona === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPersona(p)}
                  className={`flex-1 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold ring-1 transition-colors ${
                    active
                      ? "bg-white text-gray-900 ring-gray-200 shadow-sm"
                      : "bg-gray-50 text-gray-700 ring-gray-200 hover:bg-gray-100"
                  }`}
                  aria-pressed={active}
                >
                  {personaLabels[p]}
                </button>
              );
            })}
          </div>
          <div className="mt-4 rounded-2xl bg-white px-4 py-3 ring-1 ring-gray-200 text-left">
            <div className="text-xs font-semibold text-gray-900">
              {conversationDefinitionTitle}
            </div>
            <div className="mt-1 text-xs text-gray-600">
              {conversationDefinitionBody}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

              <div className="p-7 sm:p-8 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      {tier.name}{" "}
                    </h3>
                   
                  </div>
                  <div className="hidden sm:inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200">
                    {tier.support}
                  </div>
                </div>

                <p className="mt-4 text-gray-700 text-base">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-extrabold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-gray-500 font-medium pb-1">/mois</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Sans engagement • {tier.support}
                </div>

                <div className="mt-7 rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-100">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    En pratique
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {tier.outcomes.map((item) => (
                      <li key={item} className="flex gap-3 text-gray-800">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <details className="mt-6">
                  <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 hover:text-gray-900">
                    Voir tout ce qui est inclus
                  </summary>
                  <ul className="mt-4 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-gray-700">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </details>

                <div className="mt-10 flex flex-col gap-3">
                  <Link
                    href={buildWhatsAppLink({
                      text: `Bonjour — je suis ${tier.whatsappContext} et je veux choisir le forfait ${tier.name} (${tier.price}/mois).`,
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
