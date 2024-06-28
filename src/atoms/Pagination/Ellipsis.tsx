import React from 'react'
import { classNames } from '../../utils/classNames'
import './Pagination.scss'

export interface EllipsisProps extends React.ComponentPropsWithoutRef<'span'> {}

export function Ellipsis({
  className,
  ...props
}: EllipsisProps): React.JSX.Element {
  const cssClasses = classNames('ellipsis', className)

  return (
    <span className={cssClasses} {...props}>
      ...
    </span>
  )
}
