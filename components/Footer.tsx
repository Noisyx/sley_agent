import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <img src="/logo.jpeg" alt="SLEY AI Logo" className="w-8 h-8 object-contain" />
                <div className="text-lg font-extrabold text-primary">
                  SLEY AI
                </div>
              </div>
              <div className="text-sm text-muted">
                Digitalisation WhatsApp — Essential & Pro
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            <Link
              href="/mentions-legales"
              className="text-muted hover:text-primary-hover transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-muted hover:text-primary-hover transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>

        <div className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-muted">
            <a
              href="mailto:contact@sley.group"
              className="hover:text-primary-hover transition-colors"
            >
              contact@sley.group
            </a>
            <span className="hidden sm:inline text-border">•</span>
            <Link
              href={buildWhatsAppLink({ text: "Bonjour — je veux une démo Sley AI." })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-background hover:bg-surface-muted text-foreground font-semibold ring-1 ring-border transition-colors"
            >
              WhatsApp
            </Link>
          </div>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Meta Web Solutions. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
