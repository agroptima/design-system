import './IconButton.scss'
import { classNames } from '../../utils/classNames'
import type { IconSize, IconType } from '../Icon'
import { Icon } from '../Icon'
import type { BaseButtonProps } from './BaseButton'
import { BaseButton } from './BaseButton'

export type Variant = 'primary' | 'secondary' | 'tertiary'

interface CustomProps {
  icon: IconType
  variant?: Variant
  disabled?: boolean
  accessibilityLabel: string
  loading?: boolean
  size?: IconSize
}

export type IconButtonProps = CustomProps & BaseButtonProps

export function IconButton({
  accessibilityLabel,
  icon,
  disabled,
  variant = 'primary',
  loading = false,
  size,
  className,
  ...props
}: IconButtonProps) {
  const iconName = loading ? 'Loading' : icon
  return (
    <BaseButton
      disabled={loading || disabled}
      aria-label={accessibilityLabel}
      className={classNames(className, 'icon-button', variant)}
      {...props}
    >
      <Icon title={accessibilityLabel} name={iconName} size={size} />
    </BaseButton>
  )
}
