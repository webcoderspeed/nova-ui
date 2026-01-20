import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { VersionProvider } from "@/components/version-provider"
import { NovaToaster } from "@/components/nova/nova-toaster"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nova.UI - The Modular Design System for Modern Web Apps",
  description:
    "Built for developers, powered by shadcn, Framer Motion, GSAP, TypeScript, Tailwind CSS with i18n and RTL support.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="acefone-dark dark">
      <body className={`font-sans antialiased`}>
        <ThemeProvider defaultBrand="acefone" defaultMode="dark">
          <VersionProvider defaultVersion="1.1.0">
            {children}
            <NovaToaster />
          </VersionProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
