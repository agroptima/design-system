import './InfiniteSelect.scss'
import { type RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { classNames } from '../../utils/classNames'
import { HelpText } from '../HelpText'
import { Icon } from '../Icon'
import { Input } from '../Input'
import { Label } from '../Label'
import { SelectItem } from '../Select/SelectItem'
import { SelectTrigger } from '../Select/SelectTrigger'

export type Payload = {
  ordering?: string
  search?: string
  page?: string
  page_size?: string
}

export interface InfiniteSelectProps<T> {
  id?: string
  name?: string
  label: string
  placeholder: string
  searchLabel?: string
  helpText?: string
  required?: boolean
  disabled?: boolean
  variant?: string
  className?: string
  defaultValue?: T
  displayItem: (item: T) => string
  query: (payload: Payload) => Promise<{ items: T[]; totalPages: number }>
}

export function InfiniteSelect<T extends { uid: string }>({
  id,
  name,
  label,
  placeholder,
  searchLabel = 'Search',
  helpText,
  required = false,
  disabled = false,
  variant = 'primary',
  className,
  defaultValue,
  displayItem,
  query,
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

  const handleClear = () => {
    setSelectedItem(null)
  }
  const handleSelectOption = (item: T) => {
    // TODO: MultiSelect case
    setSelectedItem(item)
    close()
  }
  const handleClick = async () => {
    if (items.length === 0) {
      await loadItems()
    }
    toggle()
  }

  const loadItems = useCallback(
    async (search: string = '') => {
      console.log('------------', search)
      if (loading || !morePages) return
      setLoading(true)
      try {
        const { items: newItems, totalPages } = await query({
          page: page.toString(),
          search: search,
        })
        setItems((prev) => [...prev, ...newItems])
        if (page < totalPages) {
          setPage((prev) => prev + 1)
        } else {
          setMorePages(false)
        }
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
          console.log('Loading more items...')
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

  const handleSearch = (value: string) => {
    setPage(1)
    setItems([])
    loadItems(value)
  }

  const cssClasses = classNames('select-group', variant, className, {
    disabled,
    filled: selectedItem?.uid,
  })

  return (
    <div className={cssClasses} ref={selectRef}>
      <Label required={required} htmlFor={identifier}>
        {label}
      </Label>
      <SelectTrigger
        id={identifier}
        label={label}
        isOpen={isOpen}
        isEmpty={false}
        invalid={false}
        onClick={handleClick}
        onClear={handleClear}
        buttonRef={buttonRef}
        disabled={disabled}
      >
        {displayValue}
      </SelectTrigger>
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
      <HelpText helpText={helpText} />
      <input
        type="hidden"
        name={name}
        id={identifier}
        value={defaultValue?.uid}
      />
    </div>
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
