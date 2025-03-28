import './Select.scss'
import React, { useRef, useState } from 'react'
import { useOpen } from '../hooks/useOpen'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { useSearch } from '../hooks/useSearch'
import { buildHelpText } from '../utils/buildHelpText'
import { classNames } from '../utils/classNames'
import { IconButton } from './Button'
import { Icon } from './Icon'
import { Input } from './Input'

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
  isSearchable?: boolean
  searchLabel?: string
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
  isSearchable = false,
  searchLabel = 'Search',
  ...props
}: SelectProps): React.JSX.Element {
  const helpTexts = buildHelpText(helpText, errors)
  const { isOpen, close, toggle } = useOpen()
  const defaultOption =
    options.find((option) => option.id === defaultValue) || EMPTY_OPTION
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption)
  const isEmpty = selectedOption.id === EMPTY_OPTION.id
  const selectRef = useRef(null)
  useOutsideClick(selectRef, close)

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
  }

  function handleClear(event: React.MouseEvent<HTMLButtonElement>) {
    if (disabled) return
    event.stopPropagation()
    setSelectedOption(EMPTY_OPTION)
    onChange('')
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
          <span>{selectedOption.label || placeholder}</span>
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
            options={options}
            selectedOption={selectedOption}
            selectOption={selectOption}
            onClick={close}
            isSearchable={isSearchable}
            searchLabel={searchLabel}
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
  isSearchable: boolean
  searchLabel: string
}

function OptionList({
  options,
  selectedOption,
  selectOption,
  onClick,
  isSearchable,
  searchLabel,
}: OptionListProps) {
  const { findItems, search } = useSearch(options, 'label')
  return (
    <div className="select-options">
      {isSearchable && (
        <Input
          autoFocus
          label={searchLabel}
          hideLabel
          onChange={(e) => search(e.target.value)}
          placeholder={searchLabel}
          icon="Search"
          className="search"
        />
      )}
      <ul role="listbox" onClick={onClick}>
        <Option
          options={findItems}
          selectedOption={selectedOption}
          selectOption={selectOption}
        />
      </ul>
    </div>
  )
}
interface OptionProps {
  options: Option[]
  selectedOption: Option
  selectOption: (option: Option) => void
}

function Option({ options, selectedOption, selectOption }: OptionProps) {
  return (
    <>
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
    </>
  )
}
