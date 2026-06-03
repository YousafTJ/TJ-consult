'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const CheckIcon = () => (
  <svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path
      clipRule="evenodd"
      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
      fillRule="evenodd"
    />
  </svg>
)

const categories = [
  {
    id: 'ai',
    title: 'AI & Automatisering',
    description: 'Intelligente AI-agenter og automatiserede workflows der sparer tid og skalerer din forretning.',
    href: '/services#ai',
    services: ['AI-Agenter & Workflows', 'AI Operativt System', 'MCP-Server Integration', 'RAG-Systemer', 'AI-Strategi & Rådgivning'],
    cta: 'Udforsk AI-ydelser',
  },
  {
    id: 'software',
    title: 'Softwareudvikling',
    description: 'Skræddersyede webapplikationer, SaaS-produkter og API-integrationer til din forretning.',
    href: '/services#software',
    services: ['Hjemmesider & Webapps', 'Bookingsystemer', 'SaaS & Systemudvikling', 'API-Integrationer', 'Dashboards & Rapportering'],
    cta: 'Udforsk Software-ydelser',
  },
  {
    id: 'sikkerhed',
    title: 'IT-Sikkerhed & Compliance',
    description: 'Proaktiv sikkerhed, kryptering og compliance der beskytter din virksomhed mod trusler.',
    href: '/services#sikkerhed',
    services: ['IT-Sikkerhedsrådgivning', 'Kryptering & PKI', 'SIEM & Overvågning', 'Certifikatshåndtering', 'Firewall & Adgangsstyring'],
    cta: 'Udforsk Sikkerhed',
  },
  {
    id: 'infrastruktur',
    title: 'IT-Infrastruktur & Konsulent',
    description: 'Stabil cloud-infrastruktur, Microsoft 365, Docker og CI/CD til din virksomheds vækst.',
    href: '/services#infrastruktur',
    services: ['Microsoft 365 & Exchange', 'Cloud & Azure', 'Active Directory', 'Docker & Kubernetes', 'DevOps & CI/CD'],
    cta: 'Udforsk Infrastruktur',
  },
]

export default function ServiceOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Ydelser</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Hvad kan jeg hjælpe med?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fra AI-systemer til cloud-infrastruktur — bredt ekspertise, konkrete løsninger.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-card h-full">
                <div className="card__border" />
                <div className="card-inner">
                  {/* Title */}
                  <div>
                    <span className="card-title">{cat.title}</span>
                    <p className="card-paragraph">{cat.description}</p>
                  </div>

                  <hr className="card-line" />

                  {/* Checklist */}
                  <ul className="card-list">
                    {cat.services.map((service) => (
                      <li key={service} className="card-list-item">
                        <span className="card-check">
                          <CheckIcon />
                        </span>
                        <span className="card-list-text">{service}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href={cat.href} className="card-btn" style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {cat.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-200 text-base"
          >
            Se alle 20+ ydelser →
          </Link>
          <Link
            href="/om-mig"
            className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-200 text-base"
          >
            Om mig →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
