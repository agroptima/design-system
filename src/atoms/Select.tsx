import './Select.scss'
import React, { useState } from 'react'
import { Icon } from './Icon'

export type SelectVariant = 'primary'
export type SelectOption = { id: string; label: string }

export interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  selectOptionText?: string
  helpText?: string
  variant?: SelectVariant
  options: SelectOption[]
  invalid?: boolean
}

export function Select({
  selectOptionText,
  helpText,
  variant = 'primary',
  disabled,
  invalid,
  name,
  options,
  required,
  ...props
}: SelectProps): React.JSX.Element {
  const [showOptionsList, setShowOptionsList] = useState(false)
  const [defaultSelectText, setDefaultSelectText] = useState(selectOptionText)
  const hasOptionSelected = !(defaultSelectText === selectOptionText)

  const optionsListOpenClass = showOptionsList ? 'open' : ''
  const filledSelectClass = hasOptionSelected ? 'filled' : ''
  const disabledClass = disabled ? 'disabled' : ''
  const invalidClass = invalid ? 'invalid' : ''
  const requiredClass = required ? 'invalid' : ''

  const cssClasses = [
    'selected-option',
    variant,
    optionsListOpenClass,
    filledSelectClass,
    disabledClass,
    invalidClass,
    requiredClass,
  ].join(' ')

  function handleOptionsList() {
    if (!disabled) setShowOptionsList(!showOptionsList)
  }

  function selectOption(e) {
    setDefaultSelectText(e.target.getAttribute('data-value'))
    setShowOptionsList(false)
  }

  function handleSelectIcon() {
    return showOptionsList ? 'AngleUp' : 'AngleDown'
  }

  return (
    <div className="select-group">
      <div className="select-container">
        <div
          id="selected-option"
          className={cssClasses}
          tabIndex={0}
          onClick={handleOptionsList}
          aria-live="assertive"
          role="alert"
        >
          {defaultSelectText}
          <Icon name={handleSelectIcon()} />
        </div>
        {showOptionsList && (
          <ul className="options" role="listbox" aria-label={selectOptionText}>
            {options.map((option) => {
              return (
                <li
                  className="option"
                  role="option"
                  aria-selected={defaultSelectText === option.label}
                  data-id={option.id}
                  data-value={option.label}
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
        value={hasOptionSelected ? defaultSelectText : ''}
      />
    </div>
  )
}
