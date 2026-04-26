export default function ExamplesSection() {
  const examples = [
    {
      from: "Client",
      text: "Bonsoir, c’est combien ?",
      tone: "client",
    },
    {
      from: "Sley Agent",
      text: "Bonsoir ! Quel produit vous intéresse et quelle quantité ? Je vous donne le prix tout de suite.",
      tone: "agent",
    },
    {
      from: "Client",
      text: "C’est disponible ? Vous livrez à Agoè ?",
      tone: "client",
    },
    {
      from: "Sley Agent",
      text: "Oui c’est dispo. On livre à Agoè. Vous préférez livraison aujourd’hui ou demain ?",
      tone: "agent",
    },
    {
      from: "Client",
      text: "Je prends 2. Comment je paie ?",
      tone: "client",
    },
    {
      from: "Sley Agent",
      text: "Parfait. Je vous envoie le récapitulatif et les options de paiement (cash / mobile money). Quel est votre nom et votre localisation ?",
      tone: "agent",
    },
  ] as const;

  return (
    <section
      id="examples"
      className="py-24 bg-white"
      aria-label="Exemples de messages WhatsApp"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Ce que vos clients écrivent (et ce que l’agent répond)
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Des réponses rapides, cohérentes, et orientées commande — sans vous
            monopoliser.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
          <div className="space-y-3">
            {examples.map((m, idx) => {
              const isAgent = m.tone === "agent";
              return (
                <div
                  key={idx}
                  className={`flex ${isAgent ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[92%] rounded-2xl px-4 py-3 shadow-sm ring-1 ${
                      isAgent
                        ? "bg-[#d9fdd3] text-gray-900 ring-black/5"
                        : "bg-white text-gray-900 ring-black/5"
                    }`}
                  >
                    <div className="text-[11px] font-semibold text-gray-500 mb-1">
                      {m.from}
                    </div>
                    <div className="text-sm leading-relaxed">{m.text}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center text-xs text-gray-400">
            Exemples illustratifs — on adapte les messages à vos produits, prix,
            zones et règles.
          </div>
        </div>
      </div>
    </section>
  );
}

