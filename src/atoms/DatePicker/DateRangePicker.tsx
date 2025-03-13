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
import { Input } from '../Input'
import { availableLocales, type Locale, translations } from './translations'

export type Variant = 'primary'

export type DateRangePickerProps = {
  variant?: Variant
  lng: Locale
  required?: boolean
  className?: string
  defaultValue?: DateRange
  onSelect?: (date: DateRange) => void
  withInput?: boolean
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
  withInput = false,
}: DateRangePickerProps): React.JSX.Element {
  const inputType = withInput ? 'text' : 'hidden'
  const showDefault = withInput ? false : true
  const cssClasses = classNames('date-picker', variant, className, {
    toggle: withInput,
  })

  const [selected, setSelected] = useState<DateRangeReactDayPicker>(
    toDateRange(defaultValue),
  )

  const [isOpen, setIsOpen] = useState<boolean>(showDefault)

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
    <div className={cssClasses}>
      <Input
        type={inputType}
        label={''}
        value={`${formatDatePickerFooterDate(selected.from, lng as string)} - ${formatDatePickerFooterDate(selected.to, lng as string)}`}
        icon="Calendar"
        name="date"
        placeholder="dd/mm/yyyy - dd/mm/yyyy"
        readOnly
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <DayPicker
          locale={availableLocales[lng]}
          mode="range"
          min={1}
          selected={selected}
          onSelect={selectDate}
          footer={
            <Footer lng={lng} selected={selected} withInput={withInput} />
          }
          defaultMonth={selected?.from}
          required={required}
          className={cssClasses}
        />
      )}
    </div>
  )
}
function Footer({
  lng,
  selected,
  withInput,
}: {
  lng: Locale
  selected: DateRangeReactDayPicker | undefined
  withInput: boolean
}): string {
  if (withInput) return ''
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
  return translations[lng].selectedDate.replace(
    '${date}',
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
