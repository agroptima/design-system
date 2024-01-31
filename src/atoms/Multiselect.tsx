import './Multiselect.scss'
import React, { useState } from 'react'
import { Icon } from './Icon'

export type Variant = 'primary'
export type Option = { id: string; label: string }

export interface MultiselectProps
  extends React.ComponentPropsWithoutRef<'select'> {
  placeholder?: string
  helpText?: string
  variant?: Variant
  options: Option[]
  invalid?: boolean
  label: string
  selectedLabel?: string
}

export function Multiselect({
  placeholder,
  helpText,
  variant = 'primary',
  disabled,
  invalid,
  name,
  options,
  label,
  selectedLabel = 'items selected',
}: MultiselectProps): React.JSX.Element {
  const [showOptionsList, setShowOptionsList] = useState(false)
  const [selectedOptionsIds, setSelectedOptionsIds] = useState<string[]>([])

  const optionsListOpenClass = showOptionsList ? 'open' : ''
  const filledSelectClass = selectedOptionsIds.length > 0 ? 'filled' : ''
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

  function selectOption(optionId: string) {
    const hasOptionId = isOptionSelected(optionId)
    if (hasOptionId) {
      setSelectedOptionsIds(
        selectedOptionsIds.filter(
          (selectedOptionId) => selectedOptionId !== optionId,
        ),
      )
    } else {
      setSelectedOptionsIds([...selectedOptionsIds, optionId])
    }
  }

  function handleSelectIcon() {
    return showOptionsList ? 'AngleUp' : 'AngleDown'
  }

  function isOptionSelected(optionId: string) {
    return selectedOptionsIds.includes(optionId)
  }

  return (
    <div className={`multiselect-group ${variant}`}>
      <span className="multiselect-label">{label}</span>
      <div className="multiselect-container">
        <div
          className={cssClasses}
          tabIndex={0}
          onClick={handleOptionsList}
          aria-label={label}
          aria-live="assertive"
          role="alert"
        >
          <span>
            {selectedOptionsIds.length > 0
              ? selectedOptionsIds.length + ' ' + selectedLabel
              : placeholder}
          </span>
          <Icon name={handleSelectIcon()} />
        </div>
        {showOptionsList && (
          <ul className="multiselect-options" role="listbox">
            {options.map((option) => {
              return (
                <li
                  className="option"
                  role="option"
                  aria-selected={isOptionSelected(option.id)}
                  data-option={option}
                  key={option.id}
                  onClick={() => selectOption(option.id)}
                >
                  <Icon
                    name={
                      isOptionSelected(option.id)
                        ? 'CheckboxActive'
                        : 'CheckboxInactive'
                    }
                  />
                  {option.label}
                </li>
              )
            })}
          </ul>
        )}
      </div>
      {helpText && (
        <span className={`multiselect-help-text ${invalidClass}`}>
          {helpText}
        </span>
      )}
      <input type="hidden" name={name} value={selectedOptionsIds.join(' ')} />
    </div>
  )
}
