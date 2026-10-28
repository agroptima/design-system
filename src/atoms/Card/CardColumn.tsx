import './Card.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export interface CardColumnProps extends React.ComponentPropsWithoutRef<'div'> {}

export function CardColumn({
  className,
  children,
  ...props
}: CardColumnProps): React.JSX.Element {
  const cssClasses = classNames('card-column', className)

  return (
    <div className={cssClasses} {...props}>
      {children}
    </div>
  )
}
