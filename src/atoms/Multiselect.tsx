import './Multiselect.scss'
import React, { useState } from 'react'
import { Icon } from './Icon'
import { classNames } from '../utils/classNames'
import { buildHelpText } from '../utils/buildHelpText'

export type Variant = 'primary'
export type Option = { id: string; label: string }

export interface MultiselectProps
  extends React.ComponentPropsWithoutRef<'input'> {
  placeholder?: string
  helpText?: string
  variant?: Variant
  options: Option[]
  errors?: string[]
  label: string
  accessibilityLabel?: string
  selectedLabel?: string
  hideLabel?: boolean
  defaultValue?: string[]
}

export function Multiselect({
  className,
  placeholder,
  helpText,
  disabled,
  errors,
  name,
  options,
  label,
  accessibilityLabel,
  variant = 'primary',
  selectedLabel = 'items selected',
  hideLabel = false,
  defaultValue = [],
  ...props
}: MultiselectProps): React.JSX.Element {
  const helpTexts = buildHelpText(helpText, errors)
  const [showOptionsList, setShowOptionsList] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultValue)
  const cssClasses = classNames('selected-option', className, {
    open: showOptionsList,
    filled: selectedOptions.length > 0,
    disabled: disabled,
    invalid: errors?.length,
  })

  function handleOptionsList() {
    if (!disabled) setShowOptionsList(!showOptionsList)
  }

  function selectOption(id: string) {
    const isOptionSelected = selectedOptions.includes(id)
    if (isOptionSelected) {
      return setSelectedOptions(
        selectedOptions.filter((optionId) => optionId !== id),
      )
    }
    setSelectedOptions([...selectedOptions, id])
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    const isAComponentElement = event.relatedTarget
    if (!isAComponentElement) {
      setShowOptionsList(false)
    }
  }

  return (
    <div className={`multiselect-group ${variant}`}>
      {!hideLabel && <span className="multiselect-label">{label}</span>}
      <div className="multiselect-container" onBlur={handleBlur}>
        <div
          className={cssClasses}
          tabIndex={0}
          onClick={handleOptionsList}
          aria-label={accessibilityLabel || label}
          aria-live="assertive"
          role="alert"
        >
          <span>
            {selectedOptions.length > 0
              ? `${selectedOptions.length} ${selectedLabel}`
              : placeholder}
          </span>
          <Icon name={showOptionsList ? 'AngleUp' : 'AngleDown'} />
        </div>
        {showOptionsList && (
          <ul className="multiselect-options" role="listbox">
            {options.map((option) => (
              <Option
                key={`${name}-${option.id}`}
                option={option}
                selectedOptions={selectedOptions}
                onSelect={selectOption}
              />
            ))}
          </ul>
        )}
      </div>
      {helpTexts.map((helpText) => (
        <span key={`${name}-${helpText}`} className="multiselect-help-text">
          {helpText}
        </span>
      ))}
      <input
        type="hidden"
        name={name}
        value={selectedOptions.toString()}
        {...props}
      />
    </div>
  )
}

type OptionProps = {
  option: Option
  selectedOptions: string[]
  onSelect: (id: string) => void
}

function Option({ option, selectedOptions, onSelect }: OptionProps) {
  const isOptionSelected = selectedOptions.includes(option.id)
  const icon = isOptionSelected ? 'CheckboxActive' : 'CheckboxInactive'
  return (
    <li
      role="option"
      className="option"
      tabIndex={0}
      aria-selected={isOptionSelected}
      data-option={option}
      onClick={() => onSelect(option.id)}
    >
      <Icon name={icon} />
      {option.label}
    </li>
  )
}
