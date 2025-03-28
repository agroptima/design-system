import './CardsTable.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export interface CardsTableBodyProps
  extends React.ComponentPropsWithoutRef<'tbody'> {}

export function CardsTableBody({
  children,
  className,
  ...props
}: CardsTableBodyProps): React.JSX.Element {
  return (
    <tbody
      role="rowgroup"
      className={classNames('cards-table-body', className)}
      {...props}
    >
      {children}
    </tbody>
  )
}
