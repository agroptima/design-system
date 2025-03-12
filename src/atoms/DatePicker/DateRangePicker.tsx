import 'react-day-picker/style.css'
import './DatePicker.scss'
import { useEffect, useState } from 'react'
import {
  type DateRange as DateRangeReactDayPicker,
  DayPicker,
} from 'react-day-picker'
import { classNames } from '../../utils/classNames'
import {
  formatDatePickerFooterDate,
  fromDateToISOString,
  fromISOToDate,
} from '../../utils/dateHelpers'
import { availableLocales, type Locale, translations } from './translations'

export type Variant = 'primary'

export type DateRangePickerProps = {
  variant?: Variant
  lng: Locale
  required?: boolean
  className?: string
  defaultValue?: DateRange
  onSelect?: (date: DateRange) => void
}

export type DateRange = {
  from: string | undefined
  to: string | undefined
}

export function DateRangePicker({
  onSelect,
  defaultValue,
  lng,
  className,
  required = false,
  variant,
}: DateRangePickerProps): React.JSX.Element {
  const cssClasses = classNames('date-picker', variant, className)

  const [selected, setSelected] = useState<DateRangeReactDayPicker>(
    toDateRange(defaultValue),
  )

  function selectDate(dateRange: DateRangeReactDayPicker | undefined) {
    const selectedDateRange = {
      from: dateRange?.from,
      to: dateRange?.to,
    }
    setSelected(selectedDateRange)
    onSelect?.(toDateRangeISO(selectedDateRange))
  }

  useEffect(() => {
    setSelected(toDateRange(defaultValue))
  }, [defaultValue])

  return (
    <DayPicker
      className={cssClasses}
      locale={availableLocales[lng]}
      mode="range"
      min={1}
      selected={selected}
      onSelect={selectDate}
      footer={<Footer lng={lng} selected={selected} />}
      defaultMonth={selected?.from}
      required={required}
    />
  )
}
function Footer({
  lng,
  selected,
}: {
  lng: Locale
  selected: DateRangeReactDayPicker | undefined
}): string {
  if (!selected?.from && !selected?.to) {
    return translations[lng].pickDate
  }
  if (selected?.to && selected?.from?.getTime() !== selected?.to?.getTime()) {
    return translations[lng].selectedRangeOfDates
      .replace(
        '${from}',
        formatDatePickerFooterDate(selected?.from, lng as string),
      )
      .replace('${to}', formatDatePickerFooterDate(selected?.to, lng as string))
  }
  return translations[lng].selectedOnlyFrom.replace(
    '${from}',
    formatDatePickerFooterDate(selected?.from, lng as string),
  )
}

function toDateRange(
  dateRange: DateRange | undefined,
): DateRangeReactDayPicker {
  return {
    from: fromISOToDate(dateRange?.from),
    to: fromISOToDate(dateRange?.to),
  }
}

function toDateRangeISO(dateRange: DateRangeReactDayPicker): DateRange {
  return {
    from: fromDateToISOString(dateRange?.from),
    to: fromDateToISOString(dateRange?.to),
  }
}
