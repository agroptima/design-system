import './Modal.scss'
import { IconButton } from '../Button'

export interface ModalCloseButtonProps {
  label?: string
  onClick?: () => void
}

export function ModalCloseButton({
  label = 'Close',
  onClick,
}: ModalCloseButtonProps) {
  return (
    <IconButton
      type="button"
      variant="tertiary"
      accessibilityLabel={label}
      icon="Close"
      size="4"
      onClick={onClick}
    />
  )
}
