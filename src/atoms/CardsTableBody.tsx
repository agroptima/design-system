import './CardsTable.scss'
import React from 'react'

export interface CardsTableBodyProps
  extends React.ComponentPropsWithoutRef<'tbody'> {}

export function CardsTableBody({
  children,
  ...props
}: CardsTableBodyProps): React.JSX.Element {
  return (
    <tbody role="rowgroup" {...props}>
      {children}
    </tbody>
  )
}
