import { Row } from './CardsTableList'

export function CardsTableListRow({ isDisabled, columns, id }: Row) {
  const disabledClass = isDisabled ? 'disabled' : ''
  const cells = Object.entries(columns)
  return (
    <tr role="row" className={`row ${disabledClass}`}>
      {cells.map(([columnId, value]) => (
        <td role="cell" key={`${id}${columnId}`} className="cell">
          {value}
        </td>
      ))}
    </tr>
  )
}
