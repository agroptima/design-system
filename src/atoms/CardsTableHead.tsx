import './CardsTableList.scss'
import React from 'react'

export interface CardsTableHeadProps
  extends React.ComponentPropsWithoutRef<'thead'> {}

export function CardsTableHead({
  children,
  ...props
}: CardsTableHeadProps): React.JSX.Element {
  return (
    <thead role="rowgroup" {...props}>
      {children}
    </thead>
  )
}
