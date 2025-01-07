import './IconButton.scss'
import { classNames } from '../../utils/classNames'
import type { IconSize, IconType } from '../Icon'
import { Icon } from '../Icon'
import type { BaseButtonProps } from './BaseButton'
import { BaseButton } from './BaseButton'

export type Variant = 'primary' | 'secondary'

interface CustomProps {
  icon: IconType
  variant?: Variant
  disabled?: boolean
  accessibilityLabel: string
  size?: IconSize
}

export type IconButtonProps = CustomProps & BaseButtonProps

export function IconButton({
  accessibilityLabel,
  icon,
  disabled,
  variant = 'primary',
  size,
  ...props
}: IconButtonProps) {
  return (
    <BaseButton
      disabled={disabled}
      aria-label={accessibilityLabel}
      {...props}
      className={classNames(props.className, 'icon-button', variant)}
    >
      <Icon title={accessibilityLabel} name={icon} size={size} />
    </BaseButton>
  )
}
