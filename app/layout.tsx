import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './theme-provider'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Saurav Kumar — Backend & Distributed Systems Engineer',
  description:
    'Final year CSE student at IIIT Kota building production-grade distributed systems with Node.js, Redis, Socket.IO and PostgreSQL.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-32">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
