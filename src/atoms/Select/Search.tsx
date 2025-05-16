import React, { useEffect, useRef } from 'react'
import { Input } from '../Input'
import { type Option, SELECT_ELEMENTS } from './Select'

interface SearchProps {
  searchLabel: string
  search: (term: string) => void
  hasFocus: boolean
  handleCurrentFocus: () => void
}

export function Search({
  search,
  searchLabel,
  hasFocus,
  handleCurrentFocus,
}: SearchProps) {
  const ref = useRef(null)

  useEffect(() => {
    if (hasFocus && ref.current) {
      ref.current.focus()
    }
  }, [hasFocus])

  return (
    <Input
      autoFocus
      label={searchLabel}
      hideLabel
      onChange={(e) => search(e.target.value)}
      placeholder={searchLabel}
      icon="Search"
      className="search"
      id="search"
      tabIndex={hasFocus ? 0 : -1}
      ref={ref}
      onKeyDown={handleCurrentFocus}
    />
  )
}
