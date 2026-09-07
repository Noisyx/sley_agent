import type { Metadata } from "next";
import Link from "next/link";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { Shield, Lock, Server, CheckCircle2, Mail, ExternalLink, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | SLEY AI — Daana Tech",
  description:
    "Politique de confidentialité officielle de SLEY AI (opéré par Daana Tech) régissant la collecte et le traitement des données dans le cadre de l'intégration WhatsApp Business Cloud API.",
  alternates: {
    canonical: "https://daana.tech/confidentialite",
  },
};

export default function ConfidentialitePage() {
  const lastUpdated = "7 septembre 2026";

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <LegalNavbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Top Badges & Meta Info */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-semibold">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            Conformité Meta WhatsApp Business Platform
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
            <RefreshCw className="w-3 h-3 text-gray-400" />
            Dernière mise à jour : {lastUpdated}
          </span>
        </div>

        {/* Header Section */}
        <header className="border-b border-gray-200 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            La présente Politique de Confidentialité régit la manière dont <strong>SLEY AI</strong>, 
            service opéré par <strong>METAWEB SOLUTION / Daana Tech</strong>, collecte, traite, utilise, 
            sécurise et protège les données des entreprises clientes et de leurs utilisateurs dans 
            le cadre de son intégration officielle avec la plateforme WhatsApp Cloud API de Meta.
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Card: Summary Specs for Meta Reviewers */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 text-sm text-slate-700 space-y-3">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              Informations clés pour Meta App Review &amp; Utilisateurs
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <li>
                <span className="font-semibold text-gray-900">Application Meta :</span> SLEY AI (App ID : 1390061966141378)
              </li>
              <li>
                <span className="font-semibold text-gray-900">Entité éditrice :</span> METAWEB SOLUTION / Daana Tech
              </li>
              <li>
                <span className="font-semibold text-gray-900">Domaine principal :</span>{" "}
                <a href="https://daana.tech" className="text-emerald-700 underline">https://daana.tech</a>
              </li>
              <li>
                <span className="font-semibold text-gray-900">Domaine secondaire :</span> ai.sley.group
              </li>
              <li>
                <span className="font-semibold text-gray-900">Qualité :</span> Tech Provider WhatsApp Cloud API (Coexistence)
              </li>
              <li>
                <span className="font-semibold text-gray-900">Contact DPO / Sécurité :</span>{" "}
                <a href="mailto:contact@daana.tech" className="text-emerald-700 font-medium">contact@daana.tech</a>
              </li>
            </ul>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">01.</span>
              Qui nous sommes (Responsable du Traitement)
            </h2>
            <p>
              Le service <strong>SLEY AI</strong> est développé, édité et exploité par <strong>METAWEB SOLUTION / Daana Tech</strong>, 
              agissant en qualité de responsable du traitement pour la gestion de la relation client et de sous-traitant technique 
              (Tech Provider) pour les données relatives aux échanges WhatsApp de ses entreprises clientes.
            </p>
            <p>
              SLEY AI fournit une plateforme d&apos;automatisation basée sur l&apos;Intelligence Artificielle permettant aux 
              entreprises de connecter leur compte WhatsApp Business App existant en mode <em>coexistence</em> (companion mode 
              via <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono text-gray-800">whatsapp_business_app_onboarding</code>) 
              afin d&apos;automatiser le service client, de qualifier les prospects et de délivrer des codes d&apos;authentification (OTP).
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">02.</span>
              Données collectées via le flux Meta Embedded Signup &amp; WhatsApp
            </h2>
            <p>
              Dans le cadre strict de l&apos;initialisation et du fonctionnement du service via le flux d&apos;intégration 
              sécurisé <strong>Meta Embedded Signup</strong> (Facebook Login for Business), nous collectons exclusivement les données suivantes :
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Identifiants techniques WhatsApp Business</h3>
                <p className="text-sm text-gray-600">
                  L&apos;identifiant de compte WhatsApp Business (<code className="font-mono text-xs bg-white px-1 border border-gray-200 rounded">waba_id</code>), 
                  l&apos;identifiant du numéro de téléphone (<code className="font-mono text-xs bg-white px-1 border border-gray-200 rounded">phone_number_id</code>), 
                  le numéro de téléphone professionnel connecté et le nom d&apos;affichage du profil WhatsApp approuvé par Meta.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Jetons d&apos;accès sécurisés Meta</h3>
                <p className="text-sm text-gray-600">
                  Les jetons d&apos;accès chiffrés (System User Tokens) générés lors de l&apos;onboarding avec votre autorisation, 
                  strictement nécessaires pour communiquer avec la WhatsApp Business Platform de Meta au nom de votre entreprise.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Contenu des messages conversationnels (Traitement IA)</h3>
                <p className="text-sm text-gray-600">
                  Lorsque l&apos;entreprise cliente active délibérément le module d&apos;Agent IA sur son compte, le contenu textuel 
                  des messages entrants reçus sur le numéro connecté est traité temporairement par nos algorithmes afin de formuler 
                  des réponses instantanées (informations produits, horaires, devis, prise de commande).
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Données d&apos;état de coexistence et contacts (<code className="font-mono text-xs">smb_app_state_sync</code>)</h3>
                <p className="text-sm text-gray-600">
                  Pour maintenir la synchronisation parfaite entre l&apos;application mobile WhatsApp Business sur votre smartphone 
                  et la Cloud API (mode Companion), les métadonnées de synchronisation de l&apos;état de l&apos;application 
                  sont traitées afin d&apos;éviter les doublons de réponses et d&apos;assurer la continuité opérationnelle.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">03.</span>
              Pourquoi nous collectons ces données (Finalités)
            </h2>
            <p>Toutes les données collectées sont strictement cantonnées aux finalités suivantes :</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong>Fourniture du service d&apos;Agent IA 24/7 :</strong> Analyser la requête d&apos;un client final et générer 
                automatiquement une réponse conforme au catalogue et aux consignes du marchand.
              </li>
              <li>
                <strong>Distribution de codes OTP et notifications transactionnelles :</strong> Permettre l&apos;envoi sécurisé 
                de messages d&apos;authentification à un facteur ou de confirmations de commande.
              </li>
              <li>
                <strong>Fourniture du Tableau de Bord Marchand (Dashboard) :</strong> Visualiser l&apos;activité, les statistiques 
                de conversation, les commandes reçues et piloter les réglages de l&apos;IA.
              </li>
              <li>
                <strong>Maintien de la sécurité et conformité :</strong> Assurer le respect des Politiques Commerciales WhatsApp 
                et lutter contre la fraude ou l&apos;envoi de messages non sollicités (spam).
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">04.</span>
              Base légale du traitement
            </h2>
            <p>Conformément aux réglementations sur la protection des données personnelles (dont le RGPD), le traitement repose sur :</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong>Le consentement explicite :</strong> Accordé par l&apos;administrateur de l&apos;entreprise lors du 
                Facebook Login for Business et de la sélection des autorisations demandées.
              </li>
              <li>
                <strong>L&apos;exécution contractuelle :</strong> Le traitement est indispensable à l&apos;exécution du contrat de service 
                souscrit entre l&apos;entreprise cliente et METAWEB SOLUTION / Daana Tech.
              </li>
              <li>
                <strong>L&apos;intérêt légitime :</strong> Prévention des incidents techniques, sécurisation de nos serveurs et amélioration 
                de la résilience de notre infrastructure.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">05.</span>
              Hébergement, Sécurité et Durée de Conservation
            </h2>
            <div className="space-y-3">
              <p>
                <strong>Lieu d&apos;hébergement :</strong> Les données sont hébergées sur des infrastructures sécurisées situées 
                au sein de l&apos;Union Européenne (UE), conformes aux normes ISO 27001 et aux exigences strictes de confidentialité.
              </p>
              <p>
                <strong>Sécurité technique :</strong> Toutes les communications sont chiffrées de bout en bout en transit via 
                TLS 1.3 / HTTPS. Les jetons d&apos;authentification et identifiants sensibles sont chiffrés au repos à l&apos;aide 
                d&apos;algorithmes de chiffrement symétrique robustes (AES-256).
              </p>
              <p>
                <strong>Durée de conservation :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                <li>
                  <strong>Identifiants de compte et jetons :</strong> Conservés pendant toute la durée d&apos;activation du service, 
                  et supprimés dès révocation ou déconnexion.
                </li>
                <li>
                  <strong>Historique des messages traités par l&apos;IA :</strong> Conservé pendant une période maximale de 
                  <strong> 12 mois</strong> pour permettre la consultation de l&apos;historique sur le dashboard de l&apos;entreprise, 
                  puis définitivement purgé ou anonymisé.
                </li>
                <li>
                  <strong>Traces techniques et logs de connexion :</strong> Conservés pour une durée maximale de 90 jours à des fins 
                  de diagnostic et de sécurité informatique.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">06.</span>
              Partage et Non-Revente des Données
            </h2>
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-emerald-950">
              <p className="font-semibold flex items-center gap-2 text-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                Engagement formel de non-revente des données
              </p>
              <p className="text-sm leading-relaxed">
                <strong>SLEY AI et Daana Tech ne vendent, ne louent, ne monétisent, ni ne cèdent JAMAIS</strong> vos données 
                personnelles, vos fichiers clients ou vos messages à des courtiers de données, annonceurs ou tiers publicitaires.
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              Les seules transmissions de données s&apos;opèrent vers :
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-600">
              <li>
                <strong>Meta Platforms Inc. / Meta Platforms Ireland Ltd. :</strong> Via la WhatsApp Cloud API officielle, 
                nécessaire pour acheminer les requêtes de messages selon les standards de Meta.
              </li>
              <li>
                <strong>Nos sous-traitants d&apos;infrastructure certifiés :</strong> Fournisseurs d&apos;hébergement cloud sécurisé, 
                liés par des clauses contractuelles strictes de confidentialité.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">07.</span>
              Vos Droits (Accès, Rectification, Suppression)
            </h2>
            <p>
              Conformément à la législation en vigueur, chaque utilisateur et entreprise dispose des droits suivants :
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              <li className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <strong>Droit d&apos;accès :</strong> Obtenir confirmation du traitement et copie de vos données.
              </li>
              <li className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <strong>Droit de rectification :</strong> Mettre à jour des informations inexactes ou incomplètes.
              </li>
              <li className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <strong>Droit à l&apos;effacement :</strong> Demander la suppression totale et irréversible de vos données.
              </li>
              <li className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <strong>Droit d&apos;opposition :</strong> Retirer votre consentement ou vous opposer à un traitement.
              </li>
            </ul>
            <p className="text-sm text-gray-600 pt-2">
              Pour consulter la procédure complète et certifiée de suppression des données pour l&apos;application Meta, 
              veuillez visiter notre page dédiée :{" "}
              <Link
                href="/suppression-donnees"
                className="text-emerald-700 font-semibold underline hover:text-emerald-800"
              >
                Instructions de suppression des données utilisateur
              </Link>.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 border-t border-gray-200 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">08.</span>
              Contact DPO &amp; Référent Données Personnelles
            </h2>
            <p>
              Pour toute question, demande d&apos;exercice de vos droits ou signalement relatif à la confidentialité de vos données, 
              vous pouvez contacter notre équipe dédiée :
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-slate-900">METAWEB SOLUTION / Daana Tech — Pôle Protection des Données</div>
                <div className="text-sm text-slate-600">Email officiel : contact@daana.tech</div>
                <div className="text-xs text-slate-400 mt-1">Délai moyen de réponse : sous 48h ouvrées</div>
              </div>
              <a
                href="mailto:contact@daana.tech"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Écrire au DPO</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}
