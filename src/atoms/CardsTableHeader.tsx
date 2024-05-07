import { classNames } from '@/utils/classNames'

export interface CardsTableHeaderProps
  extends React.ComponentPropsWithoutRef<'th'> {}

export function CardsTableHeader({
  children,
  className,
  ...props
}: CardsTableHeaderProps) {
  const cssClasses = classNames('header', className)
  return (
    <th scope="col" role="columnheader" className={cssClasses} {...props}>
      {children}
    </th>
  )
}
