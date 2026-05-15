import { Bot, Smile, Send } from "lucide-react";

export default function SolutionSection() {
  const benefits = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-[#25D366]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Répond en moins de 2 secondes",
      description:
        "Réponse instantanée garantie. Ne perdez plus de ventes quand vous êtes occupé."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-[#25D366]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"></path>
        </svg>
      ),
      title: "Présente et Qualifie",
      description:
        "L'agent affiche vos prix, présente vos articles et filtre les curieux."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-[#25D366]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      title: "Prend la commande",
      description:
        "Il calcule le total avec la livraison et demande le paiement Mobile Money."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Confiez votre WhatsApp à notre <span className="text-[#25D366]">Assistant Intelligent.</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Votre assistant virtuel accueille les clients, présente vos produits et prend les commandes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">
          {/* Left: Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
            <div className="relative group">
              {/* soft glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-[#25D366]/40 via-green-100/20 to-transparent blur-2xl group-hover:blur-3xl transition-all duration-500"
              />

              <div className="relative w-[320px] sm:w-[340px] aspect-[9/19] rounded-[3.25rem] bg-gradient-to-b from-gray-950 to-gray-900 p-[10px] shadow-2xl ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-2 hover:rotate-1 motion-reduce:transform-none">
                {/* side buttons */}
                <div aria-hidden="true" className="absolute left-[-6px] top-24 h-10 w-[6px] rounded-l-md bg-gray-800/80" />
                <div aria-hidden="true" className="absolute left-[-6px] top-40 h-14 w-[6px] rounded-l-md bg-gray-800/80" />
                <div aria-hidden="true" className="absolute right-[-6px] top-32 h-20 w-[6px] rounded-r-md bg-gray-800/80" />

                {/* screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.7rem] bg-[#EFEAE2]">
                  {/* status bar */}
                  <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-5 pt-3 text-[11px] font-semibold text-white/90">
                    <span>09:41</span>
                    <div className="flex items-center gap-2 text-white/80">
                      <div className="h-2.5 w-4 rounded-sm border border-white/60" />
                      <div className="h-2.5 w-2.5 rounded-full border border-white/60" />
                      <div className="h-2.5 w-6 rounded-sm border border-white/60" />
                    </div>
                  </div>

                  {/* dynamic island / notch */}
                  <div
                    aria-hidden="true"
                    className="absolute top-2 left-1/2 z-40 h-6 w-28 -translate-x-1/2 rounded-full bg-black/70 ring-1 ring-white/10"
                  />

                  {/* header */}
                  <div className="relative z-20 bg-[#075E54] pt-12 pb-4 px-4 text-white shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center font-extrabold shadow-inner">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold leading-tight">
                          Assistant Sley
                        </div>
                        <div className="text-[11px] text-white/75 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                          en ligne
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* chat */}
                  <div className="relative z-10 h-full px-4 pb-24 pt-4">
                    {/* subtle wallpaper texture */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,black_1px,transparent_0)] [background-size:18px_18px]"
                    />

                    <div className="relative space-y-3 text-[13px] leading-snug">
                      <div className="mx-auto w-fit rounded-full bg-black/5 px-3 py-1 text-[11px] text-gray-500 font-medium">
                        Aujourd'hui
                      </div>

                      <div className="flex">
                        <div className="max-w-[86%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
                          <div>Bonjour, je veux commander 2 paires de chaussures de la nouvelle collection.</div>
                          <div className="mt-1 text-[10px] text-gray-400 text-right">
                            10:00
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="max-w-[86%] rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-3 py-2 shadow-sm ring-1 ring-black/5">
                          <div>
                            Bonjour ! Excellent choix. Ce modèle est à 15 000 FCFA l'unité, soit 30 000 FCFA au total.
                            Où souhaitez-vous être livré ?
                          </div>
                          <div className="mt-1 text-[10px] text-green-900/40 text-right">
                            10:00
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="max-w-[86%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
                          <div>Je suis à Agoè Assiyéyé.</div>
                          <div className="mt-1 text-[10px] text-gray-400 text-right">
                            10:01
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="max-w-[86%] rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-3 py-2 shadow-sm ring-1 ring-black/5">
                          <div>
                            D'accord. La livraison à Agoè coûte 1 000 FCFA. 
                            Le total est donc de 31 000 FCFA. 
                            Voulez-vous payer par T-Money ou Flooz ?
                          </div>
                          <div className="mt-1 text-[10px] text-green-900/40 text-right">
                            10:01
                          </div>
                        </div>
                      </div>

                      {/* typing indicator */}
                      <div className="flex justify-start">
                        <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.2s] motion-reduce:animate-none" />
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.1s] motion-reduce:animate-none" />
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce motion-reduce:animate-none" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* top/bottom fades */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#EFEAE2] to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-16 left-0 right-0 h-16 bg-gradient-to-t from-[#EFEAE2] to-transparent"
                    />
                  </div>

                  {/* composer */}
                  <div className="absolute bottom-0 inset-x-0 z-20 px-4 pb-4 bg-[#EFEAE2]/90 backdrop-blur-sm pt-2">
                    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <Smile className="w-5 h-5" />
                      </div>
                      <div className="flex-1 text-gray-400 text-sm px-1">
                        Message
                      </div>
                      <div className="h-9 w-9 rounded-full bg-[#00A884] text-white flex items-center justify-center shadow-md">
                        <Send className="w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[3.25rem] ring-1 ring-white/10 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
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
