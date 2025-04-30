import React from 'react'
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
}

export function SelectItems({
  id,
  options,
  selectedOptions,
  selectOption,
  multiple = false,
  onClick,
  isSearchable,
  searchLabel,
}: OptionListProps) {
  const { findItems, search } = useSearch(options, 'label')
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
              option={option}
              isSelected={selectedOptions.includes(option.id)}
              onClick={selectOption}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
