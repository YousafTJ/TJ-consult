import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import ServiceOverview from '@/components/ServiceOverview'
import WhyMe from '@/components/WhyMe'
import ContactCTA from '@/components/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <ServiceOverview />
      <WhyMe />
      <ContactCTA />
    </>
  )
}
