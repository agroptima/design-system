import './Icon.scss'
import type { ReactNode } from 'react'
import { icons } from '../icons'
import { classNames } from '../utils/classNames'
export type IconType = keyof typeof icons

export type IconSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
export type Variant = 'info' | 'success' | 'warning' | 'error' | 'primary'

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconType
  className?: string
  visible?: boolean
  size?: IconSize
  variant?: Variant
  decorative?: boolean
  accessibilityLabel?: string
}

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  variant,
  size = '5',
  visible = true,
  decorative = false,
  accessibilityLabel,
  ...props
}) => {
  if (!visible) return null

  const cssClasses = classNames('icon', `size-${size}`, variant, className, {
    rotate: name === 'Loading',
  })

  const IconComponent = icons[name]

  if (decorative) {
    return (
      <span aria-hidden="true" className={cssClasses}>
        {IconComponent ? ((<IconComponent {...props} />) as ReactNode) : null}
      </span>
    )
  }

  return (
    <span
      role="img"
      aria-label={accessibilityLabel || name}
      title={accessibilityLabel || name}
      className={cssClasses}
    >
      {IconComponent ? ((<IconComponent {...props} />) as ReactNode) : null}
    </span>
  )
}
