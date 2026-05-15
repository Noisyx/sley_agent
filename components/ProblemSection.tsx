import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { MessageSquareWarning, Moon, TimerOff, Frown } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-8 leading-tight">
              Vos journées ressemblent-elles à <span className="text-orange-500">ça ?</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2 bg-orange-100 rounded-full text-orange-500">
                  <MessageSquareWarning className="w-6 h-6" />
                </div>
                <p>
                  Vous recevez <strong>50 fois par jour</strong> : <em>"Où êtes-vous ?"</em> ou <em>"C'est combien ?"</em>.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2 bg-orange-100 rounded-full text-orange-500">
                  <Moon className="w-6 h-6" />
                </div>
                <p>
                  Vous <strong>perdez des ventes</strong> la nuit pendant votre sommeil.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2 bg-orange-100 rounded-full text-orange-500">
                  <TimerOff className="w-6 h-6" />
                </div>
                <p>
                  Vous êtes <strong>débordé</strong> et laissez filer des clients chez la concurrence.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2 bg-orange-100 rounded-full text-orange-500">
                  <Frown className="w-6 h-6" />
                </div>
                <p>
                  Vous perdez du temps avec des curieux qui <strong>n'achètent rien</strong>.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-orange-200/40 via-orange-100/10 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2.75rem] border border-gray-100 bg-white shadow-xl transition-transform duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={withBasePath("/problem.png")}
                  alt="Gérant débordé par les messages WhatsApp"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
