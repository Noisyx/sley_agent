import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité — Sley Agent.",
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="text-sm font-medium text-green-700">
            ← Retour à l’accueil
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Politique de confidentialité
        </h1>
        <div className="prose prose-gray max-w-none">
          <p>
            Cette page est un modèle. Décrivez quelles données sont collectées,
            pourquoi, pendant combien de temps, et comment les utilisateurs
            peuvent exercer leurs droits (RGPD).
          </p>
        </div>
      </div>
    </main>
  );
}

