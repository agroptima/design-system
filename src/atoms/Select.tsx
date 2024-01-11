import './Select.scss'

export type SelectVariant = 'primary'
export type SelectOption = { id: string; label: string }

export interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  selectOptionText?: string
  helpText?: string
  variant?: SelectVariant
  options: SelectOption[]
}

export function Select({
  selectOptionText,
  helpText,
  variant = 'primary',
  disabled,
  name,
  options,
  required,
  ...props
}: SelectProps): React.JSX.Element {
  const cssClasses = ['select', variant].join(' ')
  return (
    <div className="select-group">
      <select
        required={required}
        id="form-select"
        name={name}
        className={cssClasses}
        disabled={disabled}
      >
        <option value="">{selectOptionText}</option>
        {options.map((option) => (
          <option className="option" key={option.label} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      {helpText && <span className="select-help-text">{helpText}</span>}
    </div>
  )
}
