import { classNames } from '../../utils/classNames'
import './Popover.scss'

export interface PopoverMenuProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export function PopoverMenu({
  children,
  className,
  ...props
}: PopoverMenuProps) {
  const cssClasses = classNames('popover-menu', className)

  return (
    <div role="menu" className={cssClasses} {...props}>
      {children}
    </div>
  )
}
