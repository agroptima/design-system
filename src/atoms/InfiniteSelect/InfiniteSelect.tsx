import './InfiniteSelect.scss'
import { useRef, useState } from 'react'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { classNames } from '../../utils/classNames'
import { Button } from '../Button'
import { HelpText } from '../HelpText'
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
  const selectRef = useRef(null)
  useOutsideClick(selectRef, close)
  const [selectedItem, setSelectedItem] = useState<T | null>(
    defaultValue || null,
  )
  const [items, setItems] = useState<T[]>([])
  const [page, setPage] = useState<number>(1)
  const [morePages, setMorePages] = useState<boolean>(true)
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
    if (items.length === 0 && page === 1) {
      await loadItems()
    }
    toggle()
  }

  const loadItems = async () => {
    try {
      const { items: newItems, totalPages } = await query({
        page: page.toString(),
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
          <ul role="listbox" className="select-options">
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
              label="Loading..."
              visible={morePages}
              loadItems={loadItems}
            />
          </ul>
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
  loadItems,
}: {
  label: string
  visible: boolean
  loadItems: () => void
}) {
  if (!visible) return null
  return (
    <li>
      <Button label={label} type="button" onClick={loadItems} />
    </li>
  )
}
