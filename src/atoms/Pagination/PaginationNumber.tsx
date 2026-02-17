import './Pagination.scss'
import type { LinkProps } from 'next/link'
import React from 'react'
import { classNames } from '../../utils/classNames'
import type { ButtonProps } from '../Button'
import { Button } from '../Button'

export type Variant = 'primary'

export interface CustomProps {
  href: string
  selected?: boolean
  label: string
  accessibilityLabel?: string
  variant?: Variant
}

export type PaginationNumberProps = CustomProps & ButtonProps & LinkProps

export function PaginationNumber({
  label,
  accessibilityLabel,
  variant = 'primary',
  href,
  className,
  disabled,
  selected = false,
  prefetch = false,
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
      accessibilityLabel={accessibilityLabel}
      className={cssClasses}
      aria-current={selected}
      prefetch={prefetch}
      {...props}
    />
  )
}
