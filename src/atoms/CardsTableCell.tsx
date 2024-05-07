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
}

export function CardsTableCell({
  noWrap = false,
  align = Alignment.Left,
  children,
  className,
  ...props
}: CardsTableCellProps): React.JSX.Element {
  const cssClasses = classNames('cell', `alignment-${align}`, className, {
    'no-wrap': noWrap,
  })
  return (
    <td role="cell" className={cssClasses} {...props}>
      {children}
    </td>
  )
}
