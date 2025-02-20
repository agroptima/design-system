import './Switch.scss'
import { classNames } from '../utils/classNames'

export type Variant = 'primary'
export type Size = 'small' | 'medium'

type InputPropsWithoutSize = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'size'
>

export interface SwitchProps extends InputPropsWithoutSize {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  variant?: Variant
  id?: string
  size?: Size
}

export function Switch({
  label,
  accessibilityLabel,
  hideLabel = false,
  disabled,
  variant = 'primary',
  size = 'medium',
  id,
  className,
  ...props
}: SwitchProps) {
  return (
    <div className={classNames('switch-group', className)}>
      <label
        htmlFor={id}
        className={classNames({ 'visually-hidden': hideLabel })}
      >
        {label}
      </label>
      <input
        id={id}
        type="checkbox"
        className={classNames('switch', variant, size)}
        disabled={disabled}
        aria-label={accessibilityLabel || label}
        role="switch"
        {...props}
      />
    </div>
  )
}
