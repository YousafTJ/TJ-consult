'use client'

import Link from 'next/link'
import { Kicker } from '@/components/ui/Kicker'
import { getCasesForSection } from '@/lib/cases'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const solutions = getCasesForSection('home')

const colorMap: Record<string, { badge: string; dot: string; iconBg: string; iconText: string }> = {
  purple: { badge: 'bg-purple-100 text-purple-700', dot: 'bg-purple-500', iconBg: 'bg-purple-100', iconText: 'text-purple-600' },
  blue:   { badge: 'bg-blue-100 text-blue-700',     dot: 'bg-blue-500',   iconBg: 'bg-blue-100',   iconText: 'text-blue-600' },
  orange: { badge: 'bg-orange-100 text-orange-700', dot: 'bg-orange-500', iconBg: 'bg-orange-100', iconText: 'text-orange-600' },
}

export default function LoesningerIPraksis() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <Kicker className="mb-3">Cases</Kicker>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Løsninger der{' '}
            <span className="text-orange-500">virker i praksis</span>
          </h2>
          <p className="text-gray-500 mt-3 text-lg max-w-xl">
            Realverdens projekter med målbare resultater, fra AI-agenter til cloud-infrastruktur.
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
                <CarouselItem key={solution.slug} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <Link
                    href={`/projekter/${solution.slug}`}
                    className="h-full rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group block"
                  >
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
                        <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-orange-600 transition-colors">{solution.title}</h3>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{solution.summary}</p>

                      <div className="flex items-center gap-2 mb-4 p-3 bg-gray-50 rounded-xl">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
                        <span className="text-sm font-semibold text-gray-700">{solution.result}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {solution.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 group-hover:gap-2.5 transition-all">
                        Læs mere om projektet →
                      </span>
                    </div>
                  </Link>
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
