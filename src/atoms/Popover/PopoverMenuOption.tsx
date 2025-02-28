import './Popover.scss'
import type { LinkProps as NextLinkProps } from 'next/link'
import Link from 'next/link'
import React, { type AnchorHTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'

export type Variant = 'primary'

type LinkProps = NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
export interface PopoverMenuOptionProps extends LinkProps {
  variant?: Variant
  title: string
  disabled?: boolean
  href: string
  active?: boolean
}

export function PopoverMenuOption({
  variant = 'primary',
  className,
  title,
  disabled,
  href,
  active,
  prefetch = false,
  ...props
}: PopoverMenuOptionProps): React.JSX.Element {
  const cssClasses = classNames('popover-menu-option', variant, className, {
    disabled,
    active,
  })

  return (
    <Link
      role="menuitem"
      className={cssClasses}
      href={disabled ? '#' : href}
      aria-disabled={disabled}
      prefetch={prefetch}
      {...props}
    >
      <span className="title">{title}</span>
    </Link>
  )
}
