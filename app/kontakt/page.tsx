'use client'

import { useState, useRef } from 'react'
import { Send, Mail, Phone, MapPin, ExternalLink, CheckCircle2, Clock, MessageSquare } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { Button } from '@/components/ui/Button'

const serviceOptions = [
  'AI & Automatisering',
  'Softwareudvikling',
  'IT-Sikkerhed & Compliance',
  'IT-Infrastruktur & Konsulent',
  'Generel rådgivning',
  'Andet',
]

const techIcons = [
  'https://cdn.simpleicons.org/python/F97316',
  'https://cdn.simpleicons.org/microsoftazure/0078D4',
  'https://cdn.simpleicons.org/docker/2496ED',
  'https://cdn.simpleicons.org/typescript/3178C6',
  'https://cdn.simpleicons.org/react/61DAFB',
  'https://cdn.simpleicons.org/nodedotjs/339933',
  'https://cdn.simpleicons.org/kubernetes/326CE5',
  'https://cdn.simpleicons.org/postgresql/336791',
  'https://cdn.simpleicons.org/mongodb/47A248',
  'https://cdn.simpleicons.org/github/111827',
  'https://cdn.simpleicons.org/nextdotjs/111827',
  'https://cdn.simpleicons.org/terraform/7B42BC',
  'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'https://cdn.simpleicons.org/mysql/4479A1',
  'https://cdn.simpleicons.org/linux/111827',
  'https://cdn.simpleicons.org/redis/DC382D',
  'https://cdn.simpleicons.org/amazonaws/FF9900',
  'https://cdn.simpleicons.org/openai/111827',
]

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

function fireConfetti(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const particles: { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number }[] = []
  const colors = ['#F97316', '#FBBF24', '#10b981', '#f472b6', '#60a5fa']
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: canvas.width / 2, y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 16, vy: (Math.random() - 2.5) * 10,
      life: 100, color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 4 + 2,
    })
  }

  const animate = () => {
    if (particles.length === 0) { ctx.clearRect(0, 0, canvas.width, canvas.height); return }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      p.x += p.vx; p.y += p.vy; p.vy += 0.4; p.life -= 2
      ctx.fillStyle = p.color
      ctx.globalAlpha = Math.max(0, p.life / 100)
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill()
      if (p.life <= 0) { particles.splice(i, 1); i-- }
    }
    requestAnimationFrame(animate)
  }
  animate()
}

export default function KontaktPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('https://hook.eu2.make.com/2a9c2gen0a1gedrpu1l9ttusfpjwax58', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // Vis success uanset netværksfejl — brugeren skal ikke blokeres
    }
    setLoading(false)
    setSubmitted(true)
    if (canvasRef.current) fireConfetti(canvasRef.current)
  }

  return (
    <>
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-orange-50/40 to-white">

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50/40 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold self-start">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Klar til at hjælpe · Svar inden for 24 timer
          </div>

          {/* Supercharge-style card */}
          <div className="border border-gray-200 rounded-3xl p-8 grid md:grid-cols-2 gap-10 items-center bg-white/80">
            {/* Left: big heading + description + buttons */}
            <div>
              <p className="uppercase text-sm font-semibold text-gray-500 mb-3">
                IT-konsulent & AI-specialist
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-[1.05] tracking-tight">
                IT der{' '}
                <span className="text-orange-500">virker.</span>
                <br />
                AI der{' '}
                <span className="text-orange-500">leverer.</span>
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Intelligent IT-rådgivning og AI-løsninger der skaber reel, målbar forretningsmæssig værdi — fra strategi til implementering.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button
                  className="bg-gray-900 text-white px-5 py-2.5 h-auto rounded-lg font-medium hover:bg-gray-700"
                  onClick={() => document.getElementById('kontakt-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Skriv til mig
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-600 px-5 py-2.5 h-auto rounded-lg font-medium hover:border-orange-500 hover:text-orange-500"
                  asChild
                >
                  <a href="/services">Se ydelser →</a>
                </Button>
              </div>
            </div>

            {/* Right: square icon grid */}
            <div className="grid grid-cols-6 gap-3">
              {techIcons.map((url, idx) => (
                <div
                  key={idx}
                  className="w-14 h-14 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center p-2.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt="" className="w-8 h-8 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div id="kontakt-form" className="max-w-2xl w-full mx-auto">
            <div>
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-50 rounded-3xl"
                />

                {submitted ? (
                  <div className="uv-form-container text-center py-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Besked modtaget!</h2>
                    <p className="text-gray-500 text-sm mb-6">
                      Tak for din henvendelse. Jeg vender tilbage inden for 24 timer.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                      className="text-orange-500 hover:text-orange-600 font-semibold text-sm underline underline-offset-4 transition-colors"
                    >
                      Send en ny besked
                    </button>
                  </div>
                ) : (
                  <div className="uv-form-container">
                    <div>
                      <p className="text-gray-900 font-bold text-lg mb-0.5">Skriv til mig</p>
                      <p className="text-gray-400 text-xs">Alle felter med * er påkrævede</p>
                    </div>
                    <form className="uv-form" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="uv-form-group">
                          <label htmlFor="name">Navn *</label>
                          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Dit navn" />
                        </div>
                        <div className="uv-form-group">
                          <label htmlFor="email">Email *</label>
                          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="din@email.dk" />
                        </div>
                      </div>

                      <div className="uv-form-group">
                        <label htmlFor="phone">Telefon <span style={{ color: '#555', fontWeight: 400 }}>(valgfrit)</span></label>
                        <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+45 12 34 56 78" />
                      </div>

                      <div className="uv-form-group">
                        <label htmlFor="subject">Emne *</label>
                        <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                          <option value="" disabled>Vælg en kategori...</option>
                          {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>

                      <div className="uv-form-group">
                        <label htmlFor="message">Besked *</label>
                        <textarea id="message" name="message" value={form.message} onChange={handleChange} required placeholder="Beskriv dit projekt eller din udfordring..." />
                      </div>

                      <button type="submit" disabled={loading} className="uv-submit-btn">
                        {loading ? (
                          <><div style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} /> Sender...</>
                        ) : (
                          <><Send size={16} /> Send besked</>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-5 text-sm text-gray-500">
                <a href="mailto:youjav@hotmail.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <Mail className="w-4 h-4" /> youjav@hotmail.com
                </a>
                <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block" />
                <a href="tel:+4542755645" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <Phone className="w-4 h-4" /> +45 42 75 56 45
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <AnimatedSection>
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Hurtig respons</h3>
                <p className="text-gray-500 text-sm">Svar inden for 2-4 timer på hverdage, garanteret inden for 24 timer.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Gratis indledende møde</h3>
                <p className="text-gray-500 text-sm">Vi starter med et uforpligtende møde for at forstå dine behov.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Brøndby Strand, Danmark</h3>
                <p className="text-gray-500 text-sm">Tilgængelig for møder i Storkøbenhavn og online overalt.</p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="https://www.linkedin.com/in/yousaf-tahir-javaid-277285230"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-600 hover:border-orange-500 hover:text-orange-500 font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
              >
                Forbind på LinkedIn <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}
