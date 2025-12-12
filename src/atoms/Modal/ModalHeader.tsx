import './Modal.scss'
import { classNames } from '../../utils/classNames'

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

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
