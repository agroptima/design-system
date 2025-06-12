import './CardsTable.scss'
import { classNames } from '../../utils/classNames'

export type Variant = 'primary'

export interface CardsTableProps
  extends React.ComponentPropsWithoutRef<'table'> {
  variant?: Variant
  withTitle?: boolean
  isSticky?: boolean
}

export function CardsTable({
  className,
  summary,
  variant = 'primary',
  withTitle = false,
  isSticky = false,
  children,
  ...props
}: CardsTableProps): React.JSX.Element {
  const cssClasses = classNames('cards-table-list', variant, className, {
    'with-title': withTitle,
    'is-sticky': isSticky,
  })
  return (
    <table summary={summary} role="table" className={cssClasses} {...props}>
      {children}
    </table>
  )
}
