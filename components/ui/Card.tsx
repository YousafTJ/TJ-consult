import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  orange?: boolean
}

export function Card({ children, className, hover = false, orange = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-gray-100 p-6',
        hover && 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer',
        orange && 'hover:border-orange-200 hover:shadow-orange-100',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardIconProps {
  children: React.ReactNode
  className?: string
}

export function CardIcon({ children, className }: CardIconProps) {
  return (
    <div
      className={cn(
        'w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 mb-4',
        className
      )}
    >
      {children}
    </div>
  )
}
