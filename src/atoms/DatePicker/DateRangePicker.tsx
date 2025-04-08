import 'react-day-picker/style.css'
import './DatePicker.scss'
import { type JSX, useEffect, useState } from 'react'
import {
  type DateRange as DateRangeReactDayPicker,
  DayPicker,
} from 'react-day-picker'
import { buildHelpText } from '../../utils/buildHelpText'
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
  label?: string
  name?: string
  helpText?: string
  errors?: string[]
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
  name = 'date',
  label = 'Date',
  errors,
  helpText,
}: DateRangePickerProps): JSX.Element {
  const cssClasses = classNames('date-picker', variant, className, {
    toggle: withInput,
    invalid: errors?.length,
  })
  const helpTexts = buildHelpText(helpText, errors)

  const [selected, setSelected] = useState<DateRangeReactDayPicker>(
    toDateRange(defaultValue),
  )
  const [isOpen, setIsOpen] = useState<boolean>(!withInput)

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
        type="hidden"
        label=""
        value={`${toDateRangeISO(selected)} - ${toDateRangeISO(selected)}`}
        name={name}
      />
      {withInput && (
        <div onClick={() => setIsOpen(!isOpen)}>
          <Input
            type="text"
            label={label}
            rightIcon={isOpen ? 'AngleUp' : 'AngleDown'}
            value={`${formatDatePickerFooterDate(selected.from, lng as string)} - ${formatDatePickerFooterDate(selected.to, lng as string)}`}
            icon="Calendar"
            name={name}
            placeholder={translations[lng].rangePlaceholder}
            readOnly
          />
        </div>
      )}
      {isOpen && (
        <DayPicker
          locale={availableLocales[lng]}
          mode="range"
          min={1}
          selected={selected}
          onSelect={selectDate}
          footer={
            <Footer
              lng={lng}
              selected={selected}
              withInput={withInput}
              helpTexts={helpTexts}
            />
          }
          defaultMonth={selected?.from}
          required={required}
          className="calendar"
        />
      )}
    </div>
  )
}
function Footer({
  lng,
  selected,
  withInput,
  helpTexts,
}: {
  lng: Locale
  selected: DateRangeReactDayPicker | undefined
  helpTexts?: string[]
  withInput: boolean
}): string {
  if (withInput) return ''
  if (helpTexts?.length) return helpTexts.join(', ')
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
