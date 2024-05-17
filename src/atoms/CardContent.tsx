import './Card.scss'
import React from 'react'
import { classNames } from '../utils/classNames'

export interface CardContentProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export function CardContent({
  className,
  children,
  ...props
}: CardContentProps): React.JSX.Element {
  const cssClasses = classNames('content', className)

  return (
    <div className={cssClasses} {...props}>
      {children}
    </div>
  )
}
