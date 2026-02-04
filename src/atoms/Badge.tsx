import './Badge.scss'
import { classNames } from '../utils/classNames'
import type { IconType } from './Icon'
import { Icon } from './Icon'

export type Variant =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'neutral'
  | 'info-outlined'
  | 'success-outlined'
  | 'warning-outlined'
  | 'error-outlined'
  | 'neutral-outlined'
  | 'primary'
  | 'primary-outlined'
  | 'notification'

export interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  variant?: Variant
  text?: string
  icon?: IconType
  accessibilityLabel?: string
  isDot?: boolean
}

export function Badge({
  variant = 'info',
  className,
  text,
  icon,
  accessibilityLabel,
  isDot,
  ...props
}: BadgeProps): React.JSX.Element {
  const cssClasses = classNames('badge', variant, className, { dot: isDot })

  return (
    <span
      className={cssClasses}
      role="status"
      aria-label={accessibilityLabel || text}
      {...props}
    >
      {text ? (
        <>
          {icon && <Icon name={icon} decorative />}
          {text}
        </>
      ) : (
        icon && <Icon name={icon} accessibilityLabel={accessibilityLabel} />
      )}
    </span>
  )
}
