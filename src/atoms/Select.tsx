import './Select.scss'
import React, { useState } from 'react'
import { Icon } from './Icon'

export type SelectVariant = 'primary'
export type SelectOption = { id: string; label: string }

export interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  placeholder?: string
  helpText?: string
  variant?: SelectVariant
  options: SelectOption[]
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
  required,
  label,
}: SelectProps): React.JSX.Element {
  const [showOptionsList, setShowOptionsList] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SelectOption>()
  const hasOptionSelected = selectedOption !== undefined

  const optionsListOpenClass = showOptionsList ? 'open' : ''
  const filledSelectClass = hasOptionSelected ? 'filled' : ''
  const disabledClass = disabled ? 'disabled' : ''
  const invalidClass = invalid ? 'invalid' : ''
  const requiredClass = required ? 'required' : ''

  const cssClasses = [
    'selected-option',
    optionsListOpenClass,
    filledSelectClass,
    disabledClass,
    invalidClass,
    requiredClass,
  ].join(' ')

  function handleOptionsList() {
    if (!disabled) setShowOptionsList(!showOptionsList)
  }

  function selectOption(e: React.MouseEvent<HTMLLIElement>) {
    const target = e.target as HTMLLIElement
    const option = JSON.parse(target.getAttribute('data-option') as string)
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
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <Icon name={handleSelectIcon()} />
        </div>
        {showOptionsList && (
          <ul className="select-options" role="listbox">
            {options.map((option) => {
              return (
                <li
                  className="option"
                  role="option"
                  aria-selected={selectedOption?.label === option.label}
                  data-option={JSON.stringify(option)}
                  key={option.id}
                  onClick={selectOption}
                >
                  {option.label}
                </li>
              )
            })}
          </ul>
        )}
      </div>
      {helpText && (
        <span className={`select-help-text ${invalidClass} ${requiredClass}`}>
          {helpText}
        </span>
      )}
      <input
        type="hidden"
        name={name}
        value={hasOptionSelected ? selectedOption?.id : ''}
      />
    </div>
  )
}
