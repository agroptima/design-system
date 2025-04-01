import './CardsTable.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export interface CardsTableHeadProps
  extends React.ComponentPropsWithoutRef<'thead'> {}

export function CardsTableHead({
  children,
  className,
  ...props
}: CardsTableHeadProps): React.JSX.Element {
  return (
    <thead
      role="rowgroup"
      className={classNames('cards-table-head', className)}
      {...props}
    >
      {children}
    </thead>
  )
}
