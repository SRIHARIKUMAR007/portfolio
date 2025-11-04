import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-50`}>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
