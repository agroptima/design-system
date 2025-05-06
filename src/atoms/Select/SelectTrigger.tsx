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
  isEmpty,
  children,
}: SelectTriggerProps) {
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
          visible={isEmpty}
        />
      </button>
      <IconButton
        size="3"
        icon="Close"
        className="clear-button"
        accessibilityLabel="close"
        onClick={onClear}
        visible={!isEmpty}
      />
    </div>
  )
}
