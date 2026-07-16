import { cn } from '@/lib/utils'

interface KickerProps {
  children: React.ReactNode
  className?: string
  withDot?: boolean
}

export function Kicker({ children, className, withDot = false }: KickerProps) {
  return (
    <span className={cn('kicker-badge', withDot && 'kicker-badge--lg', className)}>
      {withDot && <span className="kicker-badge__dot animate-pulse" />}
      {children}
    </span>
  )
}
