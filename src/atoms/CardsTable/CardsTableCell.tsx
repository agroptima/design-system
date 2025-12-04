import './CardsTable.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export enum Alignment {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export interface CardsTableCellProps extends React.ComponentPropsWithoutRef<'td'> {
  noWrap?: boolean
  align?: Alignment
  actions?: boolean
  floatingLeftMobile?: boolean
  floatingRightMobile?: boolean
  titleWithActions?: number
}

export function CardsTableCell({
  noWrap = false,
  actions = false,
  titleWithActions = 0,
  align = Alignment.Left,
  floatingLeftMobile = false,
  floatingRightMobile = false,
  children,
  className,
  ...props
}: CardsTableCellProps): React.JSX.Element {
  const titleActions =
    titleWithActions > 0 ? `title-actions-${titleWithActions}` : ''
  const cssClasses = classNames(
    'cards-table-inner-cell',
    `alignment-${align}`,
    titleActions,
    className,
    {
      'no-wrap': noWrap,
    },
  )

  const actionsStopPropagation = actions
    ? { onClick: (e: React.MouseEvent) => e.stopPropagation() }
    : {}

  return (
    <td
      role="cell"
      className={classNames('cards-table-cell', {
        actions,
        'floating-left-mobile': floatingLeftMobile,
        'floating-right-mobile': floatingRightMobile,
      })}
      {...actionsStopPropagation}
      {...props}
    >
      <div className={cssClasses}>{children}</div>
    </td>
  )
}
