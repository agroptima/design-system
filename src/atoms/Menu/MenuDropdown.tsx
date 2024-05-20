import { classNames } from '../../utils/classNames'
import { Icon, IconType } from '../Icon'
import './Menu.scss'

export type Variant = 'primary'

export interface MenuDropdownProps
  extends React.ComponentPropsWithoutRef<'li'> {
  title: string
  variant?: Variant
  icon?: IconType
  isOpen?: boolean
  name?: string
}

export function MenuDropdown({
  variant = 'primary',
  className,
  icon,
  title,
  children,
  isOpen,
  name,
  ...props
}: MenuDropdownProps): React.JSX.Element {
  const cssClasses = classNames('menu-item', variant, className)

  return (
    <li tabIndex={0} role="menuitem" className="menu-dropdown" {...props}>
      <details open={isOpen} name={name}>
        <summary className={cssClasses}>
          {icon && <Icon name={icon} />}
          <span className="title">{title}</span>
          <Icon className="arrow" name="AngleDown" />
        </summary>
        <ul className="menu" role="menu">
          {children}
        </ul>
      </details>
    </li>
  )
}
