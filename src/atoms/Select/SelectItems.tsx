import React from 'react'
import { useSearch } from '../../hooks/useSearch'
import { Search } from './Search'
import { type Option, type SelectElement } from './Select'
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
  currentFocus: any
  SELECT_ELEMENTS: SelectElement
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
  currentFocus,
  SELECT_ELEMENTS,
}: OptionListProps) {
  const { findItems, search } = useSearch(options, 'label')

  return (
    <div className="select-options-container">
      <div className="select-options" id={id}>
        {isSearchable && (
          <Search
            autoFocus
            id={SELECT_ELEMENTS.search}
            searchLabel={searchLabel}
            search={search}
            handleCurrentFocus={(event: any) =>
              handleCurrentFocus(
                focusableElements
                  .map((e: any) => e.id)
                  .indexOf(SELECT_ELEMENTS.search),
                event,
              )
            }
            hasFocus={
              focusableElements[currentFocus].id === SELECT_ELEMENTS.search
            }
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
              handleCurrentFocus={(event: any) =>
                handleCurrentFocus(
                  focusableElements.map((e: any) => e.id).indexOf(option.id),
                  event,
                  option,
                )
              }
              hasFocus={focusableElements[currentFocus].id === option.id}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
