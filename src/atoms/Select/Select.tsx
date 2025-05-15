import './Select.scss'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import useRoveFocus from '../../hooks/useRoveFocus'
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
}

const EMPTY_OPTION: Option = { id: '', label: '' }

const SelectElements = {
  selectContainer: 'select-container',
  search: 'search',
}

export interface FocusableElement {
  id: string
}

const elementsToFocus: FocusableElement[] = [
  { id: SelectElements.selectContainer },
  // { id: selectElements.search },
]

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
  ...props
}: SelectProps): React.JSX.Element {
  function addOptionsToFocusableElements(options: Option[]) {
    options.map((option) => elementsToFocus.push({ id: option.id }))
  }

  useEffect(() => {
    addOptionsToFocusableElements(options)
  }, [])

  const { currentFocus, setCurrentFocus, focusableElements } =
    useRoveFocus(elementsToFocus)
  const { isOpen, close, toggle } = useOpen()

  const defaultOption =
    options.find((option) => option.id === defaultValue) || EMPTY_OPTION
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption)
  const isEmpty = selectedOption.id === EMPTY_OPTION.id
  const isInvalid = Boolean(errors?.length)
  const selectRef = useRef(null)

  useOutsideClick(selectRef, close)

  function handleSelectOption(option: Option) {
    setSelectedOption(option)
    onChange(option.id)
  }

  function handleClear(event: React.MouseEvent) {
    event.stopPropagation()
    setSelectedOption(EMPTY_OPTION)
    onChange('')
  }

  const handleCurrentFocus = useCallback(
    (elementIndex: number, event: any, option?: Option) => {
      console.log('handle current focus: ', elementIndex, event?.keyCode)
      // set focus to the elementIndex when it's selected from a keydown event
      setCurrentFocus(elementIndex)

      if (
        elementIndex ===
        focusableElements
          .map((e) => e.id)
          .indexOf(SelectElements.selectContainer)
      ) {
        if (event?.keyCode === 40) {
          // arrow down
          toggle()
        }
        if (event?.keyCode === 27) {
          // Esc
          close()
        }
      }

      if (event?.keyCode === 13 && option) {
        // Intro
        handleSelectOption(option)
        close()
      }
    },
    [setCurrentFocus],
  )

  const identifier = id || name
  return (
    <div
      className={classNames('select-group', variant, className, {
        disabled,
        filled: selectedOption.id,
        invalid: isInvalid,
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
        isEmpty={isEmpty}
        handleCurrentFocus={(event: any) =>
          handleCurrentFocus(
            focusableElements
              .map((e) => e.id)
              .indexOf(SelectElements.selectContainer),
            event,
          )
        }
        hasFocus={
          focusableElements[currentFocus].id === SelectElements.selectContainer
        }
      >
        {selectedOption.label || placeholder}
      </SelectTrigger>
      {isOpen && (
        <SelectItems
          id={`${identifier}-options`}
          options={options}
          selectedOptions={[selectedOption.id]}
          selectOption={handleSelectOption}
          onClick={close}
          isSearchable={isSearchable}
          searchLabel={searchLabel}
          focusableElements={focusableElements}
          currentFocus={currentFocus}
          handleCurrentFocus={handleCurrentFocus}
        />
      )}
      <HelpText helpText={helpText} errors={errors} />
      <input type="hidden" name={name} value={selectedOption.id} {...props} />
    </div>
  )
}
