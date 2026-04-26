import React from 'react';

export default function PricingHero() {
  return (
    <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 text-center bg-gray-50 ">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-800 text-sm font-medium mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>
          Automatisez WhatsApp. Répondez 24h/24.
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Des offres par métier, pour vendre plus sur WhatsApp
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Commerçants/vendeurs ou transport/agence: choisissez votre profil et
          activez l’agent en 24h.
        </p>
      </div>
    </section>
  );
}
