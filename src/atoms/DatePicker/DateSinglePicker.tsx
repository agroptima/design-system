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
  name?: string
  defaultValue?: string
  onSelect?: (date: string) => void
  withInput?: boolean
  label?: string
}

export function DateSinglePicker({
  onSelect,
  defaultValue,
  lng,
  className,
  name = 'date',
  required = false,
  variant,
  withInput = false,
  label = 'Date',
}: DateSinglePickerProps): React.JSX.Element {
  const inputType = withInput ? 'text' : 'hidden'

  const cssClasses = classNames('date-picker', variant, className, {
    toggle: withInput,
  })

  const [selected, setSelected] = useState<Date | undefined>(
    fromISOToDate(defaultValue),
  )
  const [isOpen, setIsOpen] = useState<boolean>(!withInput)

  function selectDate(date: Date | undefined) {
    setSelected(date)
    onSelect?.(fromDateToISOString(date))
  }

  return (
    <div className={cssClasses}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Input
          type={inputType}
          label={label}
          datePickerIcon={isOpen ? 'AngleUp' : 'AngleDown'}
          value={formatDatePickerFooterDate(selected, lng as string)}
          icon="Calendar"
          name={name}
          placeholder={translations[lng].singlePlaceholder}
          readOnly
        />
      </div>
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
          className="calendar"
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
