import React from 'react'
import { classNames } from '../../utils/classNames'
import { IconButton } from '../Button'
import { Icon } from '../Icon'

export interface SelectTriggerProps {
  id?: string
  label: string
  clearAccessibilityLabel: string
  invalid: boolean
  disabled?: boolean
  isOpen: boolean
  isEmpty: boolean
  hideLabel?: boolean
  onClick: () => void
  onClear: (event: React.MouseEvent) => void
  children: React.ReactNode
  buttonRef: React.RefObject<HTMLButtonElement | null>
}

export function SelectTrigger({
  id,
  label,
  invalid,
  disabled,
  isOpen,
  hideLabel = false,
  clearAccessibilityLabel,
  onClick,
  onClear,
  isEmpty,
  children,
  buttonRef,
}: SelectTriggerProps) {
  const handleClear = (event: React.MouseEvent) => {
    if (disabled) return
    onClear(event)
  }
  return (
    <div className={classNames('select-container', { disabled })}>
      <button
        id={id}
        ref={buttonRef}
        type="button"
        role="combobox"
        className="select"
        tabIndex={0}
        onClick={onClick}
        aria-label={hideLabel ? label : undefined}
        aria-controls={`${id}-options`}
        aria-expanded={isOpen}
        aria-invalid={invalid}
        disabled={disabled}
      >
        <span>{children}</span>
        <Icon
          size="3"
          name={isOpen ? 'AngleUp' : 'AngleDown'}
          visible={isEmpty}
          decorative
        />
      </button>
      <IconButton
        type="button"
        tabIndex={-1}
        size="3"
        icon="Close"
        className="clear-button"
        accessibilityLabel={clearAccessibilityLabel}
        onClick={handleClear}
        visible={!isEmpty}
      />
    </div>
  )
}
