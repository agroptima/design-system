import React from 'react'
import { classNames } from '../../utils/classNames'
import { HelpText } from '../HelpText'
import { Label } from '../Label'
import { RadioItem } from './RadioItem'

export type Variant = 'primary'

export type Option = {
  label: string
  value: string
}

export interface RadioGroupProps {
  options: Option[]
  name: string
  label: string
  className?: string
  errors?: string[]
  defaultValue?: string
  required?: boolean
  disabled?: boolean
  variant?: Variant
  helpText?: string
  onChange?: (value: string) => void
}

export function RadioGroup({
  options,
  name,
  label,
  defaultValue,
  helpText,
  errors = [],
  className,
  required = false,
  disabled = false,
  variant = 'primary',
  onChange = () => {},
}: RadioGroupProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (onChange) {
      onChange(value)
    }
  }
  return (
    <div className={classNames('radio-group', variant, className)}>
      <Label required={required}>{label}</Label>
      <fieldset>
        {options.map((option) => (
          <RadioItem
            key={`${name}-${option.value}`}
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            label={option.label}
            defaultChecked={defaultValue === option.value}
            variant={variant}
            disabled={disabled}
            onChange={handleChange}
          />
        ))}
      </fieldset>
      <HelpText helpText={helpText} errors={errors} />
    </div>
  )
}
