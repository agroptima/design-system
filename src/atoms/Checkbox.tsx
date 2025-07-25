import './Checkbox.scss'
import React from 'react'
import { classNames } from '../utils/classNames'
import { Label } from './Label'

export type Variant = 'primary'

type InputPropsWithoutChildren = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'children'
>

export interface CheckboxProps extends InputPropsWithoutChildren {
  accessibilityLabel?: string
  hideLabel?: boolean
  variant?: Variant
  id?: string
  indeterminate?: boolean
  children?: React.ReactNode
}

export function Checkbox({
  accessibilityLabel,
  hideLabel = false,
  disabled,
  variant = 'primary',
  id,
  indeterminate = false,
  name,
  className,
  children,
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
        aria-label={accessibilityLabel || `${name} checkbox`}
        {...props}
      />
      <Label
        htmlFor={identifier}
        required={props.required}
        disabled={disabled}
        className={classNames({ 'visually-hidden': hideLabel })}
        aria-labelledby={identifier}
      >
        {children}
      </Label>
    </div>
  )
}
