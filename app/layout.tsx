import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'TJ-Consult | IT-konsulent & AI-specialist i Danmark',
    template: '%s | TJ-Consult',
  },
  description:
    'Yousaf Javaid — dansk IT-konsulent og AI-specialist. Intelligente IT-løsninger, AI-agenter, softwareudvikling og IT-sikkerhed der skaber reel forretningsværdi.',
  keywords: [
    'IT-konsulent',
    'AI-specialist',
    'Danmark',
    'softwareudvikling',
    'AI-agenter',
    'IT-sikkerhed',
    'cloud',
    'Azure',
    'Next.js',
    'TJ-Consult',
  ],
  authors: [{ name: 'Yousaf Javaid' }],
  creator: 'Yousaf Javaid',
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    siteName: 'TJ-Consult',
    title: 'TJ-Consult | IT-konsulent & AI-specialist',
    description: 'Intelligent IT-konsulting og AI-løsninger der skaber reel forretningsværdi.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
