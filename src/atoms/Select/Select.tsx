import './Select.scss'
import React, { useRef, useState } from 'react'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { BaseSelect, type BaseSelectProps } from './BaseSelect'
import { SelectItems } from './SelectItems'
import { SelectTrigger } from './SelectTrigger'

export type Option = { id: string; label: string }

export interface SelectProps
  extends Omit<BaseSelectProps, 'isEmpty' | 'children'> {
  placeholder?: string
  options: Option[]
  label: string
  accessibilityLabel?: string
  defaultValue?: string
  onChange?: (value: string) => void
  errors?: string[]
  disabled?: boolean
  helpText?: string
  isSearchable?: boolean
  searchLabel?: string
  fullWidth?: boolean
  hideLabel?: boolean
}

const EMPTY_OPTION = { id: '', label: '' }

export function Select({
  className,
  placeholder,
  name,
  id,
  options,
  label,
  accessibilityLabel,
  errors,
  onChange = () => {},
  helpText,
  defaultValue,
  isSearchable = false,
  disabled = false,
  searchLabel = 'Search',
  fullWidth = false,
  hideLabel = false,
  ...props
}: SelectProps): React.JSX.Element {
  const { isOpen, close, toggle } = useOpen()
  const defaultOption =
    options.find((option) => option.id === defaultValue) || EMPTY_OPTION
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption)
  const isEmpty = selectedOption.id === EMPTY_OPTION.id
  const isInvalid = Boolean(errors?.length)
  const selectRef = useRef(null)
  const selectTriggerRef = useRef<HTMLButtonElement | null>(null)
  const handleClose = () => {
    if (!isOpen) return
    close()
    selectTriggerRef?.current?.focus()
  }
  useOutsideClick(selectRef, handleClose)

  function handleSelectOption(option: Option) {
    setSelectedOption(option)
    onChange(option.id)
  }

  function handleClear(event: React.MouseEvent) {
    event.stopPropagation()
    setSelectedOption(EMPTY_OPTION)
    onChange('')
  }

  const identifier = id || name
  return (
    <BaseSelect
      placeholder={placeholder}
      label={label}
      isEmpty={isEmpty}
      errors={errors}
      selectRef={selectRef}
      identifier={identifier}
      helpText={helpText}
      hideLabel={hideLabel}
      fullWidth={fullWidth}
      className={className}
      {...props}
    >
      <SelectTrigger
        id={identifier}
        buttonRef={selectTriggerRef}
        label={label}
        accessibilityLabel={accessibilityLabel}
        invalid={isInvalid}
        disabled={disabled}
        isOpen={isOpen}
        onClick={toggle}
        onClear={handleClear}
        isEmpty={isEmpty}
      >
        {selectedOption.label || placeholder}
      </SelectTrigger>
      <input type="hidden" name={name} value={selectedOption.id} {...props} />

      {isOpen && (
        <SelectItems
          id={`${identifier}-options`}
          options={options}
          selectedOptions={[selectedOption.id]}
          selectOption={handleSelectOption}
          onClick={handleClose}
          isSearchable={isSearchable}
          searchLabel={searchLabel}
          onClose={handleClose}
        />
      )}
    </BaseSelect>
  )
}
