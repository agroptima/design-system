import { classNames } from '../utils/classNames'
import './RadioButton.scss'

export type Variant = 'primary'

export interface RadioButtonProps
  extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  hideLabel?: boolean
  variant?: Variant
  id?: string
  accessibilityLabel: string
}

export function RadioButton({
  accessibilityLabel,
  label,
  hideLabel,
  disabled,
  variant = 'primary',
  id,
  name,
  ...props
}: RadioButtonProps) {
  const inputCss = classNames('radio', variant)
  const labelCss = classNames('radio-label-container', {
    disabled: disabled,
  })

  return (
    <div className={`radio-group ${variant}`}>
      <input
        id={id}
        name={name}
        type="radio"
        className={inputCss}
        disabled={disabled}
        aria-label={accessibilityLabel}
        {...props}
      />

      <label className={labelCss} htmlFor={id}>
        {!hideLabel && <span className="label">{label}</span>}
      </label>
    </div>
  )
}
