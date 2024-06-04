import './FloatingButton.scss'
import { Icon, IconType } from '../Icon'
import { classNames } from '../../utils/classNames'
import { BaseButtonProps, BaseButton } from './BaseButton'

export type Variant = 'primary'

interface CustomProps {
  icon: IconType
  variant?: Variant
  disabled?: boolean
  accessibilityLabel: string
}

export type FloatingButtonProps = CustomProps & BaseButtonProps

export function FloatingButton({
  accessibilityLabel,
  icon,
  disabled,
  variant = 'primary',
  ...props
}: FloatingButtonProps) {
  const cssClasses = classNames('floating-button', variant, props.className)

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
