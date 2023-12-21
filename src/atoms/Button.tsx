import './Button.scss'
import { Icon, IconType } from './Icon'

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

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string
  leftIcon?: IconType
  rightIcon?: IconType
  variant?: ButtonVariant
  loading?: boolean
}

export function Button({
  label,
  leftIcon,
  rightIcon,
  disabled,
  variant = 'primary',
  loading = false,
  ...props
}: ButtonProps): React.JSX.Element {
  if (loading) {
    leftIcon = 'Loading'
  }
  const cssClasses = ['button', variant].join(' ')
  return (
    <button className={cssClasses} disabled={loading || disabled} {...props}>
      {leftIcon && <Icon name={leftIcon} />}
      {label}
      {rightIcon && <Icon name={rightIcon} />}
    </button>
  )
}
