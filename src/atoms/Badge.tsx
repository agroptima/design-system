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

export interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  variant?: Variant
  text?: string
  accessibilityLabel: string
  isDot?: boolean
}

export function Badge({
  variant = 'info',
  className,
  text,
  accessibilityLabel,
  isDot,
  ...props
}: BadgeProps): React.JSX.Element {
  const cssClasses = classNames('badge', variant, className, { dot: isDot })

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
