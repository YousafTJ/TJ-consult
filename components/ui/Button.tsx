import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md',
        secondary: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
        outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
        ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
        white: 'bg-white text-gray-900 hover:bg-gray-50 shadow-sm',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

export function Button({
  href,
  children,
  className,
  variant,
  size,
  onClick,
  type = 'button',
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className)

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
