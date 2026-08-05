import './InputWithSelect.scss'
import React, { useEffect, useRef, useState } from 'react'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { classNames } from '../../utils/classNames'
import { Icon } from '../Icon'
import type { InputProps } from '../Input'
import { Input } from '../Input'
import type { Option } from '../Select'
import { SelectItem } from '../Select/SelectItem'

const ESCAPE_KEY = 'Escape'
const EMPTY_OPTION: Option = { id: '', label: '' }

export interface InputWithSelectProps extends Omit<
  InputProps,
  'suffix' | 'rightIcon'
> {
  options: Option[]
  selectAccessibilityLabel: string
  selectFieldName?: string
  defaultSelectedOption?: string
  onSelectChange?: (value: string) => void
}

export function InputWithSelect({
  options,
  selectAccessibilityLabel,
  selectFieldName,
  defaultSelectedOption,
  onSelectChange = () => {},
  className,
  ...props
}: InputWithSelectProps): React.JSX.Element {
  const { isOpen, close, toggle } = useOpen()
  const defaultOption =
    options.find((option) => option.id === defaultSelectedOption) ||
    options[0] ||
    EMPTY_OPTION
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption)
  const containerRef = useRef(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const optionsId = `${props.id || props.name}-select-options`

  useOutsideClick(containerRef, close)

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== ESCAPE_KEY) return
      close()
      triggerRef.current?.focus()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, close])

  function handleSelectOption(option: Option) {
    setSelectedOption(option)
    onSelectChange(option.id)
    close()
    triggerRef.current?.focus()
  }

  return (
    <Input
      className={classNames('input-with-select', className)}
      suffix={
        <span className="select-suffix" ref={containerRef}>
          <button
            ref={triggerRef}
            type="button"
            role="combobox"
            className="select-suffix-trigger"
            aria-label={`${selectAccessibilityLabel}: ${selectedOption.label}`}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={optionsId}
            disabled={props.disabled}
            onClick={toggle}
          >
            <span>{selectedOption.label}</span>
            <Icon size="3" name={isOpen ? 'AngleUp' : 'AngleDown'} decorative />
          </button>
          {selectFieldName && (
            <input
              type="hidden"
              name={selectFieldName}
              value={selectedOption.id}
            />
          )}
          {isOpen && (
            <ul id={optionsId} className="select-suffix-options" role="listbox">
              {options.map((option) => (
                <SelectItem
                  key={option.id}
                  label={option.label}
                  isSelected={option.id === selectedOption.id}
                  onSelectOption={() => handleSelectOption(option)}
                  onClose={close}
                />
              ))}
            </ul>
          )}
        </span>
      }
      {...props}
    />
  )
}
