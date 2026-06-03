'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Bot, Code2, Shield, Server } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Forside' },
  {
    href: '/services',
    label: 'Ydelser',
    dropdown: [
      { href: '/services#ai', label: 'AI & Automatisering', icon: Bot },
      { href: '/services#software', label: 'Softwareudvikling', icon: Code2 },
      { href: '/services#sikkerhed', label: 'IT-Sikkerhed', icon: Shield },
      { href: '/services#infrastruktur', label: 'IT-Infrastruktur', icon: Server },
    ],
  },
  { href: '/om-mig', label: 'Om Mig' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="font-bold text-gray-900 text-lg tracking-tight group-hover:text-orange-500 transition-colors">
              TJ-Consult
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.dropdown ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      pathname.startsWith('/services')
                        ? 'text-orange-500'
                        : 'text-gray-600 hover:text-orange-500'
                    }`}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-orange-500'
                        : 'text-gray-600 hover:text-orange-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 w-64">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 group/item transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center group-hover/item:bg-orange-500 transition-colors">
                            <item.icon className="w-4 h-4 text-orange-500 group-hover/item:text-white transition-colors" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover/item:text-orange-600 transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-200 text-sm shadow-sm hover:shadow-md"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-orange-50 text-orange-500'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/kontakt"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
