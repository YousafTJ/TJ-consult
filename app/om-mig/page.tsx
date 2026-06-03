import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import ReelErfaring from '@/components/ReelErfaring'
import { Gallery4, type Gallery4Item } from '@/components/blocks/gallery4'
import { ArrowRight, MapPin, Mail, Phone, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Om Mig — Yousaf Javaid, IT-konsulent & AI-specialist',
  description:
    'IT-konsulent og AI-specialist med 100+ konsulentimer, 1.000+ kunder hjulpet og 1.000+ tekniske fejl troubleshootet. Bygget skalerbare systemer, AI-agenter og komplette webløsninger.',
}

const galleryItems: Gallery4Item[] = [
  {
    id: 'gardian',
    title: 'Gardian — Dashboard & Monitoring',
    description:
      'Skalerbart real-time dashboard med automatiske alerts, dataaggregering og historisk analyse bygget fra bunden.',
    href: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80',
  },
  {
    id: 'ai-agenter',
    title: 'AI-Agenter til virksomheder',
    description:
      'Komplette AI-agenter der automatiserer arbejdsprocesser — fra kundeservice-bots til interne workflow-agenter.',
    href: '#',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1080&q=80',
  },
  {
    id: 'bilvask',
    title: 'Bilvask Danmark — AI Fakturering',
    description:
      'Fuldt automatiseret fakturering og rapportering der eliminerede manuelle processer og reducerede fejlrate markant.',
    href: '#',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1080&q=80',
  },
  {
    id: 'crm-marketing',
    title: 'CRM & Rapportering — Marketingsbureau',
    description:
      'Fuldt automatiseret CRM med real-time pipeline, performance-dashboards og automatiske klientrapporter.',
    href: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&q=80',
  },
  {
    id: 'spring-boot',
    title: 'Spring Boot — Leasing Platform',
    description:
      'Skræddersyet intern leasing-platform der centraliserer kontrakter, betalinger og kundekommunikation.',
    href: '#',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1080&q=80',
  },
  {
    id: 'royal-limousine',
    title: 'Royal Limousine — royalchauffeur.dk',
    description:
      'Professionelt, konverteringsoptimeret website bygget til at konvertere besøgende til kunder.',
    href: 'https://www.royalchauffeur.dk/',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1080&q=80',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-14 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Om mig</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight">
                Yousaf{' '}
                <span className="text-orange-500">Javaid</span>
              </h1>
              <p className="text-gray-400 text-xl font-medium mb-6">IT-konsulent & AI-specialist</p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                &ldquo;Jeg bygger intelligente IT-løsninger der løser rigtige problemer — fra AI-systemer og sikkerhed til skræddersyet software og cloud-infrastruktur.&rdquo;
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>Brøndby Strand, Danmark</span>
                </div>
                <a href="mailto:youjav@hotmail.com" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors py-1.5 min-h-[44px]">
                  <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  youjav@hotmail.com
                </a>
                <a href="tel:+4542755645" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors py-1.5 min-h-[44px]">
                  <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  +45 42 75 56 45
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/yousaf-tahir-javaid-277285230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
                >
                  LinkedIn <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Profile photo */}
            <div className="lg:flex flex-col items-end hidden gap-3">
              <div className="rounded-3xl overflow-hidden w-72 shadow-2xl shadow-black/30">
                <img
                  src="/yousaf.jpg"
                  alt="Yousaf Javaid"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-orange-400 font-semibold text-sm text-right">
                IT-konsulent & AI-specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — løsninger der virker i praksis */}
      <AnimatedSection>
        <Gallery4
          title="Løsninger der virker i praksis"
          description="Udvalgte projekter og leverancer der demonstrerer bredden og dybden af mine tekniske kompetencer."
          items={galleryItems}
        />
      </AnimatedSection>

      {/* Consultant work */}
      <AnimatedSection>
      <section className="py-12 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Konsulentarbejde</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight">
            Reel erfaring fra virkelige virksomheder
          </h2>

          <ReelErfaring />
        </div>
      </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Klar til at samarbejde?</h2>
          <p className="text-gray-400 text-lg mb-8">Kontakt mig og fortæl om dit projekt — jeg vender hurtigt tilbage.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-200"
            >
              Tag kontakt
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white font-bold px-10 py-4 rounded-full transition-all duration-200"
            >
              Se mine ydelser
            </Link>
          </div>
        </div>
      </section>
      </AnimatedSection>
    </>
  )
}
