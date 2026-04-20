import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Contact",
  description: "Contactez Sley Agent.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="text-sm font-medium text-green-700">
            ← Retour à l’accueil
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Contact
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Le plus simple: envoyez-nous un message sur WhatsApp, et on vous
          répond rapidement.
        </p>

        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
          <Link
            href={buildWhatsAppLink({
              text: "Bonjour — j’ai une question à propos de Sley Agent.",
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Contacter sur WhatsApp
          </Link>
        </div>
      </div>
    </main>
  );
}

