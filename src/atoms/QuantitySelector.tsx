import React, { useState } from 'react'
import { Icon } from './Icon'
import { classNames } from '../utils/classNames'
import './QuantitySelector.scss'
import { Input, InputProps } from './Input'
import { Button, ButtonProps } from './Button'

export type Variant = 'primary'

export interface QuantitySelectorProps
  extends React.ComponentPropsWithoutRef<'div'> {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  id?: string
  variant?: Variant
  decrementButton: ButtonProps
  incrementButton: ButtonProps
  quantityInput: InputProps
}

export function QuantitySelector({
  decrementButton,
  incrementButton,
  quantityInput,
  label,
  accessibilityLabel,
  id,
  className,
  hideLabel = false,
  variant = 'primary',
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
        <Button className="decrement-button" {...decrementButton} />
        <Input
          {...quantityInput}
          label={label}
          accessibilityLabel={accessibilityLabel}
        />
        <Button className="increment-button" {...incrementButton} />
      </div>
    </div>
  )
}
