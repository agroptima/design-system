import './Icon.scss'
import type { ReactNode } from 'react'
import * as icons from '../icons'
import { classNames } from '../utils/classNames'
export type IconType = keyof typeof icons

export type IconSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
export type Variant = 'info' | 'success' | 'warning' | 'error'

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconType
  className?: string
  title?: string
  visible?: boolean
  size?: IconSize
  variant?: Variant
}

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  variant,
  size = '5',
  visible = true,
  ...props
}) => {
  if (!visible) return null

  const cssClasses = classNames('icon', `size-${size}`, variant, className, {
    rotate: name === 'Loading',
  })
  return (
    <span role="img" title={props.title || name} className={cssClasses}>
      {icons[name](props) as ReactNode}
    </span>
  )
}
