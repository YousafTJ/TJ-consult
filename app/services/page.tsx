import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Bot, Code2, Server, ArrowRight,
  Workflow, Cpu, Plug, Database, Compass, Rocket, DatabaseZap,
  Globe, Layers, Link2, BarChart3, Settings2, Handshake,
  Building2, Mail, Container, HardDrive, ServerCog, LifeBuoy,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import FallingItem from '@/components/FallingItem'
import { Kicker } from '@/components/ui/Kicker'

export const metadata: Metadata = {
  title: 'IT-konsulent Ydelser: AI-rådgivning, Softwareudvikling & Infrastruktur',
  description: 'Se alle TJ-Consult ydelser: AI-konsulent og AI-rådgivning, skræddersyet softwareudvikling, systemintegration og IT-infrastruktur. 19 specialiserede IT-ydelser fra en freelance IT-konsulent.',
  alternates: {
    canonical: '/services',
  },
}

const categories = [
  {
    id: 'ai',
    icon: Bot,
    title: 'AI & Automatisering',
    description: 'AI-rådgivning og AI-konsulentydelser der omsætter fremtidens teknologi til forretningsværdi i dag. Fra AI-agenter til komplette AI-operative systemer der transformerer din forretning.',
    color: 'purple',
    services: [
      {
        title: 'AI-Agenter & Workflow-automatisering',
        icon: Workflow,
        description: 'Få bygget intelligente AI-agenter der håndterer gentagne opgaver automatisk: kundeservice, databehandling, lead-kvalificering, rapportering og meget mere. Spar tid, reducer fejl og skaler uden at ansætte.',
        tags: ['AI Agents', 'Automatisering', 'Python', '24/7'],
        result: 'Automatiserede opgaver uden ekstra personale',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80',
      },
      {
        title: 'AI Operative System (AI OS)',
        icon: Cpu,
        description: 'Et skræddersyet AI-operativsystem til din virksomhed: en central AI-hub der koordinerer agenter, hukommelse, opgaver og integrationer. Din virksomhed får en intelligent assistent der kender jeres processer, data og mål.',
        tags: ['AI OS', 'Hub', 'Integrationer', 'Hukommelse'],
        result: 'Central AI-hub for hele virksomheden',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      },
      {
        title: 'MCP-Server Konfiguration & Integration',
        icon: Plug,
        description: 'Model Context Protocol (MCP) er fremtidens måde at forbinde AI med dine systemer på. Jeg opsætter og konfigurerer MCP-servere der giver dine AI-tools adgang til kalender, filer, databaser, CRM og andet, sikkert og kontrolleret.',
        tags: ['MCP', 'API', 'Integration', 'Sikkerhed'],
        result: 'Sikker adgang til alle jeres datakilder',
        image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
      },
      {
        title: 'RAG-Systemer & Vidensbaser',
        icon: Database,
        description: 'Byg AI-systemer der kender din virksomheds data. Med RAG (Retrieval-Augmented Generation) sætter jeg jeres data korrekt op: struktureret, renset og indekseret, så jeres AI får den rette viden og evnen til at præstere. Resultatet er en AI der svarer præcist på spørgsmål baseret på jeres egne dokumenter, manualer og databaser, i stedet for at gætte.',
        tags: ['RAG', 'Vector DB', 'LLM', 'Dokumenter'],
        result: '5.000+ sider dokumentation gjort søgbare',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
      },
      {
        title: 'AI-Strategi & Rådgivning',
        icon: Compass,
        description: 'Ikke sikker på hvor AI passer ind i din forretning? Jeg gennemgår jeres processer, identificerer de steder hvor AI giver reel ROI og laver en konkret plan for implementering.',
        tags: ['Strategi', 'ROI', 'Rådgivning', 'Roadmap'],
        result: 'Konkret plan for AI-implementering',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      },
      {
        title: 'Fuld RAG- & AI-Agent Implementering',
        icon: Rocket,
        description: 'Komplet opsætning fra bunden: jeres virksomheds data bliver samlet, struktureret og gjort tilgængelig i en RAG-vidensdatabase. Derefter bygger jeg AI-agenter ovenpå, der selvstændigt udfører jeres manuelle og langsomme processer korrekt hver gang. Fra rådata til en fuldt fungerende AI-arbejdskraft.',
        tags: ['RAG', 'AI Agents', 'Vidensdatabase', 'Procesautomatisering'],
        result: 'Manuelle processer automatiseret ende-til-ende',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      },
      {
        title: 'AI-Klar Datainfrastruktur',
        icon: DatabaseZap,
        description: 'Jeres data er jeres største aktiv, men kun hvis AI\'en faktisk kan bruge den. Jeg gør virksomhedens data AI-klar: struktureret og indekseret til RAG, opsætter vector-databaser til semantisk søgning, og bygger data-pipelines der løbende fodrer jeres AI-agenter med opdateret information.',
        tags: ['Vector DB', 'Data-Pipelines', 'Semantisk Søgning', 'RAG'],
        result: 'Data der er strømlinet og klar til AI',
        image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&q=80',
      },
    ],
  },
  {
    id: 'software',
    icon: Code2,
    title: 'Softwareudvikling',
    description: 'Skræddersyet softwareudvikling og systemintegration bygget med moderne teknologi, fra simpel landing page til komplekse SaaS-produkter.',
    color: 'blue',
    services: [
      {
        title: 'Hjemmesider & Webapplikationer',
        icon: Globe,
        description: 'Professionelle, hurtige og mobilvenlige hjemmesider og webapps bygget med moderne teknologi (Next.js, React). Fra landingpages til komplekse systemer, alt skræddersyet til dit behov.',
        tags: ['Next.js', 'React', 'SEO', 'Responsive'],
        result: 'Hurtig, mobiloptimeret og SEO-klar',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      },
      {
        title: 'SaaS & Skræddersyet Systemudvikling',
        icon: Layers,
        description: 'Har du en idé til et produkt eller et internt system? Jeg bygger det fra bunden: skalerbart, sikkert og med fokus på brugeroplevelse. API-integrationer, dashboards, automatisering og databaser inkluderet.',
        tags: ['SaaS', 'Fullstack', 'API', 'Database'],
        result: 'Skalerbar arkitektur fra dag ét',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      },
      {
        title: 'API & System Integrationer',
        icon: Link2,
        description: 'Forbind dine eksisterende systemer med hinanden. Jeg integrerer CRM, regnskabssystemer, betalingsløsninger, kommunikationsplatforme og alt andet via API, så data flyder automatisk.',
        tags: ['API', 'Webhooks', 'Automatisering', 'Data'],
        result: 'Data flyder automatisk mellem systemer',
        image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80',
      },
      {
        title: 'Automatiserede Rapporterings- & Dashboardsystemer',
        icon: BarChart3,
        description: "Få automatiske rapporter og live-dashboards der viser præcis det din virksomhed har brug for at se: salgsdata, driftsstatus og KPI'er, uden manuel opdatering.",
        tags: ['Dashboard', 'KPI', 'Rapportering', 'Live-data'],
        result: "Live KPI'er uden manuel opdatering",
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
      },
      {
        title: 'Skræddersyet Interne Systemer',
        icon: Settings2,
        description: 'Skræddersyet interne systemer med alle de funktioner I skal bruge, og ingen af dem I ikke gør. Jeg bygger interne værktøjer der passer 100% til jeres arbejdsgange, fra ressourceplanlægning til projektstyring og intern dataregistrering.',
        tags: ['Internt Værktøj', 'Skræddersyet', 'Workflow', 'Database'],
        result: 'Præcis de funktioner I faktisk har brug for',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
      },
      {
        title: 'Kundeportaler',
        icon: Handshake,
        description: 'Kundeportaler hvor dig og dine kunder kan holde kontakten og forbedre relationen: dokumentdeling, statusopdateringer, beskeder og selvbetjening samlet ét sted. Styrk kunderelationen og reducer antallet af mails og telefonopkald.',
        tags: ['Kundeportal', 'Selvbetjening', 'Kommunikation', 'Dashboard'],
        result: 'Bedre kunderelationer, færre mails frem og tilbage',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      },
    ],
  },
  {
    id: 'infrastruktur',
    icon: Server,
    title: 'IT-Infrastruktur & Konsulent',
    description: 'Stabil, skalerbar og sikker IT-infrastruktur og server hosting der understøtter din vækst: cloud migrering, on-premise og hybridløsninger.',
    color: 'orange',
    services: [
      {
        title: 'Microsoft 365 & Exchange Opsætning',
        icon: Building2,
        description: 'Fuld opsætning og konfiguration af Microsoft 365: Exchange Online, Teams, SharePoint, OneDrive og Azure AD. Inkl. migrering fra eksisterende systemer.',
        tags: ['Microsoft 365', 'Exchange', 'Azure AD', 'Teams'],
        result: 'Komplet migrering uden driftsstop',
        image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80',
      },
      {
        title: 'Mailserver & Domæne',
        icon: Mail,
        description: 'Fuld opsætning og konfiguration af jeres domæne, så alting fungerer sikkert og optimalt. Det inkluderer korrekt opsætning af mailserver og rådgivning ift. optimering af jeres mail-flow, så mails rammer indbakken i stedet for at ryge i spam.',
        tags: ['DNS', 'SPF/DKIM/DMARC', 'Mailserver', 'Mail-flow'],
        result: 'Mails rammer indbakken frem for spamfilteret',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
      },
      {
        title: 'Server Hosting & Drift (Linux & Windows)',
        icon: ServerCog,
        description: 'Professionel drift og administration af jeres servere, uanset om det er Linux eller Windows. Jeg sætter systemerne korrekt op, holder dem opdaterede og kørende, og sikrer at logging og overvågning er på plads, så I altid ved hvad der sker. Data adskilles fra systemdisken, så en systemfejl eller crash aldrig går ud over jeres data.',
        tags: ['Linux', 'Windows Server', 'Logging & Overvågning', 'Sikker Drift'],
        result: 'Stabil drift med fuld synlighed, data er altid adskilt og sikret',
        image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80',
      },
      {
        title: 'Docker & Containerisering',
        icon: Container,
        description: 'Docker-containerisering af jeres applikationer. Systemerne bliver pakket rigtigt ind, kører isoleret og ens i alle miljøer, og er klar til hurtig og stabil hosting uanset skala.',
        tags: ['Docker', 'Kubernetes', 'Containere', 'Hosting'],
        result: 'Systemer pakket rigtigt ind og hostet korrekt',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      },
      {
        title: 'VM & Server-Virtualisering',
        icon: HardDrive,
        description: 'Virtualisering af jeres servere med VMware. Kør flere isolerede systemer på samme hardware, med nem skalering, snapshots og hurtig disaster recovery. Den rigtige måde at hoste jeres infrastruktur på.',
        tags: ['VMware', 'Virtualisering', 'Snapshots', 'Disaster Recovery'],
        result: 'Isolerede, skalerbare og sikre servermiljøer',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      },
      {
        title: 'Backup & Robusthed',
        icon: LifeBuoy,
        description: 'En backup er kun værd noget, hvis gendannelsen rent faktisk virker, og det har de færreste testet. Jeg opsætter en gennemtestet backup-strategi med reelle gendannelsestests, disaster recovery-planer til når uheldet er ude, og høj tilgængelighed/failover der holder jeres systemer kørende.',
        tags: ['Backup', 'Disaster Recovery', 'Failover', 'Høj Tilgængelighed'],
        result: 'Testet gendannelse frem for bare backup på papiret',
        image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80',
      },
    ],
  },
]

