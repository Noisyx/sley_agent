import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-green-600 text-white flex items-center justify-center font-extrabold shadow-sm">
              SA
            </div>
            <div>
              <div className="text-lg font-extrabold text-gray-900">
                Sley Agent
              </div>
              <div className="text-sm text-gray-500">
                Agent IA WhatsApp 24/7
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            <Link
              href="/mentions-legales"
              className="text-gray-600 hover:text-green-700 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-gray-600 hover:text-green-700 transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-green-700 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-gray-500">
            <a
              href="mailto:contact@sley.group"
              className="hover:text-green-700 transition-colors"
            >
              contact@sley.group
            </a>
            <span className="hidden sm:inline text-gray-300">•</span>
            <Link
              href={buildWhatsAppLink({ text: "Bonjour — je veux une démo Sley Agent." })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold ring-1 ring-gray-200 transition-colors"
            >
              WhatsApp
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sley Consulting. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
