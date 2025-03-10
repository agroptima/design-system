import 'react-day-picker/style.css'
import { useEffect, useState } from 'react'
import { type DateRange, DayPicker } from 'react-day-picker'
import { enGB, es } from 'react-day-picker/locale'
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
  className: string
}

export function DateRangePicker({
  onSelect = () => {},
  selected: preselected,
  lng,
  className,
}: DateRangePickerProps): React.JSX.Element {
  const manageFooterText = (): string => {
    if (!selected?.from && !selected?.to) {
      return translations[lng].pickDate
    }
    if (selected?.to && selected?.from?.getTime() !== selected?.to?.getTime()) {
      return translations[lng].selectedRangeOfDates
        .replace(
          '${from}',
          formatDatePickerFooterDate(selected?.from, lng as string),
        )
        .replace(
          '${to}',
          formatDatePickerFooterDate(selected?.to, lng as string),
        )
    }
    return translations[lng].selectedOnlyFrom.replace(
      '${from}',
      formatDatePickerFooterDate(selected?.from, lng as string),
    )
  }

  const [selected, setSelected] = useState<DateRange | undefined>(preselected)
  const [footer, setFooter] = useState<string>(() => {
    return manageFooterText()
  })

  useEffect(() => {
    setSelected({ from: preselected?.from, to: preselected?.to ?? undefined })
  }, [preselected])

  useEffect(() => {
    setFooter(manageFooterText())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  function selectDate(dateRange: DateRange | undefined) {
    setSelected(dateRange)
    onSelect(dateRange)
  }

  return (
    <DayPicker
      className={className}
      locale={availableLocales[lng]}
      mode="range"
      min={1}
      selected={selected}
      onSelect={(dateRange) => selectDate(dateRange)}
      footer={footer}
      defaultMonth={selected?.from}
    />
  )
}
