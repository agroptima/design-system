import './Input.scss'
import { Icon, IconType } from './Icon'

export type InputVariant = 'primary'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  hideLabel?: boolean
  icon?: IconType
  helpText?: string
  variant?: InputVariant
  id: string
}

export function Input({
  label,
  hideLabel = false,
  icon,
  helpText,
  variant = 'primary',
  disabled,
  type = 'text',
  name,
  id,
  ...props
}: InputProps): React.JSX.Element {
  const iconClass = icon ? 'with-icon' : ''
  const cssClasses = ['input', iconClass].join(' ')
  return (
    <div className={`input-group ${variant}`}>
      {!hideLabel && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input-container">
        {icon && <Icon name={icon} />}
        <input
          id={id}
          className={cssClasses}
          disabled={disabled}
          type={type}
          name={name}
          aria-label={label}
          {...props}
        />
      </div>
      {helpText && <span className="input-help-text">{helpText}</span>}
    </div>
  )
}
