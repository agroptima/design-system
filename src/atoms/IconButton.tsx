import './IconButton.scss'
import { Icon, IconType } from './Icon'
import { classNames } from '../utils/classNames'
import { BaseButtonProps, BaseButton } from './BaseButton'

export type Variant = 'primary'

export interface _IconButtonProps {
  icon: IconType
  variant?: Variant
  disabled?: boolean
  accessibilityLabel: string
}

export type IconButtonProps = _IconButtonProps & BaseButtonProps

export function IconButton({
  accessibilityLabel,
  icon,
  disabled,
  variant = 'primary',
  ...props
}: IconButtonProps) {
  const cssClasses = classNames('icon-button', variant, props.className)

  return (
    <BaseButton
      disabled={disabled}
      aria-label={accessibilityLabel}
      {...props}
      className={cssClasses}
    >
      <Icon name={icon} />
    </BaseButton>
  )
}
