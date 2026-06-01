import SectionWithMockup from '@/components/blocks/section-with-mockup';

export default function AboutTeaser() {
  return (
    <SectionWithMockup
      title={
        <>
          IT-ekspertise der{' '}
          <span className="text-orange-400">faktisk leverer</span>{' '}
          resultater.
        </>
      }
      description={
        <>
          Jeg er Yousaf Javaid — dansk IT-konsulent og AI-specialist med over 100 konsulentimer og 1.000+ kunder hjulpet. Jeg bygger AI-agenter, skalerbare dashboards og komplette IT-løsninger der skaber reel forretningsværdi.
          <br /><br />
          Fra Gardian-dashboardet til AI-workflows for virksomheder — mit fokus er altid det samme: løsninger der virker i den virkelige verden.
        </>
      }
      primaryImageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      secondaryImageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    />
  );
}
