import './Switch.scss'
import React from 'react'
import { classNames } from '../utils/classNames'
import { Label } from './Label'

export type Variant = 'primary'
export type Size = 'small' | 'medium'

type InputPropsWithoutSize = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'size'
>

export interface SwitchProps extends InputPropsWithoutSize {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  variant?: Variant
  size?: Size
}

export function Switch({
  label,
  accessibilityLabel,
  hideLabel = false,
  disabled,
  variant = 'primary',
  size = 'medium',
  id,
  name,
  className,
  ...props
}: SwitchProps) {
  const identifier = id || name

  return (
    <div className={classNames('switch-group', className)}>
      <Label
        htmlFor={identifier}
        required={props.required}
        className={classNames({ 'visually-hidden': hideLabel })}
      >
        {label}
      </Label>
      <input
        id={identifier}
        name={name}
        type="checkbox"
        className={classNames('switch', variant, size)}
        disabled={disabled}
        aria-label={accessibilityLabel || label}
        title={accessibilityLabel || label}
        role="switch"
        {...props}
      />
    </div>
  )
}
