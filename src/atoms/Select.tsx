import './Select.scss'
import React, { useState } from 'react'
import { Icon } from './Icon'

export type Variant = 'primary'
export type Option = { id: string; label: string }

type InputPropsWithoutOnChange = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'onChange'
>
export interface SelectProps extends InputPropsWithoutOnChange {
  placeholder?: string
  helpText?: string
  variant?: Variant
  options: Option[]
  errors?: string[]
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  selected?: Option
  onChange?: (value: string) => void
}

export function Select({
  placeholder,
  helpText,
  variant = 'primary',
  disabled,
  errors,
  name,
  options,
  label,
  accessibilityLabel,
  hideLabel = false,
  selected,
  onChange,
  ...props
}: SelectProps): React.JSX.Element {
  const [showOptionsList, setShowOptionsList] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option>({
    id: selected?.id || '',
    label: selected?.label || '',
  })

  const optionsListOpenClass = showOptionsList ? 'open' : ''
  const filledSelectClass = selectedOption.id ? 'filled' : ''
  const disabledClass = disabled ? 'disabled' : ''
  const invalidClass = errors ? 'invalid' : ''

  const cssClasses = [
    'selected-option',
    optionsListOpenClass,
    filledSelectClass,
    disabledClass,
    invalidClass,
  ].join(' ')

  function handleOptionsList() {
    if (!disabled) setShowOptionsList(!showOptionsList)
  }

  function selectOption(option: Option) {
    setSelectedOption(option)
    setShowOptionsList(false)

    if (onChange !== undefined) onChange(option.id)
  }

  function handleSelectIcon() {
    return showOptionsList ? 'AngleUp' : 'AngleDown'
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    const isAComponentElement = event.relatedTarget
    if (!isAComponentElement) {
      setShowOptionsList(false)
    }
  }

  return (
    <div className={`select-group ${variant}`}>
      {!hideLabel && <span className="select-label">{label}</span>}
      <div className="select-container" onBlur={handleBlur}>
        <div
          className={cssClasses}
          tabIndex={0}
          onClick={handleOptionsList}
          aria-label={accessibilityLabel || label}
          aria-live="assertive"
          role="alert"
        >
          <span>{selectedOption.label || placeholder}</span>
          <Icon name={handleSelectIcon()} />
        </div>
        {showOptionsList && (
          <ul className="select-options" role="listbox">
            {options.map((option) => {
              return (
                <li
                  className="option"
                  tabIndex={0}
                  role="option"
                  aria-selected={selectedOption.id === option.id}
                  data-option={option}
                  key={option.id}
                  onClick={() => selectOption(option)}
                >
                  {option.label}
                </li>
              )
            })}
          </ul>
        )}
      </div>
      {helpText && !errors && (
        <span className="select-help-text">{helpText}</span>
      )}
      {errors &&
        errors?.map((error, index) => {
          return (
            <span key={`error-${index}`} className="select-help-text">
              {error}
            </span>
          )
        })}
      <input type="hidden" name={name} value={selectedOption.id} {...props} />
    </div>
  )
}
