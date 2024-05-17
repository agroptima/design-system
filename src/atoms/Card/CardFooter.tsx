import './Card.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export interface CardFooterProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export function CardFooter({
  className,
  children,
  ...props
}: CardFooterProps): React.JSX.Element {
  const cssClasses = classNames('footer', className)

  return (
    <div className={cssClasses} {...props}>
      {children}
    </div>
  )
}
