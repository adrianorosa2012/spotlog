import {
  MapPin,
  Calendar,
  FileCheck,
  Headphones,
  Camera,
  History,
  TrendingUp,
  Bell,
} from "lucide-react";

const items = [
  { icon: MapPin, title: "Rastreamento em tempo real", desc: "GPS do entregador, status do pedido e ETA pra cada destino." },
  { icon: Calendar, title: "Coleta sob demanda", desc: "Solicitação pelo painel ou API com janela de tempo definida." },
  { icon: FileCheck, title: "Protocolos de entrega", desc: "Checklist por tipo de produto e destinatário." },
  { icon: Headphones, title: "Suporte consultivo", desc: "Time atende com contexto do seu negócio, não roteiro." },
  { icon: Camera, title: "Evidência de entrega", desc: "Foto, assinatura digital e geolocalização do recebimento." },
  { icon: History, title: "Histórico completo", desc: "Cada interação, status e ocorrência guardada por anos." },
  { icon: TrendingUp, title: "SLA por cliente", desc: "Métricas individuais, comparativos e alertas de desvio." },
  { icon: Bell, title: "Notificações automáticas", desc: "Cliente final é avisado por e-mail, SMS e WhatsApp." },
];

export function ControleOperacional() {
  return (
    <section className="py-20 lg:py-32 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-spotorange-500/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-700/40 rounded-full translate-y-32 -translate-x-32 blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-sm font-semibold text-spotorange-400 uppercase tracking-wider mb-3">
            Controle operacional
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance">
            Controle operacional que{" "}
            <span className="text-spotorange-400">gera confiança.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-300">
            Tudo o que sua operação precisa pra entregar sem surpresas — e
            comprovar quando der ruim.
          </p>
        </div>

        {/* CARDS BRANCOS SÓLIDOS em fundo azul — máximo contraste */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-6 border-2 border-transparent hover:border-spotorange-500 hover:-translate-y-1 transition-all duration-300 shadow-card-hover"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 group-hover:bg-spotorange-500 transition-colors mb-4">
                <item.icon className="h-6 w-6 text-navy-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-sm text-ink-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
