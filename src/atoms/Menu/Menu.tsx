import './Menu.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export type Variant = 'primary'

export interface MenuProps extends React.ComponentPropsWithoutRef<'ul'> {
  variant?: Variant
}

export function Menu({
  variant = 'primary',
  className,
  children,
  ...props
}: MenuProps): React.JSX.Element {
  const cssClasses = classNames('menu', variant, className)

  return (
    <ul className={cssClasses} role="menu" {...props}>
      {children}
    </ul>
  )
}
