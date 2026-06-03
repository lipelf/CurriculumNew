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
  title: "Luiz Fellipe — Dev Backend",
  description: "Desenvolvedor Backend Jr. | TypeScript · Node.js · NestJS · PostgreSQL",
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
