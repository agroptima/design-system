import { Button } from './Button'
import './EmptyState.scss'
import { Icon, IconType } from './Icon'

export type Variant = 'primary'

interface callToAction {
  (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): any
}

export interface EmptyStateProps extends React.ComponentPropsWithoutRef<'div'> {
  icon?: IconType
  text?: string
  variant?: Variant
  buttonLabel?: string
  action?: callToAction
}

export function EmptyState({
  icon = 'EmptyState',
  text = 'No data',
  variant = 'primary',
  buttonLabel,
  action,
}: EmptyStateProps): React.JSX.Element {
  const cssClasses = ['empty-state', variant].join(' ')

  return (
    <div className={cssClasses}>
      <Icon name={icon} />
      <p>{text}</p>
      {buttonLabel && action && <Button label={buttonLabel} onClick={action} />}
    </div>
  )
}
