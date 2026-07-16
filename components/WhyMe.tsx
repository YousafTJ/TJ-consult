'use client'
import { Zap, Target, MessageSquare, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import { Kicker } from '@/components/ui/Kicker'

const reasons = [
  {
    icon: Layers,
    title: 'Bred teknisk ekspertise',
    description: 'Fra AI og softwareudvikling til sikkerhed og cloud-infrastruktur. Jeg dækker hele IT-stacken og kan løse tværgående udfordringer uden at hyre 5 specialister.',
  },
  {
    icon: Target,
    title: 'Reel forretningsværdi',
    description: 'Teknologi for teknologiens skyld er spild. Jeg fokuserer på løsninger der giver målbar ROI: tidsbesparelser, reducerede fejl, automatisering og vækst.',
  },
  {
    icon: Zap,
    title: 'Hurtig og præcis levering',
    description: 'Erfaring med at levere på tid og inden for scope. Jeg sætter barren højt, kommunikerer klart og leverer det der er aftalt, uden undskyldninger.',
  },
  {
    icon: MessageSquare,
    title: 'Direkte kommunikation',
    description: 'Ingen teknisk jargon medmindre du ønsker det. Du ved altid hvad der sker, hvad det koster og hvad du får ud af det. Transparens fra dag 1.',
  },
]

export default function WhyMe() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Kicker className="mb-4">Hvorfor TJ-Consult?</Kicker>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Ekspertise der{' '}
            <span className="text-orange-500">faktisk leverer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Det er ikke teknologien der afgør om et projekt lykkes. Det er den person der implementerer den.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="group relative bg-gray-50 hover:bg-orange-500 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-200 cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            >
              {/* Number */}
              <div className="absolute top-4 right-4 text-6xl font-black text-gray-100 group-hover:text-orange-400 transition-colors leading-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-orange-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-gray-900 group-hover:text-white text-lg mb-3 transition-colors relative z-10">
                {title}
              </h3>
              <p className="text-gray-600 group-hover:text-orange-100 text-sm leading-relaxed transition-colors relative z-10">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
