import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react'

const footerLinks = {
  ydelser: [
    { href: '/services#ai', label: 'AI & Automatisering' },
    { href: '/services#software', label: 'Softwareudvikling' },
    { href: '/services#sikkerhed', label: 'IT-Sikkerhed' },
    { href: '/services#infrastruktur', label: 'IT-Infrastruktur' },
  ],
  sider: [
    { href: '/', label: 'Forside' },
    { href: '/om-mig', label: 'Om Mig' },
    { href: '/kontakt', label: 'Kontakt' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group min-h-[44px]">
              <span className="font-bold text-white text-xl tracking-tight group-hover:text-orange-400 transition-colors">TJ-Consult</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Intelligent IT-konsulting og AI-løsninger der skaber reel forretningsværdi. Fra strategi til implementering.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:youjav@hotmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors text-sm py-1.5 min-h-[44px]"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                youjav@hotmail.com
              </a>
              <a
                href="tel:+4542755645"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors text-sm py-1.5 min-h-[44px]"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +45 42 75 56 45
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Brøndby Strand, Danmark
              </div>
            </div>
          </div>

          {/* Ydelser */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Ydelser</h3>
            <ul className="space-y-3">
              {footerLinks.ydelser.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm block py-1.5 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.sider.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm block py-1.5 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.linkedin.com/in/yousaf-tahir-javaid-277285230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-400 hover:text-orange-400 transition-colors text-sm py-1.5 min-h-[44px]"
                >
                  LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 TJ-Consult — Yousaf Javaid
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/yousaf-tahir-javaid"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
