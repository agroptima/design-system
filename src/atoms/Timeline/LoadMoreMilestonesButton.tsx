import './Timeline'
import React from 'react'
import { classNames } from '../../utils/classNames'
import { BaseButton, type BaseButtonProps } from '../Button'
import { Icon, type IconType } from '../Icon'

export type Variant = 'primary'

export interface CustomProps {
  variant?: Variant
  title: string
  disabled?: boolean
  active?: boolean
  leftIcon?: IconType
}

export type LoadMoreMilestonesButtonProps = CustomProps & BaseButtonProps

export function LoadMoreMilestonesButton({
  variant = 'primary',
  className,
  title,
  disabled,
  leftIcon,
  prefetch = false,
  ...props
}: LoadMoreMilestonesButtonProps): React.JSX.Element {
  const cssClasses = classNames(
    'load-more-milestones-button',
    variant,
    className,
    {
      disabled,
    },
  )
  return (
    <BaseButton
      className={cssClasses}
      aria-disabled={disabled}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <Icon name={leftIcon} size="6" decorative />}
      <span className="title">{title}</span>
    </BaseButton>
  )
}
