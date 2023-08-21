import './globals.css'
import type { Metadata } from 'next'
import { Inter,Lexend_Exa,Outfit } from 'next/font/google'
const outfit = Outfit({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>{children}</body>
    </html>
  )
}
