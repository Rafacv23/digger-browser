import type { Metadata } from "next"
import { Literata } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Digger Browser",
  description:
    "Next generation AI powered browser, that scraps the resuts of the web for you.",
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
