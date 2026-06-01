import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'orange' | 'gray' | 'dark' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'orange', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold',
        variant === 'orange' && 'bg-orange-100 text-orange-600',
        variant === 'gray' && 'bg-gray-100 text-gray-600',
        variant === 'dark' && 'bg-gray-900 text-white',
        variant === 'outline' && 'border border-orange-500 text-orange-500',
        className
      )}
    >
      {children}
    </span>
  )
}
