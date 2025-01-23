import 'react-day-picker/style.css'
import './DatePicker.scss'
import { useEffect, useState } from 'react'
import { type DateRange, DayPicker, type Locale } from 'react-day-picker'
import { enGB, es } from 'react-day-picker/locale'
import { classNames } from '../utils/classNames'

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

export interface DatePickerProps extends DivPropsWithoutOnSelect {
  variant?: Variant
  onSelect: (dateRange: DateRange | undefined) => void
  footer: string
  selected?: DateRange
  lng?: string
}

export function DatePicker({
  className,
  variant = 'primary',
  onSelect = () => {},
  footer = 'Pick a day',
  selected: preselected,
  lng = 'es',
}: DatePickerProps): React.JSX.Element {
  useEffect(() => {
    setSelected(preselected)
  }, [preselected])

  const cssClasses = classNames('date-picker', variant, className)

  const [selected, setSelected] = useState<DateRange | undefined>(preselected)

  function selectDate(dateRange: DateRange | undefined) {
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
