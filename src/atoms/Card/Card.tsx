import './Card.scss'
import Link, { type LinkProps } from 'next/link'
import React from 'react'
import { classNames } from '../../utils/classNames'

export type Variant = 'primary'

export interface CardProps extends Omit<LinkProps, 'href'> {
  visible?: boolean
  className?: string
  variant?: Variant
  isDisabled?: boolean
  isActive?: boolean
  error?: boolean
  onClick?: () => void
  role?: string
  children: React.ReactNode
  href?: string
}

export function Card({
  className,
  visible = true,
  variant = 'primary',
  isDisabled = false,
  isActive = false,
  error = false,
  prefetch = false,
  children,
  href,
  ...props
}: CardProps) {
  if (!visible) return null

  const cssClasses = classNames('card', variant, className, {
    disabled: isDisabled,
    active: isActive,
    error: error,
    clickable: Boolean(props.onClick),
  })

  if (href && !isDisabled) {
    return (
      <Link href={href} className={cssClasses} prefetch={prefetch} {...props}>
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
