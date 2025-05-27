import React, {
  type FocusEventHandler,
  type KeyboardEventHandler,
  useEffect,
  useRef,
} from 'react'
import { IconButton } from '../Button'
import { Icon } from '../Icon'
import { SELECT_ELEMENTS } from './manageSelectElements'
import { type Option } from './Select'

export interface SelectTriggerProps {
  id?: string
  label: string
  accessibilityLabel?: string
  invalid: boolean
  disabled?: boolean
  isOpen: boolean
  isEmpty: boolean
  onClick: () => void
  onClear: (event: React.MouseEvent) => void
  children: React.ReactNode
  handleKeyAction: (
    elementIndex: number,
    event: KeyboardEvent,
    option?: Option,
  ) => void
  hasFocus: boolean
}

export function SelectTrigger({
  id,
  label,
  accessibilityLabel,
  invalid,
  disabled,
  isOpen,
  onClick,
  onClear,
  isEmpty,
  handleKeyAction,
  hasFocus,
  children,
}: SelectTriggerProps) {
  const handleClear = (event: React.MouseEvent) => {
    if (disabled) return
    onClear(event)
  }
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (hasFocus && ref.current) {
      ref.current.focus()
    }
  }, [hasFocus])

  return (
    <div className="select-container">
      <button
        type="button"
        role="combobox"
        onClick={onClick}
        aria-label={accessibilityLabel || label}
        aria-controls={`${id}-options`}
        aria-expanded={isOpen}
        aria-live="assertive"
        aria-invalid={invalid}
        disabled={disabled}
        className="select-button"
        id={SELECT_ELEMENTS.selectButton}
        ref={ref}
        onKeyDown={
          handleKeyAction as unknown as KeyboardEventHandler<HTMLButtonElement>
        }
        onFocus={
          handleKeyAction as unknown as FocusEventHandler<HTMLButtonElement>
        }
      >
        <span>{children}</span>
        <Icon
          size="3"
          name={isOpen ? 'AngleUp' : 'AngleDown'}
          visible={isEmpty}
        />
      </button>
      <IconButton
        tabIndex={-1}
        type="button"
        size="3"
        icon="Close"
        className="clear-button"
        accessibilityLabel="clear"
        onClick={handleClear}
        visible={!isEmpty}
      />
    </div>
  )
}
