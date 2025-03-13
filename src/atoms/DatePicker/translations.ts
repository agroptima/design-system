import { type Locale as LocaleReactDayPicker } from 'react-day-picker'
import { enGB, es } from 'react-day-picker/locale'

export interface Translation {
  [index: string]: { [index: string]: string }
}

export interface AvailableLocale {
  [index: string]: LocaleReactDayPicker
}

export const availableLocales: AvailableLocale = {
  es: es,
  en: enGB,
}

export type Locale = keyof typeof availableLocales

export const translations: Translation = {
  en: {
    pickDate: 'Pick a date or a range of dates',
    selectedDate: 'Selected date: ${date}',
    selectedRangeOfDates: 'Selected dates range: from ${from} to ${to}',
  },
  es: {
    pickDate: 'Selecciona una fecha o un rango de fechas',
    selectedDate: 'Fecha seleccionada: ${date}',
    selectedRangeOfDates: 'Rango de fechas seleccionado: desde ${from} a ${to}',
  },
}
