import type { DateRange } from 'react-day-picker'

export function formatDate(date: string, lng: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString(lng)
}

export function fromDateToISOString(date: Date | undefined) {
  if (!date) return ''

  return date.toLocaleDateString('sv-SE')
}

export function fromISOToDate(date: string | undefined) {
  if (!date) return undefined

  return new Date(date)
}

export function formatDatePickerFooterDate(
  date: Date | undefined,
  lng: string,
) {
  if (!date) return ''

  return formatDate(fromDateToISOString(date), lng)
}

export function formatRangeDatePickerParamsDate(
  dateRange: DateRange | undefined,
) {
  const date = `${formatDatePickerParamsDate(dateRange?.from)} - ${formatDatePickerParamsDate(dateRange?.to)}`
  return date
}
