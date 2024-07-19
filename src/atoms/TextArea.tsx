import { classNames } from '../utils/classNames'
import { buildHelpText } from '../utils/buildHelpText'
import './Input.scss'

export type TextAreaVariant = 'primary'

export interface TextAreaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  label: string
  accessibilityLabel?: string
  hideLabel?: boolean
  helpText?: string
  variant?: TextAreaVariant
  id?: string
  errors?: string[]
}

export function TextArea({
  id,
  label,
  className,
  accessibilityLabel,
  hideLabel = false,
  helpText,
  variant = 'primary',
  disabled,
  name,
  errors,
  ...props
}: TextAreaProps) {
  const identifier = id || name
  const helpTexts = buildHelpText(helpText, errors)
  return (
    <div
      className={classNames('input-group', variant, className, {
        invalid: errors?.length,
      })}
    >
      {!hideLabel && (
        <label className="input-label" htmlFor={identifier}>
          {label}
        </label>
      )}
      <div className="input-container">
        <textarea
          id={identifier}
          disabled={disabled}
          name={name}
          aria-label={accessibilityLabel || label}
          {...props}
        />
      </div>
      {helpTexts.map((helpText) => (
        <span key={`${identifier}-${helpText}`} className="input-help-text">
          {helpText}
        </span>
      ))}
    </div>
  )
}
