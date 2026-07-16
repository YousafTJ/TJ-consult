import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

const siteUrl = 'https://tjconsult.dk'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TJ-Consult | IT-konsulent, AI-rådgivning & Softwareudvikling',
    template: '%s | TJ-Consult',
  },
  description:
    'Yousaf Javaid er freelance IT-konsulent og AI-specialist i Danmark. Jeg hjælper virksomheder med AI-rådgivning, skræddersyet softwareudvikling, systemintegration og sikker IT-infrastruktur, der skaber reel forretningsværdi.',
  keywords: [
    'IT-konsulent',
    'freelance IT-konsulent',
    'IT-rådgivning',
    'IT-konsulent København',
    'AI-konsulent',
    'AI-rådgivning',
    'kunstig intelligens rådgivning',
    'RAG løsninger',
    'AI-agenter',
    'softwareudvikling',
    'skræddersyet software',
    'systemintegration',
    'API integration',
    'legacy modernisering',
    'cloud migrering',
    'Azure konsulent',
    'IT-infrastruktur',
    'server hosting',
    'backup og disaster recovery',
    'mailserver og domæne opsætning',
    'TJ-Consult',
  ],
  authors: [{ name: 'Yousaf Javaid' }],
  creator: 'Yousaf Javaid',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: siteUrl,
    siteName: 'TJ-Consult',
    title: 'TJ-Consult | IT-konsulent, AI-rådgivning & Softwareudvikling',
    description: 'Freelance IT-konsulent og AI-specialist i Danmark. AI-rådgivning, softwareudvikling, systemintegration og sikker IT-infrastruktur der skaber reel forretningsværdi.',
    images: [{ url: '/yousaf.jpg', width: 1284, height: 1606, alt: 'Yousaf Javaid, IT-konsulent og AI-specialist hos TJ-Consult' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TJ-Consult | IT-konsulent, AI-rådgivning & Softwareudvikling',
    description: 'Freelance IT-konsulent og AI-specialist i Danmark. AI-rådgivning, softwareudvikling, systemintegration og sikker IT-infrastruktur.',
    images: ['/yousaf.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TJ-Consult',
  url: siteUrl,
  description:
    'Freelance IT-konsulent og AI-specialist der leverer AI-rådgivning, skræddersyet softwareudvikling, systemintegration og sikker IT-infrastruktur til danske virksomheder.',
  areaServed: {
    '@type': 'Country',
    name: 'Denmark',
  },
  founder: {
    '@type': 'Person',
    name: 'Yousaf Javaid',
    jobTitle: 'IT-konsulent & AI-specialist',
    sameAs: ['https://www.linkedin.com/in/yousaf-tahir-javaid-277285230'],
  },
  email: 'youjav@hotmail.com',
  telephone: '+4542755645',
  sameAs: ['https://www.linkedin.com/in/yousaf-tahir-javaid-277285230'],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Automatisering' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Softwareudvikling' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT-Infrastruktur & Konsulent' } },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body className="min-h-screen bg-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <PageTransition>
          <main className="pt-16 lg:pt-20">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
