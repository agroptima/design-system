import 'react-day-picker/style.css'
import { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { enGB, es } from 'react-day-picker/locale'
import {
  formatDatePickerFooterDate,
  formatDatePickerParamsDate,
} from '../../utils/dateHelpers'
import type { AvailableLocale } from './DatePicker'
import { InputPicker } from './InputPIcker'
import { translations } from './translations'

const availableLocales: AvailableLocale = {
  es: es,
  en: enGB,
}

export interface DateSinglePickerProps {
  onSelect: (date: Date | undefined) => void
  selected?: Date
  lng: keyof typeof availableLocales
  withInput: boolean
}

export function DateSinglePicker({
  onSelect = () => {},
  selected: preselected,
  lng,
  withInput,
}: DateSinglePickerProps): React.JSX.Element {
  const manageFooterText = (): string => {
    if (!selected) return translations[lng].pickSingleDate

    return translations[lng].selectedDate.replace(
      '${date}',
      formatDatePickerFooterDate(selected, lng as string),
    )
  }

  const [selected, setSelected] = useState<Date | undefined>(preselected)
  const [month, setMonth] = useState<Date | undefined>(preselected)
  const [footer, setFooter] = useState<string>(() => {
    return manageFooterText()
  })

  useEffect(() => {
    setSelected(preselected)
    setMonth(preselected)
    setFooter(manageFooterText())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselected])

  function selectDate(date: Date | undefined) {
    setSelected(date)
    if (date) setMonth(new Date(date.getFullYear(), date.getMonth()))
    onSelect(date)
  }

  return (
    <>
      <InputPicker
        withInput={withInput}
        value={formatDatePickerParamsDate(selected)}
      />

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
