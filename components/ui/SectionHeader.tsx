import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow && (
        <div className={cn(
          'inline-flex items-center gap-2 mb-4',
          centered && 'justify-center'
        )}>
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          'text-3xl lg:text-4xl font-bold tracking-tight mb-4',
          light ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lg leading-relaxed',
            light ? 'text-gray-300' : 'text-gray-600',
            centered && 'max-w-2xl mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
