import type { InputProps } from './Input'
import React from 'react'
import { classNames } from '../utils/classNames'
import { Input } from './Input'
import { Button } from './Button'
import './QuantitySelector.scss'

export type Variant = 'primary'

export interface QuantitySelectorProps extends InputProps {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  id?: string
  variant?: Variant
  onDecrement: () => void
  onIncrement: () => void
}

export function QuantitySelector({
  id,
  onDecrement,
  onIncrement,
  label,
  accessibilityLabel,
  className,
  hideLabel = false,
  variant = 'primary',
  disabled,
  ...props
}: QuantitySelectorProps): React.JSX.Element {
  return (
    <div className={classNames('quantity-selector-group', variant, className)}>
      {!hideLabel && (
        <label
          className={classNames('quantity-selector-label', {
            'is-required': props.required,
          })}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="quantity-selector">
        <Button
          label=""
          accessibilityLabel="-"
          type="button"
          leftIcon="Minus"
          className="decrement-button"
          disabled={disabled}
          onClick={onDecrement}
        />
        <Input
          id={id}
          label={label}
          accessibilityLabel={accessibilityLabel}
          disabled={disabled}
          {...props}
          hideLabel={true}
        />
        <Button
          label=""
          accessibilityLabel="+"
          leftIcon="Add"
          type="button"
          className="increment-button"
          disabled={disabled}
          onClick={onIncrement}
        />
      </div>
    </div>
  )
}
