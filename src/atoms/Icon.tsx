import './Icon.scss'

import * as icons from '../icons'
import { classNames } from '../utils/classNames'
export type IconType = keyof typeof icons

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconType
  className?: string
  title?: string
}

export const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  const cssClasses = classNames('icon', className, {
    rotate: name === 'Loading',
  })
  return (
    <span role="img" title={props.title} className={cssClasses}>
      {icons[name](props)}
    </span>
  )
}
