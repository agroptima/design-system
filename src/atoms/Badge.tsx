import { classNames } from '../utils/classNames'
import './Badge.scss'

export type Variant =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'info-outlined'
  | 'success-outlined'
  | 'warning-outlined'
  | 'error-outlined'

export interface BadgeProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: Variant
  text: string
  accessibilityLabel: string
}

export function Badge({
  variant = 'info',
  className,
  text,
  accessibilityLabel,
  ...props
}: BadgeProps): React.JSX.Element {
  const cssClasses = classNames('badge', variant, className)

  return (
    <span
      className={cssClasses}
      role="status"
      aria-label={accessibilityLabel}
      {...props}
    >
      {text}
    </span>
  )
}
