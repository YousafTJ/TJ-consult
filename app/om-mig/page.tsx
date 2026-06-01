import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Shield,
  Cloud,
  Cpu,
  Network,
  Database,
  Globe,
  CheckCircle2,
  Star,
  Wrench,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Om Mig — Yousaf Javaid, IT-konsulent & AI-specialist',
  description:
    'IT-konsulent og AI-specialist med 100+ konsulentimer, 1.000+ kunder hjulpet og 1.000+ tekniske fejl troubleshootet. Bygget skalerbare systemer, AI-agenter og komplette webløsninger.',
}

const projects = [
  {
    name: 'Gardian',
    tagline: 'Fuldt skalerbart dashboard & monitoring system',
    description:
      'Et komplet, skalerbart dashboard- og monitoringssystem bygget fra bunden. Real-time indsigt i systemer, processer og KPI\'er via et intuitivt dashboard med automatiske alerts, dataaggregering og historisk analyse.',
    tech: ['Next.js', 'Node.js', 'WebSockets', 'PostgreSQL', 'Docker', 'CI/CD'],
    highlights: [
      'Real-time monitoring med live dataopdateringer',
      'Skalerbar arkitektur — designet til vækst',
      'Automatiske alerts og notifikationer',
      'Historisk dataanalyse og rapportgenerering',
    ],
    featured: true,
  },
  {
    name: 'AI-Agenter til virksomheder',
    tagline: 'Komplette AI-agenter der automatiserer arbejdsprocesser',
    description:
      'Bygget og implementeret komplette AI-agenter for flere virksomheder — fra kundeservice-bots til interne workflow-agenter. Markant mere produktivt arbejde og færre manuelle opgaver.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'MCP', 'Vector DB', 'Node.js'],
    highlights: [
      'Implementeret for virksomheder på tværs af brancher',
      'Automatiseret gentagne og tidskrævende processer',
      'Markant øget produktivitet og reduceret fejlrate',
      'Skræddersyede AI-workflows tilpasset hver virksomhed',
    ],
    featured: true,
  },
  {
    name: 'Bilvask Danmark — AI Fakturering & Rapportering',
    tagline: 'Fuldt automatiseret fakturering og rapportering',
    description:
      'Bygget og implementeret AI-agenter for Bilvask Danmark, der fuldt automatiserer al fakturering og rapportering. Eliminerede manuelle processer og reducerede fejlrate markant.',
    tech: ['Python', 'AI Agents', 'API Integration', 'MySQL', 'Automatisering'],
    highlights: [
      'Fuldt automatiseret faktureringsproces',
      'Automatisk rapportgenerering til ledelsen',
      'Eliminerede manuelle fejl og dobbeltbooking',
    ],
    featured: true,
  },
  {
    name: 'CRM & Rapporteringssystem — Marketingsbureau',
    tagline: 'Full-automated CRM med integreret rapportering',
    description:
      'Komplet, fuldt automatiseret CRM- og rapporteringssystem til et marketingsbureau. Automatisk dataindsamling, klientrapporter, pipeline-tracking og performance-dashboards — alt kører uden manuel indsats.',
    tech: ['Next.js', 'Node.js', 'MySQL', 'REST APIs', 'Automatisering'],
    highlights: [
      'Fuldt automatiseret dataindsamling og rapportering',
      'Automatiske klientrapporter genereres og sendes',
      'Real-time pipeline og performance-tracking',
    ],
    featured: false,
  },
  {
    name: 'Spring Boot — Intern Leasing Platform',
    tagline: 'Skræddersyet intern platform til leasingadministration',
    description:
      'Bygget en intern leasing-platform for Spring Boot, der centraliserer og automatiserer al leasingadministration — kontrakter, betalinger, fornyelser og kundekommunikation samlet ét sted.',
    tech: ['Spring Boot', 'MySQL', 'React', 'TypeScript', 'Docker'],
    highlights: [
      'Centraliseret kontraktstyring',
      'Automatiske forfaldspåmindelser og fornyelser',
      'Brugerstyring og rollebaseret adgang',
    ],
    featured: false,
  },
  {
    name: 'Royal Limousine — royalchauffeur.dk',
    tagline: 'Professionel hjemmeside & digital tilstedeværelse',
    description:
      'Komplet hjemmeside for Royal Limousine. Professionelt design, mobiloptimeret og bygget til at konvertere besøgende til kunder.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    highlights: [
      'Professionelt og konverteringsoptimeret design',
      'Fuldt mobilresponsiv og SEO-optimeret',
    ],
    featured: false,
    url: 'https://www.royalchauffeur.dk/',
  },
]

