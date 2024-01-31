import './Select.scss'
import React, { useState } from 'react'
import { Icon } from './Icon'

export type Variant = 'primary'
export type Option = { id: string; label: string }

export interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  placeholder?: string
  helpText?: string
  variant?: Variant
  options: Option[]
  invalid?: boolean
  label: string
}

export function Select({
  placeholder,
  helpText,
  variant = 'primary',
  disabled,
  invalid,
  name,
  options,
  label,
}: SelectProps): React.JSX.Element {
  const [showOptionsList, setShowOptionsList] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option>({
    id: '',
    label: '',
  })

  const optionsListOpenClass = showOptionsList ? 'open' : ''
  const filledSelectClass = selectedOption.id ? 'filled' : ''
  const disabledClass = disabled ? 'disabled' : ''
  const invalidClass = invalid ? 'invalid' : ''

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
  }

  function handleSelectIcon() {
    return showOptionsList ? 'AngleUp' : 'AngleDown'
  }

  return (
    <div className={`select-group ${variant}`}>
      <span className="select-label">{label}</span>
      <div className="select-container">
        <div
          className={cssClasses}
          tabIndex={0}
          onClick={handleOptionsList}
          aria-label={label}
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
      {helpText && <span className="select-help-text">{helpText}</span>}
      <input type="hidden" name={name} value={selectedOption.id} />
    </div>
  )
}
