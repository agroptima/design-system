import './Divider.scss'
import { classNames } from '../utils/classNames'
import { Icon } from './Icon'

export interface DividerProps extends React.ComponentPropsWithoutRef<'hr'> {
  title: string
  withIcon?: boolean
  variant?: string
}

export function Divider({
  title,
  withIcon = false,
  variant = 'primary',
  className,
}: DividerProps) {
  const cssClasses = classNames('divider-container', variant, className)

  return (
    <div className={cssClasses}>
      {withIcon ? (
        <Icon name="DeliveryNote" />
      ) : (
        <div className="short-line"></div>
      )}
      <span>{title}</span>
      <div className="line"></div>
    </div>
  )
}
