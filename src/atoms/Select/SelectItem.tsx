import React, { type KeyboardEventHandler, useEffect, useRef } from 'react'
import { Icon } from '../Icon'
import type { Option } from './Select'

interface OptionProps {
  option: Option
  multiple?: boolean
  isSelected: boolean
  onClick: (option: Option) => void
  handleKeyAction: (
    elementIndex: number,
    event: KeyboardEvent,
    option?: Option,
  ) => void
  hasFocus: boolean
}

export function SelectItem({
  option,
  isSelected,
  onClick,
  multiple,
  hasFocus,
  handleKeyAction,
}: OptionProps) {
  const ref = useRef<HTMLLIElement>(null)
  useEffect(() => {
    if (hasFocus && ref.current) {
      ref.current.focus()
    }
  }, [hasFocus])

  function handleSelectOption(option: Option) {
    onClick(option)
  }

  return (
    <li
      id={option.id}
      className="option"
      role="option"
      aria-selected={isSelected}
      data-option={option}
      onClick={() => handleSelectOption(option)}
      tabIndex={hasFocus ? 0 : -1}
      ref={ref}
      onKeyDown={
        handleKeyAction as unknown as KeyboardEventHandler<HTMLLIElement>
      }
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
