import './Input.scss'
import React, { useState } from 'react'
import { Icon, IconType } from './Icon'

export type InputVariant = 'primary'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  icon?: IconType
  helpText?: string
  variant?: InputVariant
  id: string
  errors?: string[]
}

export function Input({
  label,
  accessibilityLabel,
  hideLabel = false,
  icon,
  helpText,
  variant = 'primary',
  disabled,
  type = 'text',
  name,
  id,
  errors,
  ...props
}: InputProps): React.JSX.Element {
  const [showPassword, setShowPassword] = useState(false)
  const iconClass = icon ? 'with-icon' : ''
  const invalidClass = errors ? 'invalid' : ''
  const cssClasses = ['input', iconClass, invalidClass].join(' ')

  function handlePasswordIcon() {
    return showPassword ? 'ShowOff' : 'Show'
  }

  function handleInputType() {
    if (type !== 'password') return type

    return showPassword ? 'text' : 'password'
  }

  function handlePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  return (
    <div className={`input-group ${variant}`}>
      {!hideLabel && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input-container">
        {icon && <Icon className="left-icon" name={icon} />}
        <input
          id={id}
          className={cssClasses}
          disabled={disabled}
          type={handleInputType()}
          name={name}
          aria-label={accessibilityLabel || label}
          {...props}
        />
        {type === 'password' && (
          <Icon
            className="password-icon"
            name={handlePasswordIcon()}
            onClick={handlePasswordVisibility}
          />
        )}
      </div>
      {helpText && !errors && (
        <span className="input-help-text">{helpText}</span>
      )}
      {errors &&
        errors?.map((error, index) => {
          return (
            <span key={`error-${index}`} className="input-help-text">
              {error}
            </span>
          )
        })}
    </div>
  )
}
