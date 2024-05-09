import { classNames } from '../utils/classNames'
import { Button, ButtonProps } from './Button'
import './EmptyState.scss'
import { Icon, IconType } from './Icon'

export type Variant = 'primary'

export interface EmptyStateProps extends React.ComponentPropsWithoutRef<'div'> {
  icon?: IconType
  text?: string
  variant?: Variant
  button?: ButtonProps
}

export function EmptyState({
  className,
  icon = 'EmptyState',
  text = 'No data',
  variant = 'primary',
  button,
}: EmptyStateProps): React.JSX.Element {
  const cssClasses = classNames('empty-state', variant, className)

  return (
    <div className={cssClasses}>
      <Icon name={icon} />
      <p>{text}</p>
      {button?.label && <Button {...button} />}
    </div>
  )
}
