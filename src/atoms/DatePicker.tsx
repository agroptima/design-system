import 'react-day-picker/style.css'
import './DatePicker.scss'
import { useEffect, useState } from 'react'
import { type DateRange, DayPicker } from 'react-day-picker'
import { enGB, es } from 'react-day-picker/locale'
import { classNames } from '../utils/classNames'

export type Variant = 'primary'

type DivPropsWithoutOnChange = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'onSelect'
>

export interface CalendarProps extends DivPropsWithoutOnChange {
  variant?: Variant
  onSelect: (dateRange: DateRange | undefined) => void
  footer: string
  selected?: DateRange
  locale?: string
}

export function DatePicker({
  className,
  variant = 'primary',
  onSelect = () => {},
  footer = 'Pick a day',
  selected: preselected,
  locale = 'es',
}: CalendarProps): React.JSX.Element {
  useEffect(() => {
    setSelected(preselected)
  }, [preselected])

  console.log('preselected: ', preselected)
  const cssClasses = classNames('date-picker', variant, className)

  const [selected, setSelected] = useState<DateRange | undefined>(preselected)

  function selectDate(dateRange: DateRange | undefined) {
    setSelected(dateRange)
    onSelect(dateRange)
  }

  return (
    <div className={cssClasses}>
      <DayPicker
        locale={locale === 'es' ? es : enGB}
        mode="range"
        min={1}
        selected={selected}
        onSelect={(dateRange) => selectDate(dateRange)}
        footer={footer}
      />
    </div>
  )
}
