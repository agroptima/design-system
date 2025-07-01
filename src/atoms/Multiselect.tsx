import './Select/Select.scss'
import React, { useRef, useState } from 'react'
import { useOpen } from '../hooks/useOpen'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { classNames } from '../utils/classNames'
import { HelpText } from './HelpText'
import { Label } from './Label'
import { SelectItems } from './Select/SelectItems'
import { SelectTrigger } from './Select/SelectTrigger'

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
  fullWidth?: boolean
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
  onChange = () => {},
  variant = 'primary',
  selectedLabel = 'items selected',
  hideLabel = false,
  defaultValue = [],
  isSearchable = false,
  searchLabel = 'Search',
  fullWidth = false,
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
    <div
      className={classNames('select-group', variant, className, {
        disabled,
        filled: hasSelectedOptions,
        invalid: isInvalid,
        'full-width': fullWidth,
      })}
      ref={selectRef}
    >
      {!hideLabel && (
        <Label required={props.required} htmlFor={identifier}>
          {label}
        </Label>
      )}
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
      <HelpText helpText={helpText} errors={errors} />
      <input
        type="hidden"
        name={name}
        value={selectedOptions.toString()}
        {...props}
      />
    </div>
  )
}
