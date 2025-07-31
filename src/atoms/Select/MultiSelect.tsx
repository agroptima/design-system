import './Select.scss'
import React, { useRef, useState } from 'react'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { BaseSelect, type BaseSelectProps } from './BaseSelect'
import { SelectItems } from './SelectItems'
import { SelectTrigger } from './SelectTrigger'

export type Variant = 'primary'
export type Option = { id: string; label: string }

export interface MultiselectProps extends BaseSelectProps {
  placeholder: string
  options: Option[]
  label: string
  accessibilityLabel?: string
  defaultValue?: string[]
  selectedLabel?: string
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
  id,
  name,
  options,
  label,
  accessibilityLabel,
  selectedLabel = 'items selected',
  onChange = () => {},
  defaultValue = [],
  isSearchable = false,
  searchLabel = 'Search',
  ...props
}: MultiselectProps): React.JSX.Element {
  const { isOpen, close, toggle } = useOpen()
  const selectRef = useRef(null)
  const selectTriggerRef = useRef<HTMLButtonElement | null>(null)
  useOutsideClick(selectRef, close)
  const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultValue)
  const isInvalid = Boolean(errors?.length)
  const hasSelectedOptions = selectedOptions.length > 0

  const handleClose = () => {
    if (!isOpen) return
    close()
    selectTriggerRef?.current?.focus()
  }

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
      {...props}
      selectedId={selectedOptions.toString()}
    >
      <SelectTrigger
        id={identifier}
        label={label}
        accessibilityLabel={accessibilityLabel}
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
