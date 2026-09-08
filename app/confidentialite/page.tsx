import type { Metadata } from "next";
import Link from "next/link";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { Shield, Lock, CheckCircle2, Mail, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | SLEY AI — Daana Tech",
  description:
    "Comment SLEY AI collecte, traite et protège vos données dans le cadre de l'intégration WhatsApp Business Cloud API.",
  alternates: {
    canonical: "https://daana.tech/confidentialite",
  },
};

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <LegalNavbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-semibold">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            Protection des données
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
            <RefreshCw className="w-3 h-3 text-gray-400" />
            Mise à jour : 7 septembre 2026
          </span>
        </div>

        <header className="border-b border-gray-200 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Cette politique explique quelles données <strong>SLEY AI</strong> collecte
            lorsque vous connectez votre numéro WhatsApp Business via notre plateforme,
            pourquoi nous les collectons, et comment nous les protégeons.
          </p>
        </header>

        <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">

          {/* 1. Responsable */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Responsable du traitement
            </h2>
            <p>
              <strong>METAWEB SOLUTION</strong> (marque commerciale : Daana Tech), éditeur
              du service SLEY AI.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Application Meta : SLEY AI — App ID <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">1390061966141378</code></li>
              <li>Site officiel : <a href="https://daana.tech" className="text-emerald-700 underline">daana.tech</a></li>
              <li>Contact DPO : <a href="mailto:contact@daana.tech" className="text-emerald-700">contact@daana.tech</a></li>
            </ul>
          </section>

          {/* 2. Données collectées */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Données que nous collectons
            </h2>
            <p>
              Lors du flux <strong>Meta Embedded Signup</strong> (Facebook Login for Business)
              et pendant l&apos;utilisation du service, nous collectons :
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Identifiants WhatsApp Business</h3>
                <p className="text-sm text-gray-600">
                  <code className="font-mono text-xs bg-white px-1 border border-gray-200 rounded">waba_id</code>,{" "}
                  <code className="font-mono text-xs bg-white px-1 border border-gray-200 rounded">phone_number_id</code>,
                  numéro de téléphone connecté et nom d&apos;affichage du profil WhatsApp.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Jetons d&apos;accès Meta</h3>
                <p className="text-sm text-gray-600">
                  System User Tokens générés lors de l&apos;onboarding, chiffrés au repos (AES-256),
                  utilisés uniquement pour communiquer avec la WhatsApp Cloud API au nom de votre entreprise.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Messages conversationnels</h3>
                <p className="text-sm text-gray-600">
                  Uniquement si vous activez le module Agent IA : le contenu textuel des messages
                  entrants est traité par nos algorithmes pour générer des réponses automatiques
                  (prix, horaires, commandes).
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Synchronisation d&apos;état (<code className="font-mono text-xs">smb_app_state_sync</code>)
                </h3>
                <p className="text-sm text-gray-600">
                  Métadonnées de synchronisation entre votre app WhatsApp Business mobile
                  et la Cloud API, pour éviter les doublons de réponses en mode coexistence.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Finalités */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Pourquoi nous collectons ces données
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Faire fonctionner l&apos;Agent IA 24/7 (réponses automatiques, prise de commandes)</li>
              <li>Envoyer des codes OTP et des notifications transactionnelles</li>
              <li>Alimenter le tableau de bord marchand (statistiques, historique)</li>
              <li>Assurer la sécurité du service et le respect des politiques WhatsApp</li>
            </ul>
          </section>

          {/* 4. Base légale */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Base légale
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong>Consentement</strong> — accordé lors du Facebook Login for Business
                (sélection des autorisations)
              </li>
              <li>
                <strong>Exécution du contrat</strong> — traitement nécessaire pour fournir le
                service souscrit
              </li>
              <li>
                <strong>Intérêt légitime</strong> — sécurisation de l&apos;infrastructure,
                prévention de la fraude
              </li>
            </ul>
          </section>

          {/* 5. Hébergement & durée */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Hébergement et durée de conservation
            </h2>
            <p>
              Les données sont hébergées sur des serveurs sécurisés au sein de l&apos;Union
              Européenne. Toutes les communications transitent via TLS 1.3.
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>
                <strong>Jetons et identifiants :</strong> conservés pendant la durée du
                service, supprimés dès déconnexion ou révocation
              </li>
              <li>
                <strong>Messages IA :</strong> conservés 12 mois maximum, puis purgés
              </li>
              <li>
                <strong>Logs techniques :</strong> 90 jours maximum
              </li>
            </ul>
          </section>

          {/* 6. Partage */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Partage des données
            </h2>
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <p className="font-semibold flex items-center gap-2 text-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                Nous ne vendons jamais vos données.
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              Les seuls destinataires sont :
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-600">
              <li>
                <strong>Meta Platforms</strong> — via la WhatsApp Cloud API officielle,
                pour acheminer les messages
              </li>
              <li>
                <strong>Hébergeur cloud</strong> — lié par des clauses contractuelles de
                confidentialité
              </li>
            </ul>
          </section>

          {/* 7. Vos droits */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Vos droits
            </h2>
            <p>
              Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement
              et d&apos;opposition sur vos données. Pour les exercer, écrivez à{" "}
              <a href="mailto:contact@daana.tech" className="text-emerald-700 font-semibold">
                contact@daana.tech
              </a>.
            </p>
            <p className="text-sm text-gray-600">
              Pour une suppression complète de vos données liées à l&apos;application Meta,
              consultez notre{" "}
              <Link
                href="/suppression-donnees"
                className="text-emerald-700 font-semibold underline"
              >
                page dédiée à la suppression des données
              </Link>.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-slate-900">Référent protection des données</div>
                <div className="text-sm text-slate-600">METAWEB SOLUTION / Daana Tech</div>
                <div className="text-xs text-slate-400 mt-1">Réponse sous 48h ouvrées</div>
              </div>
              <a
                href="mailto:contact@daana.tech"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>contact@daana.tech</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}
