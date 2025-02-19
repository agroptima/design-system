import 'react-day-picker/style.css'
import './DateSinglePicker.scss'
import { useEffect, useState } from 'react'
import { DayPicker, type Locale } from 'react-day-picker'
import { enGB, es } from 'react-day-picker/locale'
import { classNames } from '../../utils/classNames'
import {
  formatDatePickerFooterDate,
  formatDatePickerParamsDate,
} from '../../utils/dateHelpers'
import { translations } from './translations'

type Variant = 'primary'

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

export interface DateSinglePickerProps extends DivPropsWithoutOnSelect {
  variant?: Variant
  onSelect: (date: Date | undefined) => void
  selected?: Date
  lng: keyof typeof availableLocales
}

export function DateSinglePicker({
  variant,
  className,
  onSelect = () => {},
  selected: preselected,
  lng,
}: DateSinglePickerProps): React.JSX.Element {
  const manageFooterText = (): string => {
    if (!selected) return translations[lng].pickDate

    return translations[lng].selectedDate.replace(
      '${date}',
      formatDatePickerFooterDate(selected, lng as string),
    )
  }

  const [selected, setSelected] = useState<Date | undefined>(preselected)
  const [footer, setFooter] = useState<string>(() => {
    return manageFooterText()
  })

  useEffect(() => {
    setSelected(preselected)
    setFooter(manageFooterText())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselected])

  function selectDate(date: Date | undefined) {
    setSelected(date)
    onSelect(date)
  }
  const cssClasses = classNames('date-picker', variant, className)

  return (
    <div className={cssClasses}>
      <DayPicker
        locale={availableLocales[lng]}
        mode="single"
        selected={selected}
        onSelect={(date) => selectDate(date)}
        footer={footer}
        required
        defaultMonth={selected}
      />
    </div>
  )
}
