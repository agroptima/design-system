import './IconButton.scss'
import { Icon, IconType } from '../Icon'
import { classNames } from '../../utils/classNames'
import { BaseButtonProps, BaseButton } from './BaseButton'

export type Variant = 'primary' | 'secondary'

interface CustomProps {
  icon: IconType
  variant?: Variant
  disabled?: boolean
  visible?: boolean
  accessibilityLabel: string
}

export type IconButtonProps = CustomProps & BaseButtonProps

export function IconButton({
  accessibilityLabel,
  icon,
  disabled,
  visible = true,
  variant = 'primary',
  ...props
}: IconButtonProps) {
  if (!visible) return null

  return (
    <BaseButton
      disabled={disabled}
      aria-label={accessibilityLabel}
      {...props}
      className={classNames(props.className, 'icon-button', variant)}
    >
      <Icon name={icon} />
    </BaseButton>
  )
}
