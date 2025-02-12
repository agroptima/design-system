import './Divider.scss'
import { classNames } from '../utils/classNames'
import type { IconType } from './Icon'
import { Icon } from './Icon'

export interface DividerProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string
  withIcon?: boolean
  variant?: string
  iconName?: IconType
}

export function Divider({
  title,
  withIcon = false,
  variant = 'primary',
  iconName = 'DeliveryNote',
  className,
}: DividerProps) {
  const cssClasses = classNames('divider', variant, className)

  return (
    <div role="separator" className={cssClasses}>
      {withIcon ? (
        <Icon name={iconName} size="3" />
      ) : (
        <div className="short line"></div>
      )}
      <span>{title}</span>
      <div className="long line"></div>
    </div>
  )
}
