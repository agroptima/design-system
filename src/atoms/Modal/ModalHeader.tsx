import { classNames } from '../../utils/classNames'
import './Modal.scss'

export interface ModalHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function ModalHeader({
  className,
  children,
  ...props
}: ModalHeaderProps) {
  return (
    <div className={classNames('modal-header', className)} {...props}>
      {children}
    </div>
  )
}
