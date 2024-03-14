export interface CardsTableHeaderProps
  extends React.ComponentPropsWithoutRef<'th'> {}

export function CardsTableHeader({
  children,
  className,
  ...props
}: CardsTableHeaderProps) {
  const cssClasses = ['header', className].join(' ')
  return (
    <th scope="col" role="columnheader" className={cssClasses} {...props}>
      {children}
    </th>
  )
}
