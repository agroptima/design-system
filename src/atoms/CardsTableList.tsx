import './CardsTableList.scss'
import React, { useState } from 'react'
import { sortBy } from '../utils/sort'
import { IconType } from './Icon'
import { CardsTableListHeader } from './CardsTableListHeader'
import { CardsTableListRow } from './CardsTableListRow'

export type Variant = 'primary'

export type Header = {
  label: string
  icon?: IconType
  columnId: string
  isSortable?: boolean
}
export type Column = {
  [key: string]: string
}
export type Row = { id: string; isDisabled?: boolean; columns: Column }

export enum Order {
  Ascending = 'ascending',
  Descending = 'descending',
  None = 'none',
}

export type SortState = { columnId: string; order: Order }

export interface CardsTableListProps
  extends React.ComponentPropsWithoutRef<'table'> {
  headers: Header[]
  rows: Row[]
  variant?: Variant
}

export function CardsTableList({
  headers,
  rows,
  summary,
  variant = 'primary',
}: CardsTableListProps): React.JSX.Element {
  const [sortState, setSortState] = useState<SortState | null>(() => {
    return headers[0]?.isSortable
      ? { columnId: headers[0].columnId, order: Order.Ascending }
      : null
  })

  const cssClasses = ['cards-table-list', variant].join(' ')

  function checkColumnOrder(columnId: string) {
    if (sortState?.columnId === columnId) {
      return sortState.order
    }
    return Order.None
  }

  function applySort(columnId: string) {
    if (!headers.find((header) => header.columnId === columnId)?.isSortable) {
      return
    }

    setSortState({
      columnId,
      order:
        checkColumnOrder(columnId) === Order.Ascending
          ? Order.Descending
          : Order.Ascending,
    })
  }
  const sortedRows = sortState?.columnId
    ? sortBy({
        rows,
        prop: sortState?.columnId,
        order: sortState?.order,
      })
    : rows
  return (
    <table summary={summary} role="table" className={cssClasses}>
      <thead role="rowgroup">
        <tr role="row">
          {headers.map((header) => (
            <CardsTableListHeader
              key={header.columnId}
              header={header}
              order={checkColumnOrder(header.columnId)}
              onClick={() => applySort(header.columnId)}
            />
          ))}
        </tr>
      </thead>
      <tbody role="rowgroup">
        {sortedRows.map((row: Row) => (
          <CardsTableListRow key={row.id} {...row} />
        ))}
      </tbody>
    </table>
  )
}
