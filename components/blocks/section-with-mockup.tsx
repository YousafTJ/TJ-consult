'use client';

import React from "react";
import { motion } from "framer-motion";

interface SectionWithMockupProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  primaryImageSrc: string;
  secondaryImageSrc: string;
  reverseLayout?: boolean;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
  title,
  description,
  primaryImageSrc,
  secondaryImageSrc,
  reverseLayout = false,
}) => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:grid-flow-col-dense"
    : "md:grid-cols-2";

  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

  return (
    <section className="relative py-24 md:py-32 bg-gray-900 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
        <motion.div
          className={`grid grid-cols-1 gap-16 md:gap-8 w-full items-center ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Content */}
          <motion.div
            className={`flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0 ${textOrderClass}`}
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Om mig</span>
            </div>
            <h2 className="text-white text-3xl md:text-[40px] font-bold leading-tight md:leading-[53px]">
              {title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-7">
              {description}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="/om-mig"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition-all duration-200 text-sm"
              >
                Læs min fulde profil →
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
              >
                Kontakt mig
              </a>
            </div>
          </motion.div>

          {/* Mockup Image */}
          <motion.div
            className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[300px] md:max-w-[471px]`}
            variants={itemVariants}
          >
            {/* Secondary background card */}
            <motion.div
              className="absolute w-[300px] h-[317px] md:w-[472px] md:h-[500px] bg-gray-800 rounded-[32px] z-0"
              style={{
                top: reverseLayout ? 'auto' : '10%',
                bottom: reverseLayout ? '10%' : 'auto',
                left: reverseLayout ? 'auto' : '-20%',
                right: reverseLayout ? '-20%' : 'auto',
                filter: 'blur(2px)',
              }}
              initial={{ y: 0 }}
              whileInView={{ y: reverseLayout ? -20 : -30 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="relative w-full h-full bg-cover bg-center rounded-[32px]"
                style={{ backgroundImage: `url(${secondaryImageSrc})` }}
              />
            </motion.div>

            {/* Primary mockup card */}
            <motion.div
              className="relative w-full h-[405px] md:h-[637px] bg-white/5 rounded-[32px] backdrop-blur-sm border border-white/10 z-10 overflow-hidden"
              initial={{ y: 0 }}
              whileInView={{ y: reverseLayout ? 20 : 30 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${primaryImageSrc})` }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div
        className="absolute w-full h-px bottom-0 left-0 z-0"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(249,115,22,0.3) 0%, rgba(249,115,22,0) 100%)",
        }}
      />
    </section>
  );
};

export default SectionWithMockup;
