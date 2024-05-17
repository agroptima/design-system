import './Card.scss'
import React from 'react'
import { classNames } from '../utils/classNames'

export interface CardHeaderProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string
  isBold: boolean
}

export function CardHeader({
  className,
  title,
  isBold = false,
  children,
  ...props
}: CardHeaderProps): React.JSX.Element {
  const cssClasses = classNames('header', className, { bold: isBold })

  return (
    <div className={cssClasses} {...props}>
      <span className={classNames({ bold: isBold })}>{title}</span>
      <div className="actions">{children}</div>
    </div>
  )
}
