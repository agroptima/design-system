import React from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useSearch } from '../../hooks/useSearch'
import { Input } from '../Input'

const MIN_LENGTH_SEARCH = 2
const SEARCH_DEBOUNCE_TIME = 500

export interface SearchProps extends React.ComponentPropsWithRef<'input'> {
  visible: boolean
  searchLabel: string
  options?: { uid: string; label: string }[]
  isLocalSearch?: boolean
  searchedLocalResults?: (results: { uid: string; label: string }[]) => void
  searchDebounceTime?: number
  minLengthSearch?: number
  searchTerm?: (term: string) => void
}

export function Search({
  visible,
  searchLabel,
  options,
  isLocalSearch,
  searchedLocalResults = () => {},
  searchDebounceTime = SEARCH_DEBOUNCE_TIME,
  minLengthSearch = MIN_LENGTH_SEARCH,
  searchTerm = () => {},
}: SearchProps) {
  const { findItems, search } = useSearch(options ?? [], 'label')

  const handleSearch = (term: string) => {
    if (term.length > 0 && term.length < minLengthSearch) return
    if (isLocalSearch) {
      search(term)
      return searchedLocalResults(findItems)
    }
    sendSearchTerm(term)
  }

  const sendSearchTerm = useDebouncedCallback((term: string) => {
    searchTerm(term)
  }, searchDebounceTime)
  if (!visible) return null

  return (
    <div>
      <Input
        autoFocus
        label={searchLabel}
        hideLabel
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={searchLabel}
        icon="Search"
        className="search"
      />
    </div>
  )
}
