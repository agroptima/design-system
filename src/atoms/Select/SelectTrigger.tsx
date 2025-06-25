import React from 'react'
import { IconButton } from '../Button'
import { Icon } from '../Icon'

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
  isClereable?: boolean
  children: React.ReactNode
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
  isClereable = true,
  isEmpty,
  children,
}: SelectTriggerProps) {
  const handleClear = (event: React.MouseEvent) => {
    if (disabled) return
    onClear(event)
  }
  return (
    <div className="select-container">
      <button
        id={id}
        type="button"
        role="combobox"
        className="select"
        tabIndex={0}
        onClick={onClick}
        aria-label={accessibilityLabel || label}
        aria-controls={`${id}-options`}
        aria-expanded={isOpen}
        aria-live="assertive"
        aria-invalid={invalid}
        disabled={disabled}
      >
        <span>{children}</span>
        <Icon
          size="3"
          name={isOpen ? 'AngleUp' : 'AngleDown'}
          visible={isEmpty || !isClereable}
        />
      </button>
      <IconButton
        type="button"
        size="3"
        icon="Close"
        className="clear-button"
        accessibilityLabel="clear"
        onClick={handleClear}
        visible={!isEmpty && isClereable}
      />
    </div>
  )
}
