import './Input.scss'
import { Icon, IconType } from './Icon'

export type InputVariant = 'primary'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  placeholder?: string
  leftIcon?: IconType
  helpText?: string
  variant?: InputVariant
  id: string
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
  id,
  ...props
}: InputProps): React.JSX.Element {
  const hasLeftIconClass = leftIcon ? 'with-icon' : 'without-icon'
  const cssClasses = ['input', variant, hasLeftIconClass].join(' ')
  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <div className="input-container">
        {leftIcon && <Icon name={leftIcon} />}
        <input
          id={id}
          className={cssClasses}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          name={name}
          aria-label={placeholder}
          {...props}
        />
      </div>
      {helpText && <span className="input-help-text">{helpText}</span>}
    </div>
  )
}
