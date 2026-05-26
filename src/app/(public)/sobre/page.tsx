import Link from "next/link";
import Image from "next/image";
import { Target, Users, Heart, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuemSomos } from "@/components/public/quem-somos";
import { CtaBanner } from "@/components/public/cta-banner";

export const metadata = { title: "Quem Somos" };

const valores = [
  { icon: Target, title: "Foco operacional", desc: "Cada detalhe da operação é pensado pra reduzir falhas e aumentar previsibilidade." },
  { icon: Users, title: "Atendimento humano", desc: "Pessoas reais resolvendo problemas reais — sem você ficar preso em URA." },
  { icon: Heart, title: "Cuidado com produto", desc: "Embalagens, manuseio e processo orientados pelo tipo de carga." },
  { icon: Award, title: "Compromisso com prazo", desc: "SLA acompanhado por cliente, com transparência total nos relatórios." },
];

export default function SobrePage() {
  return (
    <div>
      <section className="relative pt-32 lg:pt-44 pb-16 lg:pb-24 bg-gradient-soft hero-pattern overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="text-sm font-semibold text-spotorange-600 uppercase tracking-wider mb-4">
                Quem somos
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 leading-[1.1] text-balance">
                A Spotlog nasceu pra resolver o que{" "}
                <span className="text-gradient-spotlog">logística genérica não resolve.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-ink-600 leading-relaxed">
                Acreditamos que entregar não é só transportar. É comunicar, dar
                visibilidade, oferecer suporte de verdade e cuidar de cada pedido
                como se fosse o único.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="orange" size="xl" asChild>
                  <Link href="/contato">
                    Falar com a Spotlog
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-card bg-navy-100 relative">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=85"
                  alt="Equipe Spotlog"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card border border-ink-100 p-5 hidden md:block">
                <div className="text-[10px] uppercase tracking-wider font-bold text-ink-500 mb-1">Nosso time</div>
                <div className="text-base font-bold text-navy-900">Pessoas + tecnologia</div>
                <div className="text-xs text-ink-600 mt-1">Especialistas em logística que conhecem cada operação como a própria.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuemSomos />

      <section className="py-20 lg:py-28 bg-navy-50/40">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-sm font-semibold text-spotorange-600 uppercase tracking-wider mb-3">
              Nossos valores
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight text-balance">
              O que nos move{" "}
              <span className="text-gradient-spotlog">todos os dias.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {valores.map((v) => (
              <div key={v.title} className="card-glow p-6 group">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-spotorange-50 group-hover:bg-spotorange-500 transition-colors mb-4">
                  <v.icon className="h-6 w-6 text-spotorange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
