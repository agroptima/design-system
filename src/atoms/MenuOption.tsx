import './Menu.scss'
import React from 'react'
import { Icon, IconType } from './Icon'
import { classNames } from '../utils/classNames'

export type Variant = 'primary'

export interface MenuOptionProps extends React.ComponentPropsWithoutRef<'li'> {
  variant?: Variant
  icon?: IconType
  title: string
  disabled?: boolean
}

export function MenuOption({
  variant = 'primary',
  className,
  disabled,
  icon,
  title,
  children,
  ...props
}: MenuOptionProps): React.JSX.Element {
  const cssClasses = classNames('menu-option', variant, className)

  return (
    <li
      className={cssClasses}
      tabIndex={0}
      role="menuitem"
      // aria-selected
      {...props}
    >
      <div className="container">
        <div className="left">
          {icon && <Icon name={icon} />}
          <span className="title">{title}</span>
        </div>
        <div className="right">
          <Icon name="AngleDown" />
        </div>
      </div>
      {children}
    </li>
  )
}
