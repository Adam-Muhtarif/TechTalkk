import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        <main className="relative flex min-h-screen mx-auto w-full flex-col overflow-x-hidden font-sans">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
