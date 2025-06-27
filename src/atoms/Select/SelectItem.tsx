import React from 'react'
import { Icon } from '../Icon'
import type { Option } from './Select'

interface OptionProps {
  option: Option
  multiple?: boolean
  isSelected: boolean
  onSelectOption: (option: Option) => void
  onClose: () => void
}

const ENTER_KEY = 'Enter'
const SPACE_KEY = ' '

export function SelectItem({
  option,
  isSelected,
  onSelectOption,
  multiple,
  onClose,
}: OptionProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === ENTER_KEY || e.key === SPACE_KEY) {
      e.preventDefault()
      onSelectOption(option)
      if (!multiple) {
        onClose()
      }
    }
  }
  return (
    <li
      className="option"
      tabIndex={0}
      role="option"
      aria-selected={isSelected}
      data-option={option}
      onClick={() => onSelectOption(option)}
      onKeyDown={handleKeyDown}
    >
      {multiple && <CheckboxIcon selected={isSelected} />}
      {option.label}
    </li>
  )
}

function CheckboxIcon({ selected }: { selected: boolean }) {
  if (selected) return <Icon name="CheckboxActive" />
  return <Icon name="CheckboxInactive" />
}
