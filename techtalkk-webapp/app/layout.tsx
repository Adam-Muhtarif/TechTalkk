import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins, Archivo, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

import Nav from '@/components/shared/nav'
import TopLoader from '@/components/shared/topLoader'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const archivo = Archivo({
  variable: '--font-archivo',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TechTalkk',
  description:
    'TeckTalkk is a vibrant online platform designed for developers, tech enthusiasts, and learners to connect, collaborate, and grow. Whether you&apos;re a beginner exploring the world of coding or an experienced developer looking to',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${archivo.variable}} ${geistMono.variable} ${poppins.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        <TopLoader />

        <Nav />
        <main className="-z-50 relative min-h-screen min-w-screen mx-auto overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
