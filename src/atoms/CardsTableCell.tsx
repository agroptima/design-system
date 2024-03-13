import './CardsTableList.scss'
import React from 'react'

export interface CardsTableCellProps
  extends React.ComponentPropsWithoutRef<'td'> {}

export function CardsTableCell({
  children,
  ...props
}: CardsTableCellProps): React.JSX.Element {
  return (
    <td role="cell" className="cell" {...props}>
      {children}
    </td>
  )
}
