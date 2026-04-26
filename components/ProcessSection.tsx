export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Connectez votre WhatsApp",
      description: "Une minute suffira. Scannez un simple QR code pour lier votre numéro."
    },
    {
      number: "2",
      title: "Personnalisez votre assistant",
      description: "On configure vos produits, prix, zones de livraison, horaires et réponses fréquentes."
    },
    {
      number: "3",
      title: "Laissez-le répondre et vendre",
      description: "Asseyez-vous et regardez les conversations se transformer en revenus."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
          <p className="text-xl text-gray-500">Trois étapes simples pour transformer votre WhatsApp.</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-100" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-white border-4 border-green-50 text-green-600 text-2xl font-bold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
