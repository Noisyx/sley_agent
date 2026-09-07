import Link from "next/link";
import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { withBasePath } from "@/lib/basePath";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-subtle text-primary text-sm font-bold mb-8 border border-primary/20 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              <span>Restaurants et agences de transport & livraison</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight mb-6 leading-[1.1]">
              Ne perdez plus aucune vente sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">WhatsApp.</span>
            </h1>

            <p className="mt-4 text-xl text-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Digitalisez vos ventes et vos processus sur WhatsApp : parcours automatisés, catalogue, commandes et suivi. L&apos;assistant commercial IA 24/7 est disponible dans le Pack Pro.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href={buildWhatsAppLink({
                  text: "Bonjour — j'aimerais tester la démo de Sley AI pour mon entreprise.",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-primary hover:bg-primary-hover shadow-lg hover:shadow-xl shadow-primary/20 transition-all hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Tester la démo sur WhatsApp
              </Link>
            </div>

            <div className="mt-8 text-sm text-muted flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="flex items-center font-medium bg-success-subtle text-success px-3 py-1 rounded-full">
                  <svg className="w-4 h-4 mr-1 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Sans risque : 30 jours d'essai
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-surface-muted border-2 border-white flex items-center justify-center text-xs font-bold text-muted">R</div>
                  <div className="w-8 h-8 rounded-full bg-border border-2 border-white flex items-center justify-center text-xs font-bold text-muted">B</div>
                  <div className="w-8 h-8 rounded-full bg-border-strong border-2 border-white flex items-center justify-center text-xs font-bold text-white">A</div>
                </div>
                <span className="text-xs text-muted">Restaurants et agences de livraison à Lomé</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <Image
                src={withBasePath("/hero.jpg")}
                alt="SLEY — digitalisation WhatsApp"
                fill
                priority
                className="object-contain drop-shadow-2xl relative z-10"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-subtle blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-subtle blur-3xl opacity-50 pointer-events-none"></div>
    </section>
  );
}
