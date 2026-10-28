import './Input.scss'
import React, { useState } from 'react'
import { classNames } from '../utils/classNames'
import { IconButton } from './Button'
import { HelpText } from './HelpText'
import type { IconType } from './Icon'
import { Icon } from './Icon'
import { Label } from './Label'

export type InputVariant = 'primary' | 'borderless'

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  icon?: IconType
  helpText?: string
  variant?: InputVariant
  id?: string
  suffix?: React.ReactNode
  errors?: string[]
  rightIcon?: IconType
  fullWidth?: boolean
  ellipsis?: boolean
  loading?: boolean
  invalid?: boolean
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
  rightIcon,
  fullWidth = false,
  ellipsis = false,
  loading = false,
  invalid = false,
  readOnly,
  ...props
}: InputProps): React.JSX.Element {
  const identifier = id || name
  const isInvalid = invalid || Boolean(errors?.length)
  const [showPassword, setShowPassword] = useState(false)

  function handlePasswordIcon() {
    return showPassword ? 'ShowOff' : 'Show'
  }

  function getPasswordToggleLabel() {
    return showPassword ? 'Hide password' : 'Show password'
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
        invalid: isInvalid,
        hidden: type === 'hidden',
        'full-width': fullWidth,
        ellipsis: ellipsis,
        loading: loading,
      })}
    >
      {!hideLabel && (
        <Label required={props.required} htmlFor={identifier}>
          {label}
        </Label>
      )}

      <div className="input-container">
        {icon && <Icon className="left-icon" name={icon} decorative />}
        {type === 'file' && (
          <Icon className="file-icon" name="Upload" size="3" decorative />
        )}
        <input
          id={identifier}
          disabled={disabled}
          readOnly={loading || readOnly}
          aria-busy={loading || undefined}
          aria-invalid={isInvalid || undefined}
          type={handleInputType()}
          name={name}
          aria-label={accessibilityLabel || label}
          title={accessibilityLabel || label}
          className={classNames({
            'primary-outlined': type === 'file',
          })}
          {...props}
        />
        {rightIcon && (
          <Icon className="right-icon" name={rightIcon} decorative />
        )}
        {suffix && <span className="input-suffix">{suffix}</span>}
        {type === 'password' && (
          <IconButton
            type="button"
            accessibilityLabel={getPasswordToggleLabel()}
            className="password-icon"
            icon={handlePasswordIcon()}
            onClick={handlePasswordVisibility}
          />
        )}
      </div>
      <HelpText helpText={helpText} errors={errors} />
    </div>
  )
}
