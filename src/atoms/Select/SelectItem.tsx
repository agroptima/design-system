import React from 'react'
import { Icon } from '../Icon'
import type { Option } from './Select'

interface OptionProps {
  option: Option
  multiple?: boolean
  isSelected: boolean
  onClick: (option: Option) => void
}

export function SelectItem({
  option,
  isSelected,
  onClick,
  multiple,
}: OptionProps) {
  return (
    <li
      className="option"
      tabIndex={0}
      role="option"
      aria-selected={isSelected}
      data-option={option}
      onClick={() => onClick(option)}
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
