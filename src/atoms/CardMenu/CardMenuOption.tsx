import type { IconType } from '../Icon'
import type { LinkProps as NextLinkProps } from 'next/link'
import { Icon } from '../Icon'
import { classNames } from '../../utils/classNames'
import Link from 'next/link'
import './CardMenu.scss'

export type Variant = 'primary'

type LinkProps = NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
export interface CardMenuOptionProps extends LinkProps {
  id?: string
  variant?: Variant
  icon: IconType
  title: string
  description?: string
  disabled?: boolean
  href: string
  active?: boolean
  error?: boolean
}

export function CardMenuOption({
  id,
  variant = 'primary',
  className,
  icon,
  title,
  description,
  disabled,
  href,
  active,
  error,
  ...props
}: CardMenuOptionProps): React.JSX.Element {
  const cssClasses = classNames('card-menu-option', variant, className, {
    disabled,
    active,
    error,
  })

  return (
    <Link
      role="menuitem"
      className={cssClasses}
      href={disabled ? '#' : href}
      aria-disabled={disabled}
      {...props}
    >
      <div className="left">
        <div className="title-container">
          <Icon name={icon} className={variant} size="4" />
          <span className="title">{title}</span>
        </div>
        {description && <p className="content">{description}</p>}
      </div>
      <div className="right">
        <Icon name="AngleRight" className={variant} />
      </div>
    </Link>
  )
}
