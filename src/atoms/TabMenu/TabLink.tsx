import './TabMenu.scss'
import Link, { type LinkProps } from 'next/link'
import React, { type AnchorHTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'

export type Variant = 'primary'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

export interface TabLinkProps extends AnchorProps {
  title: string
  variant?: Variant
  isActive?: boolean
  disabled?: boolean
}

export function TabLink({
  variant = 'primary',
  isActive = false,
  disabled = false,
  className,
  title,
  prefetch = false,
  ...props
}: TabLinkProps): React.JSX.Element {
  const cssClasses = classNames('tabmenu-item', variant, className, {
    active: isActive,
    disabled,
  })

  return (
    <li tabIndex={0} role="menuitem">
      <Link {...props} prefetch={prefetch} className={cssClasses}>
        <span className="title">{title}</span>
      </Link>
    </li>
  )
}
