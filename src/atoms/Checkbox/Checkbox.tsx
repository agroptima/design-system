import './Checkbox.scss'
import React, { useEffect, useRef } from 'react'
import { classNames } from '../../utils/classNames'
import { Label } from '../Label'
import { CheckboxCheckedIcon } from './CheckboxCheckedIcon'
import { CheckboxDisabledCheckedIcon } from './CheckboxDisabledCheckedIcon'
import { CheckboxDisabledIcon } from './CheckboxDisabledIcon'
import { CheckboxDisabledIndeterminateIcon } from './CheckboxDisabledIndeterminateIcon'
import { CheckboxIndeterminateIcon } from './CheckboxIndeterminateIcon'
import { CheckboxUncheckedHoverIcon } from './CheckboxUncheckedHoverIcon'
import { CheckboxUncheckedIcon } from './CheckboxUncheckedIcon'

export type Variant = 'primary'

type InputPropsWithoutChildren = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'children'
>

export interface CheckboxProps extends InputPropsWithoutChildren {
  accessibilityLabel?: string
  hideLabel?: boolean
  variant?: Variant
  id?: string
  indeterminate?: boolean
  children?: React.ReactNode
}

export function Checkbox({
  accessibilityLabel,
  hideLabel = false,
  disabled,
  variant = 'primary',
  id,
  indeterminate = false,
  name,
  className,
  children,
  ...props
}: CheckboxProps) {
  const identifier = id || name

  return (
    <div
      className={classNames('checkbox-group', variant, className, {
        disabled,
        indeterminate,
      })}
    >
      <div className="checkbox-wrapper">
        <input
          id={identifier}
          name={name}
          type="checkbox"
          className="checkbox-input"
          disabled={disabled}
          aria-label={accessibilityLabel || `${name} checkbox`}
          {...props}
        />
        <CheckboxUncheckedIcon
          className="checkbox-icon checkbox-icon--unchecked"
          aria-hidden="true"
        />
        <CheckboxUncheckedHoverIcon
          className="checkbox-icon checkbox-icon--unchecked-hover"
          aria-hidden="true"
        />
        <CheckboxCheckedIcon
          className="checkbox-icon checkbox-icon--checked"
          aria-hidden="true"
        />
        <CheckboxIndeterminateIcon
          className="checkbox-icon checkbox-icon--indeterminate"
          aria-hidden="true"
        />
        <CheckboxDisabledIndeterminateIcon
          className="checkbox-icon checkbox-icon--disabled-indeterminate"
          aria-hidden="true"
        />
        <CheckboxDisabledIcon
          className="checkbox-icon checkbox-icon--disabled"
          aria-hidden="true"
        />
        <CheckboxDisabledCheckedIcon
          className="checkbox-icon checkbox-icon--disabled-checked"
          aria-hidden="true"
        />
      </div>
      <Label
        htmlFor={identifier}
        required={props.required}
        disabled={disabled}
        className={classNames({ 'visually-hidden': hideLabel })}
        aria-labelledby={identifier}
      >
        {children}
      </Label>
    </div>
  )
}
