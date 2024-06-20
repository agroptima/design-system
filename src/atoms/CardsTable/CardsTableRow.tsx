import React from 'react'
import './CardsTable.scss'
import { classNames } from '../../utils/classNames'

export interface CardsTableRowProps
  extends React.ComponentPropsWithoutRef<'tr'> {
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
      className={classNames('row', {
        disabled,
        active,
        action: Boolean(props.onClick),
      })}
      {...props}
    >
      {children}
    </tr>
  )
}
