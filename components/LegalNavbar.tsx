import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function LegalNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.jpeg"
            alt="SLEY AI Logo"
            className="w-8 h-8 object-contain rounded-md shadow-xs"
          />
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tight text-[#128C7E]">
              SLEY AI
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Conformité & Légal
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l&apos;accueil</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
