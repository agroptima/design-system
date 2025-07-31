import './Select.scss'
import React, { useRef } from 'react'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { classNames } from '../../utils/classNames'
import { HelpText } from '../HelpText/HelpText'
import { Label } from '../Label'

export type Variant = 'primary'

type InputPropsWithoutOnChange = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'onChange'
>

export interface BaseSelectProps extends InputPropsWithoutOnChange {
  selectedId: string
  name?: string
  id?: string
  helpText?: string
  errors?: string[]
  placeholder: string
  label: string
  children: React.ReactNode
  variant?: Variant
  className?: string
  disabled?: boolean
  required?: boolean
  hideLabel?: boolean
  fullWidth?: boolean
}

export function BaseSelect({
  selectedId = '',
  name,
  id,
  helpText,
  errors,
  placeholder,
  label,
  children,
  variant = 'primary',
  className,
  disabled,
  required,
  hideLabel = false,
  fullWidth = false,
  ...props
}: BaseSelectProps): React.JSX.Element {
  const { isOpen, close } = useOpen()
  const isInvalid = Boolean(errors?.length)
  const selectRef = useRef(null)
  const selectTriggerRef = useRef<HTMLButtonElement | null>(null)
  const handleClose = () => {
    if (!isOpen) return
    close()
    selectTriggerRef?.current?.focus()
  }
  useOutsideClick(selectRef, handleClose)
  const identifier = id || name

  const cssClasses = classNames('select-group', variant, className, {
    disabled,
    filled: selectedId !== '',
    invalid: isInvalid,
    'full-width': fullWidth,
  })

  return (
    <div className={cssClasses} ref={selectRef}>
      {!hideLabel && (
        <Label required={required} htmlFor={identifier}>
          {label}
        </Label>
      )}
      {children}
      <HelpText helpText={helpText} errors={errors} />
      <input type="hidden" name={name} value={selectedId} {...props} />
    </div>
  )
}
