import './Divider.scss'
import type { ComponentPropsWithoutRef } from 'react'
import { classNames } from '../utils/classNames'
import type { IconType } from './Icon'
import { Icon } from './Icon'

type DividerIconTypes = IconType | 'Line'

export interface DividerProps extends ComponentPropsWithoutRef<'div'> {
  title: string
  variant?: string
  icon?: DividerIconTypes
}

export function Divider({
  title,
  variant = 'primary',
  icon,
  className,
  children,
}: DividerProps) {
  const cssClasses = classNames('divider', variant, className)

  return (
    <div role="separator" className={cssClasses}>
      <div className="divider-title">
        <DividerIcon icon={icon} />
        <span>{title}</span>
      </div>
      <div className="long line"></div>
      {children}
    </div>
  )
}

function DividerIcon({ icon }: { icon?: DividerIconTypes }) {
  if (!icon) return null
  if (icon === 'Line') return <div className="short line" />
  return <Icon className="icon" name={icon} size="3" />
}
