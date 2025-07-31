import './Select.scss'
import React, { type RefObject, useRef } from 'react'
import { classNames } from '../../utils/classNames'
import { HelpText } from '../HelpText/HelpText'
import { Label } from '../Label'

export type Variant = 'primary'

type InputPropsWithoutOnChange = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'onChange'
>

export interface BaseSelectProps extends InputPropsWithoutOnChange {
  name?: string
  id?: string
  helpText?: string
  errors?: string[]
  placeholder?: string
  label: string
  children?: React.ReactNode
  variant?: Variant
  className?: string
  disabled?: boolean
  required?: boolean
  hideLabel?: boolean
  fullWidth?: boolean
  isEmpty?: boolean
  selectRef?: RefObject<HTMLDivElement | null>
}

export function BaseSelect({
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
  isEmpty,
  selectRef,
  ...props
}: BaseSelectProps): React.JSX.Element {
  const isInvalid = Boolean(errors?.length)
  const identifier = id || name

  const cssClasses = classNames('select-group', variant, className, {
    disabled,
    filled: !isEmpty,
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
    </div>
  )
}
