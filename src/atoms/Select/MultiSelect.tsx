import './Select.scss'
import React, { useRef, useState } from 'react'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { BaseSelect, type BaseSelectProps } from './BaseSelect'
import { SelectItems } from './SelectItems'
import { SelectTrigger } from './SelectTrigger'

export type Variant = 'primary'
export type Option = { id: string; label: string }

export interface MultiselectProps extends Omit<
  BaseSelectProps,
  'isEmpty' | 'children'
> {
  options: Option[]
  label: string
  selectedLabel: string
  searchLabel?: string
  placeholder?: string
  clearAccessibilityLabel: string
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  errors?: string[]
  isSearchable?: boolean
  fullWidth?: boolean
  hideLabel?: boolean
}

export function Multiselect({
  className,
  helpText,
  disabled,
  id,
  name,
  options,
  label,
  selectedLabel,
  searchLabel = 'Search',
  placeholder,
  clearAccessibilityLabel,
  defaultValue = [],
  onChange = () => {},
  errors,
  isSearchable = false,
  fullWidth = false,
  hideLabel = false,
  ...props
}: MultiselectProps): React.JSX.Element {
  const { isOpen, close, toggle } = useOpen()
  const selectRef = useRef<HTMLDivElement>(null)
  const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultValue)
  const isInvalid = Boolean(errors?.length)
  const hasSelectedOptions = selectedOptions.length > 0

  const selectTriggerRef = useRef<HTMLButtonElement | null>(null)
  const handleClose = () => {
    if (!isOpen) return
    close()
    selectTriggerRef?.current?.focus()
  }
  useOutsideClick(selectRef, handleClose)

  function handleSelectOption({ id }: Option) {
    const isOptionSelected = selectedOptions.includes(id)
    const options = isOptionSelected
      ? selectedOptions.filter((optionId) => optionId !== id)
      : [...selectedOptions, id]

    setSelectedOptions(options)
    onChange(options)
  }

  function handleClear(event: React.MouseEvent) {
    event.stopPropagation()
    setSelectedOptions([])
    onChange([])
  }

  const identifier = id || name
  return (
    <BaseSelect
      placeholder={placeholder}
      label={label}
      isEmpty={!hasSelectedOptions}
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
        label={label}
        clearAccessibilityLabel={clearAccessibilityLabel}
        hideLabel={hideLabel}
        invalid={isInvalid}
        disabled={disabled}
        isOpen={isOpen}
        onClick={toggle}
        onClear={handleClear}
        isEmpty={!hasSelectedOptions}
        buttonRef={selectTriggerRef}
      >
        {hasSelectedOptions
          ? `${selectedOptions.length} ${selectedLabel}`
          : placeholder}
      </SelectTrigger>
      <input
        type="hidden"
        name={name}
        value={selectedOptions.toString()}
        {...props}
      />
      {isOpen && (
        <SelectItems
          multiple
          id={`${identifier}-options`}
          options={options}
          selectedOptions={selectedOptions}
          selectOption={handleSelectOption}
          isSearchable={isSearchable}
          searchLabel={searchLabel}
          onClose={handleClose}
        />
      )}
    </BaseSelect>
  )
}
