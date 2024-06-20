import React from 'react'
import { classNames } from '../utils/classNames'
import './QuantitySelector.scss'
import { Input, InputProps } from './Input'
import { Button, ButtonProps } from './Button'

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
  const cssClasses = classNames('quantity-selector', className)

  return (
    <div className={`quantity-selector-group ${variant}`} {...props}>
      {!hideLabel && (
        <label className="quantity-selector-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={cssClasses}>
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
