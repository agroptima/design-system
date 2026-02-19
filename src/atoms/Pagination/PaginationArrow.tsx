import './Pagination.scss'
import type { LinkProps } from 'next/link'
import React from 'react'
import { classNames } from '../../utils/classNames'
import type { IconButtonProps } from '../Button'
import { IconButton } from '../Button'

export type Variant = 'primary'

export interface CustomProps extends LinkProps {
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
  prefetch = false,
  ...props
}: PaginationArrowProps): React.JSX.Element {
  const cssClasses = classNames(
    'pagination-arrow',
    'pagination-button',
    variant,
    className,
    {
      disabled: disabled,
    },
  )

  return (
    <IconButton
      disabled={disabled}
      href={disabled ? '#' : href}
      className={cssClasses}
      accessibilityLabel={accessibilityLabel}
      prefetch={prefetch}
      {...props}
    />
  )
}
