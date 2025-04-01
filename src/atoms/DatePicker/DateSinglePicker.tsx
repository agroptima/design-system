import 'react-day-picker/style.css'
import './DatePicker.scss'
import { useRef, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
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
  const { isOpen, close, toggle } = useOpen(!withInput)
  const pickerRef = useRef(null)
  useOutsideClick(pickerRef, close)

  const cssClasses = classNames('date-picker', variant, className, {
    toggle: withInput,
  })

  const [selected, setSelected] = useState<Date | undefined>(
    fromISOToDate(defaultValue),
  )

  function selectDate(date: Date | undefined) {
    setSelected(date)
    onSelect?.(fromDateToISOString(date))
  }

  return (
    <div className={cssClasses} ref={pickerRef}>
      <Input
        type="hidden"
        label=""
        value={fromDateToISOString(selected)}
        name={name}
      />
      {withInput && (
        <div onClick={toggle}>
          <Input
            type="text"
            label={label}
            rightIcon={isOpen ? 'AngleUp' : 'AngleDown'}
            value={formatDatePickerFooterDate(selected, lng as string)}
            icon="Calendar"
            placeholder={translations[lng].singlePlaceholder}
            readOnly
          />
        </div>
      )}
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
  if (!selected) return translations[lng].pickDate

  return translations[lng].selectedDate.replace(
    '${date}',
    formatDatePickerFooterDate(selected, lng as string),
  )
}
