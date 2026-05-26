import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";
import { SpotlogLogo } from "@/components/brand/spotlog-logo";
import { Button } from "@/components/ui/button";

const linksGroups = {
  Soluções: [
    { href: "/ecommerce", label: "E-commerce" },
    { href: "/farma", label: "Farma & Manipulação" },
    { href: "/solucoes", label: "Coletas Programadas" },
    { href: "/solucoes", label: "Rotas Dedicadas" },
    { href: "/solucoes", label: "Logística Reversa" },
  ],
  Empresa: [
    { href: "/sobre", label: "Quem Somos" },
    { href: "/tecnologia", label: "Tecnologia" },
    { href: "/atendimento", label: "Atendimento" },
    { href: "/abrangencia", label: "Abrangência" },
    { href: "/blog", label: "Blog" },
  ],
  Atendimento: [
    { href: "/rastreamento", label: "Rastrear entrega" },
    { href: "/login", label: "Área do Cliente" },
    { href: "/contato", label: "Solicitar proposta" },
    { href: "/contato", label: "Fale conosco" },
  ],
  Legal: [
    { href: "/privacidade", label: "Privacidade" },
    { href: "/termos", label: "Termos de uso" },
    { href: "/lgpd", label: "LGPD" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-spotorange-500/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />

      {/* CTA strip BRANCA sobre fundo azul — caixa branca pra contraste */}
      <div className="container relative pt-14">
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-card grid md:grid-cols-3 gap-6 items-center mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl lg:text-3xl font-bold text-navy-950 mb-2">
              Vamos otimizar a sua logística?
            </h3>
            <p className="text-ink-600">
              Conta seu segmento, volume e região. Em até 1 dia útil
              um especialista responde com proposta sob medida.
            </p>
          </div>
          <div className="md:text-right">
            <Button variant="orange" size="xl" asChild>
              <Link href="/contato">
                Solicitar proposta
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container relative pb-20">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <SpotlogLogo variant="full" light />
            </Link>
            <p className="text-sm text-ink-300 leading-relaxed max-w-sm mb-6">
              Logística inteligente para empresas que precisam entregar com
              controle, agilidade e confiança. E-commerce, farma, manipulação,
              correlatos e operações B2B com rastreabilidade ponta a ponta.
            </p>

            {/* Caixa branca de contato sobre fundo azul */}
            <div className="bg-white rounded-2xl p-5 shadow-soft space-y-3 text-navy-900 max-w-sm">
              <a href="mailto:contato@spotlog.com.br" className="flex items-center gap-3 group hover:text-spotorange-600 transition-colors">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-navy-50 group-hover:bg-spotorange-500 transition-colors shrink-0">
                  <Mail className="h-4 w-4 text-navy-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-ink-500">E-mail</div>
                  <div className="text-sm font-semibold">contato@spotlog.com.br</div>
                </div>
              </a>
              <a href="tel:+551100000000" className="flex items-center gap-3 group hover:text-spotorange-600 transition-colors">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-navy-50 group-hover:bg-spotorange-500 transition-colors shrink-0">
                  <Phone className="h-4 w-4 text-navy-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-ink-500">Telefone</div>
                  <div className="text-sm font-semibold">(11) 0000-0000</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-navy-50 shrink-0">
                  <MapPin className="h-4 w-4 text-navy-900" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-ink-500">Endereço</div>
                  <div className="text-sm font-semibold">São Paulo, SP — Brasil</div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-5">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-spotorange-500 text-white transition-all hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(linksGroups).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-ink-300 hover:text-spotorange-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Spotlog — Logística inteligente. Todos os direitos reservados.
          </p>
          <p className="text-xs text-ink-400">
            Feito com 🧡 no Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}
