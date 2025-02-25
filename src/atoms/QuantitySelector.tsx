import './QuantitySelector.scss'
import React, { useRef } from 'react'
import { classNames } from '../utils/classNames'
import { Button } from './Button'
import type { InputProps } from './Input'
import { Input } from './Input'

export type Variant = 'primary'

export interface QuantitySelectorProps extends Omit<InputProps, 'type'> {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  id?: string
  variant?: Variant
}

export function QuantitySelector({
  id,
  label,
  accessibilityLabel,
  className,
  disabled,
  hideLabel = false,
  variant = 'primary',
  ...props
}: QuantitySelectorProps): React.JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleIncrement = () => {
    if (inputRef.current) {
      inputRef.current.stepUp()
      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }

  const handleDecrement = () => {
    if (inputRef.current) {
      inputRef.current.stepDown()
      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }
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
          onClick={handleDecrement}
          tabIndex={-1}
        />
        <Input
          id={id}
          ref={inputRef}
          label={label}
          accessibilityLabel={accessibilityLabel}
          disabled={disabled}
          type="number"
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
          onClick={handleIncrement}
          tabIndex={-1}
        />
      </div>
    </div>
  )
}
