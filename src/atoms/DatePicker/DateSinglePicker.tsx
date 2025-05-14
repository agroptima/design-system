import 'react-day-picker/style.css'
import './DatePicker.scss'
import React, { type JSX, useRef, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { buildHelpText } from '../../utils/buildHelpText'
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
  helpText?: string
  errors?: string[]
  fullWidth?: boolean
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
  errors,
  helpText,
  fullWidth = false,
}: DateSinglePickerProps): JSX.Element {
  const { isOpen, close, toggle } = useOpen(!withInput)
  const pickerRef = useRef(null)
  const helpTexts = buildHelpText(helpText, errors)
  useOutsideClick(pickerRef, () => withInput && close())

  const cssClasses = classNames('date-picker', variant, className, {
    toggle: withInput,
    invalid: errors?.length,
    'full-width': fullWidth,
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
            helpText={helpText}
            errors={errors}
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
            <Footer
              lng={lng}
              selected={selected}
              withInput={withInput}
              helpTexts={helpTexts}
            />
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
  helpTexts,
}: {
  selected?: Date
  lng: Locale
  helpTexts?: string[]
  withInput: boolean
}): string {
  if (withInput) return ''
  if (helpTexts?.length) return helpTexts.join(', ')
  if (!selected) return translations[lng].pickDate

  return translations[lng].selectedDate.replace(
    '${date}',
    formatDatePickerFooterDate(selected, lng as string),
  )
}
