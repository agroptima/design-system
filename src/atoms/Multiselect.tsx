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
  selected?: Option[]
}

export function Multiselect({
  className,
  placeholder,
  helpText,
  variant = 'primary',
  disabled,
  errors,
  name,
  options,
  label,
  accessibilityLabel,
  selectedLabel = 'items selected',
  hideLabel = false,
  selected,
  ...props
}: MultiselectProps): React.JSX.Element {
  const helpTexts = buildHelpText(helpText, errors)
  const [showOptionsList, setShowOptionsList] = useState(false)
  const [selectedOptionsIds, setSelectedOptionsIds] = useState<string[]>(
    selected?.map((option) => option.id) || [],
  )
  const cssClasses = classNames('selected-option', className, {
    open: showOptionsList,
    filled: selectedOptionsIds.length > 0,
    disabled: disabled,
    invalid: errors?.length,
  })

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
                  tabIndex={0}
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
      {helpTexts.map((helpText) => (
        <span key={`${name}-${helpText}`} className="multiselect-help-text">
          {helpText}
        </span>
      ))}
      <input
        type="hidden"
        name={name}
        value={selectedOptionsIds.toString()}
        {...props}
      />
    </div>
  )
}
