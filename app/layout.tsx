import type React from "react"
import type { Metadata } from "next"
import { Oswald, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const oswald = Oswald({ subsets: ["latin"], weight: ["300", "400", "600", "700"] })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Repuestera San Cayetano | Motos y Bicicletas - Rosario de Lerma, Salta",
  description:
    "Taller de motos y bicicletas en Rosario de Lerma, Salta, Argentina. Reparaciones, repuestos y servicio de calidad.",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Repuestera San Cayetano | Motos y Bicicletas",
    description: "Taller de motos y bicicletas en Rosario de Lerma, Salta, Argentina. Reparaciones, repuestos y servicio de calidad.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 1200,
        alt: "Repuestera San Cayetano Logo",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Repuestera San Cayetano | Motos y Bicicletas",
    description: "Taller de motos y bicicletas en Rosario de Lerma, Salta, Argentina.",
    images: ["/logo.jpeg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${oswald.className} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
