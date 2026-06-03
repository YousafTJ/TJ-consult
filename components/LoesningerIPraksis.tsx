'use client'

import { Bot, Code2, Shield, Server } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const solutions = [
  {
    id: 1,
    title: 'AI-Agent til kundeservice',
    category: 'AI & Automatisering',
    icon: Bot,
    color: 'purple',
    description:
      'Intelligent AI-agent der håndterer 80% af kundehenvendelser automatisk — 24/7 uden menneskelig indgriben. Integreret med CRM og live-chat platform.',
    tags: ['Claude AI', 'LangChain', 'Python', 'Webhook'],
    result: '80% færre manuelle henvendelser',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
  {
    id: 2,
    title: 'SaaS Bookingplatform',
    category: 'Softwareudvikling',
    icon: Code2,
    color: 'blue',
    description:
      'Fuld-stack bookingapplikation med realtids-kalender, automatiske bekræftelser, Stripe-betaling og admin-dashboard. Bygget med Next.js og Supabase.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    result: '300+ aktive brugere ved launch',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 3,
    title: 'Azure Cloud Migrering',
    category: 'IT-Infrastruktur',
    icon: Server,
    color: 'orange',
    description:
      'Migreret on-premise infrastruktur for en SMV til Microsoft Azure. Infrastructure as Code med Terraform, auto-skalering og 99.9% uptime SLA.',
    tags: ['Azure', 'Terraform', 'Docker', 'CI/CD'],
    result: '40% reducerede IT-driftsomkostninger',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    id: 4,
    title: 'Sikkerhedsaudit & SIEM',
    category: 'IT-Sikkerhed',
    icon: Shield,
    color: 'green',
    description:
      'Komplet sikkerhedsaudit af IT-infrastruktur og implementering af Microsoft Sentinel SIEM. Identificerede og lukkede 12 kritiske sårbarheder.',
    tags: ['Microsoft Sentinel', 'Azure AD', 'PKI', 'Compliance'],
    result: '12 kritiske sårbarheder lukket',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },
  {
    id: 5,
    title: 'RAG Vidensbase til intern AI',
    category: 'AI & Automatisering',
    icon: Bot,
    color: 'purple',
    description:
      'RAG-system der giver virksomhedens interne AI adgang til 5.000+ sider dokumentation — medarbejdere får præcise svar baseret på virksomhedens egne data.',
    tags: ['RAG', 'Vector DB', 'OpenAI', 'Next.js'],
    result: 'AI svarer præcist på interne spørgsmål',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
  },
]

const colorMap: Record<string, { badge: string; dot: string; iconBg: string; iconText: string }> = {
  purple: { badge: 'bg-purple-100 text-purple-700', dot: 'bg-purple-500', iconBg: 'bg-purple-100', iconText: 'text-purple-600' },
  blue:   { badge: 'bg-blue-100 text-blue-700',     dot: 'bg-blue-500',   iconBg: 'bg-blue-100',   iconText: 'text-blue-600' },
  orange: { badge: 'bg-orange-100 text-orange-700', dot: 'bg-orange-500', iconBg: 'bg-orange-100', iconText: 'text-orange-600' },
  green:  { badge: 'bg-green-100 text-green-700',   dot: 'bg-green-500',  iconBg: 'bg-green-100',  iconText: 'text-green-600' },
}

export default function LoesningerIPraksis() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Cases</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Løsninger der{' '}
            <span className="text-orange-500">virker i praksis</span>
          </h2>
          <p className="text-gray-500 mt-3 text-lg max-w-xl">
            Realverdens projekter med målbare resultater — fra AI-agenter til cloud-infrastruktur.
          </p>
        </div>

        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          {/* Desktop nav — inde i Carousel context */}
          <div className="hidden md:flex justify-end gap-2 mb-6">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0 border-gray-200 hover:border-orange-500 hover:text-orange-500 h-11 w-11" />
            <CarouselNext className="relative right-0 top-0 translate-y-0 border-gray-200 hover:border-orange-500 hover:text-orange-500 h-11 w-11" />
          </div>

          <CarouselContent className="-ml-6">
            {solutions.map((solution) => {
              const colors = colorMap[solution.color]
              return (
                <CarouselItem key={solution.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
                        {solution.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-9 h-9 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <solution.icon className={`w-4 h-4 ${colors.iconText}`} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-base leading-tight">{solution.title}</h3>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{solution.description}</p>

                      <div className="flex items-center gap-2 mb-4 p-3 bg-gray-50 rounded-xl">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
                        <span className="text-sm font-semibold text-gray-700">{solution.result}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {solution.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>

          {/* Mobile navigation */}
          <div className="flex md:hidden justify-center gap-3 mt-6">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0 border-gray-200 hover:border-orange-500 hover:text-orange-500 h-11 w-11" />
            <CarouselNext className="relative right-0 top-0 translate-y-0 border-gray-200 hover:border-orange-500 hover:text-orange-500 h-11 w-11" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
