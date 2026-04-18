export default function SolutionSection() {
  const benefits = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 text-green-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Répond en moins de 2 secondes",
      description: "Ne faites plus attendre personne. L'IA saisit l'opportunité au moment exact où le client est prêt à acheter."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 text-green-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"></path>
        </svg>
      ),
      title: "Qualifie automatiquement les prospects",
      description: "L'assistant pose les questions clés pour filtrer les curieux et identifier vos meilleurs futurs clients."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 text-green-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      title: "Transforme les conversations en ventes",
      description: "Plus qu'un support, c'est un commercial infatigable qui guide vos prospects vers le paiement."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl shadow-green-900/20 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 rounded-b-3xl"></div>
              {/* Chat Interface Mockup */}
              <div className="bg-[#EFEAE2] w-full h-full p-4 flex flex-col">
                <div className="bg-[#005c4b] -mx-4 -mt-4 p-4 text-white flex items-center gap-3 shadow-md mb-4 pt-8">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold">SA</div>
                  <div>
                    <div className="font-semibold text-sm">Sley Agent</div>
                    <div className="text-xs text-white/80">en ligne</div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 text-sm">
                  <div className="bg-white p-3 rounded-tr-lg rounded-b-lg max-w-[85%] shadow-sm w-fit">
                    Bonjour, j'aimerais des infos sur vos services.
                    <div className="text-[10px] text-gray-500 text-right mt-1">10:00</div>
                  </div>
                  <div className="bg-[#d9fdd3] p-3 rounded-tl-lg rounded-b-lg max-w-[85%] shadow-sm ml-auto w-fit">
                    Bonjour ! 👋 Je suis l'assistant virtuel de Sley. Je serai ravi de vous aider. Que recherchez-vous exactement ?
                    <div className="text-[10px] text-green-800/60 text-right mt-1">10:00</div>
                  </div>
                  <div className="bg-white p-3 rounded-tr-lg rounded-b-lg max-w-[85%] shadow-sm w-fit">
                    Je veux automatiser mon support client WhatsApp.
                    <div className="text-[10px] text-gray-500 text-right mt-1">10:01</div>
                  </div>
                  <div className="bg-[#d9fdd3] p-3 rounded-tl-lg rounded-b-lg max-w-[85%] shadow-sm ml-auto w-fit">
                    C'est exactement ce que nous faisons ! Nous pouvons diviser votre temps de réponse par 10. Voulez-vous voir une démo ?
                    <div className="text-[10px] text-green-800/60 text-right mt-1">10:01</div>
                  </div>
                </div>

                <div className="mt-4 bg-white rounded-full flex items-center p-2 shadow-sm">
                  <div className="flex-1 text-gray-400 text-sm px-4">Message...</div>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Pendant que vous travaillez... ou dormez, votre assistant <span className="text-green-600">répond instantanément</span> à chaque client.
            </h2>

            <div className="space-y-8 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center border border-green-100">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
