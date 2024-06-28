import './Button.scss'
import { Icon, IconType } from '../Icon'
import { classNames } from '../../utils/classNames'
import { BaseButtonProps, BaseButton } from './BaseButton'

interface CustomProps {
  label: string
  accessibilityLabel?: string
  leftIcon?: IconType
  rightIcon?: IconType
  variant?: ButtonVariant
  loading?: boolean
  disabled?: boolean
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

export function Button({
  label,
  accessibilityLabel,
  leftIcon,
  rightIcon,
  disabled,
  variant = 'primary',
  loading = false,
  ...props
}: ButtonProps) {
  if (loading) {
    leftIcon = 'Loading'
  }
  const cssClasses = classNames(props.className, 'button', variant)

  console.log('amo a ve: ', cssClasses)

  return (
    <BaseButton
      disabled={loading || disabled}
      aria-label={accessibilityLabel || label}
      {...props}
      className={cssClasses}
    >
      {leftIcon && <Icon name={leftIcon} />}
      {label}
      {rightIcon && <Icon name={rightIcon} />}
    </BaseButton>
  )
}
