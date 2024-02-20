import { Icon } from './Icon'
import { Header, Order } from './CardsTableList'

export interface CardsTableListHeaderProps {
  header: Header
  order: Order
  onClick: () => void
}

export function CardsTableListHeader({
  header,
  order,
  onClick,
}: CardsTableListHeaderProps) {
  return (
    <th
      scope="col"
      role="columnheader"
      className={`header ${header.isSortable ? 'sortable' : ''}`}
      aria-sort={order}
      onClick={onClick}
    >
      <div className="container">
        <div className="title-container">
          <span>{header.label}</span>
          {header.icon && <Icon name={header.icon} />}
        </div>
        {header.isSortable && <Icon name="Sorter" className={order} />}
      </div>
    </th>
  )
}
