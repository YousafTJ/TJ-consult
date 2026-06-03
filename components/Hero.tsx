'use client';

import React from 'react';
import { FloatingIconsHero } from '@/components/ui/floating-icons-hero-section';

const makeIcon = (src: string, alt: string): React.FC<{ className?: string }> => {
  const Icon = ({ className }: { className?: string }) => (
    <img src={src} alt={alt} className={className} style={{ objectFit: 'contain' }} />
  );
  Icon.displayName = alt;
  return Icon;
};

const IconMCP: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#F97316" opacity="0.1"/>
    <circle cx="12" cy="12" r="3" fill="#F97316"/>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconClaude: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="12" fill="#CC785C" opacity="0.15"/>
    <path d="M12 4C7.582 4 4 7.582 4 12s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 11c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08C16.71 16.72 14.5 18 12 18z" fill="#CC785C"/>
  </svg>
);

const IconSecurity: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7L12 2z" fill="#F97316" opacity="0.2"/>
    <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7L12 2z" stroke="#F97316" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconLangChain: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#1C3C3C" opacity="0.12"/>
    <path d="M5 8h4l3 8 3-8h4M8 12h8" stroke="#1C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill="#1C3C3C"/>
  </svg>
);

const IconMistral: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#FF7000" opacity="0.12"/>
    <rect x="3" y="3" width="5" height="5" fill="#FF7000" rx="1"/>
    <rect x="10" y="3" width="5" height="5" fill="#FF7000" rx="1"/>
    <rect x="17" y="3" width="4" height="5" fill="#FF7000" rx="1"/>
    <rect x="3" y="10" width="5" height="4" fill="#FF7000" rx="1" opacity="0.7"/>
    <rect x="10" y="10" width="5" height="4" fill="#FF7000" rx="1"/>
    <rect x="17" y="10" width="4" height="4" fill="#FF7000" rx="1" opacity="0.7"/>
    <rect x="3" y="16" width="5" height="5" fill="#FF7000" rx="1" opacity="0.5"/>
    <rect x="10" y="16" width="5" height="5" fill="#FF7000" rx="1" opacity="0.7"/>
  </svg>
);

const IconVectorDB: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#6366F1" opacity="0.1"/>
    <ellipse cx="12" cy="7" rx="7" ry="3" stroke="#6366F1" strokeWidth="1.5"/>
    <path d="M5 7v5c0 1.66 3.13 3 7 3s7-1.34 7-3V7" stroke="#6366F1" strokeWidth="1.5"/>
    <path d="M5 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" stroke="#6366F1" strokeWidth="1.5"/>
  </svg>
);

const IconAzure: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#0078D4" opacity="0.1"/>
    <path d="M9.5 3.5H6L2.5 17h4l1-3h5l1 3H18L12.5 3.5H9.5z" fill="#0078D4" opacity="0.9"/>
    <path d="M8 11l2-5 2 5H8z" fill="white" opacity="0.6"/>
  </svg>
);

const IconOpenAI: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#111827" opacity="0.08"/>
    <path d="M20.2 9.5a5.5 5.5 0 00-.48-4.54 5.6 5.6 0 00-6.04-2.69A5.6 5.6 0 0010 .5a5.6 5.6 0 00-5.33 3.87 5.6 5.6 0 00-3.74 2.72 5.6 5.6 0 00.69 6.58 5.6 5.6 0 00.48 4.54 5.6 5.6 0 006.04 2.69A5.6 5.6 0 0014 23.5a5.6 5.6 0 005.33-3.87 5.6 5.6 0 003.74-2.72 5.6 5.6 0 00-.87-7.41zM14 21.9a3.7 3.7 0 01-2.38-.87l.12-.07 3.95-2.28a.64.64 0 00.32-.56V12.4l1.67.96a.06.06 0 01.03.05v4.61A3.72 3.72 0 0114 21.9zM3.92 18.07a3.7 3.7 0 01-.44-2.49l.12.07 3.95 2.28a.64.64 0 00.64 0l4.83-2.79v1.92a.06.06 0 01-.02.06l-3.99 2.3a3.72 3.72 0 01-5.09-1.35zM2.7 8.27a3.7 3.7 0 011.94-1.63v4.55a.64.64 0 00.32.56l4.82 2.78-1.67.96a.06.06 0 01-.06 0L3.51 13A3.72 3.72 0 012.7 8.27zm13.72 3.2l-4.83-2.79 1.67-.96a.06.06 0 01.06 0l4.54 2.62a3.72 3.72 0 01-.57 6.72v-4.7a.64.64 0 00-.37-.89zm1.66-2.51l-.12-.07-3.94-2.28a.64.64 0 00-.64 0L8.55 9.4V7.48a.06.06 0 01.02-.06l3.99-2.3A3.72 3.72 0 0118.08 8.96zm-10.43 3.43l-1.67-.97a.06.06 0 01-.03-.05V6.92a3.72 3.72 0 016.08-2.86l-.12.07-3.95 2.28a.64.64 0 00-.32.56l.01 5.7zm.9-1.96l2.15-1.24 2.15 1.24v2.47l-2.15 1.24-2.15-1.24V10.43z" fill="#111827" opacity="0.75"/>
  </svg>
);

