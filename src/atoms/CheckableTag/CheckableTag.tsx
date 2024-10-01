import { classNames } from '../../utils/classNames'
import './CheckableTag.scss'

export type Variant = 'primary'

type CheckableTagPropsWithoutOnSelect = Omit<
  React.ComponentPropsWithoutRef<'span'>,
  'onSelect'
>

export interface CheckableTagProps extends CheckableTagPropsWithoutOnSelect {
  variant?: Variant
  isDisabled?: boolean
  isChecked?: boolean
  label: string
  onSelect: (label: string) => void
}

export function CheckableTag({
  variant = 'primary',
  className,
  isDisabled = false,
  label,
  isChecked = false,
  onSelect,
  ...props
}: CheckableTagProps): React.JSX.Element {
  const cssClasses = classNames('checkable-tag', variant, className, {
    disabled: isDisabled,
    checked: isChecked,
  })

  return (
    <span
      className={cssClasses}
      role="checkbox"
      aria-checked={false}
      tabIndex={0}
      aria-label={props['aria-label']}
      onClick={() => onSelect(label)}
      {...props}
    >
      {label}
    </span>
  )
}