const colorMap = {
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    icon: 'bg-purple-100 text-purple-500',
    badge: 'bg-purple-50 text-purple-600',
    border: 'border-purple-100',
    headerBg: 'from-purple-50 to-violet-50',
    dot: 'bg-purple-500',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    icon: 'bg-blue-100 text-blue-500',
    badge: 'bg-blue-50 text-blue-600',
    border: 'border-blue-100',
    headerBg: 'from-blue-50 to-sky-50',
    dot: 'bg-blue-500',
  },
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    icon: 'bg-orange-100 text-orange-500',
    badge: 'bg-orange-50 text-orange-600',
    border: 'border-orange-100',
    headerBg: 'from-orange-50 to-amber-50',
    dot: 'bg-orange-500',
  },
}

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: categories.flatMap((category) =>
    category.services.map((service) => ({
      '@type': 'Service',
      name: service.title,
      description: service.description,
      serviceType: category.title,
      provider: { '@type': 'ProfessionalService', name: 'TJ-Consult' },
      areaServed: { '@type': 'Country', name: 'Denmark' },
    }))
  ),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {/* Page Hero */}
      <AnimatedSection>
      <section className="bg-gray-900 text-white py-12 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Kicker className="mb-6">Alle ydelser</Kicker>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tight">
            Hvad kan jeg{' '}
            <span className="text-orange-500">bygge for dig?</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8 sm:mb-10">
            19 specialiserede IT-ydelser fra en freelance IT-konsulent, fordelt på 3 domæner. Fra AI-rådgivning til IT-infrastruktur, alt leveret med fokus på din forretningsmæssige bundlinje.
          </p>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const colors = colorMap[cat.color as keyof typeof colorMap]
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-3 min-h-[44px] rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all"
                >
                  <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  {cat.title}
                </a>
              )
            })}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Categories */}
      {categories.map((category, catIndex) => {
        const colors = colorMap[category.color as keyof typeof colorMap]
        return (
          <AnimatedSection key={category.id}>
          <section
            id={category.id}
            className={`py-12 sm:py-20 overflow-hidden ${catIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category header */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 mb-8 sm:mb-12 border border-gray-100 shadow-md overflow-hidden">
                {/* Left accent bar */}
                <div className={`absolute left-0 inset-y-0 w-1.5 rounded-r-full ${colors.dot}`} />
                {/* Large icon watermark */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.05]">
                  <category.icon className="w-36 h-36 text-gray-900" />
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 pl-4 sm:pl-5">
                  <div className={`w-14 h-14 ${colors.icon} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <category.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                        Kategori {catIndex + 1}
                      </span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${colors.badge} border ${colors.border}`}>
                        {category.services.length} ydelser
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                      {category.title}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Services grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <FallingItem key={service.title} index={serviceIndex}>
                  <div className="h-full rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
                        {category.title}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-9 h-9 ${colors.icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <service.icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-base leading-tight">{service.title}</h3>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>

                      <div className="flex items-center gap-2 mb-4 p-3 bg-gray-50 rounded-xl">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
                        <span className="text-sm font-semibold text-gray-700">{service.result}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  </FallingItem>
                ))}
              </div>
            </div>
          </section>
          </AnimatedSection>
        )
      })}

      {/* CTA section */}
      <AnimatedSection>
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Klar til at komme i gang?
          </h2>
          <p className="text-gray-400 text-xl mb-8">
            Kontakt mig i dag og fortæl om dit projekt. Jeg vender tilbage inden for 24 timer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-200 text-lg shadow-xl shadow-orange-900/30"
            >
              Kontakt mig nu
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:youjav@hotmail.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white font-bold px-10 py-4 rounded-full transition-all duration-200 text-lg"
            >
              youjav@hotmail.com
            </a>
          </div>
        </div>
      </section>
      </AnimatedSection>
    </>
  )
}
