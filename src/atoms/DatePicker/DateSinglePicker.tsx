import 'react-day-picker/style.css'
import { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { enGB, es } from 'react-day-picker/locale'
import {
  formatDate,
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
  withInput?: boolean
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let date = event.target.value

    const [yyyy, mm, dd] = date.split('-').map(Number)
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return
    }
    date = `${yyyy}, ${mm}, ${dd}`
    const newDate = new Date(date)
    if (!isNaN(newDate.getTime())) {
      selectDate(newDate)
    }
  }

  return (
    <>
      <Input
        name="date"
        type="date"
        hideLabel
        label={''}
        value={formatDatePickerParamsDate(selected)}
        onChange={(event) => {
          handleInputChange(event)
        }}
        placeholder={''}
        visible={withInput}
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
