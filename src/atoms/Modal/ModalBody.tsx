import './Modal.scss'
import { classNames } from '../../utils/classNames'

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ModalBody({ className, children, ...props }: ModalBodyProps) {
  return (
    <div className={classNames('modal-body', className)} {...props}>
      {children}
    </div>
  )
}
