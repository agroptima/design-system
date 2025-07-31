'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  useState,
} from 'react'
import { useDebouncedCallback } from 'use-debounce'
import SearchInput from './SearchInput'

export const MIN_LENGTH_SEARCH = 2
export const SEARCH_DEBOUNCE_TIME = 1000

export interface SearchProps extends ComponentPropsWithoutRef<'input'> {
  className?: string
  debounceTime?: number
  searchLabel: string
  clearSearchLabel?: string
}

export default function Search({
  className,
  searchLabel,
  clearSearchLabel,
  debounceTime = SEARCH_DEBOUNCE_TIME,
  ...props
}: SearchProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [term, setTerm] = useState<string>(searchParams.get('search') || '')
  const searchTerm = (term: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    params.set('search', term)
    if (!term) params.delete('search')
    replace(`${pathname}?${params.toString()}`)
  }
  const handleSearch = useDebouncedCallback((term: string) => {
    if (term.length > 0 && term.length < MIN_LENGTH_SEARCH) return
    searchTerm(term)
  }, debounceTime)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
    handleSearch(event.target.value)
  }
  const handleClear = () => {
    handleSearch.cancel()
    setTerm('')
    searchTerm('')
  }

  return (
    <SearchInput
      onChange={handleChange}
      term={term}
      onClear={handleClear}
      searchLabel={searchLabel}
      clearSearchLabel={clearSearchLabel ?? ''}
      {...props}
    />
  )
}
