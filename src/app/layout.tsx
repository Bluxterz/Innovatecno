import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MouseMoveEffect from "@/components/custom/mouse-move-effect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InnovaTecno SpA - Servicios de Tecnología e Infraestructura TI",
  description: "InnovaTecno SpA es una empresa chilena especializada en servicios tecnológicos: soporte técnico 24/7, venta de software, infraestructura TI, CCTV, equipos y salas virtuales.",
  keywords: "tecnología, infraestructura TI, soporte técnico, CCTV, software empresarial, Chile",
  authors: [{ name: "InnovaTecno SpA" }],
  openGraph: {
    title: "InnovaTecno SpA - Servicios de Tecnología e Infraestructura TI",
    description: "Empresa chilena especializada en servicios tecnológicos integrales",
    url: "https://innovatecno.cl",
    siteName: "InnovaTecno",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  );
}
