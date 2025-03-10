import type { Metadata } from "next"
import { Literata } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
  SITE_META_DESCRIPTION,
  SITE_META_NAME,
  SITE_URL,
} from "@/lib/constants"

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Digger Browser",
  description:
    "Next generation AI powered browser, that scraps the resuts of the web for you.",
  creator: "Rafa Canosa",
  authors: { name: "Rafa Canosa" },
  metadataBase: new URL(SITE_URL),
  category: "search engine",
  verification: { google: "8Ssu9wyMqGLnOHp01rAbY2QJAKTU4XkqTq9OPShpeOc" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_META_NAME,
    description: SITE_META_DESCRIPTION,
    siteName: SITE_META_NAME,
    images: [
      {
        url: "/favicon3.png",
        width: 1200,
        height: 630,
        alt: SITE_META_NAME,
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "ai",
    "browser",
    "next generation",
    "search",
    "scraping",
    "web",
    "digger",
    "digger browser",
    "digger-browser",
    "next-generation-ai",
    "next-generation-browser",
    "next-generation-search",
    "next-generation-scraping",
    "next-generation-web",
    "next-gen-ai",
    "next-gen-browser",
    "next-gen-search",
  ],
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon3.ico",
    apple: "/favicon3.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@rafacanosa",
    creator: "@rafacanosa",
    title: SITE_META_NAME,
    description: SITE_META_DESCRIPTION,
    images: [
      {
        url: "/favicon3.png",
        alt: SITE_META_NAME,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${literata.variable} antialiased max-w-[900px] mx-auto px-8`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
