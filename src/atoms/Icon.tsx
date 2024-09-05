import './Icon.scss'

import * as icons from '../icons'
import { classNames } from '../utils/classNames'
export type IconType = keyof typeof icons

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconType
  className?: string
  title?: string
  visible?: boolean
}

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  visible = true,
  ...props
}) => {
  if (!visible) return null

  const cssClasses = classNames('icon', className, {
    rotate: name === 'Loading',
  })
  return (
    <span role="img" title={props.title || name} className={cssClasses}>
      {icons[name](props)}
    </span>
  )
}
