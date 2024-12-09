'use client'
import React, { useRef, useState } from 'react'
import { Icon } from './Icon'
import { IconButton } from './Button'
import { classNames } from '../utils/classNames'
import { buildHelpText } from '../utils/buildHelpText'
import { useOutsideClick } from '../utils/useOutsideClick'
import { useOpen } from '../utils/useOpen'
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
  isSearch: boolean
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
  onChange = () => {},
  defaultValue,
  required = false,
  isSearch = false,
  ...props
}: SelectProps): React.JSX.Element {
  const helpTexts = buildHelpText(helpText, errors)
  const { isOpen, close, toggle } = useOpen()
  const defaultOption =
    options.find((option) => option.id === defaultValue) || EMPTY_OPTION
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption)
  const [search, setSearch] = useState<string>('')
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options)
  const isEmpty = selectedOption.id === EMPTY_OPTION.id
  const selectRef = useRef(null)
  useOutsideClick(selectRef, close)

  function validCharacters(value: string): string {
    const pattern = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return pattern.replace(/[^a-zA-Z0-9_]/g, '').toLowerCase()
  }

  const cssClasses = classNames('selected-option', {
    open: isOpen,
    filled: selectedOption.id,
    disabled: disabled,
    invalid: errors?.length,
  })

  function handleOptionsList() {
    if (!disabled) toggle()
  }

  function selectOption(option: Option) {
    setSelectedOption(option)
    onChange(option.id)
    setSearch(option.label)
  }

  function handleClear(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setSelectedOption(EMPTY_OPTION)
    onChange('')
    setSearch('')
  }

  function handleSearch(value: string) {
    setSearch(value)
    sanitizeOptions(options)
  }

  function sanitizeOptions(options: Option[]) {
    const sanitize = options.filter((option) => {
      if (validCharacters(option.label).includes(validCharacters(search))) {
        return option
      }
    })
    setFilteredOptions(sanitize)
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

      <div className="select-container" ref={selectRef}>
        <div
          className={cssClasses}
          tabIndex={0}
          onClick={handleOptionsList}
          aria-label={accessibilityLabel || label}
          aria-live="assertive"
          role="alert"
        >
          {isSearch ? (
            <SearchSelect
              onSearch={(value) => handleSearch(value)}
              value={search}
              placeholder={placeholder || ''}
            />
          ) : (
            <span>{selectedOption.label || placeholder}</span>
          )}
          <Icon name={isOpen ? 'AngleUp' : 'AngleDown'} visible={isEmpty} />
          <IconButton
            icon="Close"
            className="clear-button"
            accessibilityLabel="close"
            onClick={handleClear}
            visible={!isEmpty}
          />
        </div>

        {isOpen && (
          <OptionList
            options={isSearch ? filteredOptions : options}
            selectedOption={selectedOption}
            selectOption={selectOption}
            onClick={close}
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
  onClick: () => void
}

interface SearchSelectProps {
  placeholder?: string
  onSearch: (value: string) => void
  value: string
}

function OptionList({
  options,
  selectedOption,
  selectOption,
  onClick,
}: OptionListProps) {
  return (
    <ul className="select-options" role="listbox" onClick={onClick}>
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

function SearchSelect({ placeholder, onSearch, value }: SearchSelectProps) {
  return (
    <>
      <input
        onChange={(event) => {
          onSearch(event.target.value)
        }}
        type="text"
        name="searchable-select"
        placeholder={placeholder}
        className="search"
        value={value}
      />
    </>
  )
}
