import type { IconType } from './Icon'
import React, { useState } from 'react'
import { Icon } from './Icon'
import { IconButton } from './Button/IconButton'
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
  suffix?: string
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
  suffix,
  name,
  id,
  errors,
  ...props
}: InputProps): React.JSX.Element {
  const identifier = id || name
  const [showPassword, setShowPassword] = useState(false)
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
    <div
      className={classNames('input-group', variant, className, {
        invalid: errors?.length,
      })}
    >
      {!hideLabel && (
        <label className="input-label" htmlFor={identifier}>
          {label}
        </label>
      )}
      <div className="input-container">
        {icon && <Icon className="left-icon" name={icon} />}
        <input
          id={identifier}
          disabled={disabled}
          type={handleInputType()}
          name={name}
          aria-label={accessibilityLabel || label}
          {...props}
        />
        {suffix && <span className="input-suffix">{suffix}</span>}
        {type === 'password' && (
          <IconButton
            accessibilityLabel={handlePasswordIcon()}
            className="password-icon"
            icon={handlePasswordIcon()}
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
