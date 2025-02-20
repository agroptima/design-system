import 'react-day-picker/style.css'
import { useEffect, useState } from 'react'
import { DayPicker, type Locale } from 'react-day-picker'
import { enGB, es } from 'react-day-picker/locale'
import {
  formatDatePickerFooterDate,
  formatDatePickerParamsDate,
} from '../../utils/dateHelpers'
import { Input } from '../Input'
import type { AvailableLocale } from './DatePicker'
import { translations } from './translations'

const availableLocales: AvailableLocale = {
  es: es,
  en: enGB,
}

export interface DateSinglePickerProps {
  onSelect: (date: Date | undefined) => void
  selected?: Date
  lng: keyof typeof availableLocales
  month?: Date
  onMonthChange?: (date: Date | undefined) => void
}

export function DateSinglePicker({
  onSelect = () => {},
  selected: preselected,
  lng,
  month: selectedMonth,
  onMonthChange = () => {},
}: DateSinglePickerProps): React.JSX.Element {
  const manageFooterText = (): string => {
    if (!selected) return translations[lng].pickSingleDate

    return translations[lng].selectedDate.replace(
      '${date}',
      formatDatePickerFooterDate(selected, lng as string),
    )
  }

  const [selected, setSelected] = useState<Date | undefined>(preselected)
  const [month, setMonth] = useState<Date | undefined>(selectedMonth)
  const [footer, setFooter] = useState<string>(() => {
    return manageFooterText()
  })

  useEffect(() => {
    setSelected(preselected)
    setMonth(selectedMonth)
    setFooter(manageFooterText())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselected || selectedMonth])

  function selectDate(date: Date | undefined) {
    setSelected(date)
    setMonth(date)
    onSelect(date)
    onMonthChange(date)
  }

  return (
    <>
      <DayPicker
        locale={availableLocales[lng]}
        mode="single"
        selected={selected}
        onSelect={(date) => selectDate(date)}
        footer={footer}
        required
        month={month}
        onMonthChange={(date) => setMonth(date)}
      />
    </>
  )
}
