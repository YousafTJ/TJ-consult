'use client'

import { Wrench, Phone, Cpu, Shield, Code2, Network } from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'

const cards = [
  {
    icon: Wrench,
    title: '1.000+ tekniske fejl troubleshootet',
    description: 'Fra netværksproblemer og servernedbrud til softwarefejl og sikkerhedshændelser — løst over 1.000 tekniske problemer på tværs af virksomheder og brancher.',
    num: '01',
  },
  {
    icon: Phone,
    title: '1.000+ kunder hjulpet med support',
    description: 'Direkte kundekontakt med teknisk support og service. Høj løsningsrate, hurtig responstid og fokus på at give kunden den rigtige løsning første gang.',
    num: '02',
  },
  {
    icon: Cpu,
    title: 'AI-implementering for virksomheder',
    description: 'Hjulpet virksomheder med at identificere, planlægge og implementere AI-løsninger — fra simple automations til komplekse agentsystemer.',
    num: '03',
  },
  {
    icon: Shield,
    title: 'IT-sikkerhed og infrastruktur',
    description: 'Rådgivning og implementering inden for netværkssikkerhed, cloudopsætning, Microsoft 365-migrering og IT-infrastruktur til mellemstore virksomheder.',
    num: '04',
  },
  {
    icon: Code2,
    title: 'Skræddersyet systemudvikling',
    description: 'Udvikling af forretningsmæssige skræddersyede systemer — CRM-platforme, bookingsystemer, leasing-portaler og automatiserede rapporterings-workflows.',
    num: '05',
  },
  {
    icon: Network,
    title: 'Domæne, mailserver & Exchange Online — +100 kunder',
    description: 'Opsætning og konfiguration af domæner, mailservere og Exchange Online for over 100 kunder. DNS, MX, SPF, DKIM, DMARC og Microsoft 365-integration.',
    num: '06',
  },
]

export default function ReelErfaring() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map(({ icon: Icon, title, description }) => (
        <GlowCard
          key={title}
          glowColor="orange"
          className="p-8 h-full overflow-hidden"
        >
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-5 shadow-md shadow-orange-200/70">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </GlowCard>
      ))}
    </div>
  )
}
