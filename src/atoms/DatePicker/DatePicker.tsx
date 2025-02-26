import 'react-day-picker/style.css'
import './DatePicker.scss'
import { type DateRange, type Locale } from 'react-day-picker'
import { classNames } from '../../utils/classNames'
import { DateRangePicker } from './DateRangePicker'
import { DateSinglePicker } from './DateSinglePicker'

export type Variant = 'primary'
export type DatePickerType = 'single' | 'range'

type DivPropsWithoutOnSelect = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'onSelect'
>

export interface AvailableLocale {
  [index: string]: Locale
}

export interface DatePickerBaseProps extends DivPropsWithoutOnSelect {
  variant?: Variant
  lng: keyof AvailableLocale
  type: DatePickerType
  withInput?: boolean
}

export interface DateSinglePickerProps {
  type: 'single'
  selected?: Date | undefined
  onSelect: (date: Date | undefined) => void
}

export interface DateRangePickerProps {
  type: 'range'
  selected?: DateRange | undefined
  onSelect: (date: DateRange | undefined) => void
}

type DatePickerProps = (DateSinglePickerProps | DateRangePickerProps) &
  DatePickerBaseProps

export function DatePicker(props: DatePickerProps): React.JSX.Element {
  const {
    variant,
    className,
    type,
    lng,
    onSelect,
    selected,
    withInput = false,
  } = props

  const cssClasses = classNames('date-picker', variant, className)

  if (type === 'single') {
    return (
      <div className={cssClasses}>
        <DateSinglePicker
          lng={lng}
          selected={selected}
          onSelect={onSelect}
          withInput={withInput}
        />
      </div>
    )
  }
  return (
    <div className={cssClasses}>
      <DateRangePicker
        lng={lng}
        selected={selected}
        onSelect={onSelect}
        withInput={withInput}
      />
    </div>
  )
}
