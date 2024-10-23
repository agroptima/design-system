import { classNames } from '../utils/classNames'
import './Checkbox.scss'

export type Variant = 'primary'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  variant?: Variant
  id?: string
}

export function Checkbox({
  label,
  accessibilityLabel,
  hideLabel = false,
  disabled,
  variant = 'primary',
  id,
  name,
  className,
  ...props
}: CheckboxProps) {
  const identifier = id || name

  return (
    <div
      className={classNames('checkbox-group', variant, className, {
        disabled: disabled,
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
      {!hideLabel && <label htmlFor={identifier}>{label}</label>}
    </div>
  )
}
