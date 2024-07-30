import { classNames } from '../utils/classNames'
import './DetailItem.scss'

export type Variant = 'primary'

export enum Alignment {
  Left = 'left',
  Right = 'right',
}

export interface DetailItemProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: Variant
  title: string
  align?: Alignment
}

export function DetailItem({
  id,
  className,
  variant = 'primary',
  title,
  align = Alignment.Left,
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
      )}
      {...props}
    >
      <div className="title">{title}</div>
      <div className="information">{children}</div>
    </div>
  )
}
