const testimonials = [
  {
    name: "Boutique · Lomé",
    quote:
      "On a divisé notre temps de réponse et surtout on ne perd plus les prospects quand l’équipe est occupée.",
  },
  {
    name: "Vendeur · Instagram",
    quote:
      "L’assistant filtre les demandes et nous envoie uniquement les leads chauds. On gagne du temps et on vend plus sereinement.",
  },
  {
    name: "Commerce · Afrique de l’Ouest",
    quote:
      "Mise en place rapide, réponses cohérentes avec notre ton. L’expérience client est devenue beaucoup plus fluide.",
  },
];

export default function TestimonialsSection() {
  return (
    <section aria-label="Témoignages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Pensé pour convertir, construit pour durer
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Un agent IA WhatsApp qui répond instantanément, qualifie vos leads et
            protège votre image de marque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm"
            >
              <blockquote className="text-gray-800 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-gray-700">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-gray-400">
            Témoignages d’exemple (à remplacer par vos retours clients).
          </p>
        </div>
      </div>
    </section>
  );
}

