import Link from "next/link";
import { CheckCircle2, Truck, MapPin } from "lucide-react";
import { SpotlogLogo } from "@/components/brand/spotlog-logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      <div className="hidden lg:flex relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-spotorange-500/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-700/30 rounded-full translate-y-32 -translate-x-32 blur-3xl" />

        <div className="relative z-10 p-12 flex flex-col justify-between text-white w-full">
          <Link href="/" className="inline-block w-fit">
            <SpotlogLogo variant="full" light />
          </Link>

          <div className="space-y-8 max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-balance">
              Logística que entrega <em className="text-spotorange-400">controle</em>,
              não só pacote.
            </h2>
            <p className="text-ink-300 text-lg leading-relaxed">
              Acompanhe coletas, entregas, ocorrências, SLA e chamados em um
              único painel. Tudo conectado, do CD ao destinatário.
            </p>

            <div className="space-y-3">
              {[
                { icon: Truck, label: "Rastreamento em tempo real" },
                { icon: MapPin, label: "Cobertura em São Paulo e Grande SP" },
                { icon: CheckCircle2, label: "Atendimento humano + IA" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 backdrop-blur">
                    <f.icon className="h-5 w-5 text-spotorange-400" />
                  </div>
                  <span className="text-sm">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Spotlog. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <div className="flex flex-col px-6 py-12 lg:px-12 lg:py-16 justify-center">
        <Link href="/" className="lg:hidden inline-block mb-8 w-fit">
          <SpotlogLogo variant="full" />
        </Link>
        <div className="mx-auto w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
