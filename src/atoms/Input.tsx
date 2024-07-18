import React, { useState } from 'react'
import { Icon, IconType } from './Icon'
import { classNames } from '../utils/classNames'
import { buildHelpText } from '../utils/buildHelpText'
import './Input.scss'

export type InputVariant = 'primary'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  icon?: IconType
  helpText?: string
  variant?: InputVariant
  id?: string
  errors?: string[]
}

export function Input({
  label,
  accessibilityLabel,
  className,
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
  const identifier = id || name
  const [showPassword, setShowPassword] = useState(false)
  const cssClasses = classNames('input', {
    'with-icon': icon,
    invalid: errors?.length,
  })
  const helpTexts = buildHelpText(helpText, errors)

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
    <div className={classNames('input-group', variant, className)}>
      {!hideLabel && (
        <label className="input-label" htmlFor={identifier}>
          {label}
        </label>
      )}
      <div className="input-container">
        {icon && <Icon className="left-icon" name={icon} />}
        <input
          id={identifier}
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
      {helpTexts.map((helpText) => (
        <span key={`${identifier}-${helpText}`} className="input-help-text">
          {helpText}
        </span>
      ))}
    </div>
  )
}
