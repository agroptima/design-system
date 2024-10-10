import { classNames } from '../utils/classNames'
import { Icon } from './Icon'
import './Collapsible.scss'

export type Variant = 'primary'

export interface CollapsibleProps
  extends React.ComponentPropsWithoutRef<'details'> {
  title: string
  variant?: Variant
  name?: string
  disabled?: boolean
  noHorizontalPadding?: boolean
}

export function Collapsible({
  variant = 'primary',
  className,
  title,
  children,
  disabled,
  name,
  noHorizontalPadding = false,
  ...props
}: CollapsibleProps): React.JSX.Element {
  const cssClasses = classNames('collapsible', variant, className, {
    open: props.open,
    disabled: disabled,
  })
  const contentCssClasses = classNames('content', {
    'no-horizontal-padding': noHorizontalPadding,
  })

  return (
    <details name={name} className={cssClasses} aria-label={title} {...props}>
      <summary className="header">
        <Icon className="arrow" name="AngleRight" />
        <span className="title">{title}</span>
      </summary>
      <div className={contentCssClasses}>{children}</div>
    </details>
  )
}
