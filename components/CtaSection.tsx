import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function CtaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-emerald-500 to-emerald-700 p-10 sm:p-12 md:p-16 text-center shadow-[0_35px_90px_-50px_rgba(16,185,129,0.6)] ring-1 ring-white/15">
          {/* Background decoration */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-black/10 blur-3xl"
          />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Voir mon WhatsApp répondre<br />automatiquement
            </h2>
            <p className="text-lg sm:text-xl text-emerald-50/90 mb-8 max-w-2xl mx-auto">
              Ne laissez plus vos clients attendre. Installez votre agent IA en quelques minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={buildWhatsAppLink({
                  text: "Bonjour — je veux installer Sley Agent (mise en place en 24h).",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-extrabold rounded-full text-emerald-800 bg-white hover:bg-white/95 shadow-lg transition-transform hover:scale-[1.02] motion-reduce:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700"
              >
                Démarrer
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link
                href="/offres"
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold rounded-full bg-white/10 hover:bg-white/15 text-white ring-1 ring-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700"
              >
                Voir les offres
              </Link>
            </div>
            <div className="mt-7 space-y-2 text-sm text-emerald-50/85">
              <p className="font-semibold bg-black/10 inline-block px-4 py-1.5 rounded-full ring-1 ring-white/15">
                Démo personnalisée • Mise en place en 24h
              </p>
              <p className="text-xs text-emerald-50/70">
                Audit gratuit de votre processus de vente • Sans engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
