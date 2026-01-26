import './CheckableTag.scss'
import { classNames } from '../../utils/classNames'

export interface CheckableTagGroupProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export function CheckableTagGroup({
  className,
  children,
  ...props
}: CheckableTagGroupProps): React.JSX.Element {
  const cssClasses = classNames('checkable-tag-group', className)

  return (
    <div className={cssClasses} {...props}>
      {children}
    </div>
  )
}
