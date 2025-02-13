import 'react-day-picker/style.css'
import './DateRangePicker.scss'
import { useEffect, useState } from 'react'
import { type DateRange, DayPicker, type Locale } from 'react-day-picker'
import { enGB, es } from 'react-day-picker/locale'
import { classNames } from '../../utils/classNames'
import {
  formatDatePickerFooterDate,
  formatDatePickerParamsDate,
} from '../../utils/dateHelpers'
import { translations } from './translations'

export type Variant = 'primary'

type DivPropsWithoutOnSelect = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'onSelect'
>

interface AvailableLocale {
  [index: string]: Locale
}

const availableLocales: AvailableLocale = {
  es: es,
  en: enGB,
}

export interface DateRangePickerProps extends DivPropsWithoutOnSelect {
  variant?: Variant
  onSelect: (dateRange: DateRange | undefined) => void
  selected?: DateRange
  lng: keyof typeof availableLocales
}

export function DateRangePicker({
  className,
  variant = 'primary',
  onSelect = () => {},
  selected: preselected,
  lng,
}: DateRangePickerProps): React.JSX.Element {
  const manageFooterText = (): string => {
    const hasDatesFilter = selected && selected.from && selected.to
    const isExactDate =
      formatDatePickerParamsDate(selected?.from) ===
      formatDatePickerParamsDate(selected?.to)

    if (!hasDatesFilter) return translations[lng].pickDate

    if (isExactDate) {
      return translations[lng].selectedDate.replace(
        '${date}',
        formatDatePickerFooterDate(selected.from, lng as string),
      )
    }

    return translations[lng].selectedRangeOfDates
      .replace(
        '${from}',
        formatDatePickerFooterDate(selected.from, lng as string),
      )
      .replace('${to}', formatDatePickerFooterDate(selected.to, lng as string))
  }

  const [selected, setSelected] = useState<DateRange | undefined>(preselected)
  const [footer, setFooter] = useState<string>(() => {
    return manageFooterText()
  })
  const cssClasses = classNames('date-picker', variant, className)

  useEffect(() => {
    setSelected(preselected)
    setFooter(manageFooterText())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselected])

  function selectDate(dateRange: DateRange | undefined) {
    const isSingleDaySelection = dateRange && !dateRange.to

    if (isSingleDaySelection) {
      dateRange.to = dateRange.from
    }

    setSelected(dateRange)
    onSelect(dateRange)
  }

  return (
    <div className={cssClasses}>
      <DayPicker
        locale={availableLocales[lng]}
        mode="range"
        min={1}
        selected={selected}
        onSelect={(dateRange) => selectDate(dateRange)}
        footer={footer}
        defaultMonth={selected?.from}
      />
    </div>
  )
}
