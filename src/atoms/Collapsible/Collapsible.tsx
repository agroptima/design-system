import './Collapsible.scss'
import { type ComponentPropsWithoutRef, useState } from 'react'
import { classNames } from '../../utils/classNames'
import { Icon } from '../Icon'

export type Variant = 'primary' | 'secondary'

export interface CollapsibleProps extends ComponentPropsWithoutRef<'details'> {
  title: string
  variant?: Variant
  name?: string
  disabled?: boolean
  form?: boolean
  noHorizontalPadding?: boolean
}

export function Collapsible({
  variant = 'primary',
  className,
  title,
  children,
  disabled,
  name,
  form = false,
  noHorizontalPadding = false,
  open: controlledOpen,
  onToggle,
  ...props
}: CollapsibleProps) {
  const [expanded, setExpanded] = useState(false)
  const isOpen = controlledOpen !== undefined ? controlledOpen : expanded

  const cssClasses = classNames('collapsible', variant, className, {
    open: isOpen,
    disabled: disabled,
  })
  const contentCssClasses = classNames('collapsible-content', {
    'no-horizontal-padding': noHorizontalPadding,
    form: form,
  })

  return (
    <details
      open={isOpen}
      name={name}
      className={cssClasses}
      aria-label={title}
      onToggle={(e) => {
        if (controlledOpen === undefined) setExpanded(e.currentTarget.open)
        onToggle?.(e)
      }}
      {...props}
    >
      <summary className="collapsible-header">
        <Icon className="collapsible-arrow" name="AngleRight" size="4" />
        <span className="collapsible-title">{title}</span>
      </summary>
      <div className={contentCssClasses}>{children}</div>
    </details>
  )
}
