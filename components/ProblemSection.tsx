import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { MessageSquareWarning, Moon, TimerOff, Frown } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">
              Vos journées ressemblent-elles à <span className="text-accent">ça ?</span>
            </h2>
            <div className="space-y-6 text-lg text-muted">
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2 bg-accent-subtle rounded-full text-accent">
                  <MessageSquareWarning className="w-6 h-6" />
                </div>
                <p>
                  Vous recevez <strong>50 fois par jour</strong> : <em>"Où êtes-vous ?"</em> ou <em>"C'est combien ?"</em>.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2 bg-accent-subtle rounded-full text-accent">
                  <Moon className="w-6 h-6" />
                </div>
                <p>
                  Vous <strong>perdez des clients et des ventes</strong> pendant votre repos.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2 bg-accent-subtle rounded-full text-accent">
                  <TimerOff className="w-6 h-6" />
                </div>
                <p>
                  Vous êtes <strong>débordé</strong> et laissez filer des clients chez la concurrence.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2 bg-accent-subtle rounded-full text-accent">
                  <Frown className="w-6 h-6" />
                </div>
                <p>
                  Vous perdez du temps avec des prospects qui <strong>n'achètent rien</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-accent-subtle via-accent-subtle/40 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2.75rem] border border-border bg-surface shadow-xl transition-transform duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={withBasePath("/problem.jpg")}
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
