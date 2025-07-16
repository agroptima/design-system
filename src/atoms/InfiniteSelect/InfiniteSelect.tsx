import { useRef } from 'react'
import { HelpText } from '../HelpText'
import { Label } from '../Label'
import { SelectTrigger } from '../Select/SelectTrigger'

export interface InfiniteSelectProps<T> {
  helpText?: string
  label: string
  id?: string
  name?: string
  placeholder: string
  required?: boolean
  disabled?: boolean
  defaultValue?: T
  displayItem: (item: T) => string
}

export function InfiniteSelect<T extends { uid: string }>({
  label,
  helpText,
  placeholder,
  id,
  name,
  required = false,
  disabled = false,
  defaultValue,
  displayItem,
}: InfiniteSelectProps<T>) {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const identifier = id || name
  const displayValue = defaultValue ? displayItem(defaultValue) : placeholder
  return (
    <>
      <Label required={required} htmlFor={identifier}>
        {label}
      </Label>
      <SelectTrigger
        id={identifier}
        label={label}
        isOpen={false}
        isEmpty={false}
        invalid={false}
        onClick={() => {}}
        onClear={() => {}}
        buttonRef={buttonRef}
        disabled={disabled}
      >
        {displayValue}
      </SelectTrigger>
      <HelpText helpText={helpText} />
      <input
        type="hidden"
        name={name}
        id={identifier}
        value={defaultValue?.uid}
      />
    </>
  )
}
