import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt IT-konsulent',
  description:
    'Kontakt TJ-Consult for AI-rådgivning, softwareudvikling eller IT-infrastruktur. Send en besked og få svar fra en freelance IT-konsulent inden for 24 timer.',
  alternates: {
    canonical: '/kontakt',
  },
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children
}
