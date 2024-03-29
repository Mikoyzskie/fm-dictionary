
import type { Metadata } from 'next'
import './globals.css'

import { PProvider, useCContext } from "@/lib/Provider"

export const metadata: Metadata = {
  title: 'Dictionary App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <PProvider>
      <html lang="en" suppressHydrationWarning>
        {children}
      </html>
    </PProvider>
  )
}
