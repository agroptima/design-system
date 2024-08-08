import type { IconType } from '../Icon'
import React from 'react'
import { Icon } from '../Icon'
import { classNames } from '../../utils/classNames'
import Link from 'next/link'
import './Menu.scss'

export type Variant = 'primary'

export interface MenuLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
  variant?: Variant
  icon?: IconType
  isActive?: boolean
  href: string
}

export function MenuLink({
  variant = 'primary',
  isActive = false,
  className,
  icon,
  title,
  href,
  ...props
}: MenuLinkProps): React.JSX.Element {
  const cssClasses = classNames('menu-item', variant, className, {
    active: isActive,
  })

  return (
    <li tabIndex={0} role="menuitem">
      <Link href={href} {...props} className={cssClasses}>
        {icon && <Icon name={icon} />}
        <span className="title">{title}</span>
      </Link>
    </li>
  )
}
