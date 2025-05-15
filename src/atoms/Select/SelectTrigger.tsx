import React, { useEffect, useRef } from 'react'
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
  handleCurrentFocus: () => void
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
  handleCurrentFocus,
  hasFocus,
  children,
}: SelectTriggerProps) {
  const handleClear = (event: React.MouseEvent) => {
    if (disabled) return
    onClear(event)
  }
  const ref = useRef(null)
  useEffect(() => {
    if (hasFocus && ref.current) {
      ref.current.focus()
    }
  }, [hasFocus])

  return (
    <div
      className="select-container"
      id="select-container"
      tabIndex={hasFocus ? 0 : -1}
      ref={ref}
      onKeyDown={handleCurrentFocus}
    >
      <button
        id={id}
        type="button"
        role="combobox"
        className="select"
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
