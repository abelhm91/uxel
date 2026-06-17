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
  metadataBase: new URL("https://abelwp.es"),
  title: {
    default: "Abel — Diseño Web Freelance en España | UXEL_",
    template: "%s | UXEL_",
  },
  description:
    "Diseño y desarrollo webs a medida en España. Landing pages, tiendas online y webs corporativas que cargan rápido, se ven bien y convierten visitas en clientes. Presupuesto sin compromiso.",
  keywords: [
    "diseño web freelance",
    "diseño web España",
    "desarrollo web a medida",
    "landing page",
    "tienda online",
    "web corporativa",
    "diseñador web autónomo",
    "freelance web designer Spain",
  ],
  authors: [{ name: "Abel", url: "https://abelwp.es" }],
  creator: "Abel",
  alternates: {
    canonical: "https://abelwp.es",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://abelwp.es",
    siteName: "UXEL_",
    title: "Abel — Diseño Web Freelance en España | UXEL_",
    description:
      "Diseño y desarrollo webs a medida en España. Landing pages, tiendas online y webs corporativas que cargan rápido, se ven bien y convierten.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UXEL_ — Diseño Web Freelance por Abel en España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abel — Diseño Web Freelance en España | UXEL_",
    description:
      "Webs a medida que cargan rápido, se ven bien y convierten. Freelance en España.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abel",
              jobTitle: "Diseñador Web Freelance",
              url: "https://abelwp.es",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
              },
              sameAs: ["https://abelwp.es"],
              knowsAbout: [
                "Diseño Web",
                "Desarrollo Web",
                "Landing Pages",
                "E-commerce",
                "Shopify",
                "WordPress",
              ],
            }),
          }}
        />
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
