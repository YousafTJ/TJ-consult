import type { MetadataRoute } from 'next'
import { cases } from '@/lib/cases'

const siteUrl = 'https://tjconsult.dk'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/om-mig`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/kontakt`, changeFrequency: 'yearly', priority: 0.6 },
  ]

  const caseRoutes: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${siteUrl}/projekter/${c.slug}`,
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...caseRoutes]
}
