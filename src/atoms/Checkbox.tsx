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
  ...props
}: CheckboxProps) {
  const disabledClass = disabled ? 'disabled' : ''
  const cssClasses = ['checkbox', variant].join(' ')

  return (
    <div className={`checkbox-group ${variant}`}>
      <input
        id={id}
        type="checkbox"
        className={cssClasses}
        disabled={disabled}
        aria-label={accessibilityLabel}
        {...props}
      />

      <label
        className={`checkbox-label-container ${disabledClass}`}
        htmlFor={id}
      >
        <span className="background-icon"></span>
        {!hideLabel && <span className="label">{label}</span>}
      </label>
    </div>
  )
}
