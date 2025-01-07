import './Pagination.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

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
