import './CardsTable.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export interface CardsTableRowProps extends React.ComponentPropsWithoutRef<'tr'> {
  isDisabled?: boolean
  isActive?: boolean
}

export function CardsTableRow({
  isDisabled: disabled = false,
  isActive: active = false,
  children,
  ...props
}: CardsTableRowProps): React.JSX.Element {
  return (
    <tr
      role="row"
      className={classNames('cards-table-row', {
        disabled,
        active,
      })}
      {...props}
    >
      {children}
    </tr>
  )
}
