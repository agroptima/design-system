import 'react-day-picker/style.css'
import './DatePicker.scss'
import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { classNames } from '../../utils/classNames'
import {
  formatDatePickerFooterDate,
  fromDateToISOString,
  fromISOToDate,
} from '../../utils/dateHelpers'
import { Input } from '../Input'
import { availableLocales, type Locale, translations } from './translations'

export type Variant = 'primary'

export type DateSinglePickerProps = {
  variant?: Variant
  lng: Locale
  required?: boolean
  className?: string
  defaultValue?: string
  onSelect?: (date: string) => void
  withInput?: boolean
}

export function DateSinglePicker({
  onSelect,
  defaultValue,
  lng,
  className,
  required = false,
  variant,
  withInput = false,
}: DateSinglePickerProps): React.JSX.Element {
  const inputType = withInput ? 'text' : 'hidden'
  const showDefault = withInput ? false : true

  const cssClasses = classNames('date-picker', variant, className, {
    toggle: withInput,
  })

  const [selected, setSelected] = useState<Date | undefined>(
    fromISOToDate(defaultValue),
  )
  const [isOpen, setIsOpen] = useState<boolean>(showDefault)

  function selectDate(date: Date | undefined) {
    setSelected(date)
    onSelect?.(fromDateToISOString(date))
  }

  return (
    <div className={cssClasses}>
      <Input
        type={inputType}
        label={''}
        value={formatDatePickerFooterDate(selected, lng as string)}
        icon="Calendar"
        name="date"
        placeholder="dd/mm/yyyy"
        readOnly
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <DayPicker
          locale={availableLocales[lng]}
          mode="single"
          selected={selected}
          onSelect={selectDate}
          footer={
            <Footer lng={lng} selected={selected} withInput={withInput} />
          }
          required={required}
          defaultMonth={selected}
          className={cssClasses}
        />
      )}
    </div>
  )
}
function Footer({
  lng,
  selected,
  withInput,
}: {
  selected?: Date
  lng: Locale
  withInput: boolean
}): string {
  if (withInput) return ''
  if (!selected) return translations[lng].pickSingleDate

  return translations[lng].selectedDate.replace(
    '${date}',
    formatDatePickerFooterDate(selected, lng as string),
  )
}
