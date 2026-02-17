import './CardMenu.scss'
import { classNames } from '../../utils/classNames'
import { BaseButton, type BaseButtonProps } from '../Button'
import type { IconType } from '../Icon'
import { Icon } from '../Icon'

export type Variant = 'primary'

interface CustomProps {
  variant?: Variant
  icon: IconType
  title: string
  description?: string
  active?: boolean
  error?: boolean
}

export type CardMenuOptionProps = CustomProps & BaseButtonProps

export function CardMenuOption({
  variant = 'primary',
  className,
  icon,
  title,
  description,
  disabled = false,
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
    <BaseButton
      role="menuitem"
      className={cssClasses}
      disabled={disabled}
      aria-disabled={disabled}
      type="button"
      {...props}
    >
      <div className="left">
        <div className="title-container">
          <Icon name={icon} className={variant} size="4" decorative />
          <span className="title">{title}</span>
        </div>
        {description && <p className="content">{description}</p>}
      </div>
      <div className="right">
        <Icon name="AngleRight" className={variant} decorative />
      </div>
    </BaseButton>
  )
}
