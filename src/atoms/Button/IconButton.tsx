import './IconButton.scss'
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

export type IconButtonProps = CustomProps & BaseButtonProps

export function IconButton({
  accessibilityLabel,
  icon,
  disabled,
  variant = 'primary',
  ...props
}: IconButtonProps) {
  const cssClasses = classNames(props.className, 'icon-button', variant)

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
