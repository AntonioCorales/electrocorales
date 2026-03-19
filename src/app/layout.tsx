import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victor Corales | Electricista Chimbote y Nuevo Chimbote",
  description: "Soy Victor Corales, electricista profesional en Chimbote y Nuevo Chimbote con más de 30 años de experiencia. Ofrezco instalaciones eléctricas, pozos a tierra, electrobombas, reparación de artefactos, mantenimiento de lavadoras y asesoría en proyectos.",
  keywords: [
    "Electricista Chimbote",
    "Electricista Nuevo Chimbote",
    "Electricista a domicilio Chimbote",
    "Victor Corales electricista",
    "Instalaciones eléctricas Chimbote",
    "Pozos a tierra Nuevo Chimbote",
    "Reparación de artefactos eléctricos",
    "Mantenimiento de lavadoras Chimbote",
    "Instalación de electrobombas",
    "Asesoría en proyectos eléctricos",
    "Electricista de emergencia Chimbote",
    "Técnico electricista Nuevo Chimbote"
  ],
  authors: [{ name: "Victor Corales" }],
  creator: "Victor Corales",
  publisher: "Victor Corales",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://victor.corales.dev",
    title: "Victor Corales | Electricista Profesional en Chimbote y Nuevo Chimbote",
    description: "Servicios eléctricos integrales, seguros y confiables en Chimbote y Nuevo Chimbote. Instalaciones, pozos a tierra, electrobombas y más.",
    siteName: "Victor Corales - Electricista Profesional",
    images: [
      {
        url: "https://files.corales.dev/victor/hero.webp",
        width: 1200,
        height: 630,
        alt: "Victor Corales - Electricista Profesional en Chimbote y Nuevo Chimbote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Corales | Electricista en Chimbote y Nuevo Chimbote",
    description: "Soy electricista profesional con más de 30 años de experiencia. Soluciones seguras y confiables para tu hogar o empresa en Chimbote.",
    images: ["https://files.corales.dev/victor/hero.webp"],
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
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth scroll-pt-24">
      <body className="antialiased bg-gray-50 text-gray-900 theme-1">
        {children}
      </body>
    </html>
  );
}
