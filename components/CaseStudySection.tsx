import Link from "next/link";
import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function CaseStudySection() {
  const stats = [
    { label: "Temps de réponse", value: "—%" },
    { label: "Commandes récupérées", value: "—/semaine" },
    { label: "Messages gérés", value: "—/jour" },
  ] as const;

  return (
    <section
      id="results"
      aria-label="Résultats"
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-100">
              Nos clients sont satisfaits
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Un vendeur WhatsApp qui répond vite
              <span className="text-emerald-600"> vend plus</span>.
            </h2>

            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Ci-dessous, un format de mini cas client. Dès que tu me donnes tes
              chiffres réels, je remplace tout pour que ça devienne une preuve
              “difficile à faker”.
            </p>

            <div className="mt-7 rounded-3xl border border-gray-100 bg-gray-50 p-6">
              <div className="text-sm font-semibold text-gray-900">
                Restaurant — Lomé
              </div>
              <p className="mt-2 text-gray-700 leading-relaxed">
                “Avant, on répondait tard et on perdait des clients. Maintenant,
                l’agent répond vite, confirme les réservations et on ne rate plus
                les demandes.”
              </p>

            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href={buildWhatsAppLink({
                  text: "Bonjour — je veux un mini audit de mon WhatsApp (prix/dispo/commandes) et une démo de Sley Agent.",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm transition-colors"
              >
                Demander une démo
              </Link>
              <Link
                href="/offres"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold ring-1 ring-gray-200 transition-colors"
              >
                Voir les offres
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-200/40 via-green-100/10 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2.75rem] border border-gray-100 bg-white shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/client-satisfaits.png"
                  alt="Client restaurant à Lomé satisfait de la solution"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="text-sm font-semibold text-gray-900">
                  Client satisfait — Restaurant à Lomé
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Exemple réel d’usage WhatsApp (réservations/commandes). On
                  adapte la configuration à vos produits, prix et règles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

