import { classNames } from '../../utils/classNames'
import './CheckableTag.scss'

export type Variant = 'primary'

type CheckableTagPropsWithoutOnChangeOnSelect = Omit<
  React.ComponentPropsWithoutRef<'span'>,
  'onChange' | 'onSelect'
>

export interface CheckableTagProps
  extends CheckableTagPropsWithoutOnChangeOnSelect {
  variant?: Variant
  isDisabled?: boolean
  isChecked?: boolean
  label: string
  onSelect: (label: string) => void
  onChange: (checked: boolean) => void
}

export function CheckableTag({
  variant = 'primary',
  className,
  isDisabled = false,
  label,
  isChecked = false,
  onSelect,
  onChange,
  ...props
}: CheckableTagProps): React.JSX.Element {
  const cssClasses = classNames('checkable-tag', variant, className, {
    disabled: isDisabled,
    checked: isChecked,
  })

  function handleClick() {
    onChange(!isChecked)
    onSelect(label)
  }

  return (
    <span
      className={cssClasses}
      role="checkbox"
      aria-checked={false}
      tabIndex={0}
      aria-label={props['aria-label']}
      onClick={handleClick}
      {...props}
    >
      {label}
    </span>
  )
}
