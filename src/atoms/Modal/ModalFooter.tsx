import './Modal.scss'
import { classNames } from '../../utils/classNames'

export interface ModalFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function ModalFooter({
  className,
  children,
  ...props
}: ModalFooterProps) {
  return (
    <div className={classNames('modal-footer', className)} {...props}>
      {children}
    </div>
  )
}
