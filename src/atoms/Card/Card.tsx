import './Card.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export type Variant = 'primary'

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: Variant
  isDisabled?: boolean
  isActive?: boolean
}

export function Card({
  className,
  variant = 'primary',
  isDisabled = false,
  isActive = false,
  children,
  ...props
}: CardProps): React.JSX.Element {
  const cssClasses = classNames('card', className, variant, {
    disabled: isDisabled,
    active: isActive,
  })

  return (
    <article className={cssClasses} {...props}>
      {children}
    </article>
  )
}
