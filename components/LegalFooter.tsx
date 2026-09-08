import Link from "next/link";
import { Mail, Shield, FileText, Trash2, ExternalLink } from "lucide-react";

export default function LegalFooter() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Col 1: Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="/logo.jpeg"
                alt="SLEY AI Logo"
                className="w-7 h-7 object-contain rounded"
              />
              <span className="font-extrabold text-gray-900 tracking-tight">
                SLEY AI
              </span>
              <span className="text-xs text-gray-400">par Daana Tech</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Solution d&apos;automatisation et d&apos;agents conversationnels IA
              connectée à la plateforme WhatsApp Cloud API via le mode Coexistence
              officiel.
            </p>
            <div className="text-xs text-gray-400">
              <span className="font-medium text-gray-600">Meta App ID:</span> 1390061966141378
            </div>
          </div>

          {/* Col 2: Legal Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
              Documents Légaux
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/confidentialite"
                  className="inline-flex items-center gap-1.5 text-gray-600 hover:text-emerald-700 transition-colors"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Politique de Confidentialité</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cgu"
                  className="inline-flex items-center gap-1.5 text-gray-600 hover:text-emerald-700 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Conditions Générales d&apos;Utilisation (CGU)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/suppression-donnees"
                  className="inline-flex items-center gap-1.5 text-gray-600 hover:text-emerald-700 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5 text-red-500" />
                  <span>Instructions de suppression des données</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <span>Mentions Légales</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & DPO */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
              Contact & Protection des Données
            </h4>
            <p className="text-xs text-gray-500">
              Pour toute question relative à vos données personnelles, à la conformité
              ou au support technique :
            </p>
            <a
              href="mailto:contact@daana.tech"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-white border border-emerald-200 px-3 py-2 rounded-lg shadow-xs hover:border-emerald-300 transition-all"
            >
              <Mail className="w-4 h-4 text-emerald-600" />
              <span>contact@daana.tech</span>
            </a>
            <div className="text-[11px] text-gray-400">
              Domaine :{" "}
              <a
                href="https://daana.tech"
                className="underline hover:text-gray-600"
              >
                daana.tech
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} METAWEB SOLUTION / Daana Tech. Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span>Tech Provider WhatsApp Cloud API</span>
            <span className="text-gray-300">•</span>
            <Link href="/" className="hover:text-emerald-700">
              Accueil SLEY AI
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
