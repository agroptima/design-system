import './Actions.scss'
import { classNames } from '../../utils/classNames'

export interface ActionsProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode
}

export function Actions({ className, children }: ActionsProps) {
  return (
    <div className={classNames('footer-actions', className)}>{children}</div>
  )
}
