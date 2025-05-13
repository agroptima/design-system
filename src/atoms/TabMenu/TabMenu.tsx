import './TabMenu.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export type Variant = 'primary'

export interface TabMenuProps extends React.ComponentPropsWithoutRef<'ul'> {
  variant?: Variant
}

export function TabMenu({
  variant = 'primary',
  className,
  children,
  ...props
}: TabMenuProps): React.JSX.Element {
  const cssClasses = classNames('tabmenu', variant, className)

  return (
    <div className="tabmenu-container">
      <ul className={cssClasses} role="menu" {...props}>
        {children}
      </ul>
      <div className="tabmenu-divider" />
    </div>
  )
}
