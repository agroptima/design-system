import 'react-day-picker/style.css'
import { type DateRange, type Locale } from 'react-day-picker'
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
  const { variant, className, type, lng, onSelect, selected } = props

  if (type === 'single') {
    return (
      <>
        <DateSinglePicker
          lng={lng}
          selected={selected}
          onSelect={onSelect}
          className={className}
          variant={variant}
        />
      </>
    )
  }
  return (
    <>
      <DateRangePicker
        lng={lng}
        selected={selected}
        onSelect={onSelect}
        className={className}
        variant={variant}
      />
    </>
  )
}
