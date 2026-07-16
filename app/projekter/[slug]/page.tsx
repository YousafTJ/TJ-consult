import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { Kicker } from '@/components/ui/Kicker'
import { cases, getCaseBySlug } from '@/lib/cases'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const caseStudy = getCaseBySlug(params.slug)
  if (!caseStudy) return {}
  return {
    title: `${caseStudy.title} | Case`,
    description: caseStudy.summary,
    alternates: {
      canonical: `/projekter/${caseStudy.slug}`,
    },
  }
}

const colorMap = {
  purple: { badge: 'bg-purple-100 text-purple-700', dot: 'bg-purple-500', iconBg: 'bg-purple-100', iconText: 'text-purple-600' },
  blue: { badge: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500', iconBg: 'bg-blue-100', iconText: 'text-blue-600' },
  orange: { badge: 'bg-orange-100 text-orange-700', dot: 'bg-orange-500', iconBg: 'bg-orange-100', iconText: 'text-orange-600' },
}

export default function CaseDetailPage({ params }: PageProps) {
  const caseStudy = getCaseBySlug(params.slug)
  if (!caseStudy) notFound()

  const colors = colorMap[caseStudy.color]
  const Icon = caseStudy.icon

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Forside', item: 'https://tjconsult.dk/' },
      { '@type': 'ListItem', position: 2, name: 'Om Mig', item: 'https://tjconsult.dk/om-mig' },
      { '@type': 'ListItem', position: 3, name: caseStudy.title, item: `https://tjconsult.dk/projekter/${caseStudy.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AnimatedSection>
        <section className="relative h-[45vh] min-h-[360px] overflow-hidden bg-gray-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20" />

          <div className="relative z-10 h-full flex flex-col justify-end max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
            <Link
              href="/om-mig"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium mb-6 w-fit min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              Tilbage til projekter
            </Link>
            <span className={`inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-4 ${colors.badge}`}>
              {caseStudy.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {caseStudy.title}
            </h1>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <Kicker className="mb-3">Udfordringen</Kicker>
                  <p className="text-gray-600 text-lg leading-relaxed">{caseStudy.challenge}</p>
                </div>
                <div>
                  <Kicker className="mb-3">Løsningen</Kicker>
                  <p className="text-gray-600 text-lg leading-relaxed">{caseStudy.approach}</p>
                </div>
                <div>
                  <Kicker className="mb-3">Resultatet</Kicker>
                  <p className="text-gray-600 text-lg leading-relaxed">{caseStudy.resultDetail}</p>
                </div>

                {caseStudy.externalUrl && (
                  <a
                    href={caseStudy.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-6 py-3 rounded-full transition-all duration-200 text-sm"
                  >
                    Besøg live side <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className={`w-11 h-11 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${colors.iconText}`} />
                  </div>
                  <div className="flex items-start gap-2 mb-5">
                    <CheckCircle2 className={`w-4 h-4 mt-1 flex-shrink-0 ${colors.iconText}`} />
                    <span className="font-semibold text-gray-900 leading-snug">{caseStudy.result}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {caseStudy.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Har du et lignende projekt?</h2>
            <p className="text-gray-400 text-lg mb-8">Fortæl mig om din udfordring. Jeg vender hurtigt tilbage med en konkret plan.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-200"
              >
                Kontakt mig
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/om-mig"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white font-bold px-10 py-4 rounded-full transition-all duration-200"
              >
                Se flere projekter
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}
