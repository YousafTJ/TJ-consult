import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import ServiceOverview from '@/components/ServiceOverview'
import WhyMe from '@/components/WhyMe'
import LoesningerIPraksis from '@/components/LoesningerIPraksis'
import ContactCTA from '@/components/ContactCTA'
import AnimatedSection from '@/components/AnimatedSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <TechStack />
      </AnimatedSection>
      <AnimatedSection>
        <ServiceOverview />
      </AnimatedSection>
      <AnimatedSection>
        <WhyMe />
      </AnimatedSection>
      <AnimatedSection>
        <LoesningerIPraksis />
      </AnimatedSection>
      <AnimatedSection>
        <ContactCTA />
      </AnimatedSection>
    </>
  )
}
