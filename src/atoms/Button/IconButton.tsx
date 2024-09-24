import type { IconType } from '../Icon'
import type { BaseButtonProps } from './BaseButton'
import { Icon } from '../Icon'
import { classNames } from '../../utils/classNames'
import { BaseButton } from './BaseButton'
import './IconButton.scss'

export type Variant = 'primary' | 'secondary'

interface CustomProps {
  icon: IconType
  variant?: Variant
  disabled?: boolean
  accessibilityLabel: string
}

export type IconButtonProps = CustomProps & BaseButtonProps

export function IconButton({
  accessibilityLabel,
  icon,
  disabled,
  variant = 'primary',
  ...props
}: IconButtonProps) {
  return (
    <BaseButton
      disabled={disabled}
      aria-label={accessibilityLabel}
      {...props}
      className={classNames(props.className, 'icon-button', variant)}
    >
      <Icon title={accessibilityLabel} name={icon} />
    </BaseButton>
  )
}
