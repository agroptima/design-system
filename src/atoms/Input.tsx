import './Input.scss'
import { Icon, IconType } from './Icon'

export type InputVariant = 'primary'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  placeholder?: string
  leftIcon?: IconType
  helpText?: string
  variant?: InputVariant
}

export function Input({
  placeholder,
  leftIcon,
  helpText,
  variant = 'primary',
  disabled,
  type = 'text',
  name,
  ...props
}: InputProps): React.JSX.Element {
  const cssClasses = ['input', variant].join(' ')
  return (
    <div className="input-container">
      {leftIcon && <Icon name={leftIcon} />}
      <input
        className={cssClasses}
        placeholder={placeholder}
        disabled={disabled}
        type="email"
        name={name}
        {...props}
      />
      {helpText && <span className="input-help-text">{helpText}</span>}
    </div>
  )
}
