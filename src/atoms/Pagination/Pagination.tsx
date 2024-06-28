import React from 'react'
import { classNames } from '../../utils/classNames'
import './Pagination.scss'

type Size = 'small' | 'medium'

export interface PaginationProps
  extends React.ComponentPropsWithoutRef<'section'> {
  size?: Size
}

export function Pagination({
  size = 'medium',
  className,
  children,
  ...props
}: PaginationProps): React.JSX.Element {
  const cssClasses = classNames('pagination', className, {
    small: size === 'small',
  })

  return (
    <section role="navigation" className={cssClasses} {...props}>
      {children}
    </section>
  )
}
