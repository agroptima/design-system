import './Card.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'
import Link from 'next/link'

export type Variant = 'primary'

export interface CardProps {
  visible?: boolean
  className?: string
  variant?: Variant
  isDisabled?: boolean
  isActive?: boolean
  error?: boolean
  href?: string
  children: React.ReactNode
}

export function Card({
  className,
  visible = true,
  variant = 'primary',
  isDisabled = false,
  isActive = false,
  error = false,
  children,
  href,
  ...props
}: CardProps) {
  if (!visible) return null

  const cssClasses = classNames('card', variant, className, {
    disabled: isDisabled,
    active: isActive,
    error: error,
  })

  if (href && !isDisabled) {
    return (
      <Link href={href} className={cssClasses} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <article className={cssClasses} {...props}>
      {children}
    </article>
  )
}
