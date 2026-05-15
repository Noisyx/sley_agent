import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité — Sley AI.",
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
        <div className="max-w-none text-black">
          <p>
            La présente politique décrit comment les données personnelles sont
            traitées lorsque vous utilisez ce site.
          </p>
          <p className="text-sm text-gray-600">
            Dernière mise à jour: 27 avril 2026
          </p>

          <h2>Responsable du traitement</h2>
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

          <h2>Données collectées</h2>
          <ul>
            <li>
              <strong>Données de contact</strong>: si vous nous contactez
              (email, WhatsApp, formulaire), nous recevons les informations que
              vous nous transmettez (nom, numéro, message).
            </li>
            <li>
              <strong>Données de navigation</strong>: des informations techniques
              peuvent être collectées (pages visitées, type d’appareil, etc.)
              pour assurer le bon fonctionnement et la sécurité du site.
            </li>
          </ul>

          <h2>Finalités</h2>
          <ul>
            <li>Répondre à vos demandes et messages.</li>
            <li>Améliorer le site et mesurer la performance.</li>
            <li>Assurer la sécurité et prévenir la fraude/abus.</li>
          </ul>

          <h2>Base légale</h2>
          <ul>
            <li>
              <strong>Consentement</strong> (ex: lorsque vous nous contactez).
            </li>
            <li>
              <strong>Intérêt légitime</strong> (ex: sécurité du site,
              statistiques).
            </li>
            <li>
              <strong>Exécution de mesures précontractuelles</strong> (ex: demande
              de démo/offres).
            </li>
          </ul>

          <h2>Durée de conservation</h2>
          <p>
            Les messages et demandes sont conservés le temps nécessaire au
            traitement et au suivi commercial, puis supprimés ou anonymisés
            selon les besoins légaux et opérationnels.
          </p>

          <h2>Partage des données</h2>
          <p>
            Nous ne vendons pas vos données. Elles peuvent être traitées par nos
            prestataires techniques (hébergement, outils de communication) dans
            la limite nécessaire au fonctionnement du service.
          </p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par <strong>o2switch</strong> (France).
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

          <h2>Transferts hors de votre pays</h2>
          <p>
            Selon les outils utilisés (email, WhatsApp, analytics), certaines
            données peuvent transiter ou être traitées hors du Togo. Dans ce cas,
            nous faisons de notre mieux pour limiter les données partagées et
            utiliser des prestataires reconnus.
          </p>

          <h2>Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures raisonnables pour protéger vos
            données (accès restreint, mesures techniques et organisationnelles).
            Aucun système n’étant infaillible, nous ne pouvons toutefois
            garantir une sécurité absolue.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l’accès, la rectification, la suppression, ou
            la limitation du traitement de vos données, ainsi que vous opposer
            au traitement lorsque cela est applicable.
          </p>
          <p>
            Pour exercer vos droits, contactez-nous à{" "}
            <a href="mailto:soulemanesalime@gmail.com">soulemanesalime@gmail.com</a>
            .
          </p>

          <h2>Cookies</h2>
          <p>
            Le site peut utiliser des cookies/traceurs nécessaires au
            fonctionnement. Si des cookies de mesure d’audience ou marketing
            sont ajoutés, une bannière de consentement devra être mise en place.
          </p>
        </div>
      </div>
    </main>
  );
}

