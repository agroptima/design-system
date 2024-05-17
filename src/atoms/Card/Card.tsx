import './Card.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export type Variant = 'primary'

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: Variant
  isDisabled?: boolean
}

export function Card({
  className,
  variant = 'primary',
  isDisabled = false,
  children,
  ...props
}: CardProps): React.JSX.Element {
  const cssClasses = classNames('card', className, variant, {
    disabled: isDisabled,
  })

  return (
    <div className={cssClasses} {...props}>
      {children}
    </div>
  )
}
