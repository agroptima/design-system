import type { IconButtonProps } from '../Button'
import React from 'react'
import { classNames } from '../../utils/classNames'
import { IconButton } from '../Button'
import './Pagination.scss'

export type Variant = 'primary'

export interface CustomProps {
  href: string
  accessibilityLabel?: string
  variant?: Variant
}

export type PaginationArrowProps = CustomProps & IconButtonProps

export function PaginationArrow({
  accessibilityLabel,
  variant = 'primary',
  href,
  className,
  disabled,
  ...props
}: PaginationArrowProps): React.JSX.Element {
  const cssClasses = classNames('pagination-button', variant, className, {
    disabled: disabled,
  })

  return (
    <IconButton
      disabled={disabled}
      href={disabled ? '#' : href}
      className={cssClasses}
      accessibilityLabel={accessibilityLabel}
      {...props}
    />
  )
}
