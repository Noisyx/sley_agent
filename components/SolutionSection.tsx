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
    <section id="solution" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* soft glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-emerald-200/40 via-green-100/20 to-transparent blur-2xl"
              />

              <div className="relative w-[320px] sm:w-[340px] aspect-[9/19] rounded-[3.25rem] bg-gradient-to-b from-gray-950 to-gray-900 p-[10px] shadow-[0_25px_70px_-20px_rgba(16,185,129,0.35)] ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-1 motion-reduce:transform-none">
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
                  <div className="relative z-20 bg-[#005c4b] pt-12 pb-4 px-4 text-white shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/15 ring-1 ring-white/15 flex items-center justify-center font-extrabold">
                        <span className="text-2xl">🤖</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold leading-tight">
                          SLEY AGENT
                        </div>
                        <div className="text-[11px] text-white/75">
                          en ligne
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <div className="h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/10" />
                        <div className="h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/10" />
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
                      <div className="mx-auto w-fit rounded-full bg-black/10 px-3 py-1 text-[11px] text-gray-700">
                        Aujourd&apos;hui
                      </div>

                      <div className="flex">
                        <div className="max-w-[86%] rounded-2xl rounded-tl-md bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
                          <div>Bonjour, j&apos;aimerais des infos sur vos services.</div>
                          <div className="mt-1 text-[10px] text-gray-500 text-right">
                            10:00
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="max-w-[86%] rounded-2xl rounded-tr-md bg-[#d9fdd3] px-3 py-2 shadow-sm ring-1 ring-black/5">
                          <div>
                            Bonjour ! 👋 Je suis l&apos;assistant virtuel de Sley.
                            Que souhaitez-vous automatiser en priorité ?
                          </div>
                          <div className="mt-1 text-[10px] text-green-900/50 text-right">
                            10:00
                          </div>
                        </div>
                      </div>

                      {/* quick reply chips */}
                      <div className="flex justify-end">
                        <div className="flex flex-wrap justify-end gap-2 max-w-[92%]">
                          <div className="rounded-full bg-white/80 px-3 py-1 text-[11px] text-gray-700 ring-1 ring-black/5 shadow-sm">
                            Support client
                          </div>
                          <div className="rounded-full bg-white/80 px-3 py-1 text-[11px] text-gray-700 ring-1 ring-black/5 shadow-sm">
                            Leads &amp; ventes
                          </div>
                          <div className="rounded-full bg-white/80 px-3 py-1 text-[11px] text-gray-700 ring-1 ring-black/5 shadow-sm">
                            Prise de RDV
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="max-w-[86%] rounded-2xl rounded-tl-md bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
                          <div>Leads &amp; ventes. Je perds des prospects quand je réponds tard.</div>
                          <div className="mt-1 text-[10px] text-gray-500 text-right">
                            10:01
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="max-w-[86%] rounded-2xl rounded-tr-md bg-[#d9fdd3] px-3 py-2 shadow-sm ring-1 ring-black/5">
                          <div>
                            Parfait. Je peux qualifier vos prospects et proposer
                            la prochaine étape (devis, paiement, RDV). Vous
                            voulez une démo sur votre WhatsApp ?
                          </div>
                          <div className="mt-1 text-[10px] text-green-900/50 text-right">
                            10:01
                          </div>
                        </div>
                      </div>

                      {/* typing indicator */}
                      <div className="flex justify-end">
                        <div className="rounded-2xl rounded-tr-md bg-[#d9fdd3] px-3 py-2 shadow-sm ring-1 ring-black/5">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-900/35 animate-bounce [animation-delay:-0.2s] motion-reduce:animate-none" />
                            <span className="h-1.5 w-1.5 rounded-full bg-green-900/35 animate-bounce [animation-delay:-0.1s] motion-reduce:animate-none" />
                            <span className="h-1.5 w-1.5 rounded-full bg-green-900/35 animate-bounce motion-reduce:animate-none" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* top/bottom fades */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#EFEAE2] to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-16 left-0 right-0 h-16 bg-gradient-to-t from-[#EFEAE2] to-transparent"
                    />
                  </div>

                  {/* composer */}
                  <div className="absolute bottom-0 inset-x-0 z-20 px-4 pb-4">
                    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
                      <div className="h-8 w-8 rounded-full bg-gray-100 ring-1 ring-black/5" />
                      <div className="flex-1 text-gray-400 text-sm px-1">
                        Message…
                      </div>
                      <div className="h-9 w-9 rounded-full bg-green-500 text-white flex items-center justify-center shadow-sm">
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="mt-2 text-center text-[10px] text-gray-500/80">
                      Exemple de conversation • UI illustrative
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
