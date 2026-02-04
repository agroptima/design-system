import './EmptyState.scss'
import { classNames } from '../utils/classNames'
import type { IconType } from './Icon'
import { Icon } from './Icon'

export type Variant = 'primary'

export interface EmptyStateProps extends React.ComponentPropsWithoutRef<'div'> {
  icon?: IconType
  variant?: Variant
  accessibilityLabel?: string
}

export function EmptyState({
  className,
  icon = 'EmptyState',
  variant = 'primary',
  accessibilityLabel,
  children,
}: EmptyStateProps): React.JSX.Element {
  const cssClasses = classNames('empty-state', variant, className)

  return (
    <div className={cssClasses}>
      {accessibilityLabel ? (
        <Icon name={icon} accessibilityLabel={accessibilityLabel} />
      ) : (
        <Icon name={icon} decorative />
      )}
      {children}
    </div>
  )
}
