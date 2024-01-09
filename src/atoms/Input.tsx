import './Input.scss'
import { Icon, IconType } from './Icon'

export type InputVariant = 'primary'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  placeholder?: string
  leftIcon?: IconType
  helpText?: string
  variant?: InputVariant
}

export function Input({
  label,
  placeholder,
  leftIcon,
  helpText,
  variant = 'primary',
  disabled,
  type = 'text',
  name,
  ...props
}: InputProps): React.JSX.Element {
  const ariaLabel = type === 'search' ? placeholder : ''
  const hasLeftIconClass = leftIcon ? 'with-icon' : 'without-icon'
  const cssClasses = ['input', variant, hasLeftIconClass].join(' ')
  return (
    <div className="input-group">
      {label && <label htmlFor="form-input">{label}</label>}
      <div className="input-container">
        {leftIcon && <Icon name={leftIcon} />}
        <input
          id="form-input"
          className={cssClasses}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          name={name}
          aria-label={ariaLabel}
          {...props}
        />
      </div>
      {helpText && <span className="input-help-text">{helpText}</span>}
    </div>
  )
}
