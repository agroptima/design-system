import './Modal.scss'
import { classNames } from '../../utils/classNames'

export interface ModalTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ModalTitle({ className, children, ...props }: ModalTitleProps) {
  return (
    <div className={classNames('modal-title', className)} {...props}>
      {children}
    </div>
  )
}
