import React, { useEffect, useRef } from 'react'
import { Input } from '../Input'

interface SearchProps {
  id: string
  searchLabel: string
  search: (term: string) => void
  hasFocus: boolean
  handleKeyAction: (event: any) => void
}

export function Search({
  id,
  search,
  searchLabel,
  hasFocus,
  handleKeyAction,
}: SearchProps) {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (hasFocus && ref.current) {
      ref.current.focus()
    }
  }, [hasFocus])

  return (
    <Input
      id={id}
      autoFocus
      label={searchLabel}
      hideLabel
      onChange={(e) => search(e.target.value)}
      placeholder={searchLabel}
      icon="Search"
      className="search"
      tabIndex={hasFocus ? 0 : -1}
      ref={ref}
      onKeyDown={handleKeyAction}
    />
  )
}
