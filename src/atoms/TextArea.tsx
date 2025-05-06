import './Input.scss'
import React from 'react'
import { classNames } from '../utils/classNames'
import { HelpText } from './HelpText'
import { Label } from './Label'

export type TextAreaVariant = 'primary'

export interface TextAreaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  helpText?: string
  variant?: TextAreaVariant
  id?: string
  errors?: string[]
}

export function TextArea({
  id,
  label,
  className,
  accessibilityLabel,
  hideLabel = false,
  helpText,
  variant = 'primary',
  disabled,
  name,
  errors,
  ...props
}: TextAreaProps) {
  const identifier = id || name
  return (
    <div
      className={classNames('input-group', variant, className, {
        invalid: errors?.length,
      })}
    >
      {!hideLabel && (
        <Label required={props.required} htmlFor={identifier}>
          {label}
        </Label>
      )}
      <div className="input-container">
        <textarea
          id={identifier}
          disabled={disabled}
          name={name}
          aria-label={accessibilityLabel || label}
          {...props}
        />
      </div>
      <HelpText helpText={helpText} errors={errors} />
    </div>
  )
}
