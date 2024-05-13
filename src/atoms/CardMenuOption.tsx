import { Icon, IconType } from './Icon'
import './CardMenuOption.scss'
import { classNames } from '../utils/classNames'

export type Variant = 'primary'

export interface CardMenuOptionProps
  extends React.ComponentPropsWithoutRef<'div'> {
  id?: string
  variant?: Variant
  icon: IconType
  title: string
  description?: string
  disabled?: boolean
}

export function CardMenuOption({
  id,
  variant = 'primary',
  className,
  icon,
  title,
  description,
  disabled,
  ...props
}: CardMenuOptionProps): React.JSX.Element {
  const cssClasses = classNames('card-menu-option', variant, className, {
    disabled: disabled,
  })

  return (
    <div
      role="menuitem"
      className={cssClasses}
      {...props}
      aria-disabled={disabled}
    >
      <div className="left">
        <div className="title-container">
          <Icon name={icon} className={variant} />
          <span className="title">{title}</span>
        </div>
        <p className="content">{description}</p>
      </div>
      <div className="right">
        <Icon name="AngleRight" className={variant} />
      </div>
    </div>
  )
}
