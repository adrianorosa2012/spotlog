import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Pill,
  Zap,
  Calendar,
  Route,
  RotateCcw,
  Truck,
  Package2,
  ArrowRight,
} from "lucide-react";

const solucoes = [
  {
    icon: ShoppingBag,
    title: "Entregas para E-commerce",
    desc: "Coletas programadas, entregas expressas e rastreamento integrado pra reduzir chamados e melhorar a experiência do cliente final.",
    href: "/ecommerce",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Pill,
    title: "Farma, Manipulação e Correlatos",
    desc: "Operações sensíveis com checklist, evidência fotográfica, assinatura digital e gestão de não conformidades.",
    href: "/farma",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Zap,
    title: "Entregas Expressas",
    desc: "Same-day e janelas curtas em São Paulo capital e Grande SP, com SLA monitorado em tempo real.",
    href: "/solucoes",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Calendar,
    title: "Coletas Programadas",
    desc: "Equipe passa no seu CD, loja ou laboratório nos horários definidos, com checklist e confirmação.",
    href: "/solucoes",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Route,
    title: "Rotas Dedicadas",
    desc: "Veículos e entregadores exclusivos para o seu volume, com gestão de escala e suporte direto.",
    href: "/solucoes",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: RotateCcw,
    title: "Logística Reversa",
    desc: "Coleta de devoluções, troca de mercadorias e retornos — com mesma rastreabilidade da ida.",
    href: "/solucoes",
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Truck,
    title: "Utilitários e Vans",
    desc: "Cargas maiores, mudanças comerciais e transferências entre filiais com motorista treinado.",
    href: "/solucoes",
    image: "https://images.unsplash.com/photo-1620677368158-32b948b4ba6c?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Package2,
    title: "Operação Sob Demanda",
    desc: "Picos sazonais, lançamentos, eventos — escalamos a operação conforme sua necessidade.",
    href: "/solucoes",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80",
  },
];

export function SolucoesGrid() {
  return (
    <section id="solucoes" className="py-20 lg:py-32 bg-navy-50/40">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-sm font-semibold text-spotorange-600 uppercase tracking-wider mb-3">
            Soluções
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-navy-950 tracking-tight text-balance">
            Soluções logísticas para{" "}
            <span className="text-gradient-spotlog">cada etapa da operação.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-600">
            Da coleta ao comprovante, todas as nossas modalidades têm rastreamento,
            atendimento e suporte. Escolha a que faz sentido pro seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solucoes.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="card-glow group overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
                <div className="absolute top-3 left-3 grid h-10 w-10 place-items-center rounded-xl bg-white/95 backdrop-blur shadow-soft">
                  <s.icon className="h-5 w-5 text-spotorange-600" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-bold text-navy-900 mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed flex-1 mb-3 line-clamp-3">
                  {s.desc}
                </p>
                <div className="flex items-center gap-1 text-sm font-semibold text-spotorange-600 group-hover:gap-2 transition-all">
                  Saiba mais
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
