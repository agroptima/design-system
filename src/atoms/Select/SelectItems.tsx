import React, { useEffect } from 'react'
import { useSearch } from '../../hooks/useSearch'
import { Input } from '../Input'
import type { Option } from './Select'
import { SelectItem } from './SelectItem'

interface OptionListProps {
  id: string
  options: Option[]
  selectedOptions: string[]
  selectOption: (option: Option) => void
  multiple?: boolean
  onClick?: () => void
  isSearchable: boolean
  searchLabel: string
  onClose: () => void
}

const ESCAPE_KEY = 'Escape'

export function SelectItems({
  id,
  options,
  selectedOptions,
  selectOption,
  multiple = false,
  onClick,
  isSearchable,
  searchLabel,
  onClose,
}: OptionListProps) {
  const { findItems, search } = useSearch(options, 'label')
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ESCAPE_KEY) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="select-options-container">
      <div className="select-options" id={id}>
        {isSearchable && (
          <Input
            autoFocus
            label={searchLabel}
            hideLabel
            onChange={(e) => search(e.target.value)}
            placeholder={searchLabel}
            icon="Search"
            className="search"
          />
        )}
        <ul role="listbox" onClick={onClick}>
          {findItems.map((option) => (
            <SelectItem
              multiple={multiple}
              key={option.id}
              isSelected={selectedOptions.includes(option.id)}
              onSelectOption={() => selectOption(option)}
              onClose={onClose}
              label={option.label}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
