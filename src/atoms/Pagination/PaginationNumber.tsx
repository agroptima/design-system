import React from 'react'
import { classNames } from '../../utils/classNames'
import './Pagination.scss'
import { Button, ButtonProps } from '../Button'

export type Variant = 'primary'

export interface CustomProps {
  href: string
  selected?: boolean
  label: string
  accessibilityLabel?: string
  variant?: Variant
}

export type PaginationNumberProps = CustomProps & ButtonProps

export function PaginationNumber({
  label,
  accessibilityLabel,
  variant = 'primary',
  href,
  className,
  disabled,
  selected = false,
  ...props
}: PaginationNumberProps): React.JSX.Element {
  const cssClasses = classNames('pagination-button', variant, className, {
    disabled: disabled,
    selected: selected,
  })

  return (
    <Button
      label={label}
      disabled={disabled}
      href={disabled ? '#' : href}
      className={cssClasses}
      aria-current={selected}
      {...props}
    />
  )
}
