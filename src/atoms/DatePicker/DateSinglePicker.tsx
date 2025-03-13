import 'react-day-picker/style.css'
import './DatePicker.scss'
import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { classNames } from '../../utils/classNames'
import {
  formatDatePickerFooterDate,
  fromDateToISOString,
  fromISOToDate,
} from '../../utils/dateHelpers'
import { availableLocales, type Locale, translations } from './translations'

export type Variant = 'primary'

export type DateSinglePickerProps = {
  variant?: Variant
  lng: Locale
  required?: boolean
  className?: string
  defaultValue?: string
  onSelect?: (date: string) => void
}

export function DateSinglePicker({
  onSelect,
  defaultValue,
  lng,
  className,
  required = false,
  variant,
}: DateSinglePickerProps): React.JSX.Element {
  const cssClasses = classNames('date-picker', variant, className)

  const [selected, setSelected] = useState<Date | undefined>(
    fromISOToDate(defaultValue),
  )

  function selectDate(date: Date | undefined) {
    setSelected(date)
    onSelect?.(fromDateToISOString(date))
  }

  return (
    <DayPicker
      className={cssClasses}
      locale={availableLocales[lng]}
      mode="single"
      selected={selected}
      onSelect={selectDate}
      footer={<Footer lng={lng} selected={selected} />}
      required={required}
      defaultMonth={selected}
    />
  )
}
function Footer({ lng, selected }: { selected?: Date; lng: Locale }): string {
  if (!selected) return translations[lng].pickDate

  return translations[lng].selectedDate.replace(
    '${date}',
    formatDatePickerFooterDate(selected, lng as string),
  )
}
