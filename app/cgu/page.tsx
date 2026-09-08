import type { Metadata } from "next";
import Link from "next/link";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { FileText, AlertTriangle, CreditCard, RefreshCw, Layers, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation (CGU) | SLEY AI — Daana Tech",
  description:
    "Conditions d'utilisation du service SLEY AI : prérequis, facturation, limites techniques du mode coexistence WhatsApp et responsabilités.",
  alternates: {
    canonical: "https://daana.tech/cgu",
  },
};

export default function CGUPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <LegalNavbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-semibold">
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            Conditions contractuelles
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
            <RefreshCw className="w-3 h-3 text-gray-400" />
            Mise à jour : 7 septembre 2026
          </span>
        </div>

        <header className="border-b border-gray-200 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Conditions Générales d&apos;Utilisation
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Les présentes CGU encadrent l&apos;utilisation de <strong>SLEY AI</strong>,
            plateforme d&apos;IA conversationnelle pour WhatsApp, exploitée par{" "}
            <strong>METAWEB SOLUTION / Daana Tech</strong>. En activant le service,
            vous acceptez ces conditions ainsi que notre{" "}
            <Link href="/confidentialite" className="text-emerald-700 underline">
              Politique de Confidentialité
            </Link>.
          </p>
        </header>

        <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">

          {/* 1. Le service */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Le service
            </h2>
            <p>
              SLEY AI connecte votre numéro WhatsApp Business existant à la Cloud API de
              Meta en mode <strong>coexistence</strong>. Vous conservez votre app mobile
              WhatsApp Business pour les échanges manuels, pendant que l&apos;Agent IA gère
              les réponses automatiques, les commandes et les OTP via l&apos;API.
            </p>
          </section>

          {/* 2. Prérequis */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Ce dont vous avez besoin
            </h2>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Un compte WhatsApp Business actif</h3>
                <p className="text-gray-600">
                  Un numéro de téléphone professionnel actif sur l&apos;application WhatsApp
                  Business, installée sur un appareil mobile fonctionnel.
                </p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Un Meta Business Manager</h3>
                <p className="text-gray-600">
                  Vous devez être habilité à accorder des autorisations lors du parcours
                  d&apos;onboarding (Facebook Login for Business).
                </p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Conformité aux politiques WhatsApp</h3>
                <p className="text-gray-600">
                  Votre activité doit respecter la WhatsApp Commerce Policy et la Business
                  Messaging Policy. Produits illégaux, tabac, jeux d&apos;argent et pratiques
                  trompeuses sont interdits.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Responsabilités */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Responsabilités
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                <h3 className="font-bold text-gray-900 mb-2">SLEY AI (Tech Provider)</h3>
                <p className="text-gray-600">
                  Nous fournissons l&apos;infrastructure, la passerelle API et les modèles
                  d&apos;IA. Nous ne sommes pas responsables du contenu des conversations
                  de nos clients.
                </p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                <h3 className="font-bold text-gray-900 mb-2">Le client</h3>
                <p className="text-gray-600">
                  Vous êtes responsable des messages envoyés, de l&apos;exactitude des
                  informations (prix, disponibilités) et du consentement préalable (opt-in)
                  de vos clients destinataires.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Facturation */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Facturation
            </h2>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                  <CreditCard className="w-4 h-4 text-emerald-600" />
                  Votre numéro (mode coexistence)
                </h3>
                <p className="text-slate-600">
                  Les frais de messages WhatsApp (Authentication, Marketing, Utilité) sont
                  facturés directement par Meta sur votre Business Manager. SLEY AI ne
                  prend aucune commission sur ces frais.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  Numéro mutualisé ou forfait SaaS
                </h3>
                <p className="text-slate-600">
                  Facturation par METAWEB SOLUTION / Daana Tech, avec paiement par Mobile
                  Money (T-Money, Flooz), virement ou carte bancaire.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Limites coexistence */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Limites techniques du mode coexistence
            </h2>
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-sm">
              <div className="font-bold flex items-center gap-2 text-amber-900 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                Règles imposées par Meta
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-amber-900/90">
                <li>
                  <strong>20 messages/seconde maximum</strong> — tout dépassement est
                  automatiquement régulé par Meta
                </li>
                <li>
                  <strong>Pas de broadcast massif</strong> — le mode coexistence est conçu
                  pour le service client conversationnel, pas le démarchage en masse
                </li>
                <li>
                  <strong>Qualité du numéro</strong> — si vos clients bloquent ou signalent
                  votre numéro, Meta peut restreindre votre capacité d&apos;envoi
                </li>
              </ul>
            </div>
          </section>

          {/* 6. Résiliation */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Résiliation et suspension
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong>Par le client :</strong> résiliation libre à tout moment, sans frais,
                via{" "}
                <a href="https://daana.tech/settings" className="text-emerald-700 underline">
                  daana.tech/settings
                </a>{" "}
                ou par email à{" "}
                <a href="mailto:contact@daana.tech" className="text-emerald-700">
                  contact@daana.tech
                </a>
              </li>
              <li>
                <strong>Par SLEY AI :</strong> suspension immédiate en cas de spam, violation
                des politiques Meta ou défaut de paiement
              </li>
              <li>
                <strong>Suppression des données :</strong> vous pouvez demander l&apos;effacement
                complet de vos données via notre{" "}
                <Link href="/suppression-donnees" className="text-emerald-700 underline font-semibold">
                  procédure de suppression
                </Link>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-slate-900">Support &amp; questions juridiques</div>
                <div className="text-sm text-slate-600">METAWEB SOLUTION / Daana Tech</div>
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
