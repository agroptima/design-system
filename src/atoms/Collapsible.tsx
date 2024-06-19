import { classNames } from '../utils/classNames'
import { Icon, IconType } from './Icon'
import './Collapsible.scss'

export type Variant = 'primary'

export interface CollapsibleProps
  extends React.ComponentPropsWithoutRef<'details'> {
  title: string
  variant?: Variant
  name?: string
  disabled?: boolean
}

export function Collapsible({
  variant = 'primary',
  className,
  title,
  children,
  disabled,
  name,
  ...props
}: CollapsibleProps): React.JSX.Element {
  const cssClasses = classNames('collapsible', variant, className, {
    open: props.open,
    disabled: disabled,
  })

  return (
    <details name={name} className={cssClasses} {...props}>
      <summary className="header">
        <Icon className="arrow" name="AngleRight" />
        <span className="title">{title}</span>
      </summary>
      <div className="content">{children}</div>
    </details>
  )
}
