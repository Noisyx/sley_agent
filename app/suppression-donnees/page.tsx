import type { Metadata } from "next";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { Trash2, Mail, Clock, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Suppression des données | SLEY AI — Daana Tech",
  description:
    "Procédure pour demander la suppression de vos données utilisateur de l'application SLEY AI (Meta App ID: 1390061966141378).",
  alternates: {
    canonical: "https://daana.tech/suppression-donnees",
  },
};

export default function SuppressionDonneesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <LegalNavbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200/80 font-semibold">
            <Trash2 className="w-3.5 h-3.5 text-red-500" />
            Suppression des données
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
            <RefreshCw className="w-3 h-3 text-gray-400" />
            Mise à jour : 7 septembre 2026
          </span>
        </div>

        <header className="border-b border-gray-200 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Instructions de suppression des données utilisateur
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Vous pouvez à tout moment demander la suppression complète et définitive
            de toutes les données associées à votre compte sur l&apos;application{" "}
            <strong>SLEY AI</strong> (Meta App ID : 1390061966141378).
            La procédure est gratuite et le délai garanti est de{" "}
            <strong className="text-red-700">30 jours maximum</strong>.
          </p>
        </header>

        <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">

          {/* 1. Comment demander */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Comment demander la suppression ?
            </h2>

            {/* Method A: Email */}
            <div className="p-5 sm:p-6 bg-white border-2 border-emerald-600/30 rounded-xl shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  Par email
                </h3>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full">
                  Recommandé
                </span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-xs sm:text-sm space-y-2 text-gray-800">
                <div>
                  <span className="text-gray-500 font-sans font-semibold">À :</span>{" "}
                  <strong className="text-emerald-700">contact@daana.tech</strong>
                </div>
                <div>
                  <span className="text-gray-500 font-sans font-semibold">Objet :</span>{" "}
                  <strong className="text-red-700">Suppression données WhatsApp</strong>
                </div>
                <div className="pt-2 border-t border-gray-200/80 font-sans text-xs text-gray-600">
                  <span className="font-semibold text-gray-800">À inclure :</span>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-700">
                    <li>
                      Votre{" "}
                      <code className="bg-white px-1 border rounded">waba_id</code> ou
                      numéro WhatsApp connecté
                    </li>
                    <li>Le nom de votre entreprise</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic">
                Accusé de réception sous 48h ouvrées.
              </p>
            </div>

            {/* Method B: Dashboard */}
            <div className="p-5 sm:p-6 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                <Trash2 className="w-5 h-5 text-gray-700" />
                Depuis votre dashboard
              </h3>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                <li>
                  Connectez-vous sur{" "}
                  <a href="https://daana.tech/settings" className="text-emerald-700 font-semibold underline">
                    daana.tech/settings
                  </a>
                </li>
                <li>Section <strong>Intégrations &gt; WhatsApp Business Platform</strong></li>
                <li>Cliquez sur <strong>« Déconnecter et supprimer mes données »</strong></li>
                <li>Confirmez — vos jetons sont immédiatement révoqués</li>
              </ol>
            </div>
          </section>

          {/* 2. Délai */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Délai
            </h2>
            <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-900 leading-relaxed">
                <strong>30 jours calendaires maximum</strong> après réception de la
                demande. Un certificat d&apos;effacement vous est envoyé par email à
                l&apos;issue de la procédure.
              </p>
            </div>
          </section>

          {/* 3. Ce qui est supprimé */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Ce qui est supprimé
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs">
                <div className="font-bold text-gray-900 flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Jetons Meta (Tokens)
                </div>
                <p className="text-xs text-gray-600">
                  Tous les Access Tokens et System User Tokens sont révoqués et purgés.
                </p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs">
                <div className="font-bold text-gray-900 flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Identifiants WABA
                </div>
                <p className="text-xs text-gray-600">
                  <code className="text-[11px] bg-gray-100 px-1 rounded">waba_id</code>,{" "}
                  <code className="text-[11px] bg-gray-100 px-1 rounded">phone_number_id</code>{" "}
                  et webhooks supprimés.
                </p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs">
                <div className="font-bold text-gray-900 flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Messages &amp; données IA
                </div>
                <p className="text-xs text-gray-600">
                  Historique des conversations, prompts personnalisés et index de connaissances.
                </p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs">
                <div className="font-bold text-gray-900 flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Contacts &amp; sync
                </div>
                <p className="text-xs text-gray-600">
                  Métadonnées de synchronisation{" "}
                  <code className="text-[11px] bg-gray-100 px-1 rounded">smb_app_state_sync</code>.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Ce qui est conservé */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Ce qui est conservé (obligation légale)
            </h2>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700">
              <div className="font-semibold text-slate-900 flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-slate-600" />
                Exception fiscale
              </div>
              <p className="text-slate-600 leading-relaxed">
                Les factures et logs de facturation sont archivés de manière isolée
                pour une durée maximale de <strong>1 an</strong>, conformément à la
                législation fiscale. Ces archives ne contiennent aucun message, aucun
                token actif et ne font l&apos;objet d&apos;aucun traitement commercial.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-slate-900">Demander la suppression</div>
                <div className="text-xs text-slate-500 mt-1">
                  Objet : <span className="font-mono text-slate-700">Suppression données WhatsApp</span>
                </div>
              </div>
              <a
                href="mailto:contact@daana.tech?subject=Suppression%20donn%C3%A9es%20WhatsApp"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <Trash2 className="w-4 h-4" />
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
