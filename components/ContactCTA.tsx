'use client'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500 opacity-5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500 opacity-5 rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Kom i gang</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Klar til at{' '}
            <span className="text-orange-500">tage det næste skridt?</span>
          </h2>

          <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Fortæl mig om din udfordring — jeg vender tilbage inden for 24 timer med en konkret plan.
          </p>
        </motion.div>

        {/* Contact options */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-5 rounded-full transition-all duration-200 shadow-xl shadow-orange-900/30 hover:shadow-orange-900/40 text-lg w-full sm:w-auto justify-center"
          >
            <Calendar className="w-5 h-5" />
            Book et møde
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="mailto:youjav@hotmail.com"
            className="inline-flex items-center gap-3 border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white font-bold px-10 py-5 rounded-full transition-all duration-200 text-lg w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Send en mail
          </a>
        </motion.div>

        {/* Quick contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <a href="mailto:youjav@hotmail.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors min-h-[44px] py-2">
            <Mail className="w-4 h-4" />
            youjav@hotmail.com
          </a>
          <div className="w-1 h-1 bg-gray-700 rounded-full hidden sm:block" />
          <a href="tel:+4542755645" className="flex items-center gap-2 hover:text-orange-400 transition-colors min-h-[44px] py-2">
            <Phone className="w-4 h-4" />
            +45 42 75 56 45
          </a>
        </div>
      </div>
    </section>
  )
}
