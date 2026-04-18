export default function CtaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Voir mon WhatsApp répondre<br />automatiquement
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Ne laissez plus vos clients attendre. Installez votre agent IA en quelques minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-emerald-700 bg-white hover:bg-gray-50 shadow-lg transition-all hover:scale-105">
                Démarrer
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
            <div className="mt-6 space-y-2 text-sm text-green-200">
              <p className="font-medium bg-green-900/30 inline-block px-4 py-1.5 rounded-full border border-green-800/50">
                🚀 Démo personnalisée offerte • Mise en place en 24h
              </p>
              <p className="opacity-80 text-xs mt-2">
                Audit gratuit de votre processus de vente • Sans aucun engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
