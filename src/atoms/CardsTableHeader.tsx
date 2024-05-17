import { classNames } from '../utils/classNames'
import { Alignment } from './CardsTableCell'

export interface CardsTableHeaderProps
  extends React.ComponentPropsWithoutRef<'th'> {
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
  const cssClasses = classNames('header', `alignment-${align}`, className, {
    actions,
  })
  return (
    <th scope="col" role="columnheader" className={cssClasses} {...props}>
      {children}
    </th>
  )
}
