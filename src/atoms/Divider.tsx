import './Divider.scss'
import { classNames } from '../utils/classNames'
import type { IconType } from './Icon'
import { Icon } from './Icon'

export interface DividerProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string
  variant?: string
  icon?: IconType
}

export function Divider({
  title,
  variant = 'primary',
  icon,
  className,
}: DividerProps) {
  const cssClasses = classNames('divider', variant, className)

  return (
    <div role="separator" className={cssClasses}>
      {icon ? (
        <Icon className="icon" name={icon} size="3" />
      ) : (
        <div className="short line"></div>
      )}
      <span>{title}</span>
      <div className="long line"></div>
    </div>
  )
}
