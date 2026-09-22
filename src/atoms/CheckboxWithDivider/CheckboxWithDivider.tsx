import './CheckboxWithDivider.scss'
import type { CheckboxProps } from '../Checkbox'
import { Checkbox } from '../Checkbox'

export interface CheckboxWithDividerProps extends Omit<
  CheckboxProps,
  'checked'
> {
  title: string
  checked: boolean
}

export function CheckboxWithDivider({
  title,
  accessibilityLabel,
  className,
  ...props
}: CheckboxWithDividerProps) {
  return (
    <div className="checkbox-with-divider">
      <Checkbox
        accessibilityLabel={accessibilityLabel || title}
        className={className}
        {...props}
      >
        {title}
      </Checkbox>
      <div className="flex-grow line" />
    </div>
  )
}
