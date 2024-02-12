import './CardsTableList.scss'
import React, { useState } from 'react'
import { sortBy } from '../utils/sort'
import { Icon, IconType } from './Icon'

export type Variant = 'primary'

export type Header = {
  label: string
  icon?: IconType
  dataProp: string
  isSortable: boolean
}
export type Data = {
  [key: string]: string
}
export type Row = { id: string; isDisabled: boolean; data: Data }

export enum Order {
  Ascending = 'ascending',
  Descending = 'descending',
  None = 'none',
}

export type HeaderSortState = { index: number; order: Order }
export type RowSortState = { sortingProp: string; order: Order }

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
  const [headersSortState, setHeadersSortState] = useState<HeaderSortState[]>(
    () => initHeadersSortState(),
  )
  const [rowsSortState, setRowsSortState] = useState<RowSortState>(() =>
    initRowsSortState(),
  )

  const cssClasses = ['cards-table-list', variant].join(' ')

  function initHeadersSortState() {
    const headersSortState: HeaderSortState[] = []
    let order: Order
    const firstHeader: number = 0

    headers.map((header, i) => {
      if (header.isSortable) {
        order = i === firstHeader ? Order.Ascending : Order.None
        headersSortState.push({ index: i, order: order })
      }
    })

    return headersSortState
  }

  function initRowsSortState() {
    const firstColumn: number = 0
    const sortingProp = headers[firstColumn]?.dataProp

    return { sortingProp: sortingProp, order: Order.Ascending }
  }

  function checkHeaderOrder(i: number) {
    return headersSortState.find((header) => header.index === i)?.order
  }

  function applySort(selectedIndex: number) {
    if (!headers[selectedIndex].isSortable) return

    let newSortState: Order

    if (
      checkHeaderOrder(selectedIndex) === Order.Descending ||
      checkHeaderOrder(selectedIndex) === Order.None
    ) {
      newSortState = Order.Ascending
    } else {
      newSortState = Order.Descending
    }

    setHeadersSortState(
      headersSortState.map((header) => {
        if (header.index === selectedIndex) {
          return {
            ...header,
            order: newSortState,
          }
        } else {
          return {
            ...header,
            order: Order.None,
          }
        }
      }),
    )
    setRowsSortState({
      sortingProp: headers[selectedIndex]?.dataProp,
      order: newSortState,
    })
  }

  return (
    <table summary={summary} role="table" className={cssClasses}>
      <thead role="rowgroup">
        <tr role="row">
          {headers.map((header, i) => {
            const { icon, isSortable } = header
            return (
              <th
                scope="col"
                role="columnheader"
                className={`header ${checkHeaderOrder(i) || `not-sortable`}`}
                key={header.label}
                aria-sort={checkHeaderOrder(i)}
                onClick={() => applySort(i)}
              >
                <div className="container">
                  <div className="title-container">
                    <span>{header.label}</span>
                    {icon && <Icon name={icon} />}
                  </div>
                  {isSortable && (
                    <Icon name="Sorter" className={checkHeaderOrder(i)} />
                  )}
                </div>
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody role="rowgroup">
        {sortBy({
          rows,
          prop: rowsSortState.sortingProp,
          order: rowsSortState.order,
        }).map((row: Row) => {
          const { data, isDisabled } = row
          const disabledClass = isDisabled ? 'disabled' : ''
          return (
            <tr role="row" className={`row ${disabledClass}`} key={row.id}>
              {Object.getOwnPropertyNames(data).map((property) => {
                return (
                  <td role="cell" key={row.id + property} className="cell">
                    {data[property]}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
