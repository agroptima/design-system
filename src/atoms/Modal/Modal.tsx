import './Modal.scss'
import type { ReactNode } from 'react'
import type { ButtonProps } from '../Button'
import { Button } from '../Button'
import { Icon } from '../Icon'
import {
  ModalBody,
  ModalCloseButton,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '.'

export type Variant =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'discard'
  | 'details'

export interface ModalProps {
  id: string
  title: string
  variant?: Variant
  scrollable?: boolean
  className?: string
  isOpen?: boolean
  onClose?: () => void
  buttons: ButtonProps[]
  children: ReactNode
}

const ICONS: { [key: string]: ReactNode } = {
  info: <Icon className="modal-icon" name="Info" variant="info" />,
  success: <Icon className="modal-icon" name="Check" variant="success" />,
  warning: <Icon className="modal-icon" name="Warning" variant="warning" />,
  error: <Icon className="modal-icon" name="Error" variant="error" />,
  discard: <Icon className="modal-icon" name="Warning" variant="warning" />,
}

export function Modal({
  id,
  title,
  buttons,
  isOpen = true,
  onClose,
  children,
  variant = 'details',
  ...props
}: ModalProps) {
  const isDetails = variant === 'details'
  const showCloseButton = onClose && isDetails
  return (
    <ModalDialog
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-body`}
      isOpen={isOpen}
      onClose={onClose}
      details={isDetails}
      {...props}
    >
      <ModalHeader>
        {ICONS[variant]}
        <ModalTitle id={`${id}-title`}>{title}</ModalTitle>
        {showCloseButton && <ModalCloseButton onClick={onClose} />}
      </ModalHeader>
      <ModalBody id={`${id}-body`}>{children}</ModalBody>
      <ModalFooter>
        {buttons.map(({ ...button }) => (
          <Button key={button.label} {...button} />
        ))}
      </ModalFooter>
    </ModalDialog>
  )
}
