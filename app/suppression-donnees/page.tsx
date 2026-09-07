import type { Metadata } from "next";
import Link from "next/link";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { Trash2, ShieldCheck, Mail, Clock, CheckCircle2, AlertCircle, RefreshCw, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Instructions de suppression des données utilisateur | SLEY AI — Daana Tech",
  description:
    "Procédure officielle et instructions détaillées pour demander la suppression intégrale des données utilisateur de l'application SLEY AI (Meta App ID: 1390061966141378).",
  alternates: {
    canonical: "https://daana.tech/suppression-donnees",
  },
};

export default function SuppressionDonneesPage() {
  const lastUpdated = "7 septembre 2026";

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <LegalNavbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Top Badges & Meta Info */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200/80 font-semibold">
            <Trash2 className="w-3.5 h-3.5 text-red-500" />
            Meta Data Deletion Callback &amp; User Instructions
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
            <RefreshCw className="w-3 h-3 text-gray-400" />
            Dernière mise à jour : {lastUpdated}
          </span>
        </div>

        {/* Header Section */}
        <header className="border-b border-gray-200 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Instructions de suppression des données utilisateur
          </h1>
          <div className="text-sm font-semibold text-gray-500 mb-4 tracking-wide uppercase">
            User Data Deletion Instructions — Platform Compliance
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Conformément aux directives de la <strong>Plateforme Meta pour les Développeurs</strong> (Meta Developer Policy) 
            et aux règlements régissant la protection des données personnelles (RGPD), cette page décrit la procédure officielle 
            permettant à tout utilisateur ou entreprise de demander la <strong>suppression intégrale, définitive et irréversible 
            de l&apos;ensemble des données</strong> associées à l&apos;application <strong>SLEY AI</strong>.
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Card: Identification for Meta Review */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 text-sm text-slate-700 space-y-3">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Référence de l&apos;Application Meta concernée
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <li>
                <span className="font-semibold text-gray-900">Nom de l&apos;App Meta :</span> SLEY AI
              </li>
              <li>
                <span className="font-semibold text-gray-900">App ID Meta :</span> 1390061966141378
              </li>
              <li>
                <span className="font-semibold text-gray-900">Fournisseur :</span> METAWEB SOLUTION / Daana Tech
              </li>
              <li>
                <span className="font-semibold text-gray-900">Domaine officiel :</span>{" "}
                <a href="https://daana.tech" className="text-emerald-700 underline">https://daana.tech</a>
              </li>
              <li>
                <span className="font-semibold text-gray-900">Délai d&apos;exécution garanti :</span>{" "}
                <span className="text-red-700 font-bold">30 jours maximum</span>
              </li>
              <li>
                <span className="font-semibold text-gray-900">Email dédié suppression :</span>{" "}
                <a href="mailto:contact@daana.tech" className="text-emerald-700 font-medium">contact@daana.tech</a>
              </li>
            </ul>
          </div>

          {/* Section 1: Step by step procedures */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">01.</span>
              Comment demander la suppression de vos données ?
            </h2>
            <p>
              Deux méthodes simples, gratuites et directes sont mises à votre disposition pour exercer votre droit à l&apos;effacement :
            </p>

            {/* Method A: Email */}
            <div className="p-5 sm:p-6 bg-white border-2 border-emerald-600/30 rounded-xl shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  Méthode 1 : Demande par email (Recommandé Meta)
                </h3>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full">
                  Officielle &amp; Directe
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Envoyez simplement un message électronique à notre service de conformité :
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-xs sm:text-sm space-y-2 text-gray-800">
                <div>
                  <span className="text-gray-500 font-sans font-semibold">Destinataire :</span>{" "}
                  <strong className="text-emerald-700 font-mono">contact@daana.tech</strong>
                </div>
                <div>
                  <span className="text-gray-500 font-sans font-semibold">Objet de l&apos;email :</span>{" "}
                  <strong className="text-red-700 font-mono">Suppression données WhatsApp</strong>
                </div>
                <div className="pt-2 border-t border-gray-200/80 font-sans text-xs text-gray-600">
                  <span className="font-semibold text-gray-800">Informations à inclure impérativement :</span>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-700">
                    <li>
                      L&apos;identifiant de votre compte WhatsApp Business (<code className="bg-white px-1 border rounded">waba_id</code>)
                    </li>
                    <li>
                      OU le numéro de téléphone professionnel WhatsApp connecté au service
                    </li>
                    <li>
                      Le nom de votre entreprise ou compte marchand
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic">
                Un accusé de réception automatique avec un identifiant de confirmation vous est transmis sous 48 heures ouvrées.
              </p>
            </div>

            {/* Method B: Dashboard */}
            <div className="p-5 sm:p-6 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Trash2 className="w-5 h-5 text-gray-700" />
                  Méthode 2 : Suppression autonome via votre Dashboard Marchand
                </h3>
                <span className="text-xs bg-gray-200 text-gray-700 font-semibold px-2.5 py-0.5 rounded-full">
                  En 1 clic
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Si vous avez accès à votre tableau de bord SLEY AI, vous pouvez déclencher la suppression en autonomie :
              </p>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                <li>
                  Connectez-vous à votre espace marchand :{" "}
                  <a href="https://daana.tech/settings" className="text-emerald-700 font-semibold underline">
                    https://daana.tech/settings
                  </a>
                </li>
                <li>Rendez-vous dans la section <strong>Intégrations &gt; WhatsApp Business Platform</strong>.</li>
                <li>
                  Cliquez sur le bouton rouge <strong>« Déconnecter et supprimer mes données WhatsApp »</strong>.
                </li>
                <li>Confirmez l&apos;action. Vos jetons et liaisons sont immédiatement révoqués.</li>
              </ol>
            </div>
          </section>

          {/* Section 2: Delay */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">02.</span>
              Délai de traitement de la suppression
            </h2>
            <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="font-bold text-emerald-950 text-base">
                  Délai maximal garanti : 30 jours calendaires
                </div>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  Dès réception de la demande par email ou validation dans le dashboard, la suppression de l&apos;ensemble 
                  des données associées à votre compte est opérée dans un délai maximal de <strong>30 jours</strong>. 
                  Une notification formelle de confirmation vous est envoyée dès finalisation de la purge.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Exactly what is deleted */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">03.</span>
              Détail des données supprimées définitivement
            </h2>
            <p>
              La validation de la procédure entraîne la destruction irréversible et complète des données suivantes sur nos serveurs :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs space-y-1">
                <div className="font-bold text-gray-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Jetons d&apos;accès Meta (Tokens)
                </div>
                <p className="text-xs text-gray-600">
                  Révocation et purge immédiate de tous les User Access Tokens et System User Tokens associés à votre Meta Business Manager.
                </p>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs space-y-1">
                <div className="font-bold text-gray-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Identifiants WhatsApp (WABA)
                </div>
                <p className="text-xs text-gray-600">
                  Suppression totale de vos identifiants <code className="text-[11px] bg-gray-100 px-1 rounded">waba_id</code>, 
                  <code className="text-[11px] bg-gray-100 px-1 rounded">phone_number_id</code> et des webhooks configurés.
                </p>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs space-y-1">
                <div className="font-bold text-gray-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Messages &amp; Contextes IA
                </div>
                <p className="text-xs text-gray-600">
                  Purge intégrale de l&apos;historique des échanges, des prompts personnalisés et des index de connaissances de l&apos;IA.
                </p>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs space-y-1">
                <div className="font-bold text-gray-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Contacts et Sync d&apos;état
                </div>
                <p className="text-xs text-gray-600">
                  Suppression des métadonnées de synchronisation de l&apos;application (<code className="text-[11px] bg-gray-100 px-1 rounded">smb_app_state_sync</code>).
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: What is legally retained */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">04.</span>
              Données conservées au titre d&apos;obligations légales
            </h2>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-sm text-slate-700">
              <div className="font-semibold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-slate-600" />
                Exceptions strictement encadrées par la loi
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conformément aux dispositions légales et réglementaires applicables, seules les pièces comptables, factures émises 
                et logs de facturation sont archivés de manière isolée et sécurisée pour une durée maximale de <strong>1 an</strong> 
                (ou selon la durée légale fiscale impérative). <strong>Ces données archivées ne comportent aucun contenu de message, 
                aucun token actif et ne font l&apos;objet d&apos;aucun traitement commercial.</strong>
              </p>
            </div>
          </section>

          {/* Section 5: Confirmation and Status */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">05.</span>
              Suivi et Confirmation de Suppression
            </h2>
            <p>
              Pour vérifier l&apos;état d&apos;avancement de votre demande ou recevoir une confirmation écrite de conformité :
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm">
              <li>
                Votre demande reçoit un numéro de ticket de suivi unique sous 48h.
              </li>
              <li>
                À l&apos;issue des 30 jours au plus tard, un <strong>certificat d&apos;effacement des données</strong> vous est expédié par retour de courriel.
              </li>
              <li>
                Vous pouvez à tout moment nous relancer à l&apos;adresse :{" "}
                <a href="mailto:contact@daana.tech" className="text-emerald-700 font-semibold underline">
                  contact@daana.tech
                </a>.
              </li>
            </ul>
          </section>

          {/* Contact Box */}
          <section className="space-y-4 border-t border-gray-200 pt-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-slate-900">Service Conformité Meta &amp; Protection des Données</div>
                <div className="text-sm text-slate-600">METAWEB SOLUTION / Daana Tech</div>
                <div className="text-xs text-slate-400 mt-1">
                  Email : <span className="font-mono text-slate-700">contact@daana.tech</span> — Objet : Suppression données WhatsApp
                </div>
              </div>
              <a
                href="mailto:contact@daana.tech?subject=Suppression%20donn%C3%A9es%20WhatsApp"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <Trash2 className="w-4 h-4" />
                <span>Demander la suppression</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}
