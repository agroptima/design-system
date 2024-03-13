import './CardsTableList.scss'

export type Variant = 'primary'

export interface CardsTableProps
  extends React.ComponentPropsWithoutRef<'table'> {
  variant?: Variant
}

export function CardsTable({
  summary,
  variant = 'primary',
  children,
  ...props
}: CardsTableProps): React.JSX.Element {
  const cssClasses = ['cards-table-list', variant].join(' ')

  return (
    <table summary={summary} role="table" className={cssClasses} {...props}>
      {children}
    </table>
  )
}
