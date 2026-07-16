import type { ComponentType } from 'react'
import { Bot, Code2, Server, HardDrive, Car } from 'lucide-react'

export type IconType = ComponentType<{ className?: string }>

export interface CaseStudy {
  slug: string
  title: string
  category: string
  color: 'purple' | 'blue' | 'orange'
  icon: IconType
  summary: string
  challenge: string
  approach: string
  resultDetail: string
  result: string
  tags: string[]
  image: string
  sections: ('home' | 'about')[]
  externalUrl?: string
}

export const cases: CaseStudy[] = [
  {
    slug: 'ai-agent-kundeservice',
    title: 'AI-Agent til kundeservice',
    category: 'AI & Automatisering',
    color: 'purple',
    icon: Bot,
    summary: 'Intelligent AI-agent der håndterer 80% af kundehenvendelser automatisk, døgnet rundt og uden menneskelig indgriben. Integreret med CRM og live-chat platform.',
    challenge: 'Virksomheden modtog store mængder gentagne kundehenvendelser via chat og mail, hvilket optog supportteamets tid og forsinkede svar på de mere komplekse sager.',
    approach: 'Jeg byggede en AI-agent med Claude AI og LangChain, integreret direkte i virksomhedens live-chat og CRM. Agenten klassificerer henvendelser, besvarer de gentagne spørgsmål automatisk og eskalerer kun de sager der reelt kræver et menneske.',
    resultDetail: 'Agenten kører døgnet rundt og håndterer 80% af alle henvendelser uden menneskelig indgriben. Supportteamet bruger nu tiden på de sager der faktisk kræver deres ekspertise.',
    result: '80% færre manuelle henvendelser',
    tags: ['Claude AI', 'LangChain', 'Python', 'Webhook'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
    sections: ['home'],
  },
  {
    slug: 'saas-bookingplatform',
    title: 'SaaS Bookingplatform',
    category: 'Softwareudvikling',
    color: 'blue',
    icon: Code2,
    summary: 'Fuld-stack bookingapplikation med realtids-kalender, automatiske bekræftelser, Stripe-betaling og admin-dashboard. Bygget med Next.js og Supabase.',
    challenge: 'Kunden manglede en skalerbar bookingløsning der kunne håndtere realtids-tilgængelighed, betaling og administration i ét system, uden at skulle ty til dyre tredjeparts-SaaS-løsninger.',
    approach: 'Byggede en fuld-stack bookingapplikation fra bunden med Next.js og Supabase, med realtids-kalender, automatiske bekræftelser via mail og SMS, Stripe-betalingsintegration og et administrationsdashboard til overblik over bookinger.',
    resultDetail: 'Platformen fik 300+ aktive brugere allerede ved launch, og kunden undgik løbende SaaS-licensomkostninger ved at eje løsningen 100%.',
    result: '300+ aktive brugere ved launch',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    sections: ['home'],
  },
  {
    slug: 'azure-cloud-migrering',
    title: 'Azure Cloud Migrering',
    category: 'IT-Infrastruktur',
    color: 'orange',
    icon: Server,
    summary: 'Migreret on-premise infrastruktur for en SMV til Microsoft Azure. Infrastructure as Code med Terraform, auto-skalering og 99.9% uptime SLA.',
    challenge: 'En SMV kørte hele sin drift on-premise med ældre hardware, hyppige nedbrud og ingen reel skaleringsmulighed når belastningen steg.',
    approach: 'Migrerede hele infrastrukturen til Microsoft Azure med Infrastructure as Code via Terraform, så hele opsætningen er versioneret, reproducerbar og nem at udvide. Implementerede auto-skalering til at matche belastning.',
    resultDetail: 'Resultatet blev 99.9% uptime SLA og 40% reducerede IT-driftsomkostninger sammenlignet med den gamle on-premise opsætning.',
    result: '40% reducerede IT-driftsomkostninger',
    tags: ['Azure', 'Terraform', 'Docker', 'CI/CD'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    sections: ['home'],
  },
  {
    slug: 'backup-disaster-recovery',
    title: 'Backup & Disaster Recovery Opsætning',
    category: 'IT-Infrastruktur',
    color: 'orange',
    icon: HardDrive,
    summary: 'Implementerede en gennemtestet backup-strategi med automatiserede gendannelsestests og disaster recovery-plan for en produktionsvirksomhed. Fra utestet backup til dokumenteret, verificeret robusthed.',
    challenge: 'Virksomheden havde en backup-rutine på papiret, men havde aldrig reelt testet om en gendannelse rent faktisk virkede. Det er en klassisk blind vinkel, som først opdages når uheldet er ude.',
    approach: 'Implementerede en gennemtestet backup-strategi med planlagte, automatiserede gendannelsestests samt en dokumenteret disaster recovery-plan for de kritiske systemer.',
    resultDetail: 'Backup og gendannelse er nu verificeret og dokumenteret. Virksomheden kan gendanne kritiske systemer på under 2 timer, testet og bekræftet, ikke bare antaget.',
    result: 'Verificeret gendannelse på under 2 timer',
    tags: ['Backup', 'Disaster Recovery', 'VMware', 'Failover'],
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200&q=80',
    sections: ['home'],
  },
  {
    slug: 'rag-vidensbase-intern-ai',
    title: 'RAG Vidensbase til intern AI',
    category: 'AI & Automatisering',
    color: 'purple',
    icon: Bot,
    summary: 'RAG-system der giver virksomhedens interne AI adgang til 5.000+ sider dokumentation, så medarbejdere får præcise svar baseret på virksomhedens egne data.',
    challenge: 'Medarbejdere brugte unødigt meget tid på at lede efter svar i tusindvis af sider dokumentation, manualer og interne retningslinjer spredt over flere systemer.',
    approach: 'Byggede et RAG-system (Retrieval-Augmented Generation) der indekserer virksomhedens 5.000+ sider dokumentation i en vector-database, og giver den interne AI adgang til at søge og citere direkte fra kilderne.',
    resultDetail: 'Medarbejdere får nu præcise, kildebaserede svar på sekunder i stedet for at lede manuelt, hvilket har reduceret tiden brugt på intern videnssøgning markant.',
    result: 'AI svarer præcist på interne spørgsmål',
    tags: ['RAG', 'Vector DB', 'OpenAI', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80',
    sections: ['home'],
  },
  {
    slug: 'billeasing-admin-platform',
    title: 'Billeasing Administrations- & Salgsplatform',
    category: 'Softwareudvikling',
    color: 'blue',
    icon: Car,
    summary: 'Skræddersyet Node.js-system til et billeasingfirma: login, bilstyring der synkroniseres til kundesiden, salgsproces-igangsættelse og fuldt regnskabsoverblik.',
    challenge: 'Et billeasingfirma administrerede deres bilflåde og salgsproces manuelt på tværs af regneark og e-mails. Det var tidskrævende, fejlbehæftet, og gav intet samlet overblik over økonomi og omsætning.',
    approach: 'Byggede et skræddersyet Node.js-system hvor firmaets medarbejdere kan logge ind, tilføje og redigere biler der automatisk synkroniseres til deres kundevendte leasingside. Systemet igangsætter og følger salgsprocesser fra lead til underskrevet kontrakt, og samler regnskab, omsætning og nøgletal i ét dashboard.',
    resultDetail: 'Firmaet har nu ét centralt system til hele bilflåden og salgsprocessen, med fuldt overblik over omsætning og statistik i realtid i stedet for spredt data på tværs af regneark.',
    result: 'Samlet overblik over flåde, salg og omsætning',
    tags: ['Node.js', 'Admin-panel', 'Salgspipeline', 'Regnskab'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    sections: ['home', 'about'],
  },
  {
    slug: 'gardian-dashboard',
    title: 'Gardian: Dashboard & Monitoring',
    category: 'Softwareudvikling',
    color: 'blue',
    icon: Code2,
    summary: 'Skalerbart real-time dashboard med automatiske alerts, dataaggregering og historisk analyse bygget fra bunden.',
    challenge: 'Kunden havde brug for et centralt overblik over driftsdata i realtid, men eksisterende værktøjer var enten for dyre, for generiske eller manglede fleksibiliteten til at tilpasse sig deres specifikke behov.',
    approach: 'Byggede Gardian, et skræddersyet dashboard fra bunden med realtidsdataaggregering, automatiske alerts ved afvigelser og historisk analyse til at spotte trends over tid.',
    resultDetail: 'Kunden fik et skalerbart, 100% skræddersyet overblik over driften, uden begrænsningerne fra generiske SaaS-dashboards.',
    result: 'Realtidsindsigt i drift og performance',
    tags: ['Next.js', 'Realtime', 'Dashboards', 'Data-aggregering'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    sections: ['about'],
  },
  {
    slug: 'ai-agenter-virksomheder',
    title: 'AI-Agenter til virksomheder',
    category: 'AI & Automatisering',
    color: 'purple',
    icon: Bot,
    summary: 'Komplette AI-agenter der automatiserer arbejdsprocesser, fra kundeservice-bots til interne workflow-agenter.',
    challenge: 'Flere virksomheder brugte betydelige ressourcer på gentagne, manuelle arbejdsprocesser, fra kundeservice til interne workflows, uden at have kompetencerne internt til at automatisere dem.',
    approach: 'Designede og implementerede komplette AI-agenter tilpasset hver virksomheds specifikke processer, fra kundeservice-bots til interne workflow-agenter der håndterer opgaver på autopilot.',
    resultDetail: 'Virksomhederne har frigjort medarbejdertid fra gentagne opgaver og kan nu skalere uden at ansætte proportionalt med væksten.',
    result: 'Automatiserede arbejdsprocesser på tværs af afdelinger',
    tags: ['AI Agents', 'Automatisering', 'Workflow', 'Python'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
    sections: ['about'],
  },
  {
    slug: 'bilvask-danmark-fakturering',
    title: 'Bilvask Danmark: AI Fakturering',
    category: 'AI & Automatisering',
    color: 'purple',
    icon: Bot,
    summary: 'Fuldt automatiseret fakturering og rapportering der eliminerede manuelle processer og reducerede fejlrate markant.',
    challenge: 'Manuel fakturering og rapportering var tidskrævende og fejlbehæftet, og skabte flaskehalse i regnskabsprocessen for flere afdelinger.',
    approach: 'Automatiserede hele fakturerings- og rapporteringsflowet med AI, fra dataindsamling til færdig faktura og rapport, uden manuel indgriben.',
    resultDetail: 'Manuelle processer blev elimineret og fejlraten faldt markant, hvilket frigjorde tid i regnskabsafdelingen til mere værdiskabende arbejde.',
    result: 'Elimineret manuel fakturering',
    tags: ['AI', 'Automatisering', 'Fakturering', 'Rapportering'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80',
    sections: ['about'],
  },
  {
    slug: 'crm-rapportering-marketing',
    title: 'CRM & Rapportering: Marketingsbureau',
    category: 'Softwareudvikling',
    color: 'blue',
    icon: Code2,
    summary: 'Fuldt automatiseret CRM med real-time pipeline, performance-dashboards og automatiske klientrapporter.',
    challenge: 'Marketingsbureauet brugte lang tid på manuelt at samle klientrapporter og havde ikke et samlet system til at følge deres salgspipeline.',
    approach: 'Byggede et skræddersyet CRM med real-time pipeline-overblik, performance-dashboards og automatisk genererede klientrapporter, direkte tilpasset bureauets arbejdsgang.',
    resultDetail: 'Bureauet sparer nu timevis om ugen på rapportering og har fuldt overblik over pipeline og performance i realtid.',
    result: 'Automatiske klientrapporter, timer sparet hver uge',
    tags: ['CRM', 'Rapportering', 'Dashboards', 'Automatisering'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    sections: ['about'],
  },
  {
    slug: 'spring-boot-leasing',
    title: 'Spring Boot: Leasing Platform',
    category: 'Softwareudvikling',
    color: 'blue',
    icon: Code2,
    summary: 'Skræddersyet intern leasing-platform der centraliserer kontrakter, betalinger og kundekommunikation.',
    challenge: 'Leasingvirksomheden håndterede kontrakter, betalinger og kundekommunikation i adskilte systemer uden nogen central sammenhæng.',
    approach: 'Udviklede en intern leasing-platform med Spring Boot der centraliserer kontrakthåndtering, betalingsopfølgning og kundekommunikation i ét samlet system.',
    resultDetail: 'Virksomheden fik ét centralt system i stedet for spredte værktøjer, med mindre administrativt bøvl og bedre overblik over aktive kontrakter.',
    result: 'Centraliseret kontrakt- og betalingsstyring',
    tags: ['Spring Boot', 'Java', 'Kontrakthåndtering', 'Betalinger'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    sections: ['about'],
  },
  {
    slug: 'royal-limousine',
    title: 'Royal Limousine: royalchauffeur.dk',
    category: 'Softwareudvikling',
    color: 'blue',
    icon: Code2,
    summary: 'Professionelt, konverteringsoptimeret website bygget til at konvertere besøgende til kunder.',
    challenge: 'Royal Limousine havde brug for en professionel online tilstedeværelse der matchede kvaliteten af deres chaufførservice, og som rent faktisk konverterede besøgende til bookinger.',
    approach: 'Designede og byggede et konverteringsoptimeret website med fokus på tillid, professionel præsentation og en tydelig vej til booking.',
    resultDetail: 'Sitet er i dag virksomhedens primære digitale visitkort og booking-kanal på royalchauffeur.dk.',
    result: 'Professionelt website der konverterer besøgende',
    tags: ['Next.js', 'Konvertering', 'Webdesign', 'SEO'],
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
    sections: ['about'],
    externalUrl: 'https://www.royalchauffeur.dk/',
  },
]

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}

export function getCasesForSection(section: 'home' | 'about'): CaseStudy[] {
  return cases.filter((c) => c.sections.includes(section))
}
