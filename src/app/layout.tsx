import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import AOSInit from "@/components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luiz Fellipe Rocha — Desenvolvedor Backend Jr.",
  description: "Portfólio de Luiz Fellipe Rocha, desenvolvedor Backend Jr. especializado em TypeScript, Node.js, NestJS e PostgreSQL.",
  keywords: ["Luiz Fellipe Rocha", "desenvolvedor backend", "TypeScript", "NestJS", "Node.js", "PostgreSQL"],
  authors: [{ name: "Luiz Fellipe Rocha" }],
  openGraph: {
    title: "Luiz Fellipe Rocha — Desenvolvedor Backend Jr.",
    description: "Portfólio de Luiz Fellipe Rocha, desenvolvedor Backend Jr. especializado em TypeScript, Node.js, NestJS e PostgreSQL.",
    url: "https://luizfellipe.com.br",
    siteName: "Luiz Fellipe Rocha",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300`}>
        <ThemeProvider>
          <AOSInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