const heroIcons = [
  // Original 16
  { id: 1,  icon: makeIcon('https://cdn.simpleicons.org/python/F97316', 'Python'),           className: 'top-[8%] left-[8%]' },
  { id: 2,  icon: makeIcon('https://cdn.simpleicons.org/docker/2496ED', 'Docker'),           className: 'top-[20%] right-[6%]' },
  { id: 3,  icon: IconAzure,                                                                   className: 'top-[75%] left-[8%]' },
  { id: 4,  icon: IconOpenAI,                                                                 className: 'bottom-[8%] right-[8%]' },
  { id: 5,  icon: makeIcon('https://cdn.simpleicons.org/github/111827', 'GitHub'),           className: 'top-[4%] left-[30%]' },
  { id: 6,  icon: makeIcon('https://cdn.simpleicons.org/react/61DAFB', 'React'),             className: 'top-[4%] right-[30%]' },
  { id: 7,  icon: makeIcon('https://cdn.simpleicons.org/typescript/3178C6', 'TypeScript'),   className: 'bottom-[6%] left-[25%]' },
  { id: 8,  icon: makeIcon('https://cdn.simpleicons.org/kubernetes/326CE5', 'Kubernetes'),   className: 'top-[40%] left-[4%]' },
  { id: 9,  icon: makeIcon('https://cdn.simpleicons.org/linux/111827', 'Linux'),             className: 'top-[72%] right-[25%]' },
  { id: 10, icon: makeIcon('https://cdn.simpleicons.org/nextdotjs/111827', 'Next.js'),       className: 'top-[88%] left-[60%]' },
  { id: 11, icon: IconClaude,                                                                 className: 'top-[48%] right-[4%]' },
  { id: 12, icon: makeIcon('https://cdn.simpleicons.org/nodedotjs/339933', 'Node.js'),       className: 'top-[55%] left-[4%]' },
  { id: 13, icon: makeIcon('https://cdn.simpleicons.org/terraform/7B42BC', 'Terraform'),     className: 'top-[4%] left-[55%]' },
  { id: 14, icon: IconMCP,                                                                    className: 'bottom-[4%] right-[40%]' },
  { id: 15, icon: IconSecurity,                                                               className: 'top-[28%] right-[20%]' },
  { id: 16, icon: IconLangChain,                                                              className: 'top-[60%] left-[28%]' },
  // 8 new icons
  { id: 17, icon: makeIcon('https://cdn.simpleicons.org/vercel/111827', 'Vercel'),           className: 'top-[32%] left-[15%]' },
  { id: 18, icon: makeIcon('https://cdn.simpleicons.org/postgresql/336791', 'PostgreSQL'),   className: 'top-[68%] right-[16%]' },
  { id: 19, icon: makeIcon('https://cdn.simpleicons.org/mongodb/47A248', 'MongoDB'),         className: 'top-[14%] left-[42%]' },
  { id: 20, icon: makeIcon('https://cdn.simpleicons.org/huggingface/FFD21E', 'HuggingFace'), className: 'bottom-[22%] left-[46%]' },
  { id: 21, icon: makeIcon('https://cdn.simpleicons.org/githubactions/2088FF', 'CI/CD'),     className: 'top-[84%] right-[32%]' },
  { id: 22, icon: makeIcon('https://cdn.simpleicons.org/redis/DC382D', 'Redis'),             className: 'top-[22%] left-[21%]' },
  { id: 23, icon: IconMistral,                                                                className: 'bottom-[30%] left-[18%]' },
  { id: 24, icon: IconVectorDB,                                                               className: 'top-[12%] right-[22%]' },
];

export default function Hero() {
  return (
    <FloatingIconsHero
      title={
        <>
          IT der{' '}
          <span className="text-orange-500">virker.</span>
          <br />
          AI der{' '}
          <span className="text-orange-500">leverer.</span>
        </>
      }
      subtitle="Intelligent IT-konsulting og AI-løsninger der skaber reel, målbar forretningsværdi — fra strategi til implementering."
      ctaText="Se ydelser →"
      ctaHref="/services"
      secondaryCtaText="Kontakt mig"
      secondaryCtaHref="/kontakt"
      icons={heroIcons}
    />
  );
}
