import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Resolve URL base limpando BOM/whitespace que podem aparecer em env vars
// importadas com encoding ruim. Cai pra VERCEL_URL → localhost em dev.
function resolveBaseUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    "http://localhost:3000";
  const cleaned = raw.replace(/^﻿/, "").trim();
  try {
    return new URL(cleaned).toString();
  } catch {
    return "http://localhost:3000";
  }
}

export const metadata: Metadata = {
  metadataBase: new URL(resolveBaseUrl()),
  title: {
    default:
      "Spotlog — Prospecção automatizada, CRM e propostas em uma só plataforma",
    template: "%s | Spotlog",
  },
  description:
    "Encontre os decisores certos, abra conversas em escala por e-mail e WhatsApp, organize o pipeline e envie propostas comerciais profissionais. Tudo automatizado, com IA e dados reais.",
  keywords: [
    "Spotlog",
    "SDR",
    "prospecção",
    "CRM",
    "IA",
    "automação de vendas",
    "outbound",
    "pipeline",
    "proposta comercial",
  ],
  openGraph: {
    title: "Spotlog",
    description:
      "A plataforma de prospecção, CRM e propostas com agente IA.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
