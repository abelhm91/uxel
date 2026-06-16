import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "UXEL — Diseño Web Freelance",
  description: "Diseño web que convierte visitas en clientes. Landing pages, e-commerce y webs corporativas a medida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <CustomCursor />
        <a
          href="#main-content"
          className="fixed top-2 left-2 z-[9999] -translate-y-20 focus:translate-y-0 bg-accent text-ink font-bold text-sm px-4 py-2 rounded-full transition-transform duration-150"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
