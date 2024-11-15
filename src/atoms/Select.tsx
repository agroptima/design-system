'use client'
import React, { useRef, useState } from 'react'
import { Icon } from './Icon'
import { IconButton } from './Button'
import { classNames } from '../utils/classNames'
import { buildHelpText } from '../utils/buildHelpText'
import { useOutsideClick } from '../utils/useOutsideClick'
import './Select.scss'

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
  defaultValue?: string
  onChange?: (value: string) => void
  required?: boolean
}

const EMPTY_OPTION = { id: '', label: '' }

export function Select({
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
  hideLabel = false,
  onChange,
  defaultValue,
  required = false,
  ...props
}: SelectProps): React.JSX.Element {
  const helpTexts = buildHelpText(helpText, errors)
  const [showOptionsList, setShowOptionsList] = useState(false)
  const defaultOption =
    options.find((option) => option.id === defaultValue) || EMPTY_OPTION
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption)
  const isEmpty = selectedOption.id === EMPTY_OPTION.id

  const cssClasses = classNames('selected-option', {
    open: showOptionsList,
    filled: selectedOption.id,
    disabled: disabled,
    invalid: errors?.length,
  })

  function handleOptionsList() {
    if (!disabled) setShowOptionsList(!showOptionsList)
  }

  function selectOption(option: Option) {
    setSelectedOption(option)
    setShowOptionsList(false)

    if (onChange !== undefined) onChange(option.id)
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    const isAComponentElement = event.relatedTarget
    if (!isAComponentElement) {
      setShowOptionsList(false)
    }
  }

  function handleClear(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setSelectedOption(EMPTY_OPTION)
    if (onChange !== undefined) onChange('')
  }

  return (
    <div className={classNames('select-group', variant, className)}>
      {!hideLabel && (
        <label
          className={classNames('select-label', {
            'is-required': required,
          })}
        >
          {label}
        </label>
      )}

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
          <Icon
            name={showOptionsList ? 'AngleUp' : 'AngleDown'}
            visible={isEmpty}
          />
          <IconButton
            icon="Close"
            className="clear-button"
            accessibilityLabel="close"
            onClick={handleClear}
            visible={!isEmpty}
          />
        </div>
        {showOptionsList && (
          <OptionList
            options={options}
            selectedOption={selectedOption}
            selectOption={selectOption}
            closeOptionList={() => setShowOptionsList(false)}
          />
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
        value={selectedOption.id}
        required={required}
        {...props}
      />
    </div>
  )
}

interface OptionListProps {
  options: Option[]
  selectedOption: Option
  selectOption: (option: Option) => void
  closeOptionList: () => void
}

function OptionList({
  options,
  selectedOption,
  selectOption,
  closeOptionList,
}: OptionListProps) {
  const selectRef = useRef(null)
  useOutsideClick(selectRef, closeOptionList)
  return (
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
  )
}
