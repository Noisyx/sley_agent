export default function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-red-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
        </svg>
      ),
      title: "Messages ignorés = clients perdus",
      description: "Un prospect qui ne reçoit pas de réponse dans les 5 minutes a 80% de chances d'aller voir vos concurrents."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-orange-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Réponses tardives = perte de confiance",
      description: "Le délai de réponse est le premier critère de professionnalisme sur WhatsApp. Ne laissez pas votre image se dégrader."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-yellow-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
      title: "Trop de demandes = surcharge mentale",
      description: "Passer votre journée à répondre aux mêmes questions vous empêche de vous concentrer sur le développement de votre activité."
    }
  ];

  return (
    <section className="bg-[#0a1913] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vos clients vous écrivent<br />tous les jours.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Mais entre les occupations, les oublis et les retards... vous perdez des ventes sans même vous en rendre compte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
