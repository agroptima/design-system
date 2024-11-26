import type { LinkProps as NextLinkProps } from 'next/link'
import { classNames } from '../../utils/classNames'
import Link from 'next/link'
import './Popover.scss'

export type Variant = 'primary'

type LinkProps = NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
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
      {...props}
    >
      <span className="title">{title}</span>
    </Link>
  )
}
