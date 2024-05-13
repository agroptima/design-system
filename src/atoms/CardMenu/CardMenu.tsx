export interface CardMenuProps extends React.ComponentPropsWithoutRef<'div'> {}

export function CardMenu({
  children,
  ...props
}: CardMenuProps): React.JSX.Element {
  return (
    <div role="menu" {...props}>
      {children}
    </div>
  )
}
