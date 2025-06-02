import './Divider.scss'
import Link from 'next/link'
import { classNames } from '../utils/classNames'
import type { IconType } from './Icon'
import { Icon } from './Icon'

export interface DividerProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string
  variant?: string
  icon?: IconType
  hasAction?: boolean
  onClick?: () => void
}

export function Divider({
  title,
  variant = 'primary',
  icon,
  hasAction,
  className,
  onClick = () => {},
}: DividerProps) {
  const cssClasses = classNames('divider', variant, className)

  return (
    <div role="separator" className={cssClasses}>
      {icon ? (
        <Icon className="icon" name={icon} size="3" />
      ) : (
        <div className="short line"></div>
      )}
      <span onClick={onClick} className={classNames({ link: hasAction })}>
        {title}
      </span>
      <div className="long line"></div>
    </div>
  )
}
