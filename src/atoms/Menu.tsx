import './Menu.scss'
import React from 'react'
import { classNames } from '../utils/classNames'

export type Variant = 'primary'

export interface MenuProps extends React.ComponentPropsWithoutRef<'ul'> {
  variant?: Variant
  isDropdown?: boolean
}

export function Menu({
  variant = 'primary',
  className,
  isDropdown = false,
  children,
  ...props
}: MenuProps): React.JSX.Element {
  const cssClasses = classNames('menu', variant, className, {
    dropdown: isDropdown,
  })

  return (
    <ul className={cssClasses} role="menu" {...props}>
      {children}
    </ul>
  )
}
