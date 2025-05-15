import React, { useEffect, useRef } from 'react'
import { useOpen } from '../../hooks/useOpen'
import useRoveFocus from '../../hooks/useRoveFocus'
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
  handleCurrentFocus: (
    elementIndex: number,
    event: any,
    option?: Option,
  ) => void
  focusableElements: any
  elementsToFocus: any
  currentFocus: any
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
  handleCurrentFocus,
  focusableElements,
  elementsToFocus,
  currentFocus,
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
            id="search"
          />
        )}
        <ul role="listbox" onClick={onClick} id="dropdown-ul">
          {findItems.map((option) => (
            <SelectItem
              multiple={multiple}
              key={option.id}
              option={option}
              isSelected={selectedOptions.includes(option.id)}
              onClick={selectOption}
              handleCurrentFocus={(event: any) =>
                handleCurrentFocus(
                  elementsToFocus.map((e: any) => e.id).indexOf(option.id),
                  event,
                  option,
                )
              }
              hasFocus={
                focusableElements[currentFocus].id ===
                elementsToFocus[
                  elementsToFocus.map((e: any) => e.id).indexOf(option.id)
                ].id
              }
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
