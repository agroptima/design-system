import './DetailItem.scss'
import { classNames } from '../utils/classNames'

export type Variant = 'primary'

export enum Alignment {
  Left = 'left',
  Right = 'right',
}

export interface DetailItemProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: Variant
  title?: string
  align?: Alignment
  singleLine?: boolean
}

export function DetailItem({
  id,
  className,
  variant = 'primary',
  title,
  align = Alignment.Left,
  singleLine = false,
  children,
  ...props
}: DetailItemProps): React.JSX.Element {
  return (
    <div
      className={classNames(
        'detail-item',
        variant,
        `alignment-${align}`,
        className,
        { 'single-line': singleLine },
      )}
      {...props}
    >
      {title && <div className="title">{title}</div>}
      <div className="information">{children}</div>
    </div>
  )
}
