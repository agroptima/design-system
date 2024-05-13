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
  isDropdown?: boolean
}

export function MenuOption({
  variant = 'primary',
  className,
  disabled,
  icon,
  title,
  isDropdown = false,
  children,
  ...props
}: MenuOptionProps): React.JSX.Element {
  const cssClasses = classNames('menu-option', variant, className, {
    dropdown: isDropdown,
  })

  return (
    <li
      className={cssClasses}
      tabIndex={0}
      role="menuitem"
      // aria-selected
      {...props}
    >
      <div className="left">
        {icon && <Icon name={icon} />}
        <span className="title">{title}</span>
      </div>
      {isDropdown && (
        <div className="right">
          <Icon name="AngleDown" />
        </div>
      )}
      {children}
    </li>
  )
}
