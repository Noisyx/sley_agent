import Link from "next/link";

export const metadata = {
  title: "Mentions légales",
  description: "Informations légales — Sley AI.",
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">
          Mentions légales
        </h1>
        <div className="max-w-none text-black">
          <p>
            Conformément aux dispositions applicables, les informations
            suivantes sont portées à la connaissance des utilisateurs du site.
          </p>

          <h2>Éditeur du site</h2>
          <p>
            <strong>META WEB SOLUTIONS SARL U</strong>
            <br />
            Quartier: SEGBER, Lomé, TOGO
            <br />
            Téléphone:{" "}
            <a href="tel:+22893476467" className="no-underline">
              +228 93 47 64 67
            </a>
            <br />
            Email:{" "}
            <a href="mailto:soulemanesalime@gmail.com" className="no-underline">
              soulemanesalime@gmail.com
            </a>
          </p>

          <h2>Directeur de publication</h2>
          <p>META WEB SOLUTIONS SARL U.</p>

          <h2>Hébergement</h2>
          <p>
            <strong>o2switch</strong>
            <br />
            Chem. des Pardiaux, 63000 Clermont-Ferrand, France
            <br />
            Téléphone:{" "}
            <a href="tel:+33444446040" className="no-underline">
              +33 4 44 44 60 40
            </a>
            <br />
            Site:{" "}
            <a
              href="https://www.o2switch.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              www.o2switch.fr
            </a>
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les contenus (textes, visuels, éléments graphiques, logos, etc.)
            présents sur ce site sont protégés. Toute reproduction, diffusion
            ou exploitation sans autorisation préalable est interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            L’éditeur s’efforce d’assurer l’exactitude des informations publiées
            sur le site. Toutefois, il ne peut garantir l’absence d’erreurs ou
            d’omissions, ni la disponibilité permanente du service.
          </p>
        </div>
      </div>
    </main>
  );
}

