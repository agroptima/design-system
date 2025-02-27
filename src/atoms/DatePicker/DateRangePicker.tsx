import 'react-day-picker/style.css'
import './DateRangePicker.scss'
import { useEffect, useState } from 'react'
import { type DateRange, DayPicker } from 'react-day-picker'
import { enGB, es } from 'react-day-picker/locale'
import { classNames } from '../../utils/classNames'
import { formatDatePickerFooterDate } from '../../utils/dateHelpers'
import type { AvailableLocale } from './DatePicker'
import { translations } from './translations'

const availableLocales: AvailableLocale = {
  es: es,
  en: enGB,
}

export interface DateRangePickerProps {
  onSelect: (dateRange: DateRange | undefined) => void
  selected?: DateRange
  lng: keyof typeof availableLocales
  className?: string
  variant?: string
}

export function DateRangePicker({
  onSelect = () => {},
  selected: preselected,
  lng,
  className,
  variant = 'primary',
}: DateRangePickerProps): React.JSX.Element {
  const manageFooterText = (): string => {
    const hasDatesFilter = selected && selected.from && selected.to

    if (!hasDatesFilter) return translations[lng].pickDate

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

  useEffect(() => {
    setSelected(preselected)
    setFooter(manageFooterText())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselected])

  function selectDate(dateRange: DateRange | undefined) {
    setSelected(dateRange)
    onSelect(dateRange)
  }

  const cssClasses = classNames('date-range-picker', variant, className)

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