const skillCategories = [
  {
    icon: Code2,
    title: 'Programmering',
    color: 'blue',
    skills: ['Java', 'Python', 'Node.js', 'React', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    icon: Database,
    title: 'Databaser',
    color: 'green',
    skills: ['MySQL', 'CosmosDB', 'Vector Databases', 'PostgreSQL', 'SQL'],
  },
  {
    icon: Shield,
    title: 'Sikkerhed',
    color: 'red',
    skills: ['Netværkssikkerhed', 'Kryptering', 'SIEM', 'Firewalls', 'PKI & Certifikater'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    color: 'sky',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'Azure'],
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    color: 'purple',
    skills: ['RAG-arkitektur', 'Vector-databaser', 'AI Workflow Design', 'MCP-servere', 'AI-agenter', 'LLM Integration'],
  },
  {
    icon: Network,
    title: 'Netværk & Microsoft',
    color: 'orange',
    skills: ['Active Directory', 'Windows Server', 'Microsoft 365', 'Exchange', 'Azure AD', 'Intune'],
  },
]

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  red: 'bg-red-50 text-red-600',
  sky: 'bg-sky-50 text-sky-600',
  purple: 'bg-purple-50 text-purple-600',
  orange: 'bg-orange-50 text-orange-600',
}

const iconColorMap: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-500',
  green: 'bg-green-100 text-green-500',
  red: 'bg-red-100 text-red-500',
  sky: 'bg-sky-100 text-sky-500',
  purple: 'bg-purple-100 text-purple-500',
  orange: 'bg-orange-100 text-orange-500',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbage til forside
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Om mig</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight">
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
                <a href="mailto:youjav@hotmail.com" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                  <Mail className="w-4 h-4 text-orange-400" />
                  youjav@hotmail.com
                </a>
                <a href="tel:+4542755645" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                  <Phone className="w-4 h-4 text-orange-400" />
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

      {/* What I've delivered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Hvad jeg har leveret</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Løsninger der virker i praksis
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Udvalgte projekter og leverancer der demonstrerer bredden og dybden af mine tekniske kompetencer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className={`bg-white rounded-2xl border p-10 flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 ${
                  project.featured
                    ? 'border-orange-200 shadow-md shadow-orange-50'
                    : 'border-gray-100 shadow-sm'
                }`}
              >
                {/* Header */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-bold text-gray-900 text-base leading-tight">{project.name}</h3>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full shrink-0">
                        <Star className="w-2.5 h-2.5" /> Flagship
                      </span>
                    )}
                  </div>
                  <p className="text-orange-500 font-semibold text-xs">{project.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-600">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* URL link */}
                {'url' in project && project.url && (
                  <a
                    href={project.url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-orange-500 hover:text-orange-600 font-semibold text-xs"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Besøg siden
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultant work */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Konsulentarbejde</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
            Reel erfaring fra virkelige virksomheder
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: '1.000+ tekniske fejl troubleshootet',
                description: 'Fra netværksproblemer og servernedbrud til softwarefejl og sikkerhedshændelser — løst over 1.000 tekniske problemer på tværs af virksomheder og brancher.',
              },
              {
                icon: Phone,
                title: '1.000+ kunder hjulpet med support',
                description: 'Direkte kundekontakt med teknisk support og service. Høj løsningsrate, hurtig responstid og fokus på at give kunden den rigtige løsning første gang.',
              },
              {
                icon: Cpu,
                title: 'AI-implementering for virksomheder',
                description: 'Hjulpet virksomheder med at identificere, planlægge og implementere AI-løsninger — fra simple automations til komplekse agentsystemer.',
              },
              {
                icon: Shield,
                title: 'IT-sikkerhed og infrastruktur',
                description: 'Rådgivning og implementering inden for netværkssikkerhed, cloudopsætning, Microsoft 365-migrering og IT-infrastruktur til mellemstore virksomheder.',
              },
              {
                icon: Code2,
                title: 'Skræddersyet systemudvikling',
                description: 'Udvikling af forretningsmæssige skræddersyede systemer — CRM-platforme, bookingsystemer, leasing-portaler og automatiserede rapporterings-workflows.',
              },
              {
                icon: Network,
                title: 'Domæne, mailserver & Exchange Online — +100 kunder',
                description: 'Opsætning og konfiguration af domæner, mailservere og Exchange Online for over 100 kunder. DNS, MX, SPF, DKIM, DMARC og Microsoft 365-integration.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-gray-50 rounded-2xl border border-gray-100 p-8 hover:border-orange-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </>
  )
}
