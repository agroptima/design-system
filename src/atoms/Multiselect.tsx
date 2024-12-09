import './Select.scss'
import React, { useRef, useState } from 'react'
import { Icon } from './Icon'
import { IconButton } from './Button'
import { classNames } from '../utils/classNames'
import { buildHelpText } from '../utils/buildHelpText'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { useOpen } from '../hooks/useOpen'
import { Input } from './Input'
import { useSearch } from '../hooks/useSearch'

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
  isSearchable?: boolean
  searchLabel?: string
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
  onChange = () => {},
  variant = 'primary',
  selectedLabel = 'items selected',
  hideLabel = false,
  defaultValue = [],
  isSearchable = false,
  searchLabel = 'Search',
  ...props
}: MultiselectProps): React.JSX.Element {
  const helpTexts = buildHelpText(helpText, errors)
  const { isOpen, close, toggle } = useOpen()
  const selectRef = useRef(null)
  useOutsideClick(selectRef, close)
  const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultValue)
  const hasSelectedOptions = selectedOptions.length > 0
  const cssClasses = classNames('selected-option', className, {
    open: isOpen,
    filled: hasSelectedOptions,
    disabled: disabled,
    invalid: errors?.length,
  })

  function handleOptionsList() {
    if (!disabled) toggle()
  }

  function selectOption(id: string) {
    const isOptionSelected = selectedOptions.includes(id)
    const options = isOptionSelected
      ? selectedOptions.filter((optionId) => optionId !== id)
      : [...selectedOptions, id]

    setSelectedOptions(options)
    onChange(options)
  }

  function handleClear(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setSelectedOptions([])
    onChange([])
  }

  return (
    <div className={`select-group ${variant}`}>
      {!hideLabel && <span className="select-label">{label}</span>}
      <div className="select-container" ref={selectRef}>
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
            name={isOpen ? 'AngleUp' : 'AngleDown'}
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

        <OptionList
          isOpen={isOpen}
          options={options}
          selectedOptions={selectedOptions}
          onSelect={selectOption}
          isSearchable={isSearchable}
          searchLabel={searchLabel}
        />
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

interface OptionListProps {
  isSearchable: boolean
  searchLabel: string
  options: Option[]
  selectedOptions: string[]
  onSelect: (id: string) => void
  isOpen: boolean
}

function OptionList({
  options,
  selectedOptions,
  onSelect,
  isSearchable,
  searchLabel,
  isOpen,
}: OptionListProps) {
  const { findItems, search } = useSearch(options, 'label')
  if (!isOpen) return null

  return (
    <div className="select-options">
      {isSearchable && (
        <Input
          label={searchLabel}
          hideLabel
          onChange={(e) => search(e.target.value)}
          placeholder={searchLabel}
          icon="Search"
          className="search"
        />
      )}
      <ul role="listbox">
        <Option
          options={findItems}
          selectedOptions={selectedOptions}
          onSelect={onSelect}
        />
      </ul>
    </div>
  )
}

interface OptionProps {
  options: Option[]
  onSelect: (id: string) => void
  selectedOptions: string[]
}

function Option({ options, onSelect, selectedOptions }: OptionProps) {
  function isSelected(id: string): boolean {
    return selectedOptions.includes(id)
  }
  function getIcon(id: string) {
    return isSelected(id) ? 'CheckboxActive' : 'CheckboxInactive'
  }
  return (
    <>
      {options.map((option) => {
        return (
          <li
            key={option.id}
            role="option"
            className="option"
            tabIndex={0}
            aria-selected={isSelected(option.id)}
            data-option={option}
            onClick={() => onSelect(option.id)}
          >
            <Icon name={getIcon(option.id)} />
            {option.label}
          </li>
        )
      })}
    </>
  )
}
