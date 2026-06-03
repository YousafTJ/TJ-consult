'use client'

import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  index?: number
  className?: string
}

export default function FallingItem({ children, index = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -32, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.52,
        ease: [0.34, 1.15, 0.64, 1],
        delay: index * 0.07,
      }}
    >
      {children}
    </motion.div>
  )
}
