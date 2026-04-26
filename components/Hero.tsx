import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-8 border border-green-100">
       
          <span>Agent IA WhatsApp qui répond vite</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
          Sur WhatsApp, répondre vite<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
            c&apos;est vendre plus.
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto mb-10">
          Sley Agent répond 24h/24 à vos clients, envoie automatiquement les prix et disponibilités,
          et prend les commandes. Vous récupérez des ventes — même quand vous êtes occupé.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href={buildWhatsAppLink({
              text: "Bonjour — je suis commerçant/vendeur et je veux une démo de Sley Agent pour automatiser mon WhatsApp.",
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Voir une démo sur WhatsApp
          </Link>
          <Link
            href="/offres"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all hover:-translate-y-0.5 hover:border-gray-300"
          >
            Voir les offres
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>

        <div className="mt-10 text-sm text-gray-400 flex items-center justify-center gap-4">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            Catalogue &amp; commandes
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            Répond en &lt; 2s
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            Adapté au Togo &amp; Afrique de l&apos;Ouest
          </span>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-green-50 blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none"></div>
    </section>
  );
}
