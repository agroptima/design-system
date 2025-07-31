import './Select.scss'
import { type RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { Icon } from '../Icon'
import { Input } from '../Input'
import { SelectItem } from '../Select/SelectItem'
import { SelectTrigger } from '../Select/SelectTrigger'
import { BaseSelect, type BaseSelectProps } from './BaseSelect'

const MIN_LENGTH_SEARCH = 2
const SEARCH_DEBOUNCE_TIME = 500

export type Payload = {
  ordering?: string
  search?: string
  page?: string
  page_size?: string
}

export interface InfiniteSelectProps<T>
  extends Omit<BaseSelectProps, 'defaultValue' | 'isEmpty' | 'children'> {
  id?: string
  name?: string
  label: string
  placeholder: string
  accessibilityLabel?: string
  searchLabel: string
  defaultValue?: T
  searchDebounceTime?: number
  disabled?: boolean
  minLengthSearch?: number
  displayItem: (item: T) => string
  query: (payload: Payload) => Promise<{ items: T[]; totalPages: number }>
  errors?: string[]
}

export function InfiniteSelect<T extends { uid: string }>({
  id,
  name,
  label,
  placeholder,
  searchLabel,
  accessibilityLabel,
  className,
  defaultValue,
  disabled = false,
  searchDebounceTime = SEARCH_DEBOUNCE_TIME,
  minLengthSearch = MIN_LENGTH_SEARCH,
  displayItem,
  query,
  errors,
  ...props
}: InfiniteSelectProps<T>) {
  const { isOpen, close, toggle } = useOpen()
  const selectRef = useRef<HTMLDivElement | null>(null)
  const loaderRef = useRef<HTMLDivElement | null>(null)
  useOutsideClick(selectRef, close)
  const [selectedItem, setSelectedItem] = useState<T | null>(
    defaultValue || null,
  )
  const [items, setItems] = useState<T[]>([])
  const [page, setPage] = useState<number>(1)
  const [morePages, setMorePages] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const identifier = id || name
  const displayValue = selectedItem ? displayItem(selectedItem) : placeholder
  const isInvalid = Boolean(errors?.length)

  const selectTriggerRef = useRef<HTMLButtonElement | null>(null)
  const handleClose = () => {
    if (!isOpen) return
    close()
    selectTriggerRef?.current?.focus()
  }
  useOutsideClick(selectRef, handleClose)

  const handleClear = () => {
    setSelectedItem(null)
  }
  const handleSelectOption = (item: T) => {
    // TODO: MultiSelect case
    setSelectedItem(item)
    close()
  }
  const handleClick = () => {
    toggle()
    if (isOpen && !loading && items.length === 0) {
      loadItems()
    }
  }

  const loadItems = useCallback(
    async (searchTerm: string = '') => {
      if (loading || !morePages) return
      setLoading(true)
      try {
        const { items, totalPages } = await query({
          page: page.toString(),
          search: searchTerm,
        })
        setItems((prev) => [...prev, ...items])
        setPage((prev) => prev + 1)
        setMorePages(page < totalPages)
      } catch (error) {
        // TODO: Handle error correctly
        console.error('Error loading items:', error)
      }
      setLoading(false)
    },
    [page, query, loading, morePages],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading && loaderRef.current) {
          loadItems()
        }
      },
      {
        root: selectRef?.current || null,
        rootMargin: '0px',
        threshold: 1.0,
      },
    )

    const loader = loaderRef.current
    if (loader) observer.observe(loader)

    return () => {
      if (loader) observer.unobserve(loader)
      observer.disconnect()
    }
  }, [loadItems, loaderRef, loading])

  const sendSearchTerm = useDebouncedCallback((term: string) => {
    if (term.length > 0 && term.length < minLengthSearch) return
    setPage(1)
    setItems([])
    setMorePages(true)
    loadItems(term)
  }, searchDebounceTime)

  const handleSearch = (searchTerm: string) => {
    sendSearchTerm(searchTerm)
  }

  return (
    <BaseSelect
      placeholder={placeholder}
      label={label}
      isEmpty={!selectedItem?.uid}
      errors={errors}
      selectRef={selectRef}
      {...props}
    >
      <SelectTrigger
        id={identifier}
        label={label}
        isOpen={isOpen}
        isEmpty={!selectedItem?.uid}
        invalid={isInvalid}
        accessibilityLabel={accessibilityLabel}
        onClick={handleClick}
        onClear={handleClear}
        buttonRef={buttonRef}
        disabled={disabled}
      >
        {displayValue}
      </SelectTrigger>
      <input type="hidden" name={name} value={selectedItem?.uid} {...props} />
      {isOpen && (
        <div className="select-options-container">
          <div className="select-options">
            <Input
              autoFocus
              label={searchLabel}
              hideLabel
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={searchLabel}
              icon="Search"
              className="search"
            />
            <ul role="listbox">
              {items.map((item) => (
                <SelectItem
                  multiple={false}
                  key={item.uid}
                  label={displayItem(item)}
                  isSelected={selectedItem?.uid === item.uid}
                  onSelectOption={() => handleSelectOption(item)}
                  onClose={close}
                />
              ))}
              <LoadingItems
                label="Loading items"
                visible={morePages}
                loaderRef={loaderRef}
              />
            </ul>
          </div>
        </div>
      )}
    </BaseSelect>
  )
}
function LoadingItems({
  label,
  visible,
  loaderRef,
}: {
  label: string
  visible: boolean
  loaderRef: RefObject<HTMLDivElement | null>
}) {
  if (!visible) return null
  return (
    <li>
      <div ref={loaderRef} aria-label={label} className="loading">
        <Icon name="Loading" />
      </div>
    </li>
  )
}
