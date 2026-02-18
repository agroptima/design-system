import './FloatingButton.scss'
import { classNames } from '../../utils/classNames'
import type { IconType } from '../Icon'
import { Icon } from '../Icon'
import type { BaseButtonProps } from './BaseButton'
import { BaseButton } from './BaseButton'

export type Variant = 'primary'

export type Shape = 'circle' | 'rounded-square'

interface CustomProps {
  icon: IconType
  variant?: Variant
  disabled?: boolean
  accessibilityLabel: string
  shape?: Shape
  loading?: boolean
}

export type FloatingButtonProps = CustomProps & BaseButtonProps

export function FloatingButton({
  accessibilityLabel,
  icon,
  disabled,
  variant = 'primary',
  shape = 'rounded-square',
  loading = false,
  className,
  ...props
}: FloatingButtonProps) {
  const cssClasses = classNames('floating-button', variant, className, shape)
  const iconName = loading ? 'Loading' : icon

  return (
    <BaseButton
      disabled={loading || disabled}
      aria-label={accessibilityLabel}
      title={accessibilityLabel}
      className={cssClasses}
      {...props}
    >
      <Icon name={iconName} decorative />
    </BaseButton>
  )
}
