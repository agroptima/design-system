import './Input.scss'
import React, { useState } from 'react'
import { buildHelpText } from '../utils/buildHelpText'
import { classNames } from '../utils/classNames'
import { IconButton } from './Button'
import type { IconType } from './Icon'
import { Icon } from './Icon'

export type InputVariant = 'primary'

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  icon?: IconType
  helpText?: string
  variant?: InputVariant
  id?: string
  suffix?: string
  errors?: string[]
  required?: boolean
  rightIcon?: IconType
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
  required = false,
  rightIcon,
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
        file: type === 'file',
        invalid: errors?.length,
        hidden: type === 'hidden',
      })}
    >
      {!hideLabel && (
        <label
          className={classNames('input-label', {
            'is-required': required,
          })}
          htmlFor={identifier}
        >
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
          required={required}
          className={classNames({
            'primary-outlined': type === 'file',
          })}
          {...props}
        />
        {rightIcon && <Icon className="right-icon" name={rightIcon} />}
        {suffix && <span className="input-suffix">{suffix}</span>}
        {type === 'password' && (
          <IconButton
            type="button"
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
