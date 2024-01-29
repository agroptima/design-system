import './Icon.scss'

import * as icons from '../icons'
export type IconType = keyof typeof icons

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconType
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  const cssClasses = [
    'icon',
    className,
    name === 'Loading' ? 'rotate' : '',
  ].join(' ')
  return <span className={cssClasses}>{icons[name](props)}</span>
}
