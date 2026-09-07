import type { Metadata } from "next";
import Link from "next/link";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { FileText, CheckCircle2, AlertTriangle, CreditCard, RefreshCw, Layers, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation (CGU) | SLEY AI — Daana Tech",
  description:
    "Conditions Générales d'Utilisation régissant la plateforme SLEY AI, les services d'IA conversationnelle et la connectivité WhatsApp Cloud API en mode coexistence.",
  alternates: {
    canonical: "https://daana.tech/cgu",
  },
};

export default function CGUPage() {
  const lastUpdated = "7 septembre 2026";

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <LegalNavbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Top Badges & Meta Info */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-semibold">
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            Cadre Contractuel &amp; Conditions Générales
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
            <RefreshCw className="w-3 h-3 text-gray-400" />
            Dernière mise à jour : {lastUpdated}
          </span>
        </div>

        {/* Header Section */}
        <header className="border-b border-gray-200 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Conditions Générales d&apos;Utilisation (CGU)
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Les présentes Conditions Générales d&apos;Utilisation régissent l&apos;accès et l&apos;utilisation 
            de la solution logicielle SaaS <strong>SLEY AI</strong>, exploitée par <strong>METAWEB SOLUTION / Daana Tech</strong>, 
            permettant aux entreprises d&apos;intégrer des agents conversationnels intelligents et l&apos;envoi d&apos;OTP à leur 
            compte WhatsApp Business officiel via l&apos;API Cloud de Meta.
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Card: Identity Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 text-sm text-slate-700 space-y-3">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Identification de l&apos;Éditeur et du Service
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <li>
                <span className="font-semibold text-gray-900">Fournisseur :</span> METAWEB SOLUTION / Daana Tech
              </li>
              <li>
                <span className="font-semibold text-gray-900">Application Meta :</span> SLEY AI (ID : 1390061966141378)
              </li>
              <li>
                <span className="font-semibold text-gray-900">Domaine de production :</span>{" "}
                <a href="https://daana.tech" className="text-emerald-700 underline">https://daana.tech</a>
              </li>
              <li>
                <span className="font-semibold text-gray-900">Domaine secondaire :</span> ai.sley.group
              </li>
              <li>
                <span className="font-semibold text-gray-900">Statut technique :</span> Tech Provider WhatsApp Cloud API
              </li>
              <li>
                <span className="font-semibold text-gray-900">Support client :</span>{" "}
                <a href="mailto:contact@daana.tech" className="text-emerald-700 font-medium">contact@daana.tech</a>
              </li>
            </ul>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">01.</span>
              Description du Service SLEY AI
            </h2>
            <p>
              <strong>SLEY AI</strong> est une solution SaaS d&apos;intelligence conversationnelle spécialisée pour les entreprises 
              et commerçants. Le service permet de connecter un numéro de téléphone WhatsApp Business existant en mode 
              <strong> coexistence officielle</strong> (intégration <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono text-gray-800">whatsapp_business_app_onboarding</code>) 
              avec la plateforme WhatsApp Cloud API de Meta.
            </p>
            <p>Grâce à cette technologie, le client peut :</p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>
                Continuer à utiliser son application mobile WhatsApp Business habituelle sur son smartphone pour les échanges manuels.
              </li>
              <li>
                Déléguer automatiquement les réponses répétitives, les demandes de prix, les heures d&apos;ouverture et les prises 
                de commandes à un <strong>Agent IA entraîné</strong> fonctionnant 24h/24 et 7j/7.
              </li>
              <li>
                Délivrer des codes de validation à usage unique (OTP) et des notifications de commande transactionnelles.
              </li>
              <li>
                Superviser les conversations, les commandes et les métriques depuis le tableau de bord marchand hébergé sur{" "}
                <a href="https://daana.tech" className="text-emerald-700 font-medium underline">daana.tech</a>.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">02.</span>
              Prérequis et Obligations de l&apos;Entreprise Cliente
            </h2>
            <p>
              Pour activer et maintenir l&apos;accès au service SLEY AI, l&apos;entreprise cliente s&apos;engage à respecter l&apos;ensemble 
              des conditions suivantes :
            </p>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">1. Compte WhatsApp Business actif</h3>
                <p className="text-gray-600">
                  Le client doit posséder un numéro de téléphone professionnel valide associé à un compte WhatsApp Business officiel 
                  sur un appareil mobile en état de marche.
                </p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">2. Meta Business Manager configuré</h3>
                <p className="text-gray-600">
                  Le client doit disposer d&apos;un compte Meta Business Manager actif, être habilité à autoriser les permissions 
                  lors du parcours d&apos;onboarding (Facebook Login for Business) et s&apos;assurer que son compte d&apos;entreprise 
                  est en règle vis-à-vis des exigences de Meta.
                </p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">3. Respect strict des Politiques Commerciales WhatsApp</h3>
                <p className="text-gray-600">
                  L&apos;activité du client, ses produits et ses services doivent être strictement conformes à la{" "}
                  <strong>WhatsApp Commerce Policy</strong> et à la <strong>WhatsApp Business Messaging Policy</strong>. 
                  Sont formellement interdits la vente d&apos;articles prohibés (produits illégaux, tabac, médicaments non autorisés, 
                  jeux d&apos;argent) et toute pratique trompeuse.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">03.</span>
              Rôles et Responsabilités
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-xs space-y-2">
                <h3 className="font-bold text-gray-900">Rôle de SLEY AI / Daana Tech</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  SLEY AI agit en qualité exclusive de <strong>Tech Provider (Fournisseur Technologique Tiers)</strong>. 
                  Nous fournissons l&apos;infrastructure logicielle, la passerelle API, les modèles d&apos;IA et l&apos;interface de gestion. 
                  SLEY AI ne saurait être tenu responsable du contenu des conversations initiées ou reçues par le client.
                </p>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-xs space-y-2">
                <h3 className="font-bold text-gray-900">Responsabilité du Client</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Le client demeure l&apos;unique et entier responsable des messages diffusés, de l&apos;exactitude des informations fournies 
                  par son agent IA, des prix pratiqués, ainsi que du recueil préalable du consentement obligatoire (opt-in) 
                  de ses propres clients destinataires.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">04.</span>
              Facturation et Modèles d&apos;Envoi des Messages
            </h2>
            <p>
              Afin de garantir une totale transparence, la structure tarifaire distingue la couche infrastructure Meta 
              et la couche logicielle SLEY AI :
            </p>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                  <CreditCard className="w-4 h-4 text-emerald-600" />
                  1. Envoi via le numéro propre du marchand (Mode Coexistence)
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Les messages WhatsApp facturables par Meta (catégories <em>Authentication / OTP</em>, <em>Marketing</em> ou 
                  <em>Utilité</em>) sont <strong>facturés directement par Meta Platforms</strong> sur la ligne de crédit ou la carte 
                  bancaire enregistrée par le client dans son propre Meta Business Manager. SLEY AI ne prend aucune commission sur ces frais officiels Meta.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  2. Envoi via numéro mutualisé ou forfaits SLEY AI
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Lorsque le client utilise les services d&apos;un numéro mutualisé ou souscrit à un forfait SaaS tout-en-un, la facturation 
                  est assurée par METAWEB SOLUTION / Daana Tech avec des facilités de règlement locales adaptées (Mobile Money : T-Money, Flooz, 
                  virement ou carte bancaire).
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-1">3. Abonnement Logiciel SLEY AI</h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  L&apos;accès au tableau de bord, aux modèles d&apos;IA de traitement du langage et à la maintenance technique fait 
                  l&apos;objet d&apos;un abonnement mensuel ou annuel clairement stipulé lors de la souscription sur le site.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">05.</span>
              Spécificités et Limites Techniques du Mode Coexistence
            </h2>
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2 text-amber-950 text-sm">
              <div className="font-bold flex items-center gap-2 text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                Règles de fonctionnement imposées par Meta Platforms
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-amber-900/90">
                <li>
                  <strong>Débit maximal (Throughput limit) :</strong> Le mode de coexistence est dimensionné par Meta pour une cadence 
                  maximale de <strong>20 messages par seconde</strong>. Tout dépassement est automatiquement régulé.
                </li>
                <li>
                  <strong>Interdiction du Broadcast API massif :</strong> Le mode coexistence est expressément conçu pour l&apos;assistance 
                  interactive, le service client conversationnel et les notifications ciblées. 
                  <strong> Aucun démarchage massif non consenti (spam broadcast) via l&apos;API n&apos;est toléré.</strong>
                </li>
                <li>
                  <strong>Qualité du numéro (Phone Number Quality Rating) :</strong> Le client doit veiller à ce que les utilisateurs 
                  ne bloquent ni ne signalent son numéro. Une dégradation de la note de qualité par Meta peut restreindre temporairement 
                  la capacité d&apos;envoi.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">06.</span>
              Résiliation, Déconnexion et Suspension
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Résiliation à l&apos;initiative du client :</strong> Le client est libre d&apos;interrompre son abonnement 
                à tout moment, sans frais de pénalité, directement depuis son espace de gestion sur{" "}
                <a href="https://daana.tech/settings" className="text-emerald-700 underline">daana.tech/settings</a> ou par notification 
                écrite à <a href="mailto:contact@daana.tech" className="text-emerald-700">contact@daana.tech</a>.
              </p>
              <p>
                <strong>Suppression des données :</strong> Le client peut à tout moment ordonner la suppression irréversible de ses données 
                techniques et conversationnelles conformément à notre procédure certifiée :{" "}
                <Link href="/suppression-donnees" className="text-emerald-700 font-semibold underline">
                  Instructions de suppression des données
                </Link>.
              </p>
              <p>
                <strong>Suspension par SLEY AI :</strong> SLEY AI se réserve le droit de suspendre immédiatement et sans préavis l&apos;accès 
                à la passerelle en cas d&apos;utilisation abusive, d&apos;envoi avéré de spam, de violation des Politiques Meta ou de défaut de paiement.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">07.</span>
              Protection des Données Personnelles
            </h2>
            <p>
              L&apos;ensemble des règles régissant la collecte, le stockage sécurisé et le traitement des données est consigné dans 
              notre{" "}
              <Link href="/confidentialite" className="text-emerald-700 font-semibold underline">
                Politique de Confidentialité
              </Link>. En acceptant les présentes CGU, l&apos;utilisateur reconnaît en avoir pris connaissance et en accepter les termes.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 border-t border-gray-200 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-lg">08.</span>
              Contact et Support Juridique
            </h2>
            <p>
              Pour toute question relative aux présentes Conditions Générales d&apos;Utilisation ou à l&apos;exécution de votre contrat :
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-slate-900">METAWEB SOLUTION / Daana Tech — Support Contrats &amp; Relations Clients</div>
                <div className="text-sm text-slate-600">Email : contact@daana.tech</div>
                <div className="text-xs text-slate-400 mt-1">Plateforme : daana.tech (alias: ai.sley.group)</div>
              </div>
              <a
                href="mailto:contact@daana.tech"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Contacter le support</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}
