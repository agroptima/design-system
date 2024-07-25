import { classNames } from '../utils/classNames'
import './DetailItem.scss'

export type Variant = 'primary'

export interface DetailItemProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: Variant
  title: string
}

export function DetailItem({
  id,
  className,
  variant = 'primary',
  title,
  children,
  ...props
}: DetailItemProps): React.JSX.Element {
  return (
    <div className={classNames('detail-item', variant, className)} {...props}>
      <div className="title">{title}</div>
      <div className="information">{children}</div>
    </div>
  )
}
