import { classNames } from '../../utils/classNames'
import './CardsTable.scss'

export type Variant = 'primary'

export interface CardsTableProps
  extends React.ComponentPropsWithoutRef<'table'> {
  variant?: Variant
  withTitle?: boolean
  vertically?: boolean
}

export function CardsTable({
  className,
  summary,
  variant = 'primary',
  withTitle = false,
  vertically = false,
  children,
  ...props
}: CardsTableProps): React.JSX.Element {
  const cssClasses = classNames('cards-table-list', variant, className, {
    'with-title': withTitle,
    vertically: vertically,
  })
  return (
    <table summary={summary} role="table" className={cssClasses} {...props}>
      {children}
    </table>
  )
}
