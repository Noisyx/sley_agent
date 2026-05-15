import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Gift } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">
            Un employé parfait, pour le prix d'un abonnement internet.
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Pas d'investissement énorme. Nous configurons l'assistant pour vous, et vous payez un petit abonnement mensuel.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/50 overflow-hidden border border-zinc-100">
          <div className="bg-[#128C7E] px-8 py-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white mb-2">
              <Gift className="w-4 h-4" /> 7 Jours d'Essai Gratuit
            </span>
            <p className="text-green-50 text-sm font-medium">Sans aucun engagement</p>
          </div>

          <div className="p-8 sm:p-10 text-center">
            <div className="text-zinc-500 mb-2 font-medium uppercase tracking-wide">À partir de</div>
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="flex items-center text-5xl font-extrabold text-zinc-900">
                15 000 <span className="text-2xl text-zinc-500 ml-2 font-semibold">FCFA / mois</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 text-left text-zinc-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#25D366] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Réponses instantanées 24/7
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#25D366] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Présentation catalogue & prix
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#25D366] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Prise de commandes
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#25D366] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Passage à l'humain si besoin
              </li>
            </ul>

            <Link
              href={buildWhatsAppLink({ text: "Bonjour, je suis intéressé par l'essai gratuit de 7 jours de Sley AI." })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-4 px-6 bg-[#128C7E] hover:bg-[#075E54] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#128C7E]/20 transition-transform hover:-translate-y-1"
            >
              Commencer mon essai gratuit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
