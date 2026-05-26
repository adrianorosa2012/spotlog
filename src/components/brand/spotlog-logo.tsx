import { cn } from "@/lib/utils";

/**
 * Logo oficial Spotlog — "S" estilizado como estrada com 2 curvas:
 *  - lado esquerdo: faixa azul navy
 *  - lado direito:  faixa laranja
 * Faixas tracejadas brancas simulando faixa central da estrada.
 *
 * variant:
 *   - "full"     → ícone + tipografia "SPOTLOG" + tagline (header / footer)
 *   - "stacked"  → ícone em cima, texto embaixo (footer mobile)
 *   - "mark"     → só o ícone S (favicon / avatars)
 *   - "wordmark" → só "SPOTLOG" (em ambientes pequenos)
 *
 * `light` = true → texto em branco (pra fundos escuros)
 */
export function SpotlogLogo({
  variant = "full",
  light = false,
  className,
}: {
  variant?: "full" | "stacked" | "mark" | "wordmark";
  light?: boolean;
  className?: string;
}) {
  const navy = "#1c2a83";
  const orange = "#ff5410";

  const Mark = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* Metade superior do "S" — curva azul (estrada que entra) */}
      <path
        d="M 78 12 C 60 10, 32 12, 22 28 C 12 42, 24 54, 44 54 L 54 54 L 54 38 L 44 38 C 38 38, 36 32, 40 28 C 46 22, 64 22, 78 26 Z"
        fill={navy}
      />
      {/* Faixas tracejadas brancas (faixa central da estrada) — metade superior */}
      <path
        d="M 72 18 C 56 17, 36 20, 30 30"
        stroke="white"
        strokeWidth="2.2"
        strokeDasharray="3.5 3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Metade inferior do "S" — curva laranja (estrada que sai) */}
      <path
        d="M 22 88 C 40 90, 68 88, 78 72 C 88 58, 76 46, 56 46 L 46 46 L 46 62 L 56 62 C 62 62, 64 68, 60 72 C 54 78, 36 78, 22 74 Z"
        fill={orange}
      />
      {/* Faixas tracejadas brancas — metade inferior */}
      <path
        d="M 28 82 C 44 83, 64 80, 70 70"
        stroke="white"
        strokeWidth="2.2"
        strokeDasharray="3.5 3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );

  if (variant === "mark") {
    return (
      <div className={cn("aspect-square", className)}>
        {Mark}
      </div>
    );
  }

  const textColor = light ? "text-white" : "text-navy-900";
  const orangeText = light ? "text-spotorange-400" : "text-spotorange-500";
  const taglineColor = light ? "text-ink-300" : "text-ink-500";

  if (variant === "wordmark") {
    return (
      <span className={cn("font-black tracking-tight text-2xl", className)}>
        <span className={textColor}>SPOT</span>
        <span className={orangeText}>LOG</span>
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <div className={cn("inline-flex flex-col items-center gap-1.5", className)}>
        <div className="h-14 w-14">{Mark}</div>
        <span className="font-black tracking-tight text-xl leading-none">
          <span className={textColor}>SPOT</span>
          <span className={orangeText}>LOG</span>
        </span>
        <span className={cn("text-[9px] font-bold uppercase tracking-[0.18em]", taglineColor)}>
          Logística inteligente
        </span>
      </div>
    );
  }

  // full
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <div className="h-11 w-11 shrink-0">{Mark}</div>
      <div className="flex flex-col leading-none">
        <span className="font-black tracking-tight text-xl">
          <span className={textColor}>SPOT</span>
          <span className={orangeText}>LOG</span>
        </span>
        <span className={cn("text-[9px] font-bold uppercase tracking-[0.18em] mt-0.5", taglineColor)}>
          Logística inteligente
        </span>
      </div>
    </div>
  );
}
