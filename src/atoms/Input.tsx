import './Input.scss'
import React, { useState } from 'react'
import { classNames } from '../utils/classNames'
import { IconButton } from './Button'
import { HelpText } from './HelpText'
import type { IconType } from './Icon'
import { Icon } from './Icon'
import { Label } from './Label'

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
  rightIcon,
  ...props
}: InputProps): React.JSX.Element {
  const identifier = id || name
  const [showPassword, setShowPassword] = useState(false)

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
        <Label required={props.required} htmlFor={identifier}>
          {label}
        </Label>
      )}

      <div className="input-container">
        {icon && <Icon className="left-icon" name={icon} />}
        <input
          id={identifier}
          disabled={disabled}
          type={handleInputType()}
          name={name}
          aria-label={accessibilityLabel || label}
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
      <HelpText helpText={helpText} errors={errors} />
    </div>
  )
}
