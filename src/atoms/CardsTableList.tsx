import './CardsTableList.scss'
import { Icon, IconType } from './Icon'

export type Variant = 'primary'
export enum SorterState {
  Ascending = 'order-asc',
  Descending = 'order-desc',
  Inactive = 'no-order',
}
export type Header = { label: string; icon?: IconType; sorter?: SorterState }
export type Data = {
  [key: string]: string
}
export type Row = { id: string; isDisabled: boolean; data: Data }

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
  const cssClasses = ['cards-table-list', variant].join(' ')

  return (
    <table summary={summary} role="table" className={cssClasses}>
      <thead role="rowgroup">
        <tr role="row">
          {headers.map((header) => {
            const { icon, sorter } = header
            return (
              <th
                scope="col"
                role="columnheader"
                className="header"
                key={header.label}
              >
                <div className="container">
                  <div className="title-container">
                    <span>{header.label}</span>
                    {icon && <Icon name={icon} />}
                  </div>
                  {sorter && <Icon name="Sorter" className={sorter} />}
                </div>
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody role="rowgroup">
        {rows.map((row) => {
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
