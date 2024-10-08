import './Select.scss'
import React, { useState } from 'react'
import { Icon } from './Icon'
import { IconButton } from './Button'
import { classNames } from '../utils/classNames'
import { buildHelpText } from '../utils/buildHelpText'

export type Variant = 'primary'
export type Option = { id: string; label: string }

type InputPropsWithoutOnChange = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'onChange'
>

export interface MultiselectProps extends InputPropsWithoutOnChange {
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
  onChange?: (value: string[]) => void
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
  onChange,
  variant = 'primary',
  selectedLabel = 'items selected',
  hideLabel = false,
  defaultValue = [],
  ...props
}: MultiselectProps): React.JSX.Element {
  const helpTexts = buildHelpText(helpText, errors)
  const [showOptionsList, setShowOptionsList] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultValue)
  const hasSelectedOptions = selectedOptions.length > 0
  const cssClasses = classNames('selected-option', className, {
    open: showOptionsList,
    filled: hasSelectedOptions,
    disabled: disabled,
    invalid: errors?.length,
  })

  function handleOptionsList() {
    if (!disabled) setShowOptionsList(!showOptionsList)
  }

  function selectOption(id: string) {
    const isOptionSelected = selectedOptions.includes(id)
    const options = isOptionSelected
      ? selectedOptions.filter((optionId) => optionId !== id)
      : [...selectedOptions, id]

    setSelectedOptions(options)
    if (onChange !== undefined) onChange(options)
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    const isAComponentElement = event.relatedTarget
    if (!isAComponentElement) {
      setShowOptionsList(false)
    }
  }

  function handleClear(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setSelectedOptions([])
    if (onChange !== undefined) onChange([])
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
          <span>
            {hasSelectedOptions
              ? `${selectedOptions.length} ${selectedLabel}`
              : placeholder}
          </span>
          <Icon
            name={showOptionsList ? 'AngleUp' : 'AngleDown'}
            visible={!hasSelectedOptions}
          />
          <IconButton
            icon="Close"
            className="clear-button"
            accessibilityLabel="close"
            onClick={handleClear}
            visible={hasSelectedOptions}
          />
        </div>
        {showOptionsList && (
          <ul className="select-options" role="listbox">
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
        <span key={`${name}-${helpText}`} className="select-help-text">
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
