import React from 'react'
import { Icon } from '../Icon'

interface OptionProps {
  multiple?: boolean
  isSelected: boolean
  onSelectOption: () => void
  onClose: () => void
  label: string
}

const ENTER_KEY = 'Enter'
const SPACE_KEY = ' '

export function SelectItem({
  isSelected,
  onSelectOption,
  multiple,
  onClose,
  label,
}: OptionProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === ENTER_KEY || e.key === SPACE_KEY) {
      e.preventDefault()
      onSelectOption()
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
      onClick={onSelectOption}
      onKeyDown={handleKeyDown}
    >
      {multiple && <CheckboxIcon selected={isSelected} />}
      {label}
    </li>
  )
}

function CheckboxIcon({ selected }: { selected: boolean }) {
  if (selected) return <Icon name="CheckboxActive" />
  return <Icon name="CheckboxInactive" />
}
