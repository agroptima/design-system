import { classNames } from '../utils/classNames'
import './EmptyState.scss'
import { Icon, IconType } from './Icon'

export type Variant = 'primary'

export interface EmptyStateProps extends React.ComponentPropsWithoutRef<'div'> {
  icon?: IconType
  variant?: Variant
}

export function EmptyState({
  className,
  icon = 'EmptyState',
  variant = 'primary',
  children,
}: EmptyStateProps): React.JSX.Element {
  const cssClasses = classNames('empty-state', variant, className)

  return (
    <div className={cssClasses}>
      <Icon name={icon} />
      {children}
    </div>
  )
}
