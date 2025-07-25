import './Select.scss'
import React, { useRef, useState } from 'react'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { classNames } from '../../utils/classNames'
import { HelpText } from '../HelpText'
import { Label } from '../Label'
import { SelectItems } from './SelectItems'
import { SelectTrigger } from './SelectTrigger'

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
  isSearchable?: boolean
  searchLabel?: string
  fullWidth?: boolean
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
  id,
  options,
  label,
  accessibilityLabel,
  hideLabel = false,
  onChange = () => {},
  defaultValue,
  isSearchable = false,
  searchLabel = 'Search',
  fullWidth = false,
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
    <div
      className={classNames('select-group', variant, className, {
        disabled,
        filled: selectedOption.id,
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
      <HelpText helpText={helpText} errors={errors} />
      <input type="hidden" name={name} value={selectedOption.id} {...props} />
    </div>
  )
}
