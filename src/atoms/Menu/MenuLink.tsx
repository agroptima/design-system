import './Menu.scss'
import Link, { type LinkProps } from 'next/link'
import React, { type AnchorHTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'
import type { IconType } from '../Icon'
import { Icon } from '../Icon'

export type Variant = 'primary'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

export interface MenuLinkProps extends AnchorProps {
  title: string
  variant?: Variant
  icon?: IconType
  isActive?: boolean
}

export function MenuLink({
  variant = 'primary',
  isActive = false,
  className,
  icon,
  title,
  prefetch = false,
  ...props
}: MenuLinkProps): React.JSX.Element {
  const cssClasses = classNames('menu-item', variant, className, {
    active: isActive,
  })

  return (
    <li tabIndex={0} role="menuitem">
      <Link {...props} prefetch={prefetch} className={cssClasses}>
        {icon && <Icon name={icon} size="3" />}
        <span className="title">{title}</span>
      </Link>
    </li>
  )
}
