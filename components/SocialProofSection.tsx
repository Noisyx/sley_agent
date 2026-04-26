export default function SocialProofSection() {
  const items = [
    { label: "Mise en place", value: "24h" },
    { label: "Réponse aux clients", value: "< 2s" },
    { label: "Canal", value: "WhatsApp" },
    { label: "Zone", value: "Togo & AO" },
  ];

  return (
    <section aria-label="Preuves et signaux de confiance" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-100 bg-gray-50 px-6 py-6 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {item.value}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

