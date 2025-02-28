import 'react-day-picker/style.css'
import { useEffect, useState } from 'react'
import { type DateRange, DayPicker, type Locale } from 'react-day-picker'
import { enGB, es } from 'react-day-picker/locale'
import { formatDatePickerFooterDate } from '../../utils/dateHelpers'
import { Input } from '../Input'
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
  withInput: boolean
}

export function DateRangePicker({
  onSelect = () => {},
  selected: preselected,
  lng,
  withInput = false,
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
  const [open, setOpen] = useState<boolean>(true)

  useEffect(() => {
    setSelected(preselected)
    setFooter(manageFooterText())
    if (withInput) setOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselected])

  function selectDate(dateRange: DateRange | undefined) {
    setSelected(dateRange)
    onSelect(dateRange)
  }

  return (
    <>
      {withInput && (
        <Input
          label={''}
          value={`${formatDatePickerFooterDate(selected?.from, lng as string)} - ${formatDatePickerFooterDate(selected?.to, lng as string)}`}
          icon="Calendar"
          name="date"
          placeholder="dd/mm/yyyy - dd/mm/yyyy"
          readOnly
          onClick={() => setOpen(!open)}
        />
      )}
      {open && (
        <DayPicker
          locale={availableLocales[lng]}
          mode="range"
          min={1}
          selected={selected}
          onSelect={(dateRange) => selectDate(dateRange)}
          footer={footer}
          defaultMonth={selected?.from}
        />
      )}
    </>
  )
}
