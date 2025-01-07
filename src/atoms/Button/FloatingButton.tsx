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
}

export type FloatingButtonProps = CustomProps & BaseButtonProps

export function FloatingButton({
  accessibilityLabel,
  icon,
  disabled,
  variant = 'primary',
  shape = 'rounded-square',
  ...props
}: FloatingButtonProps) {
  const cssClasses = classNames(
    'floating-button',
    variant,
    props.className,
    shape,
  )

  return (
    <BaseButton
      disabled={disabled}
      aria-label={accessibilityLabel}
      {...props}
      className={cssClasses}
    >
      <Icon name={icon} />
    </BaseButton>
  )
}
