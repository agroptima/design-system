import { useState } from 'react'
import { normalizeSearch } from '../utils/normalizeSearch'

export function useSearch(items: any[], key: string) {
  const [findItems, setFindItems] = useState<any[]>(items)

  function search(term: string) {
    const filteredList = items.filter((option) => {
      return normalizeSearch(option[key]).includes(normalizeSearch(term))
    })
    setFindItems(filteredList)
  }
  return { findItems, search }
}
