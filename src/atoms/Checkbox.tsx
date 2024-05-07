import { classNames } from '@/utils/classNames'
import './Checkbox.scss'

export type Variant = 'primary'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  hideLabel?: boolean
  variant?: Variant
  id: string
  accessibilityLabel: string
}

export function Checkbox({
  accessibilityLabel,
  label,
  hideLabel,
  disabled,
  variant = 'primary',
  id,
  name,
  ...props
}: CheckboxProps) {
  const identifier = id || name
  const inputCss = classNames('checkbox', variant)
  const labelCss = classNames('checkbox-label-container', {
    disabled: disabled,
  })

  return (
    <div className={`checkbox-group ${variant}`}>
      <input
        id={identifier}
        name={name}
        type="checkbox"
        className={inputCss}
        disabled={disabled}
        aria-label={accessibilityLabel}
        {...props}
      />

      <label className={labelCss} htmlFor={identifier}>
        <span className="background-icon"></span>
        {!hideLabel && <span className="label">{label}</span>}
      </label>
    </div>
  )
}
