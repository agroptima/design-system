import './Popover.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'
import { BaseButton, type BaseButtonProps } from '../Button'
import { Icon, type IconType, type Variant as IconVariant } from '../Icon'

export type Variant = 'primary'

export interface CustomProps {
  variant?: Variant
  title: string
  disabled?: boolean
  active?: boolean
  leftIcon?: IconType
  iconVariant?: IconVariant
}

export type PopoverMenuOptionProps = CustomProps & BaseButtonProps

export function PopoverMenuOption({
  variant = 'primary',
  className,
  title,
  disabled,
  active,
  leftIcon,
  prefetch = false,
  iconVariant = 'primary',
  ...props
}: PopoverMenuOptionProps): React.JSX.Element {
  const cssClasses = classNames('popover-menu-option', variant, className, {
    disabled,
    active,
  })
  return (
    <BaseButton
      role="menuitem"
      className={cssClasses}
      aria-disabled={disabled}
      disabled={disabled}
      {...props}
    >
      {leftIcon && (
        <Icon name={leftIcon} size="3" variant={iconVariant} decorative />
      )}
      {title}
    </BaseButton>
  )
}
