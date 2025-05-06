import './Label.scss'
import React, { type ComponentPropsWithoutRef, type JSX } from 'react'
import { classNames } from '../../utils/classNames'

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  required?: boolean
  disabled?: boolean
}

export function Label({
  className,
  children,
  required = false,
  disabled = false,
  ...props
}: LabelProps): JSX.Element {
  return (
    <label
      className={classNames('form-label', className, {
        'is-required': required,
        'is-disabled': disabled,
      })}
      {...props}
    >
      {children}
    </label>
  )
}
