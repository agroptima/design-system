import React from 'react'
import { useSearch } from '../../hooks/useSearch'
import { SELECT_ELEMENTS } from './manageSelectElements'
import { Search } from './Search'
import { type FocusableElement, type Option } from './Select'
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
  handleKeyAction: (
    elementIndex: number,
    event: KeyboardEvent,
    option?: Option,
  ) => void
  focusableElements: FocusableElement[]
  currentFocus: number
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
  handleKeyAction,
  focusableElements,
  currentFocus,
}: OptionListProps) {
  const { findItems, search } = useSearch(options, 'label')

  return (
    <div className="select-options-container">
      <div className="select-options" id={id}>
        {isSearchable && (
          <Search
            id={SELECT_ELEMENTS.search}
            searchLabel={searchLabel}
            search={search}
            handleKeyAction={(event) =>
              handleKeyAction(
                focusableElements
                  .map((e) => e.id)
                  .indexOf(SELECT_ELEMENTS.search),
                event as unknown as KeyboardEvent,
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
              handleKeyAction={(event) =>
                handleKeyAction(
                  focusableElements.map((e) => e.id).indexOf(option.id),
                  event as unknown as KeyboardEvent,
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
