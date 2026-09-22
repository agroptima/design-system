import { classNames } from '../../utils/classNames'
import { Alignment } from './CardsTableCell'

export interface CardsTableHeaderProps extends React.ComponentPropsWithoutRef<'th'> {
  align?: Alignment
  actions?: boolean
  desktopOnly?: boolean
}

export function CardsTableHeader({
  children,
  className,
  align = Alignment.Left,
  actions = false,
  desktopOnly = false,
  ...props
}: CardsTableHeaderProps) {
  return (
    <th
      role="columnheader"
      className={classNames('cards-table-header', {
        'desktop-only': desktopOnly,
      })}
      {...props}
    >
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
