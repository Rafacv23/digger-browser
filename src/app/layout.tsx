import type { Metadata } from "next"
import { Literata } from "next/font/google"
import "./globals.css"

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Digger Browser",
  description: "AI powered search engine",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${literata.variable} antialiased`}>{children}</body>
    </html>
  )
}
