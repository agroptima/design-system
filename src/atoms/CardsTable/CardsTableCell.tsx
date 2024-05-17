import { classNames } from '../../utils/classNames'
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
  titleWithActions?: number
}

export function CardsTableCell({
  noWrap = false,
  actions = false,
  titleWithActions = 0,
  align = Alignment.Left,
  children,
  className,
  ...props
}: CardsTableCellProps): React.JSX.Element {
  const titleActions =
    titleWithActions > 0 ? `title-actions-${titleWithActions}` : ''
  const cssClasses = classNames(
    'cell',
    `alignment-${align}`,
    titleActions,
    className,
    {
      'no-wrap': noWrap,
      actions,
    },
  )
  return (
    <td role="cell" className={cssClasses} {...props}>
      {children}
    </td>
  )
}
