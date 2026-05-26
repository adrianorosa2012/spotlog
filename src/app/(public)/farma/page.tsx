import Link from "next/link";
import Image from "next/image";
import { Pill, ShieldCheck, FileCheck, Camera, Signature, AlertCircle, History, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/public/cta-banner";

export const metadata = { title: "Farma, Manipulação e Correlatos" };

const segmentos = [
  { title: "Farmácias de manipulação", desc: "Entrega ao paciente com confirmação e controle." },
  { title: "Drogarias", desc: "Coletas recorrentes e entregas expressas." },
  { title: "Correlatos", desc: "Materiais hospitalares, descartáveis e insumos." },
  { title: "Suplementos", desc: "B2C com rastreamento pro consumidor final." },
  { title: "Dermocosméticos", desc: "Operação cuidadosa para produtos sensíveis." },
  { title: "Produtos sensíveis", desc: "Checklist e procedimentos específicos." },
];

const funcionalidades = [
  { icon: FileCheck, title: "Checklist de coleta", desc: "Por tipo de produto e cliente." },
  { icon: Camera, title: "Evidência fotográfica", desc: "Foto da coleta e da entrega." },
  { icon: Signature, title: "Assinatura do recebedor", desc: "Digital, com nome e documento." },
  { icon: AlertCircle, title: "Registro de ocorrência", desc: "Atrasos, recusas, divergências." },
  { icon: History, title: "Histórico de status", desc: "Linha do tempo completa por entrega." },
  { icon: BarChart3, title: "SLA por cliente", desc: "Métricas individuais e relatórios." },
];

export default function FarmaPage() {
  return (
    <div>
      <section className="relative pt-32 lg:pt-44 pb-16 lg:pb-24 bg-gradient-soft hero-pattern overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-spotorange-50 px-4 py-1.5 mb-6 border border-spotorange-200">
                <Pill className="h-3.5 w-3.5 text-spotorange-600" />
                <span className="text-xs font-semibold text-spotorange-700">
                  Operação preparada para o segmento de saúde
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 leading-[1.1] text-balance">
                Logística para farma, manipulação e correlatos com{" "}
                <span className="text-gradient-spotlog">controle e rastreabilidade.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-ink-600 max-w-2xl leading-relaxed">
                Operações de saúde exigem processos mais cuidadosos, comunicação
                clara, evidências de entrega e acompanhamento de ponta a ponta.
                A Spotlog estrutura tudo isso pra você.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="orange" size="xl" asChild>
                  <Link href="/contato?segment=farma">
                    Falar com especialista farma
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="#funcionalidades">Ver funcionalidades</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              {/* Foto real farmácia/farmacêutico */}
              <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-card bg-navy-100 relative">
                <Image
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=85"
                  alt="Farmácia de manipulação - Spotlog"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>

              {/* Card branco flutuante com checklist farma */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white rounded-2xl shadow-card border border-ink-100 p-5 w-72 hidden md:block">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-bold text-ink-500">Pedido</div>
                    <div className="text-sm font-bold text-navy-900">#FARMA-1024</div>
                  </div>
                  <span className="text-[10px] font-bold text-spotorange-700 bg-spotorange-50 px-2 py-1 rounded-full uppercase tracking-wider">
                    Em rota
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Checklist coleta", done: true },
                    { label: "Temperatura validada", done: true },
                    { label: "Em rota ao paciente", done: true, active: true },
                    { label: "Aguardando entrega", done: false },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`grid h-5 w-5 place-items-center rounded-full shrink-0 ${s.done ? (s.active ? "bg-spotorange-500" : "bg-success-500") : "bg-ink-100"}`}>
                        {s.done ? (
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        ) : (
                          <div className="h-1.5 w-1.5 rounded-full bg-ink-400" />
                        )}
                      </div>
                      <span className={`text-xs ${s.done ? "text-navy-900 font-semibold" : "text-ink-400"}`}>
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badge laranja */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-spotorange-500 to-spotorange-600 rounded-2xl shadow-orange-glow p-4 text-white hidden md:block">
                <Pill className="h-6 w-6 mb-2" />
                <div className="text-[10px] uppercase tracking-wider font-semibold opacity-80">Cuidado farma</div>
                <div className="text-sm font-bold leading-tight">Processo<br />certificado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-sm font-semibold text-spotorange-600 uppercase tracking-wider mb-3">
              Atendemos
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight text-balance">
              Segmentos que confiam na operação da Spotlog
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {segmentos.map((s) => (
              <div key={s.title} className="card-glow p-6 group">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-navy-50 group-hover:bg-spotorange-500 transition-colors mb-4">
                  <Pill className="h-5 w-5 text-navy-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">{s.title}</h3>
                <p className="text-sm text-ink-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="funcionalidades" className="py-20 lg:py-28 bg-navy-50/40">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-sm font-semibold text-spotorange-600 uppercase tracking-wider mb-3">
              Funcionalidades operacionais
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight text-balance">
              Tudo o que sua operação farma{" "}
              <span className="text-gradient-spotlog">precisa rastrear.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {funcionalidades.map((f) => (
              <div key={f.title} className="card-glow p-6 group">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-spotorange-50 group-hover:bg-spotorange-500 transition-colors mb-4">
                  <f.icon className="h-6 w-6 text-spotorange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{f.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção compliance — fundo navy + CAIXA BRANCA */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="container relative max-w-5xl">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-spotorange-50 rounded-full -translate-y-32 translate-x-32 opacity-50" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-1.5 mb-5">
                <ShieldCheck className="h-3.5 w-3.5 text-navy-900" />
                <span className="text-xs font-semibold text-navy-900">
                  Compliance e documentação
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight mb-4 text-balance">
                Conformidade como{" "}
                <span className="text-gradient-spotlog">diferencial competitivo.</span>
              </h2>
              <p className="text-lg text-ink-600 leading-relaxed max-w-2xl mb-6">
                Para empresas que atuam com produtos regulados, a logística não
                pode ser tratada como uma etapa comum. A Spotlog estrutura
                processos para apoiar operações que exigem documentação,
                rastreabilidade, controle e evidências.
              </p>
              <p className="text-sm text-ink-500 italic max-w-2xl">
                * As certificações, AFE e licenças aplicáveis à nossa operação
                ficam disponíveis para consulta direta sob solicitação. Cada
                documento é gerenciado internamente com controle de validade e
                renovação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
