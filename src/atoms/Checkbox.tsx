import './Checkbox.scss'
import { classNames } from '../utils/classNames'

export type Variant = 'primary'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  variant?: Variant
  id?: string
  indeterminate?: boolean
}

export function Checkbox({
  label,
  accessibilityLabel,
  hideLabel = false,
  disabled,
  variant = 'primary',
  id,
  indeterminate = false,
  name,
  className,
  ...props
}: CheckboxProps) {
  const identifier = id || name

  return (
    <div
      className={classNames('checkbox-group', variant, className, {
        disabled: disabled,
        indeterminate: indeterminate,
      })}
    >
      <input
        id={identifier}
        name={name}
        type="checkbox"
        className="checkbox"
        disabled={disabled}
        aria-label={accessibilityLabel || label}
        {...props}
      />
      <label
        htmlFor={identifier}
        className={classNames({ 'visually-hidden': hideLabel })}
      >
        {label}
      </label>
    </div>
  )
}
