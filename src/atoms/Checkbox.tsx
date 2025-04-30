import './Checkbox.scss'
import React from 'react'
import { classNames } from '../utils/classNames'
import { Label } from './Label'

export type Variant = 'primary'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  variant?: Variant
  id?: string
  indeterminate?: boolean
}

export function Checkbox({
  label,
  accessibilityLabel,
  hideLabel = false,
  disabled,
  variant = 'primary',
  id,
  indeterminate = false,
  name,
  className,
  ...props
}: CheckboxProps) {
  const identifier = id || name

  return (
    <div
      className={classNames('checkbox-group', variant, className, {
        disabled: disabled,
        indeterminate: indeterminate,
      })}
    >
      <input
        id={identifier}
        name={name}
        type="checkbox"
        className="checkbox"
        disabled={disabled}
        aria-label={accessibilityLabel || label}
        {...props}
      />
      <Label
        htmlFor={identifier}
        required={props.required}
        disabled={disabled}
        className={classNames({ 'visually-hidden': hideLabel })}
      >
        {label}
      </Label>
    </div>
  )
}
