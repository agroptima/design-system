import { classNames } from '../utils/classNames'
import './CardsTable.scss'
import React from 'react'

export enum Alignment {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export interface CardsTableCellProps
  extends React.ComponentPropsWithoutRef<'td'> {
  noWrap?: boolean
  align?: Alignment
  actions?: boolean
}

export function CardsTableCell({
  noWrap = false,
  actions = false,
  align = Alignment.Left,
  children,
  className,
  ...props
}: CardsTableCellProps): React.JSX.Element {
  const cssClasses = classNames('cell', `alignment-${align}`, className, {
    'no-wrap': noWrap,
    actions,
  })
  return (
    <td role="cell" className={cssClasses} {...props}>
      {children}
    </td>
  )
}
