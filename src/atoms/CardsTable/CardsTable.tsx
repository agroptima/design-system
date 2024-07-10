import { classNames } from '../../utils/classNames'
import './CardsTable.scss'

export type Variant = 'primary'

export interface CardsTableProps
  extends React.ComponentPropsWithoutRef<'table'> {
  variant?: Variant
  withTitle?: boolean
}

export function CardsTable({
  className,
  summary,
  variant = 'primary',
  withTitle = false,
  children,
  ...props
}: CardsTableProps): React.JSX.Element {
  const cssClasses = classNames('cards-table-list', variant, className, {
    'with-title': withTitle,
  })
  return (
    <table summary={summary} role="table" className={cssClasses} {...props}>
      {children}
    </table>
  )
}
