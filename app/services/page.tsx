import type { Metadata } from 'next'
import Link from 'next/link'
import { Bot, Code2, Shield, Server, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ydelser — AI, Software, Sikkerhed & Infrastruktur',
  description: 'Se alle TJ-Consult ydelser: AI-agenter, softwareudvikling, IT-sikkerhed og cloud-infrastruktur. 20+ specialiserede IT-ydelser.',
}

const categories = [
  {
    id: 'ai',
    icon: Bot,
    title: 'AI & Automatisering',
    description: 'Fremtidens teknologi implementeret i dag. Fra AI-agenter til komplette AI-operative systemer der transformerer din forretning.',
    color: 'purple',
    services: [
      {
        title: 'AI-Agenter & Workflow-automatisering',
        description: 'Få bygget intelligente AI-agenter der håndterer gentagne opgaver automatisk — kundeservice, databehandling, lead-kvalificering, rapportering og meget mere. Spar tid, reducer fejl og skaler uden at ansætte.',
        outcomes: ['Automatiserede gentagne opgaver', 'Reduceret fejlrate', 'Skalering uden ekstra personale'],
      },
      {
        title: 'AI Operative System (AI OS)',
        description: 'Et skræddersyet AI-operativsystem til din virksomhed — en central AI-hub der koordinerer agenter, hukommelse, opgaver og integrationer. Din virksomhed får en intelligent assistent der kender jeres processer, data og mål.',
        outcomes: ['Centraliseret AI-koordinering', 'Intelligent proceshukommelse', 'Skalerbar AI-infrastruktur'],
      },
      {
        title: 'MCP-Server Konfiguration & Integration',
        description: 'Model Context Protocol (MCP) er fremtidens måde at forbinde AI med dine systemer på. Jeg opsætter og konfigurerer MCP-servere der giver dine AI-tools adgang til kalender, filer, databaser, CRM og andet — sikkert og kontrolleret.',
        outcomes: ['Sikker AI-systemintegration', 'Adgang til alle dine datakilder', 'Kontrolleret og auditbar'],
      },
      {
        title: 'RAG-Systemer & Vidensbaser',
        description: 'Byg AI-systemer der kender din virksomheds data. Med RAG (Retrieval-Augmented Generation) kan din AI svare præcist på spørgsmål baseret på jeres egne dokumenter, manualer og databaser.',
        outcomes: ['AI med din virksomheds viden', 'Præcise svar baseret på jeres data', 'Reduceret hallucination'],
      },
      {
        title: 'AI-Strategi & Rådgivning',
        description: 'Ikke sikker på hvor AI passer ind i din forretning? Jeg gennemgår jeres processer og identificerer de steder hvor AI giver reel ROI — og laver en konkret plan for implementering.',
        outcomes: ['Klar AI-implementeringsplan', 'Identificerede ROI-muligheder', 'Prioriteret roadmap'],
      },
    ],
  },
  {
    id: 'software',
    icon: Code2,
    title: 'Softwareudvikling',
    description: 'Skræddersyede digitale løsninger bygget med moderne teknologi — fra simpel landing page til komplekse SaaS-produkter.',
    color: 'blue',
    services: [
      {
        title: 'Hjemmesider & Webapplikationer',
        description: 'Professionelle, hurtige og mobilvenlige hjemmesider og webapps bygget med moderne teknologi (Next.js, React). Fra landingpages til komplekse systemer — alt er skræddersyet til dit behov.',
        outcomes: ['Mobiloptimeret og hurtig', 'SEO-venlig struktur', 'Moderne og professionel design'],
      },
      {
        title: 'Bookingsystemer',
        description: 'Skræddersyede bookingløsninger til din branche — med kalenderintegration, automatiske bekræftelser, betaling og brugeradministration. Slut med manuelle bookinger og dobbelttilmeldinger.',
        outcomes: ['Automatiske bekræftelser', 'Kalenderintegration', 'Betalingshåndtering'],
      },
      {
        title: 'SaaS & Skræddersyet Systemudvikling',
        description: 'Har du en idé til et produkt eller et internt system? Jeg bygger det fra bunden — skalerbart, sikkert og med fokus på brugeroplevelse. API-integrationer, dashboards, automatisering og databaser inkluderet.',
        outcomes: ['Skalerbar arkitektur', 'Komplet backend & frontend', 'Løbende support'],
      },
      {
        title: 'API-Integrationer',
        description: 'Forbind dine eksisterende systemer med hinanden. Jeg integrerer CRM, regnskabssystemer, betalingsløsninger, kommunikationsplatforme og alt andet via API — så data flyder automatisk.',
        outcomes: ['Automatisk datasynkronisering', 'Reduceret manuelt arbejde', 'Real-time integrations'],
      },
      {
        title: 'Automatiserede Rapporterings- & Dashboardsystemer',
        description: "Få automatiske rapporter og live-dashboards der viser præcis det din virksomhed har brug for at se — salgsdata, driftsstatus, KPI'er — uden manuel opdatering.",
        outcomes: ['Live KPI-dashboards', 'Automatiske rapporter', 'Datadrevne beslutninger'],
      },
    ],
  },
  {
    id: 'sikkerhed',
    icon: Shield,
    title: 'IT-Sikkerhed & Compliance',
    description: 'Proaktiv sikkerhed der beskytter din virksomhed — fra risikovurdering og penetration testing til SIEM og compliance.',
    color: 'green',
    services: [
      {
        title: 'IT-Sikkerhedsrådgivning',
        description: 'Jeg gennemgår jeres IT-miljø og identificerer sårbarheder, risici og huller i sikkerhedspolitikken — og giver en klar handlingsplan. Ingen teknisk snak for teknologiens skyld — kun konkrete anbefalinger.',
        outcomes: ['Komplet sårbarhedsoversigt', 'Prioriteret handlingsplan', 'Reduceret risikoeksponering'],
      },
      {
        title: 'Kryptering & Datakryptering',
        description: 'Implementering af end-to-end kryptering for data i hvile og transit. Jeg opsætter og konfigurerer krypteringsløsninger der beskytter jeres følsomme data — fra databasekryptering til sikker kommunikation.',
        outcomes: ['End-to-end kryptering', 'Krypterede databaser og filer', 'Sikker datatransmission'],
      },
      {
        title: 'SIEM & Overvågning',
        description: 'Opsætning af Security Information and Event Management (SIEM) systemer — fx Microsoft Sentinel — der overvåger jeres netværk og advarer ved mistænkelig aktivitet.',
        outcomes: ['Real-time trusselsdetektering', 'Microsoft Sentinel opsætning', 'Automatiske sikkerhedsadvarsler'],
      },
      {
        title: 'Certifikatshåndtering & PKI',
        description: 'Design og implementering af Public Key Infrastructure (PKI) og håndtering af SSL/TLS-certifikater, kodesigneringscertifikater og interne CA-løsninger. Sikrer at jeres systemer altid er korrekt certificerede.',
        outcomes: ['PKI-infrastruktur opsætning', 'Automatisk certifikatfornyelse', 'SSL/TLS-styring på tværs af systemer'],
      },
      {
        title: 'Firewall, Netværk & Adgangsstyring',
        description: 'Opsætning og hardening af firewall-regler, netværkssegmentering og adgangsstyring. Sørger for at kun de rigtige folk har adgang til de rigtige systemer.',
        outcomes: ['Hærdet firewall-konfiguration', 'Netværkssegmentering', 'Least-privilege adgangsstyring'],
      },
    ],
  },
  {
    id: 'infrastruktur',
    icon: Server,
    title: 'IT-Infrastruktur & Konsulent',
    description: 'Stabil, skalerbar og sikker IT-infrastruktur der understøtter din vækst — cloud, on-premise og hybridløsninger.',
    color: 'orange',
    services: [
      {
        title: 'Microsoft 365 & Exchange Opsætning',
        description: 'Fuld opsætning og konfiguration af Microsoft 365 — Exchange Online, Teams, SharePoint, OneDrive og Azure AD. Inkl. migrering fra eksisterende systemer.',
        outcomes: ['Komplet M365-opsætning', 'Exchange Online migrering', 'Azure AD integration'],
      },
      {
        title: 'Mailserver & Domæne',
        description: 'Opsætning af professionel mailserver, domæne-konfiguration (DNS, MX, SPF, DKIM, DMARC) og sikkerhed mod phishing og spam.',
        outcomes: ['Anti-spam og phishing-beskyttelse', 'Korrekt DNS-konfiguration', 'Professionel mailopsætning'],
      },
      {
        title: 'Cloud & Azure Infrastruktur',
        description: 'Design og implementering af cloud-infrastruktur på Microsoft Azure — virtuelle maskiner, storage, netværk, sikkerhed og skalerbarhed. Infrastructure as Code med Terraform.',
        outcomes: ['Skalerbar Azure-infrastruktur', 'Terraform IaC', 'Cost-optimeret cloud-setup'],
      },
      {
        title: 'Active Directory & Windows Server',
        description: 'Opsætning og administration af Active Directory, Windows Server, Group Policies og brugeradministration. Til virksomheder der har behov for en struktureret IT-miljø.',
        outcomes: ['Centraliseret brugeradministration', 'Group Policy opsætning', 'Struktureret AD-hierarki'],
      },
      {
        title: 'Docker & Containerisering',
        description: 'Containerisering af applikationer med Docker og Kubernetes — hurtigere deployments, bedre stabilitet og nem skalering.',
        outcomes: ['Containeriserede applikationer', 'Kubernetes orkestrering', 'Hurtigere deployments'],
      },
      {
        title: 'DevOps & CI/CD Pipelines',
        description: 'Automatisér jeres deployment-proces med CI/CD pipelines. Kode der testes og deployes automatisk — færre fejl, hurtigere releases.',
        outcomes: ['Automatiseret build & deploy', 'Reducerede fejl i produktion', 'Hurtigere release-cyklus'],
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
  green: {
    bg: 'bg-green-50',
    text: 'text-green-600',
    icon: 'bg-green-100 text-green-500',
    badge: 'bg-green-50 text-green-600',
    border: 'border-green-100',
    headerBg: 'from-green-50 to-emerald-50',
    dot: 'bg-green-500',
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

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gray-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbage til forside
          </Link>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Alle ydelser</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
            Hvad kan jeg{' '}
            <span className="text-orange-500">bygge for dig?</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
            20+ specialiserede IT-ydelser fordelt på 4 domæner. Fra AI-agenter til cloud-infrastruktur — alt leveret med fokus på din forretningsmæssige bundlinje.
          </p>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const colors = colorMap[cat.color as keyof typeof colorMap]
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all"
                >
                  <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  {cat.title}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, catIndex) => {
        const colors = colorMap[category.color as keyof typeof colorMap]
        return (
          <section
            key={category.id}
            id={category.id}
            className={`py-20 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category header */}
              <div className={`bg-gradient-to-r ${colors.headerBg} rounded-3xl p-8 lg:p-10 mb-12`}>
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                        Kategori {catIndex + 1}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${colors.badge}`}>
                        {category.services.length} ydelser
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Services grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <div
                    key={service.title}
                    className={`bg-white rounded-2xl border ${colors.border} border-opacity-50 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
                  >
                    <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-orange-500 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-xs text-gray-600">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA section */}
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
    </>
  )
}
