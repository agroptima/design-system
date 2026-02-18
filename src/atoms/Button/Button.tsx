import './Button.scss'
import { classNames } from '../../utils/classNames'
import type { IconType } from '../Icon'
import { Icon } from '../Icon'
import type { BaseButtonProps } from './BaseButton'
import { BaseButton } from './BaseButton'

interface CustomProps {
  label: string
  icon?: IconType
  accessibilityLabel?: string
  leftIcon?: IconType
  rightIcon?: IconType
  variant?: ButtonVariant
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
}

export type ButtonProps = CustomProps & BaseButtonProps

export type ButtonVariant =
  | 'primary'
  | 'primary-ghost'
  | 'primary-outlined'
  | 'neutral'
  | 'neutral-ghost'
  | 'neutral-outlined'
  | 'error'
  | 'error-ghost'
  | 'error-outlined'
  | 'success'
  | 'success-ghost'
  | 'success-outlined'
  | 'info'
  | 'info-ghost'
  | 'info-outlined'
  | 'warning'
  | 'warning-ghost'
  | 'warning-outlined'
  | 'transparent'

export function Button({
  label,
  icon,
  accessibilityLabel,
  leftIcon,
  rightIcon,
  disabled,
  className,
  variant = 'primary',
  loading = false,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const leftIconName = loading ? 'Loading' : leftIcon
  const cssClasses = classNames(className, 'button', variant, {
    'full-width': fullWidth,
  })

  return (
    <BaseButton
      disabled={loading || disabled}
      aria-label={accessibilityLabel || label}
      title={accessibilityLabel || label}
      className={cssClasses}
      {...props}
    >
      {leftIconName && <Icon name={leftIconName} size="3" decorative />}
      {icon ? <Icon name={icon} size="3" decorative /> : label}
      {rightIcon && <Icon name={rightIcon} size="3" decorative />}
    </BaseButton>
  )
}
