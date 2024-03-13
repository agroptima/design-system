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
  ...props
}: CardsTableCellProps): React.JSX.Element {
  const cssClasses = [
    'cell',
    noWrap ? 'no-wrap' : '',
    `alignment-${align}`,
  ].join(' ')
  return (
    <td role="cell" className={cssClasses} {...props}>
      {children}
    </td>
  )
}
