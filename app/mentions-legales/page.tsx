import Link from "next/link";

export const metadata = {
  title: "Mentions légales",
  description: "Informations légales — Sley Agent.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="text-sm font-medium text-green-700">
            ← Retour à l’accueil
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Mentions légales
        </h1>
        <div className="prose prose-gray max-w-none">
          <p>
            Cette page est un modèle. Remplacez ces informations par les
            coordonnées officielles de votre entreprise (raison sociale,
            adresse, SIRET, directeur de publication, hébergeur, etc.).
          </p>
        </div>
      </div>
    </main>
  );
}

