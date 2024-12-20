import './Icon.scss'

import * as icons from '../icons'
import { classNames } from '../utils/classNames'
export type IconType = keyof typeof icons

export type IconSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconType
  className?: string
  title?: string
  visible?: boolean
  size?: IconSize
}

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  size = '5',
  visible = true,
  ...props
}) => {
  if (!visible) return null

  const cssClasses = classNames('icon', `size-${size}`, className, {
    rotate: name === 'Loading',
  })
  return (
    <span role="img" title={props.title || name} className={cssClasses}>
      {icons[name](props)}
    </span>
  )
}
