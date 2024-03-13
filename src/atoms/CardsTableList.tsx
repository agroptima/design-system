import './CardsTable.scss'
import React, { useState } from 'react'
import { sortBy } from '../utils/sort'
import { CardsTableHeader } from './CardsTableHeader'
import { CardsTableCell } from './CardsTableCell'
import { CardsTableRow } from './CardsTableRow'
import { Icon, IconType } from './Icon'
import { CardsTable } from './CardsTable'
import { CardsTableHead } from './CardsTableHead'
import { CardsTableBody } from './CardsTableBody'

export type Variant = 'primary'

export enum Order {
  Ascending = 'ascending',
  Descending = 'descending',
  None = 'none',
}

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
    <CardsTable summary={summary} variant={variant}>
      <CardsTableHead>
        <CardsTableRow>
          {headers.map((header) => (
            <CardsTableHeader
              key={header.columnId}
              aria-sort={checkColumnOrder(header.columnId)}
              className={header.isSortable ? 'sortable' : ''}
              onClick={() => applySort(header.columnId)}
            >
              <div className="container">
                <div>
                  <span>{header.label}</span>
                  {header.icon && <Icon name={header.icon} />}
                </div>
                {header.isSortable && (
                  <Icon
                    name="Sorter"
                    className={checkColumnOrder(header.columnId)}
                  />
                )}
              </div>
            </CardsTableHeader>
          ))}
        </CardsTableRow>
      </CardsTableHead>
      <CardsTableBody>
        {sortedRows.map((row: Row) => {
          const cells = Object.entries(row.columns)
          return (
            <CardsTableRow key={row.id} isDisabled={row.isDisabled}>
              {cells.map(([columnId, value]) => (
                <CardsTableCell key={`${row.id}${columnId}`}>
                  {value}
                </CardsTableCell>
              ))}
            </CardsTableRow>
          )
        })}
      </CardsTableBody>
    </CardsTable>
  )
}
