import React from 'react'
import './CardsTableList.scss'

export interface CardsTableRowProps
  extends React.ComponentPropsWithoutRef<'tr'> {
  isDisabled?: boolean
}

export function CardsTableRow({
  isDisabled = false,
  children,
  ...props
}: CardsTableRowProps): React.JSX.Element {
  const disabledClass = isDisabled ? 'disabled' : ''
  return (
    <tr role="row" className={`row ${disabledClass}`} {...props}>
      {children}
    </tr>
  )
}
