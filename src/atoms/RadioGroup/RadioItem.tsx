import './RadioGroup.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'
import { Label } from '../Label'
import type { Variant } from './RadioGroup'

export interface RadioItemProps
  extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  variant?: Variant
}

export function RadioItem({
  className,
  label,
  disabled,
  variant = 'primary',
  id,
  ...props
}: RadioItemProps) {
  const identifier = id || props.name

  return (
    <div
      className={classNames('radio-button', variant, className, {
        disabled: disabled,
      })}
    >
      <input
        id={identifier}
        type="radio"
        className="radio"
        disabled={disabled}
        {...props}
      />
      <Label disabled={disabled} htmlFor={identifier}>
        {label}
      </Label>
    </div>
  )
}
