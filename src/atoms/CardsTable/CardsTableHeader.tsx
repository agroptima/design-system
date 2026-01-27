import { classNames } from '../../utils/classNames'
import { Alignment } from './CardsTableCell'

export interface CardsTableHeaderProps extends React.ComponentPropsWithoutRef<'th'> {
  align?: Alignment
  actions?: boolean
}

export function CardsTableHeader({
  children,
  className,
  align = Alignment.Left,
  actions = false,
  ...props
}: CardsTableHeaderProps) {
  return (
    <th role="columnheader" className="cards-table-header" {...props}>
      <div
        className={classNames(
          'cards-table-inner-cell',
          `alignment-${align}`,
          className,
          {
            actions,
          },
        )}
      >
        {children}
      </div>
    </th>
  )
}
