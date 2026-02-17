import './Icon.scss'
import type { ReactNode } from 'react'
import * as icons from '../icons'
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

  if (decorative) {
    return (
      <span aria-hidden="true" className={cssClasses}>
        {icons[name](props) as ReactNode}
      </span>
    )
  }

  return (
    <span
      role="img"
      aria-label={accessibilityLabel || name}
      className={cssClasses}
    >
      {icons[name](props) as ReactNode}
    </span>
  )
}
